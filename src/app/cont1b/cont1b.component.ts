import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-cont1b',
  templateUrl: './cont1b.component.html',
  styleUrls: ['./cont1b.component.css']
})
export class Cont1bComponent implements OnInit {

  constructor( private r: ActivatedRoute) { }

  ngOnInit() {
    this.r.params.subscribe(r => console.log(r.id));
  }

}
