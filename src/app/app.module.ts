import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercaComponent } from './acerca/acerca.component';
import { GaleriaComponent } from './galeria/galeria.component';

import { ROUTES } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';

import { TestService } from '../app/services/test.service';
import { Pipe1Pipe } from './pipes/pipe1.pipe';
import { Pipe2Pipe } from './pipes/pipe2.pipe';
import { Pipe3Pipe } from './pipes/pipe3.pipe';
import { Cont1Component } from './cont1/cont1.component';
import { Cont2Component } from './cont2/cont2.component';
import { Cont3Component } from './cont3/cont3.component';
import { Cont4Component } from './cont4/cont4.component';
import { Cont5Component } from './cont5/cont5.component';
import { Cont6Component } from './cont6/cont6.component';
import { Cont7Component } from './cont7/cont7.component';

import { JsonLocalService } from './sevices/json-local.service';
import { Cont1aComponent } from './cont1a/cont1a.component';
import { Cont1bComponent } from './cont1b/cont1b.component';
import { Cont1cComponent } from './cont1c/cont1c.component';
import { Cont1dComponent } from './cont1d/cont1d.component';
import { Cont1eComponent } from './cont1e/cont1e.component';
import { ContAaComponent } from './cont-aa/cont-aa.component';
import { ContBbComponent } from './cont-bb/cont-bb.component';
import { ContCcComponent } from './cont-cc/cont-cc.component';
import { C3aComponent } from './c3a/c3a.component';
import { C3bComponent } from './c3b/c3b.component';
import { C3cComponent } from './c3c/c3c.component';
import { C3dComponent } from './c3d/c3d.component';
import { C3eComponent } from './c3e/c3e.component';
import { C4aComponent } from './c4a/c4a.component';
import { C4bComponent } from './c4b/c4b.component';
import { C5aComponent } from './c5a/c5a.component';
import { C5bComponent } from './c5b/c5b.component';
import { C5cComponent } from './c5c/c5c.component';
import { C5dComponent } from './c5d/c5d.component';
import { C5eComponent } from './c5e/c5e.component';
import { C6aComponent } from './c6a/c6a.component';
import { C6bComponent } from './c6b/c6b.component';
import { C7aComponent } from './c7a/c7a.component';
import { C7bComponent } from './c7b/c7b.component';
import { SearchComponent } from './search/search.component';




// RUTAS

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    ContactoComponent,
    AcercaComponent,
    GaleriaComponent,
    NavbarComponent,
    Pipe1Pipe,
    Pipe2Pipe,
    Pipe3Pipe,
    Cont1Component,
    Cont2Component,
    Cont3Component,
    Cont4Component,
    Cont5Component,
    Cont6Component,
    Cont7Component,
    Cont1aComponent,
    Cont1bComponent,
    Cont1cComponent,
    Cont1dComponent,
    Cont1eComponent,
    ContAaComponent,
    ContBbComponent,
    ContCcComponent,
    C3aComponent,
    C3bComponent,
    C3cComponent,
    C3dComponent,
    C3eComponent,
    C4aComponent,
    C4bComponent,
    C5aComponent,
    C5bComponent,
    C5cComponent,
    C5dComponent,
    C5eComponent,
    C6aComponent,
    C6bComponent,
    C7aComponent,
    C7bComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [
    HomeComponent,
    AcercaComponent,
    TestService,
    JsonLocalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
