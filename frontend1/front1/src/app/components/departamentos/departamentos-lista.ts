import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento.model';
import { DepartamentoService } from '../../services/departamento.service';

@Component({
	selector: 'app-departamento-list',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './departamentos-lista.html'
})
export class DepartamentoListComponent implements OnInit {
	departamentos: Departamento[] = [];

	constructor(private depService: DepartamentoService) {}

	ngOnInit() {
		this.cargar();
	}

	cargar() {
		this.depService.getAll().subscribe(lista => this.departamentos = lista);
	}

	eliminar(id: number) {
		this.depService.delete(id).subscribe(() => this.cargar());
	}
}
