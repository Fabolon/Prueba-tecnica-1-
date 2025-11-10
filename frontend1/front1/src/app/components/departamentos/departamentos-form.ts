import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Departamento } from '../../models/departamento.model';
import { DepartamentoService } from '../../services/departamento.service';

@Component({
	selector: 'app-departamento-form',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './departamentos-form.html'
})
export class DepartamentoFormComponent implements OnInit {
	@Input() departamento?: Departamento;
	@Output() saved = new EventEmitter<Departamento>();
	model: Partial<Departamento> = {};

	constructor(private depService: DepartamentoService) {}

	ngOnInit() {
		if (this.departamento) this.model = { ...this.departamento };
	}

	guardar() {
		if ((this.model as Departamento).id) {
			this.depService.update(this.model as Departamento).subscribe(d => this.saved.emit(d));
		} else {
			this.depService.create(this.model).subscribe(d => this.saved.emit(d));
		}
	}
}
