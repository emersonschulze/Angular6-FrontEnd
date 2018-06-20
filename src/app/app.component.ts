import { EstadoService } from './shared/estado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  estados: ValuesModel[];

  constructor(private service: EstadoService) { }

  ngOnInit() {
    this.service.getValues().subscribe(
      res => {
      this.estados = res;
      console.log('res,', this.estados);
    });


    }
}


