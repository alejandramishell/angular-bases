import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  // Para que exista la comunicacion entre padre he hijo necesitamos utilizar
  // un decorador donde vamos a recibir la informacion en este ejemplo tenemos
  // la informacion en el main-page.component y se recibe en la siguiente Property characterList

  @Input()
  public characterList: Character[] = [
    {
      // Usualmente lo mandaremos vacio pero este es el ejemplo de lo que necesitamos que llegue asi que si no llega nada este es la informcion por defecto
      name: 'Trunks',
      power: 10
    }
  ]


 @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // metodo
  onDeleteCharacter(id?:string):void{
    // si no existe entonces nunca lo mandes a llamar
    if(!id) return;
    this.onDelete.emit(id);
    // console.log('index: ',index)
  }
}
