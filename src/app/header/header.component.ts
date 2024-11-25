import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuTrigger } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,
            MatMenuModule,
            MatButtonModule,
            MatMenuTrigger,
            CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  imageUrlLogo!: string;
  titleLogo!: string;
  imageUrlOpen!: string;
  titleOpen!: string;
  ngOnInit(): void {
    this.imageUrlLogo = '/img/Logo.png';
    this.titleLogo = 'Trouve ton Artisan';
    this.imageUrlOpen = '/img/icons8-open-30.png';
    this.imageUrlOpen = 'Ouvrir';
  }
}
