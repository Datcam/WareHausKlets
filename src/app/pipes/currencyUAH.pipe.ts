import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'uah'
})

export class CurrencyUAHPipe implements PipeTransform {
  transform(value: any, ...args: any): any {
    return `${value}${args}`;
  }
}
