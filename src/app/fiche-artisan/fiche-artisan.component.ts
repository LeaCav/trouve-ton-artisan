import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import { ArtisanService } from '../services/artisan.service';
import { Artisan } from '../model/artisan';
import { response } from 'express';

@Component({
  selector: 'app-fiche-artisan',
  standalone: true,
  imports: [CommonModule,
            MatInputModule,
            MatFormFieldModule,
            FormsModule,
            ReactiveFormsModule,],
  templateUrl: './fiche-artisan.component.html',
  styleUrl: './fiche-artisan.component.css'
})
export class FicheArtisanComponent implements OnInit{
  artisanName: string = '';
  artisan: Artisan | null = null;
  contactForm: FormGroup;

  imageStarUrl!: string;
  titleStar!: string;
  imageWebUrl!: string;
  titleWeb!: string;

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService,
    private fb: FormBuilder,
  ) {
      this.contactForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
      }); 
    }

  ngOnInit(): void {
    this.artisanName = this.route.snapshot.paramMap.get('name') || '';
    this.loadArtisan(this.artisanName);

    this.imageStarUrl = '/img/icons8-etoile-30.png';
    this.titleStar = "etoile";
    this.imageWebUrl = '/img/icons8-domaine-48.png';
    this.titleWeb = 'web';
  }

  private loadArtisan(name: string): void {
    this.artisan = this.artisanService.getArtisanByName(name);
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;

      const templateParams = {
        firstName: this.contactForm.get('firstName')?.value,
        lastName: this.contactForm.get('lastName')?.value,
        email: this.contactForm.get('email')?.value,
        message: this.contactForm.get('message')?.value,
        artisanName: this.artisan?.name || 'Non spécifié',
      }

    emailjs.send (
      'service_s94ulyo', //service ID
      'template_8sxobrs', //template ID
      templateParams,
      'ohq-y7mx_9_PriA1O', //public key
    ) .then(
      (response: EmailJSResponseStatus) => {
        alert ('Message envoyé avec succès !');
      },
      (error) => {
        alert ('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      }
    );
    } else {
      alert ('Formulaire invalide. Veuillez vérifier les informations saisies.')
    }
  }
}
