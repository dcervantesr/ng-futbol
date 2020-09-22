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
    {posicion: 1, equipo: 'SAN AGUSTIN', g: 7, p: 1, e: 0, puntos: 21},
    {posicion: 2, equipo: 'KENNEDY UNIVERSITARIO', g: 6, p: 1, e: 1, puntos: 19},
    {posicion: 3, equipo: 'OLD SAMPA', g: 5, p: 1, e: 2, puntos: 17},
    {posicion: 4, equipo: 'BODY FACTORY', g: 5, p: 3, e: 0, puntos: 15},
    {posicion: 5, equipo: 'GOMENSORO', g: 4, p: 2, e: 2, puntos: 14},
    {posicion: 6, equipo: 'EL CHORRO F.C.', g: 3, p: 2, e: 2, puntos: 11},
    {posicion: 7, equipo: 'CLUB BIGUA V.B.', g: 3, p: 2, e: 2, puntos: 11},
    {posicion: 8, equipo: 'SAGRADA FAMILIA', g: 3, p: 4, e: 1, puntos: 10},
    {posicion: 9, equipo: 'TACUAREMBÓ', g: 3, p: 4, e: 1, puntos: 10},
    {posicion: 10, equipo: 'EL REJUNTE', g: 2, p: 2, e: 3, puntos: 9},
    {posicion: 11, equipo: 'SAN EUGENIO', g: 1, p: 3, e: 4, puntos: 7},
    {posicion: 12, equipo: 'FLORES UNIVERSITARIO', g: 1, p: 3, e: 4, puntos: 7},
    {posicion: 13, equipo: 'ESPARTA UNIVERSITARIO', g: 2, p: 5, e: 1, puntos: 7},
    {posicion: 14, equipo: 'CLARA JACKSON', g: 2, p: 6, e: 0, puntos: 6},
    {posicion: 15, equipo: 'INGLES', g: 1, p: 5, e: 2, puntos: 5},
    {posicion: 16, equipo: 'DEPORTIVO MATADWERO', g: 1, p: 5, e: 1, puntos: 4},
  ];

  posiciones: Posicion[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
