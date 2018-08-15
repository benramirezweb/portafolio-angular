import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: any[] = [1, 2 , 3 , 4 , 5 , 6 , 7 , 8];
  contador: any = 0;
  indicador: any = true;
  title = 'app';
  bool: any = true;

  constructor(private homeElements: HomeComponent, private acercaElements: AcercaComponent, private route: ActivatedRoute) {

  }

  metodo1() {
    console.log('Hola soy metodo 1');
    this.contador ++;
    this.comprobador();
    this.route.url.subscribe(u => console.log(u));
  }
  comprobador() {
    if (this.contador > 10) {
      this.indicador = false;
    }
  }
  cambiaBool() {
    this.bool = !this.bool;
  }
}
