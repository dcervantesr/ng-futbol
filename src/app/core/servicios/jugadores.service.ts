import { Injectable } from '@angular/core';
import { Jugador } from '../clases/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {
  private jugadores: Jugador[] = [
    {nombre: 'Ezequiel', apellido: 'Gimenez', edad: 19, posicion: 'Volante', imagen: 'eze.jpg', numero: 92},
    {nombre: 'Fernando', apellido: 'Alvez', edad: 34, posicion: 'Delantero', imagen: 'eze.jpg', numero: 93},
    {nombre: 'Darío', apellido: 'Monserrat', edad: 34, posicion: 'Lateral', imagen: 'eze.jpg', numero: 94},
    {nombre: 'Daniel', apellido: 'Orpi', edad: 34, posicion: 'Zaguero', imagen: 'eze.jpg', numero: 95},
    {nombre: 'Fernando', apellido: 'Monserrat', edad: 34, posicion: 'Mediocampista', imagen: 'eze.jpg', numero: 96},
    {nombre: 'Fernando', apellido: 'Orpi', edad: 34, posicion: 'Golero', imagen: 'eze.jpg', numero: 97},
  ];

  constructor() { }

  getJugadores(): Jugador[] {
    return this.jugadores;
  }
}
