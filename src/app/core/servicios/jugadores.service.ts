import { Injectable } from '@angular/core';
import { Jugador } from '../clases/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {
  private jugadores: Jugador[] = [
    {nombre: 'aaaa', apellido: 'aaaa', edad: 34, posicion: 'aaaaa'},
    {nombre: 'bbbb', apellido: 'aaaa', edad: 34, posicion: 'aaaaa'},
    {nombre: 'nnnn', apellido: 'aaaa', edad: 34, posicion: 'aaaaa'},
    {nombre: 'mmmm', apellido: 'aaaa', edad: 34, posicion: 'aaaaa'},
    {nombre: 'zzzz', apellido: 'aaaa', edad: 34, posicion: 'aaaaa'},
    {nombre: 'xxxx', apellido: 'aaaa', edad: 34, posicion: 'aaaaa'},
  ];

  constructor() { }

  getJugadores(): Jugador[] {
    return this.jugadores;
  }
}
