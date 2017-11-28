import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardImg'
})
export class CardImgPipe implements PipeTransform {

  transform(value: string): string {
    return (value) ? 'http://image.tmdb.org/t/p/w600' + value : 'assets/noimg.png';
  }

}
