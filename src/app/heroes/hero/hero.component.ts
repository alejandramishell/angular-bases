import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  // toUpperCase(); es un metodo de string
  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  // metodo
  getHeroDescription(): string {
    // concatenar nombre y edad
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';

  }

  chageAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    // this.name = 'ironman';
    this.age = 45;

    // querySelector este solo busca el primero y en ese ejecuta el cambio
    // document.querySelector('h1')!.innerHTML='<h1>Desde angular</h1>';

    // Este sirve para buscar todo los H1 añadiendo el ALL y con el For Each
    // document.querySelectorAll('h1')!.forEach(element=>{
    // element.innerHTML='<h1>Desde angular</h1>';
    // })

  }
}
