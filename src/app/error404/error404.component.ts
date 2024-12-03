import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.css'
})
export class Error404Component implements OnInit{
  imageUrl!: string;
  titleUrl!: string;

  ngOnInit(): void {
    this.imageUrl = '/img/icons8-error-404-100.png'
    this.titleUrl = "ERROR 404"
  }
}
