import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { TablaPosicionesComponent } from './tabla-posiciones/tabla-posiciones.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const rutas: Routes = [
  {path: '', component: HomeComponent },
  {path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    BannerComponent,
    TablaPosicionesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ]
})
export class HomeModule { }
