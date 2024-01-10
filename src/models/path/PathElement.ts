import {LatLng} from "leaflet";
import Time from "../utility/Time.ts";

export default interface PathElement{
    time: number;
    startTime: Time;
    points: LatLng[]
}
