import Stop from "../models/stop/Stop.ts";
import {useEffect, useState} from "react";
import Timetable from "../models/timetable/Timetable.ts";
import {useForm} from "@mantine/form";
import Time, {isHoliday, isSunday, isTimeBigger} from "../models/utility/Time.ts";
import {SearchState} from "../models/utility/SearchState..ts";

export interface SearchForm{
    stopName: string,
    dateTime: Date
}

export interface SearchResultItem{
    stopName: string,
    time: Time,
    nextStop: string
}

export function usePlanner(){
    const [stops, setStops] = useState<string[]>([])
    const [timeTable, setTimeTable] = useState<Timetable | undefined>(undefined)
    const [searchResults, setSearchResults] = useState<SearchResultItem[]>([])
    const [searchState, setSearchState] = useState<SearchState>(SearchState.Init)

    const form = useForm<SearchForm>({
        initialValues: {
            stopName: "",
            dateTime: new Date(),
        },
        validate: {
            stopName: (value) => ((value) ? null : "Töltsd ki!"),
            dateTime: (value) => ((value) ? null : "Töltsd ki!"),
        },
    });

    useEffect(() => {
        async function GetStops(){
            const result = await fetch("src/assets/data/stops/stops.json")
            const stops = await result.json() as Stop[]

            const names = stops.map(x => x.name)

            setStops(names)
        }

        async function GetTimeTable(){
            const result = await fetch("src/assets/data/timetables/timetable.json")
            const timeTable = await result.json() as Timetable

            setTimeTable(timeTable)
        }

        GetStops().catch()
        GetTimeTable().catch()
    }, [])

    function searchRoutes(){
        const results: SearchResultItem[] = []

        const stop = form.values.stopName
        const date = form.values.dateTime

        if(timeTable){
            if(isSunday(date)){
                setSearchState(SearchState.Sunday)

            }else if(isHoliday(date)){
                setSearchState(SearchState.Holiday)
                console.log("holiday")
            }
            else{
                timeTable.routes.map((route, index) => {
                    timeTable.routes[index].elements.map((element,i) => {
                        if(element.stopName === stop && isTimeBigger(element.time, date)){
                            results.push({
                                time: element.time,
                                stopName: element.stopName,
                                nextStop: route.elements[i+1] ? route.elements[i+1].stopName : " - ",
                            })
                        }
                    })
                })

                if(results.length > 0){
                    setSearchState(SearchState.Success)
                }
                else{
                    setSearchState(SearchState.NoMoreBus)
                }
            }
        }

        setSearchResults(results)
    }

    return {
        stops,
        form,
        searchRoutes,
        searchResults,
        searchState,
    }
}
