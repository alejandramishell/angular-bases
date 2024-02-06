import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";




@NgModule({
  declarations:[
    CounterComponent
  ],
  // con esto le digo que pueden consumir este componente fuera al exportarlo
  exports:[
    CounterComponent
  ]
})
export class CounterModule{}
