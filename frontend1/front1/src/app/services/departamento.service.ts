import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Departamento } from '../models/departamento.model';

@Injectable({ providedIn: 'root' })
export class DepartamentoService {
	private departamentos: Departamento[] = [
		{ id: 1, nombre: 'TI' },
		{ id: 2, nombre: 'Diseño' }
	];
	private nextId = 3;

	getAll(): Observable<Departamento[]> {
		return of(this.departamentos.slice());
	}

	getById(id: number): Observable<Departamento | undefined> {
		return of(this.departamentos.find(d => d.id === id));
	}

	create(dep: Partial<Departamento>): Observable<Departamento> {
		const newDep: Departamento = { id: this.nextId++, nombre: dep.nombre || '' };
		this.departamentos.push(newDep);
		return of(newDep);
	}

	update(dep: Departamento): Observable<Departamento> {
		const idx = this.departamentos.findIndex(d => d.id === dep.id);
		if (idx > -1) this.departamentos[idx] = { ...dep };
		return of(dep);
	}

	delete(id: number): Observable<void> {
		this.departamentos = this.departamentos.filter(d => d.id !== id);
		return of(undefined);
	}
}