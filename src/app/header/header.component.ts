import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuTrigger } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArtisanService } from '../artisan.service';
import { Artisan } from '../model/artisan';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,
            MatMenuModule,
            MatButtonModule,
            MatMenuTrigger,
            CommonModule,
            FormsModule],
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

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.imageUrlLogo = '/img/Logo.png';
    this.titleLogo = 'Trouve ton Artisan';
    this.imageUrlOpen = '/img/icons8-open-30.png';
    this.imageUrlOpen = 'Ouvrir';
    this.imageUrlSearch = '/img/icons8-loupe-64.jpg';
    this.titleSearch = 'rechercher';

    this.artisans = this.artisanService.getArtisans();
    this.filteredArtisans = [...this.artisans];
  }

  ngOnChanges(): void {
    if (!this.searchQuery) {
      this.filteredArtisans = [...this.artisans];
      return;
    }

    const lowerCaseQuery = this.searchQuery.toLowerCase();

    this.filteredArtisans = this.artisans.filter(artisan =>
      artisan.name.toLowerCase().includes(lowerCaseQuery) ||
      artisan.specialty.toLowerCase().includes(lowerCaseQuery) ||
      artisan.location.toLowerCase().includes(lowerCaseQuery)
    );
  }
}
