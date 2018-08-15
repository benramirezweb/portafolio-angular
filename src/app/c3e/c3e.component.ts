import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c3e',
  templateUrl: './c3e.component.html',
  styleUrls: ['./c3e.component.css']
})
export class C3eComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(e => console.log(e));
  }

}
