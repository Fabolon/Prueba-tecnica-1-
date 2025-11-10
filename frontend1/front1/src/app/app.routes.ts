import { Routes } from '@angular/router';
import { DeparTrabajadores } from './components/depar-trabajadores/depar-trabajadores';
import { DepartamentoFormComponent } from './components/departamentos/departamentos-form';
import { DepartamentoListComponent } from './components/departamentos/departamentos-lista';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores-form';

export const routes: Routes = [
  { path: '', component: DepartamentoListComponent },
  { path: 'departamentos/nuevo', component: DepartamentoFormComponent },
  { path: 'departamentos/:id/trabajadores', component: DeparTrabajadores },
  { path: 'trabajadores', component: TrabajadoresComponent },
  { path: '**', redirectTo: '' },
];
