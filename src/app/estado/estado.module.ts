import { EstadoService } from './../shared/estado.service';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [EstadoService],
  declarations: []
})
export class EstadoModule { }
