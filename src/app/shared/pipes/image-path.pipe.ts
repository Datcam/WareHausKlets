import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePath'
})
export class ImagePathPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `../../assets/images/${value}`;
  }

}