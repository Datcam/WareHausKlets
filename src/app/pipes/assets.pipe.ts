import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'assets'
})

export class AssetsPipe implements PipeTransform {
  transform(value: any): any {
    return `../../assets/${value}`;
  }
}
