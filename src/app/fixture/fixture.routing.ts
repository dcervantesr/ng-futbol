import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', component: ListaComponent},
  { path: 'crear', component: FormularioComponent},
  { path: 'editar/:id', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixtureRoutingModule {}
