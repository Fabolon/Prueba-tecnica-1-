import { Injectable } from '@angular/core';
import { Trabajador } from '../models/trabajador.model';

@Injectable({
  providedIn: 'root',
})
export class TrabajadoresService {
  private readonly trabajadores: Trabajador[] = [
    { id: 1, nombre: 'Ana Pérez', cargo: 'Analista RRHH', departamentoId: 1 },
    { id: 2, nombre: 'Luis Gómez', cargo: 'Contador', departamentoId: 2 },
    { id: 3, nombre: 'María Díaz', cargo: 'Supervisor', departamentoId: 3 },
  ];

  getTrabajadores(): Trabajador[] {
    return this.trabajadores;
  }

  getTrabajador(id: number): Trabajador | undefined {
    return this.trabajadores.find((trabajador) => trabajador.id === id);
  }
}
