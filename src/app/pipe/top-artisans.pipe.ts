import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../model/artisan';

@Pipe({
  name: 'topArtisans',
  standalone: true,
})
export class TopArtisansPipe implements PipeTransform {

  transform(artisans: Artisan[]): Artisan[] {
    if (!artisans) {
      return [];
    }

    return artisans.filter(artisan=> artisan.top);
  }
}
