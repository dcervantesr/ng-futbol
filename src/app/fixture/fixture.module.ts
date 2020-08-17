import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [FormularioComponent, ListaComponent],
  imports: [
    CommonModule
  ]
})
export class FixtureModule { }
