import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/addCharacter/addCharacter.component';


// FormsModule como solo lo utilizo dentro de DBZ solo lo importare aqui

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
