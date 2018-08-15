import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-cont-cc',
  templateUrl: './cont-cc.component.html',
  styleUrls: ['./cont-cc.component.css']
})
export class ContCcComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( e => console.log(e.parametro) );
  }

}
