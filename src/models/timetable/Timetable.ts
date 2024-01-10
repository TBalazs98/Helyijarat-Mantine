import Route from "./Route";

export default interface Timetable{
  name: string,
  routeLength: number,
  routes: Route[],
  validFrom: Date
}
