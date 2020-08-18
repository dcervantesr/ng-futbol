import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { JugadoresService } from '../core/servicios/jugadores.service';
import { JugadoresRoutingModule } from './jugadores.routing';

@NgModule({
  declarations: [ListaComponent, FormularioComponent],
  imports: [
    CommonModule,
    JugadoresRoutingModule
  ],
  providers: [
    JugadoresService
  ]
})
export class JugadoresModule { }
