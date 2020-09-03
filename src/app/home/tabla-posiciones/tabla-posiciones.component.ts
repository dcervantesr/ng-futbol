import { Component, OnInit } from '@angular/core';
import { Posicion } from '../../core/clases/posicion.model';

@Component({
  selector: 'app-tabla-posiciones',
  templateUrl: './tabla-posiciones.component.html',
  styleUrls: ['./tabla-posiciones.component.css']
})
export class TablaPosicionesComponent implements OnInit {
  displayedColumns: string[] = ['posicion', 'equipo', 'g', 'p', 'e', 'puntos'];
  dataSource = [
    {posicion: 1, equipo: 'KENNEDY UNIVERSITARIO', g: 1, p: 0, e: 0, puntos: 3},
    {posicion: 2, equipo: 'ESPARTA UNIVERSITARIO', g: 1, p: 0, e: 0, puntos: 3},
    {posicion: 3, equipo: 'GOMENSORO', g: 1, p: 0, e: 0, puntos: 3},
    {posicion: 4, equipo: 'SAN AGUSTIN', g: 1, p: 0, e: 0, puntos: 3},
    {posicion: 5, equipo: 'OLD SAMPA', g: 1, p: 0, e: 0, puntos: 3},
    {posicion: 6, equipo: 'CLUB BIGUA V.B', g: 1, p: 0, e: 0, puntos: 3},
    {posicion: 7, equipo: 'SAGRADA FAMILIA', g: 1, p: 0, e: 0, puntos: 3},
    {posicion: 8, equipo: 'TACUAREMBÓ', g: 1, p: 0, e: 0, puntos: 3},
    {posicion: 9, equipo: 'EL REJUNTE', g: 0, p: 1, e: 0, puntos: 0},
    {posicion: 10, equipo: 'CLARA JACKSON', g: 0, p: 1, e: 0, puntos: 0},
    {posicion: 11, equipo: 'INGLES', g: 0, p: 1, e: 0, puntos: 0},
    {posicion: 12, equipo: 'EL CHORRO F.C', g: 0, p: 1, e: 0, puntos: 0},
    {posicion: 13, equipo: 'SAN EUGENIO', g: 0, p: 1, e: 0, puntos: 0},
    {posicion: 14, equipo: 'BODY FACTORY', g: 0, p: 1, e: 0, puntos: 0},
    {posicion: 15, equipo: 'DEPORTIVO MATADERO', g: 0, p: 1, e: 0, puntos: 0},
    {posicion: 16, equipo: 'FLORES UNIVERSITARIO', g: 0, p: 1, e: 0, puntos: 0},
  ];

  posiciones: Posicion[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
