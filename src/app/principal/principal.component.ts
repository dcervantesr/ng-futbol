import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  titulo = 'asdfghnm';
  desabilitado = false;
  tipoCampo = 'number';
  valor: number;
  colores = ['azul', 'verde', 'amarillo'];

  constructor() { }

  ngOnInit(): void {
  }

  ponerTexto(): void {
    alert('Hola');
  }

  getColor(item: string): string {
    if (item === 'azul') {
      return 'blue';
    }
  }

  getClase(item: string): string {
    if (item === 'verde') {
      return 'texto_color';
    }
  }

}
