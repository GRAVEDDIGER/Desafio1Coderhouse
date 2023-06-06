import { Counters } from "../entities/Utility.Classes";

export class Counter extends Counters{

}
const adrian= new Counter("Adrian")
const daniel = new Counter("Daniel")
console.log(adrian.contar())
console.log(daniel.contar(),daniel.getResponsable())
