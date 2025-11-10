import { Component, OnChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trabajador } from '../../models/trabajador.model';
import { TrabajadoresService } from '../../services/trabajadores.service';
@Component({
  selector: 'app-depar-trabajadores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './depar-trabajadores.html',
})
export class DeparTrabajadores implements OnChanges {
	@Input() departamentoID?: number;
	trabajadores: Trabajador[] = [];

	constructor(private empService: TrabajadoresService) {}

	ngOnChanges() {
		this.cargar();
	}

	cargar() {
		if (this.departamentoID == null) {
			this.trabajadores = [];
			return;
		}
		this.empService.getAll().subscribe(lista => {
			this.trabajadores = lista.filter(e => e.departamentoId === this.departamentoID);
		});
	}
}
