import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuTrigger } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArtisanService } from '../services/artisan.service';
import { Artisan } from '../model/artisan';
// import { SearchPipe } from '../pipe/search.pipe';
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,
            MatMenuModule,
            MatButtonModule,
            MatMenuTrigger,
            CommonModule,
            FormsModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit{
  imageUrlLogo!: string;
  titleLogo!: string;
  imageUrlOpen!: string;
  titleOpen!: string;
  imageUrlSearch!: string;
  titleSearch!: string;

  artisans: Artisan[] = [];
  searchQuery: string = '';
  filteredArtisans: Artisan[] = [];

  constructor(
    private artisanService: ArtisanService,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.imageUrlLogo = '/img/Logo.png';
    this.titleLogo = 'Trouve ton Artisan';
    this.imageUrlOpen = '/img/icons8-open-30.png';
    this.titleOpen = 'Ouvrir';
    this.imageUrlSearch = '/img/icons8-loupe-64.png';
    this.titleSearch = 'rechercher';

    this.artisans = this.artisanService.getArtisans();
    this.filteredArtisans = [...this.artisans];
    this.artisans = this.artisanService.getArtisans();
  }

  //filtrer les artisans par nom, spécialité ou localisation
  updateFilteredArtisans(): void {
    if (!this.searchQuery) {
      this.filteredArtisans = [...this.artisans];
    } else {
      const lowerCaseQuery = this.searchQuery.toLowerCase();
      this.filteredArtisans = this.artisans.filter(artisan =>
        artisan.name.toLowerCase().includes(lowerCaseQuery) ||
        artisan.specialty.toLowerCase().includes(lowerCaseQuery) ||
        artisan.location.toLowerCase().includes(lowerCaseQuery)
      );
    }

    const lowerCaseQuery = this.searchQuery.toLowerCase();

    this.filteredArtisans = this.artisans.filter(artisan =>
      artisan.name.toLowerCase().includes(lowerCaseQuery) ||
      artisan.specialty.toLowerCase().includes(lowerCaseQuery) ||
      artisan.location.toLowerCase().includes(lowerCaseQuery)
    );
  }

  onSearchEnter(): void {
    if (this.searchQuery.trim()) {
      const trimmedQuery = this.searchQuery.trim();

      // sauvegarder la requête dans le service
      this.searchService.setSearchQuery(trimmedQuery);

      //naviguer vers la liste des artisans avec la query
      this.router.navigate(['/liste-artisan'], {
        queryParams: {search: trimmedQuery},
      })
      this.router.navigate(['/liste-artisans'], {
        queryParams: {search: this.searchQuery.trim()}
      });
      this.searchService.setSearchQuery(this.searchQuery.trim())
    }

  //réinitialiser le champ de la barre de recherche au clic sur un artisan
    this.searchQuery = '';
  }
}