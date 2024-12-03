import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArtisanService } from '../services/artisan.service'; 
import { Artisan } from '../model/artisan';
import { TopArtisansPipe } from '../pipe/top-artisans.pipe';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterModule,
            MatSliderModule,
            CommonModule,
            FormsModule,
            TopArtisansPipe],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit{
  sliderIndex: number = 0;
  artisans: Artisan[] = [];
  topArtisans: Artisan[] = [];

  imageStarUrl!: string;
  titleStar!: string;

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.artisans = this.artisanService.getArtisans();
    this.topArtisans = this.artisans.filter(artisan => artisan.top);
    this.sliderIndex = 0;

    this.imageStarUrl = '/img/icons8-etoile-30.png';
    this.titleStar = "etoile";
  }

  onSlideChange(event: any): void {
    this.sliderIndex = event.value;
  }
}