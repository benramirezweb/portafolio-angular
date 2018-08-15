import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-cont-bb',
  templateUrl: './cont-bb.component.html',
  styleUrls: ['./cont-bb.component.css']
})
export class ContBbComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(e => console.log(e));
  }

}
