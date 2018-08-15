import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cont2',
  templateUrl: './cont2.component.html',
  styleUrls: ['./cont2.component.css']
})
export class Cont2Component implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( p => console.log(p) );
  }

  showParams() {
    console.log('showParams');
    console.log(this.route);
    // this.route.params.subscribe(p => console.log(p));
  }

}
