import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DeparTrabajadores } from './components/depar-trabajadores/depar-trabajadores';
import { DepartamentoFormComponent } from './components/departamentos/departamentos-form';
import { DepartamentoListComponent } from './components/departamentos/departamentos-lista';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores-form';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DepartamentoListComponent,
    DepartamentoFormComponent,
    DeparTrabajadores,
    TrabajadoresComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
