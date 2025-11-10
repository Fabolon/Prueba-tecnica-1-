import { Injectable } from '@angular/core';
import { Departamento } from '../models/departamento.model';

@Injectable({
  providedIn: 'root',
})
export class DepartamentoService {
  // Simple in-memory mock so the UI can render without a backend
  private readonly departamentos: Departamento[] = [
    { id: 1, nombre: 'Recursos Humanos', descripcion: 'Gestión de personal' },
    { id: 2, nombre: 'Finanzas', descripcion: 'Control presupuestario' },
    { id: 3, nombre: 'Operaciones' },
  ];

  getDepartamentos(): Departamento[] {
    return this.departamentos;
  }

  getDepartamento(id: number): Departamento | undefined {
    return this.departamentos.find((dep) => dep.id === id);
  }
}
