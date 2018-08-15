import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c3c',
  templateUrl: './c3c.component.html',
  styleUrls: ['./c3c.component.css']
})
export class C3cComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(e => console.log(e));
  }

}
