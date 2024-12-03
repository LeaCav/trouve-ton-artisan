import { Injectable } from '@angular/core';
import { Artisan } from '../model/artisan';
import { ArtisanService } from './artisan.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuery: string = '';
  private searchResults: Artisan[] = [];

  constructor(private artisanService: ArtisanService) {
    // this.searchResults = this.artisanService.getArtisans();
   }

  /**Met à jour la requête de recherche.
   * @param query - La nouvelle chaîne de recherche
   */

  setSearchQuery(query: string): void {
    this.searchQuery = query.trim();
  }

  // retourner la requête actuelle
  getSearchQuery(): string {
    return this.searchQuery;
  }

  getArtisans(): Artisan[] {
    return this.artisanService.getArtisans();  // Appeler la méthode getArtisans de ArtisanService
  }

  // retourner les résultats de la recherche pour la requête actuelle
  getSearchResults(query: string): Artisan[] {
    const artisans = this.getArtisans();
    if (!query) return artisans;

    const lowerCaseQuery = query.toLowerCase();
    return artisans.filter((artisan) =>
      [artisan.name, artisan.specialty, artisan.location]
    .some((field) => field.toLowerCase().includes(lowerCaseQuery))
    )
    return this.artisanService.searchArtisans(this.searchQuery);
  }
}
