import { Component, OnInit } from '@angular/core';
import { EstadoService } from './shared/estado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  estados: EstadoModel[] = [];

  constructor(private service: EstadoService) { }

  ngOnInit() {
    this.service.getEstados().subscribe(
      res =>
      this.estados = res);
      console.log('Estados,',this.estados);
      
    }
  }
}

