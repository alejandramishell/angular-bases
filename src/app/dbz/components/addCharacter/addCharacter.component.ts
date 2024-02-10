import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrls: ['./addCharacter.component.css']
})
export class AddCharacterComponent {

  // creamos una instancia ---y al llamarlo lo hacemos como un evento
  @Output()
  public onNewCharacterHijo: EventEmitter<Character> = new EventEmitter();

  // es un objeto con sus propiedades
  public character: Character = {
    name: '',
    power: 0
  };

  // nuevo metodo para enviar la informacion de aqui a la lista
  emitCharacter(): void {

// sirve para detener el codigo aquiy ver como se esta ejecutando
    // debugger
    // verificar que envie un nombre sino no hacer nada
    if (this.character.name.length === 0) return;

    this.onNewCharacterHijo.emit(this.character);

    // esto se pone al final para que por pantalla se borren los valores del input
    this.character= {name:'', power:0};
    // this.character.name = '';
    // this.character.power = 0;
  }
}
