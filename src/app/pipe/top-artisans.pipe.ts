import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../model/artisan';

@Pipe({
  name: 'topArtisans',
  standalone: true,
})
export class TopArtisansPipe implements PipeTransform {

/** filtrer les artisans pour ne garder que ceux marqués comme "top"
 * @param artisans - liste les artisans
 * @return liste des artisans marqués comme "top"
 */
  transform(artisans: Artisan[]): Artisan[] {
    if (!artisans?.length) {
      return [];
    }

    return artisans.filter(artisan=> artisan.top);
  }
}
