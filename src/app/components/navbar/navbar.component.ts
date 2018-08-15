import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  idGaleria: any = 'spy su padre putos';

  constructor(private route: Router) { }

  ngOnInit() {
  }

  buscar(termino) {
    console.log('soy buscar()' + termino);
    this.route.navigate(['/buscar', termino]);
    // this.router.navigate(['/buscar', s]);
  }

}
