import {MapContainer, Marker, TileLayer, useMapEvents} from "react-leaflet";
import {useEffect, useState} from "react";
import Stop from "../models/stop/Stop.ts";

function MyComponent() {
    const map = useMapEvents({
        click: () => {
            map.locate()
        },
        locationfound: (location) => {
            console.log('location found:', location)
        },

    })
    return null
}


function Map(){
    const [stops, setStops] = useState<Stop[]>([])

    useEffect(() => {
        async function GetStops(){
            const result = await fetch("src/assets/data/stops/stops.json")
            const data = await result.json() as Stop[]
            setStops(data)
        }
        GetStops().then()
    }, [])


    return(
            <MapContainer center={[46.95, 20.24]} zoom={13} scrollWheelZoom={true} style={{ height:"calc(100vh - 60px" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {stops.map(x => {
                    return (
                        <Marker position={[x.location.lat, x.location.lng]}/>
                    )
                })}

                <MyComponent/>
            </MapContainer>
    );
}

export default Map
