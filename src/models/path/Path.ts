import PathElement from "./PathElement.ts";
import Time from "../utility/Time.ts";

export default interface Path{
    pathStart: Time;
    endStart: Time;
    saturday: boolean;
    elements: PathElement[]
}
