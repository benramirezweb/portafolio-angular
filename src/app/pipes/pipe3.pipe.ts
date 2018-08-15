import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe3'
})
export class Pipe3Pipe implements PipeTransform {
  // exp1: any = /w$/;
  exp0: any = /H*/;
  sobreEscritura0: any = 'HHHHHHHHHola mundo';
  exp1: any = /bo*/;
  sobreEscritura1: any = 'Y el fantasma hizo booooooooooooo';
  exp2: any = /u+/;
  sobreEscritura2: any = 'duuuulce duuuulce';
  exp3: any = /^A/;
  sobreEscritura3: any = 'An E';
  exp4: any = /r$/;
  sobreEscritura4: any = 'cenar';
  exp5: any = /e?le?/;
  sobreEscritura5: any = 'muslo';
  exp6: any = /.n/;
  sobreEscritura6: any = 'ondemo';
  expObj: any = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/);
  exp7: any = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
  sobreEscritura7: any = 'david@davidburgos.blog';
  mail: any = 'benjamin@gmail.com';
  // ^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$
  // Hola Hola capinchepinche pinche mundo loco w, HOLA PINCHE MUNDO LOCOw

  transform(value: any, args?: any): any {
    // return value.replace('\H', '*').replace('\pinche', ' -censurado- ').replace('\w$','*');;
    // return this.sobreEscritura7.replace(this.exp7, '*');
    // return (this.expObj.test(this.sobreEscritura7));
    // return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(this.mail);
    return this.expObj.test(this.mail);
  }

}
