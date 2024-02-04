import {useEffect, useState} from "react";
import {DateValue} from "@mantine/dates";
import {TimeTableRow} from "../pages/TimeTable.tsx";
import Timetable from "../models/timetable/Timetable.ts";


export function useTimeTable(){
    const [date, setDate] = useState<DateValue>(new Date())
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<TimeTableRow[]>([])

    useEffect(() => {
        async function GetTableData(){
            setIsLoading(true)

            const rows: TimeTableRow[] = []

            const result = await fetch("/data/timetables/timetable.json")
            const timeTable = await result.json() as Timetable


            timeTable.routes[0].elements.map(x => {
                rows.push({
                    times: [],
                    stopName: x.stopName
                })
            })

            for(let i =0; i<timeTable.routeLength; i++){
                for(let j=0; j<timeTable!.routes.length; j++) {
                    if(timeTable.routes[j].days[date!.getDay()]){
                        rows[i].times.push(timeTable.routes[j].elements[i].time)
                    }
                }
            }

            setData(rows)
            setIsLoading(false)
        }
        GetTableData().then()
    }, [date])

    return{
        date,
        setDate,
        data,
        isLoading
    }
}
