import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HomeComponent } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  a: any = 'Llamar metodo1 ACERCA';
  private nombres: any = [];
  b: any = this.homeComp.valor1;
  stringParaPipes: any = 'Hola PRROS lokos';
  stringHTML: any = 'Hola putitos';
  cadenaParaRegExps: any = 'Hola Hola capinchepinche pinche mundo loco w, HOLA PINCHE MUNDO LOCOw';

  constructor(private http: HttpClient, private homeComp: HomeComponent, private route: ActivatedRoute ) {
    console.log(this.http.get('https://uinames.com/api/?amount=25')
    .subscribe(response => {
      this.nombres = response;
      // console.log(this.http);
      console.log(response);
    })
  );
  }

  ngOnInit() {
    console.log('soy ngOnInit de AcercaComponent');
    this.route.params.subscribe( e => {
      console.log(e);
    });
  }

  acercaMetodo1() {
    console.log('Hola soy acercaMetodo1');
  }

}
