import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { Cont1Component } from './cont1/cont1.component';
import { Cont1aComponent } from './cont1a/cont1a.component';
import { Cont2Component } from './cont2/cont2.component';
import { Cont1bComponent } from './cont1b/cont1b.component';
import { Cont3Component } from './cont3/cont3.component';
import { Cont4Component } from './cont4/cont4.component';
import { Cont5Component } from './cont5/cont5.component';
import { Cont6Component } from './cont6/cont6.component';
import { Cont7Component } from './cont7/cont7.component';
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


export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    { path: 'acerca/:params', component: AcercaComponent },
    { path: 'contacto/:id', component: ContactoComponent },
    { path: 'buscar/:termino', component: SearchComponent },
    { path: 'galeria/:params', component: GaleriaComponent },
    // { path: 'cont1a', component: Cont1aComponent },
    {path: 'c2', component: Cont2Component,
        children: [
            { path: '', component: ContAaComponent, pathMatch: 'full'},
            { path: 'aa/:parametro', component: ContAaComponent},
            { path: 'bb/:parametro', component: ContBbComponent },
            { path: 'cc/:parametro', component: ContCcComponent }
        ]
    },
    { path: 'c3', component: Cont3Component,
        children: [
            { path: '', component: C3aComponent, pathMatch: 'full'},
            {path: 'c3a/:par', component: C3aComponent},
            { path: 'c3b/:par', component: C3bComponent },
            { path: 'c3c/:par', component: C3cComponent },
            { path: 'c3d/:par', component: C3dComponent },
            { path: 'c3e/:par', component: C3eComponent }
        ]},
    { path: 'c4', component: Cont4Component, children: [
        {path: '', component: C4aComponent},
        { path: 'c4a', component: C4aComponent },
        { path: 'c4b', component: C4bComponent }
    ]},
    { path: 'c5', component: Cont5Component, children: [
        {path: '', component: C5aComponent, pathMatch: 'full'},
        {path: 'c5a', component: C5aComponent},
        { path: 'c5b', component: C5bComponent },
        { path: 'c5c', component: C5cComponent },
        { path: 'c5d', component: C5dComponent },
        { path: 'c5e', component: C5eComponent }
    ]},
    { path: 'c6', component: Cont6Component, children: [
        {path: 'c6a', component: C6aComponent},
        { path: 'c6b', component: C6bComponent }
    ]},
    { path: 'c7', component: Cont7Component, children: [
        {path: 'c7a', component: C7aComponent},
        { path: 'c7b', component: C7bComponent }
    ]},
    { path: 'c1', component: Cont1Component,
        children: [
            {path: '', redirectTo: 'cont1a', pathMatch: 'full'},
            {path: 'cont1a/:id', component: Cont1aComponent},
            {path: 'cont1b/:id', component: Cont1bComponent}
    ] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
