import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../model/artisan';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {

/**filtre les artisans en fonction de la requête de recherche
 * @param artisans - liste des artisans
 * @param searchQuery - chaîne de recherche
 * @returns liste des artisans correspondant à la recherche
 */
transform(artisans: Artisan[] | null, searchQuery: string): Artisan[] {
  if (!artisans?.length || !searchQuery) {
    return artisans || [];
  }

  const lowerCaseQuery = searchQuery.toLowerCase();

    return artisans.filter(artisan =>
      [artisan.name, artisan.specialty, artisan.location]
      .some(field => field.toLowerCase().includes(lowerCaseQuery))
    );
  }
}