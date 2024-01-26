import {MapContainer, Marker, TileLayer, useMapEvents} from "react-leaflet";
import {useEffect, useState} from "react";
import Stop from "../models/stop/Stop.ts";
import { Dialog, Progress } from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import MapInfoPanel from "../components/map/MapInfoPanel.tsx";

function MyComponent() {
    const map = useMapEvents({
        click: () => {
            console.log(map.getBounds())
        },
    })
    return null
}





function Map(){
    const [stops, setStops] = useState<Stop[]>([])
    const [selectedStop, setSelectedStop] = useState<Stop |undefined>(undefined)
    const [opened, { open, close }] = useDisclosure(false);

    useEffect(() => {
        async function GetStops(){
            const result = await fetch("src/assets/data/stops/stops.json")
            const data = await result.json() as Stop[]
            setStops(data)
        }
        GetStops().then()
    }, [])

    const stopMarkerHandlers =
        (stop: Stop) => ({
            click() {
                setSelectedStop(stop)
                open()
            },
        })


    return(
        <>
            <Progress radius="xs" size="xs" value={100} striped animated />
            <MapContainer center={[46.95, 20.24]} zoom={13} scrollWheelZoom={true} style={{ height:"calc(100vh - 60px" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    zIndex={500}
                />
                {stops.map(x => {
                    return (
                        <Marker key={x.id} position={[x.location.lat, x.location.lng]} eventHandlers={stopMarkerHandlers(x)}/>
                    )
                })}

                <MyComponent/>
            </MapContainer>
            <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md" zIndex={5000}>
                <MapInfoPanel stop={selectedStop}/>
            </Dialog>
        </>
    );
}

export default Map
