import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  displayedColumns = ['equipoA', 'equipoB'];
  fixtures = [
    {fecha: 'Fecha 1',
    juegos: [
        {equipoA: 'Sagrada Familia', equipoB: 'Clara Jackson'},
        {equipoA: 'El Chorro F.C.', equipoB: 'Tacuarembó'},
        {equipoA: 'El Rejunte', equipoB: 'Old Sampa'},
        {equipoA: 'Kennedy U.', equipoB: 'Flores U.'},
        {equipoA: 'Body Factory', equipoB: 'San Agustin'},
        {equipoA: 'Gomensoro', equipoB: 'San Eugenio'},
        {equipoA: 'Deportivo Matadero', equipoB: 'Esparta U.'},
        {equipoA: 'Bigua V.B.', equipoB: 'Ingles'},
    ]},
    {fecha: 'Fecha 2',
    juegos: [
        {equipoA: 'Clara Jackson', equipoB: 'El Chorro F.C.'},
        {equipoA: 'Espatra U.', equipoB: 'Bigua V.B.'},
        {equipoA: 'San Eugenio', equipoB: 'Deportivo Matadero'},
        {equipoA: 'San Agustin', equipoB: 'Gomensoro'},
        {equipoA: 'Flores U.', equipoB: 'Body Factory'},
        {equipoA: 'Old Sampa', equipoB: 'Kennedy U.'},
        {equipoA: 'Tacuarembó', equipoB: 'El Rejunte'},
        {equipoA: 'Ingles', equipoB: 'Sagrada Familia'},
    ]},
    {fecha: 'Fecha 3',
    juegos: [
        {equipoA: 'El Rejunte', equipoB: 'Clara Jackson'},
        {equipoA: 'Sagrada Familia', equipoB: 'El Chorro F.C.'},
        {equipoA: 'Kennedy U.', equipoB: 'Tacuarembó'},
        {equipoA: 'Body Factory', equipoB: 'Old Sampa'},
        {equipoA: 'Gomensoro', equipoB: 'Flores U.'},
        {equipoA: 'Deportivo Matadero', equipoB: 'San Agustin'},
        {equipoA: 'Bigua V.B.', equipoB: 'San Eugenio'},
        {equipoA: 'Ingles', equipoB: 'Esparta U.'},
    ]},
    {fecha: 'Fecha 4',
    juegos: [
        {equipoA: 'Clara Jackson', equipoB: 'Kennedy U.'},
        {equipoA: 'San Eugenio', equipoB: 'Ingles'},
        {equipoA: 'San Agustin', equipoB: 'Bigua V.B.'},
        {equipoA: 'Flores U.', equipoB: 'Deportivo Matadero'},
        {equipoA: 'Old Sampa', equipoB: 'Gomensoro'},
        {equipoA: 'Tacuarembó', equipoB: 'Body Factory'},
        {equipoA: 'Esparta U.', equipoB: 'Sagrada Familia'},
        {equipoA: 'El Chorro F.C.', equipoB: 'El Rejunte'},
    ]},
    {fecha: 'Fecha 5',
    juegos: [
        {equipoA: 'Body Factory', equipoB: 'Clara Jackson'},
        {equipoA: 'Kennedy U.', equipoB: 'El Chorro F.C.'},
        {equipoA: 'Sagrada Familia', equipoB: 'El Rejunte'},
        {equipoA: 'Gomensoro', equipoB: 'Tacuarembó'},
        {equipoA: 'Deportivo Matadero', equipoB: 'Old Sampa'},
        {equipoA: 'Bigua V.B.', equipoB: 'Flores U.'},
        {equipoA: 'Ingles', equipoB: 'San Agustin'},
        {equipoA: 'Esparta U.', equipoB: 'San Eugenio'},
    ]},
    {fecha: 'Fecha 6',
    juegos: [
        {equipoA: 'Clara Jackson', equipoB: 'Gomensoro'},
        {equipoA: 'San Agustin', equipoB: 'Esparta U.'},
        {equipoA: 'Flores U.', equipoB: 'Ingles'},
        {equipoA: 'Old Sampa', equipoB: 'Bigua V.B.'},
        {equipoA: 'Tacuarembó', equipoB: 'Deportivo Matadero'},
        {equipoA: 'San Eugenio', equipoB: 'Sagrada Familia'},
        {equipoA: 'El Chorro F.C.', equipoB: 'Body Factory'},
        {equipoA: 'El Rejunte', equipoB: 'Keneddy U.'},
    ]},
    {fecha: 'Fecha 7',
    juegos: [
        {equipoA: 'Deportivo Matadero', equipoB: 'Clara Jackson'},
        {equipoA: 'Body Factory', equipoB: 'El Rejunte'},
        {equipoA: 'Gomensoro', equipoB: 'El Chorro F.C.'},
        {equipoA: 'Sagrada Familia', equipoB: 'Kennedy U.'},
        {equipoA: 'Bigua V.B.', equipoB: 'Tacuarembó'},
        {equipoA: 'Ingles', equipoB: 'Old Sampa'},
        {equipoA: 'Esparta U.', equipoB: 'Flores U.'},
        {equipoA: 'San Eugenio', equipoB: 'San Agustin'},
    ]},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
