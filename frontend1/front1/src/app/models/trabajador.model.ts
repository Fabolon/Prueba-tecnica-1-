import { Departamento } from './departamento.model';

export interface Trabajador {
  id: number;
  nombre: string;
  cargo: string;
  salario?: number;
  departamentoId: number;
  departamento?: Departamento;
}
