import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { JugadoresService } from '../core/servicios/jugadores.service';
import { JugadoresRoutingModule } from './jugadores.routing';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EcoFabSpeedDialModule } from '@ecodev/fab-speed-dial';

@NgModule({
  declarations: [ListaComponent, FormularioComponent],
  imports: [
    CommonModule,
    JugadoresRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    EcoFabSpeedDialModule
  ],
  providers: [
    JugadoresService
  ]
})
export class JugadoresModule { }
