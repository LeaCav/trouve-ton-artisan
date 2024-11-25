import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../model/artisan';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {

  transform(artisans: Artisan[], searchQuery: string): Artisan[] {
    if (!searchQuery) return artisans;

    const lowerCaseQuery = searchQuery.toLowerCase();

    return artisans.filter(artisan =>
      artisan.name.toLowerCase().includes(lowerCaseQuery) ||
      artisan.specialty.toLowerCase().includes(lowerCaseQuery) ||
      artisan.location.toLocaleLowerCase().includes(lowerCaseQuery)
    );
  }
}