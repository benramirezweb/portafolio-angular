import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c3b',
  templateUrl: './c3b.component.html',
  styleUrls: ['./c3b.component.css']
})
export class C3bComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(e => console.log(e));
  }

}
