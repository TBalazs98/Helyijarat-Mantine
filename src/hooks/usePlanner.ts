import Stop from "../models/stop/Stop.ts";
import {useEffect, useState} from "react";
import Timetable from "../models/timetable/Timetable.ts";
import {useForm} from "@mantine/form";

export interface SearchForm{
    stopName: string,
    dateTime: Date
}

export function usePlanner(){
    const [stops, setStops] = useState<string[]>([])
    const [timeTable, setTimeTable] = useState<Timetable | undefined>(undefined)

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



    return {
        stops,
        timeTable,
        form
    }
}
