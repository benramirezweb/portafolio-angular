import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c3a',
  templateUrl: './c3a.component.html',
  styleUrls: ['./c3a.component.css']
})
export class C3aComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      parametros   => {
        console.log(parametros);
      }
    );
  }

}
