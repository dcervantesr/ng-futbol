import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { TablaPosicionesComponent } from './tabla-posiciones/tabla-posiciones.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { NoticiasComponent } from './noticias/noticias.component';

const rutas: Routes = [
  {path: '', component: HomeComponent },
  {path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    BannerComponent,
    TablaPosicionesComponent,
    HomeComponent,
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas),
    MatTableModule,
    MatCardModule
  ]
})
export class HomeModule { }
