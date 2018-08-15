import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c3d',
  templateUrl: './c3d.component.html',
  styleUrls: ['./c3d.component.css']
})
export class C3dComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(e => console.log(e));
  }

}
