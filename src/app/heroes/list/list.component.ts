import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
public heroName:string[]= ['Spiderman','Iroman','She Hulk','Thor'];
// para que funcione fuera debo crearlo aqui
public deleteHero?: string;

remveLastHero():void{
// const deleteHero=this.heroName.pop(); si lo dejo  asi el deletHero solo funcina aqui
this.deleteHero=this.heroName.pop();



}
}
