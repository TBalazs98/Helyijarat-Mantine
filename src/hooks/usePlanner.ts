import Stop from "../models/stop/Stop.ts";
import {useEffect, useState} from "react";
import Timetable from "../models/timetable/Timetable.ts";
import {DateValue} from "@mantine/dates";

export function usePlanner(){

    const [stops, setStops] = useState<string[]>([])
    const [selectedStop, setSelectedStop] = useState<string>("")
    const [timeTable, setTimeTable] = useState<Timetable | undefined>(undefined)
    const [date, setDate] = useState<DateValue>(new Date())

    useEffect(() => {
        async function GetStops(){
            const result = await fetch("src/assets/data/stops/stops.json")
            const stops = await result.json() as Stop[]

            const names = stops.map(x => x.name)

            if(names.length > 0){
                setSelectedStop(names[0])
            }

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



    return {
        stops,
        timeTable,
        selectedStop,
        setSelectedStop,
        date,
        setDate
    }
}
