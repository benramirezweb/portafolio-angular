import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  private datos: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.http.get('http://mobilefirst8.tmx-internacional.net/mfp/api/adapters/GT_TEST_V1/unprotected')
    .subscribe( (response: any) => {
      this.datos = response;
      console.log(response.result);
    });
  }

  ngOnInit() {
    this.route.params.subscribe( par => {
      console.log(par);
    });
  }

}
