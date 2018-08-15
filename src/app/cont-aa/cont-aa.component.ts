import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cont-aa',
  templateUrl: './cont-aa.component.html',
  styleUrls: ['./cont-aa.component.css']
})
export class ContAaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( s => console.log(s) );
  }

}
