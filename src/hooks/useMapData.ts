import Stop from "../models/stop/Stop.ts";
import Time, {timeComparer} from "../models/utility/Time.ts";
import {useEffect, useState} from "react";
import Timetable from "../models/timetable/Timetable.ts";
import {LatLng} from "leaflet";

export interface MapInfoPanelProps{
    stop: Stop | undefined;
    isLoading: boolean,
    data: MapPanelDataItem[]
}

export interface MapPanelDataItem{
    time: Time
    nextStop: string
}

export function useMapData(){
    const [timeTable, setTimeTable] = useState<Timetable | undefined>(undefined)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<MapPanelDataItem[]>([])
    const [tracks, setTracks] = useState<LatLng[][]>([])
    const [stops, setStops] = useState<Stop[]>([])
    const [selectedStop, setSelectedStop] = useState<Stop |undefined>(undefined)

    useEffect(() => {
        const date = new Date()

        async function GetStopTimes(){
            const stopTimes: MapPanelDataItem[] = []

            setIsLoading(true)

            if(timeTable){
                for(let i =0; i<timeTable.routeLength; i++){
                    for(let j=0; j<timeTable!.routes.length; j++) {
                        if(timeTable.routes[j].days[date!.getDay()] && selectedStop?.name === timeTable.routes[j].elements[i].stopName){
                            stopTimes.push({
                                time: timeTable.routes[j].elements[i].time,
                                nextStop: timeTable.routes[j].elements[i+1] ? timeTable.routes[j].elements[i+1].stopName : " - "
                            })
                        }
                    }
                }
            }

            console.log(stopTimes)

            const sorted = stopTimes.sort((a,b) => {
                const value = timeComparer(a.time, b.time)

                return value ? 1 : -1;
            })

            setData(sorted)
            setIsLoading(false)
        }

        GetStopTimes().catch()
    }, [selectedStop, timeTable])

    useEffect(() => {
        async function GetTimeTable(){

            const result = await fetch(`/data/timetables/${import.meta.env.VITE_TIMETABLE}`)
            const timeTable = await result.json() as Timetable

            setTimeTable(timeTable)
        }

        async function GetTracks(){
            const tracks: LatLng[][] = []

            const trackFiles: string[] = JSON.parse(import.meta.env.VITE_TRACKS)

            trackFiles.map(async (file) => {
                const result = await fetch(`/data/track/${file}`)
                const track = await result.json() as LatLng[]

                tracks.push(track)
            })

            setTracks(tracks)
        }

        async function GetStops(){

            const result = await fetch(`/data/stops/${import.meta.env.VITE_STOPS}`)
            const data = await result.json() as Stop[]
            setStops(data)
        }

        GetTimeTable().catch()
        GetTracks().catch()
        GetStops().catch()
    }, [])


    return{
        data,
        isLoading,
        tracks,
        stops,
        selectedStop,
        setSelectedStop
    }
}
