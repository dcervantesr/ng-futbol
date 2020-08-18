import { Component, OnInit } from '@angular/core';
import { JugadoresService } from 'src/app/core/servicios/jugadores.service';
import { Jugador } from 'src/app/core/clases/jugador';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  jugadores: Jugador[];

  constructor(private serJugadores: JugadoresService) { }

  ngOnInit(): void {
    this.jugadores = this.serJugadores.getJugadores();
  }

}
