import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { FixtureRoutingModule } from './fixture.routing';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [FormularioComponent, ListaComponent],
  imports: [
    CommonModule,
    FixtureRoutingModule,
    MatCardModule,
    MatTableModule
  ]
})
export class FixtureModule { }
