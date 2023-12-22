import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from "react-leaflet";

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


    return(
            <MapContainer center={[46.95, 20.24]} zoom={13} scrollWheelZoom={false} style={{ height:"calc(100vh - 60px" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[46.95, 20.24]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <MyComponent/>
            </MapContainer>
    );
}

export default Map
