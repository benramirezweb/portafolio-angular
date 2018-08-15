import { Component, OnInit } from '@angular/core';
import { JsonLocalService } from '../sevices/json-local.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cont1',
  templateUrl: './cont1.component.html',
  styleUrls: ['./cont1.component.css']
})
export class Cont1Component implements OnInit {
  mamada: any = {
    id: 'vergas'
  };
  id: any = 22;
  datos: any = 'asd';
  anio = (new Date()).getFullYear();
  constructor( private servLocal: JsonLocalService) { }

  ngOnInit() {
  }

}
