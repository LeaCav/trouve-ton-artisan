import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';

import { Artisan } from '../model/artisan';

@Component({
  selector: 'app-liste-artisans',
  standalone: true,
  imports: [CommonModule,
            RouterModule,
            MatButtonModule,
            MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './liste-artisans.component.html',
  styleUrls: ['./liste-artisans.component.css'],
})
export class ListeArtisansComponent implements OnInit {
  searchQuery: string = '';
  filteredArtisans: Artisan[] = [];

  imageStarUrl!: string;
  titleStar!: string;

  constructor(private route: ActivatedRoute, private searchService: SearchService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['search'] || '';
      this.filteredArtisans = this.searchService.getSearchResults(this.searchQuery); // Appel unique
    });

    this.imageStarUrl = '/img/icons8-etoile-30.png';
    this.titleStar = "etoile";
  }
}