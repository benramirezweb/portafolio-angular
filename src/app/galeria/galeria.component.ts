import { Component, OnInit } from '@angular/core';
import { TestService } from '../../app/services/test.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent  {

  constructor(private miServ: TestService, private route: ActivatedRoute) {
    this.miServ.getMamada();

    this.route.params.subscribe(p => console.log(p.params));
  }



}
