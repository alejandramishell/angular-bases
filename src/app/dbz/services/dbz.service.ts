import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id:uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id:uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id:uuid(),
      name: 'egueta',
      power: 7500,
    }
  ];
  // metodo no tiene nada que ver con el que esta en el html ya que este ira dentro del parentesis
  onNewCharacterPadre(character: Character): void {
    // esto ...puntos significa que tome todas las propiedades  name power y si existe otra mas y exparcelas en el nuevo objeto
    const newCharacter: Character = {id: uuid(), ...character};
    // unshift es para colocar al inicio de arreglo
    // push es para el final del arreglo
    // el primer character es el main y el segundo de onNewCharacterPadre
    // this.characters.push(character);
    this.characters.push(newCharacter);
  }
  // le especifico que borre uno por uno
  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters= this.characters.filter(character=> character.id!==id);
  }
}
