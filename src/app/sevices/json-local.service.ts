import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interface1 } from '../interfaces/interface1';


@Injectable()
export class JsonLocalService {
  datos: any = 'test';
  data: Interface1;

  constructor(private http: HttpClient) {
    console.log('soy JsonLocalService');
    this.http.get('./assets/data/data-pagina.json')
      .subscribe( (data: Interface1) => {
      console.log( data );
      this.data = data;
        this.cargarInfo();
    } );
  }

  cargarInfo() {
    this.http.get('https://demo1-2fb84.firebaseio.com/equipo.json')
      .subscribe( data => {
        console.log(data);
      });
  }

}
