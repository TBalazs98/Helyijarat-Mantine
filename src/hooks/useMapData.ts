import Stop from "../models/stop/Stop.ts";
import Time from "../models/utility/Time.ts";
import {useEffect, useState} from "react";
import Timetable from "../models/timetable/Timetable.ts";

export interface MapInfoPanelProps{
    stop: Stop | undefined;
}

export interface MapPanelDataItem{
    time: Time
    nextStop: string
}

export function useMapData({stop}: MapInfoPanelProps){
    const [timeTable, setTimeTable] = useState<Timetable | undefined>(undefined)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<MapPanelDataItem[]>([])

    useEffect(() => {
        const date = new Date()

        async function GetStopTimes(){
            const stopTimes: MapPanelDataItem[] = []

            setIsLoading(true)

            if(timeTable){
                for(let i =0; i<timeTable.routeLength; i++){
                    for(let j=0; j<timeTable!.routes.length; j++) {
                        if(timeTable.routes[j].days[date!.getDay()] && stop?.name === timeTable.routes[j].elements[i].stopName){
                            stopTimes.push({
                                time: timeTable.routes[j].elements[i].time,
                                nextStop: timeTable.routes[j].elements[i+1] ? timeTable.routes[j].elements[i+1].stopName : " - "
                            })
                        }
                    }
                }
            }

            setData(stopTimes)
            setIsLoading(false)
        }

        GetStopTimes().catch()
    }, [stop, timeTable])

    useEffect(() => {
        async function GetTimeTable(){
            const result = await fetch("src/assets/data/timetables/timetable.json")
            const timeTable = await result.json() as Timetable

            setTimeTable(timeTable)
        }

        GetTimeTable().catch()
    }, [])


    return{
        data,
        isLoading
    }
}
