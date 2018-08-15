import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'a la verga tu string yo cambio todo jajajaja, no cierto ahi esta tu puto string: ' + value;
  }
  // String target = someString.replaceAll("(?i)<td[^>]*>", "");
}
