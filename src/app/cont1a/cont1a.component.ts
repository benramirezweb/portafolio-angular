import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cont1a',
  templateUrl: './cont1a.component.html',
  styleUrls: ['./cont1a.component.css']
})
export class Cont1aComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( p => console.log(p.id));
  }

}
