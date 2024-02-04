import {MapContainer, Marker, Polyline, TileLayer, useMapEvents} from "react-leaflet";
import Stop from "../models/stop/Stop.ts";
import { Dialog } from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import MapInfoPanel from "../components/map/MapInfoPanel.tsx";
import {useMapData} from "../hooks/useMapData.ts";

function MyComponent() {
    const map = useMapEvents({
        click: () => {
            console.log(map.getBounds())
        },
    })
    return null
}





function Map(){
    const [opened, { open, close }] = useDisclosure(false);

    const {
        data,
        isLoading,
        tracks,
        stops,
        selectedStop,
        setSelectedStop
    } = useMapData()

    const stopMarkerHandlers =
        (stop: Stop) => ({
            click() {
                setSelectedStop(stop)
                open()
            },
        })


    return(
        <>
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

                {tracks.map(x => {
                    return (
                        <Polyline positions={x}/>
                    )
                })}

                <MyComponent/>
            </MapContainer>
            <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md" zIndex={5000}>
                <MapInfoPanel stop={selectedStop} data={data} isLoading={isLoading}/>
            </Dialog>
        </>
    );
}

export default Map
