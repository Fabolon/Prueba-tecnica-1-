import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trabajador } from '../models/trabajador.model';

@Injectable({ providedIn: 'root' })
export class TrabajadoresService {
	// Datos iniciales de ejemplo
	private trabajadores: Trabajador[] = [
		{ id: 1, nombre: 'Juan Pérez', cargo: 'Desarrollador', departamentoId: 1 },
		{ id: 2, nombre: 'Ana Gómez', cargo: 'Diseñadora', departamentoId: 2 }
	];
	private nextId = 3;

	getAll(): Observable<Trabajador[]> {
		return of(this.trabajadores.slice());
	}

	getById(id: number): Observable<Trabajador | undefined> {
		return of(this.trabajadores.find(e => e.id === id));
	}

	create(emp: Partial<Trabajador>): Observable<Trabajador> {
		const newEmp: Trabajador = { id: this.nextId++, nombre: emp.nombre || '', cargo: emp.cargo, departamentoId: emp.departamentoId };
		this.trabajadores.push(newEmp);
		return of(newEmp);
	}

	update(emp: Trabajador): Observable<Trabajador> {
		const idx = this.trabajadores.findIndex(e => e.id === emp.id);
		if (idx > -1) this.trabajadores[idx] = { ...emp };
		return of(emp);
	}

	delete(id: number): Observable<void> {
		this.trabajadores = this.trabajadores.filter(e => e.id !== id);
		return of(undefined);
	}
}