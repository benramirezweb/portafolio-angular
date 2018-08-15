import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AcercaComponent } from '../acerca/acerca.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: any[] = [];
  valor1: any = 'Hola desde el HomeComponent';

  constructor(private http: HttpClient, private router: Router) {
    // console.log('desde el home llamado');
    this.http.get('https://restcountries.eu/rest/v2/capital/en')
      .subscribe( (response: any) => {
        this.paises = response;
        // console.log(this.paises);
      });
  }

  ngOnInit() {
    console.log(document.head);
  }

  metodoHome1() {
    console.log('Soy metodoHome1');
  }

  buscar(s) {
    this.router.navigate(['/buscar', s]);
    console.log('hola prros soy buscar' + s);
  }

}
