import { EstadoService } from './../shared/estado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
  estados: EstadoModel[] = [];

  constructor(private service: EstadoService) { }

  ngOnInit() {
   this.service.getEstados().subscribe();{ res =>
    this.estados = res;
    }
  }

}
