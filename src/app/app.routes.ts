import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AccueilComponent } from './accueil/accueil.component';
import { ListeArtisansComponent } from './liste-artisans/liste-artisans.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
    {path: '', redirectTo: '/accueil', pathMatch: 'full'},
    {path: 'accueil', component: AccueilComponent},
    {path: 'liste-artisans', component: ListeArtisansComponent},
    {path: 'fiche-artisan/:name', component: FicheArtisanComponent},
    {path: '404', component: Error404Component},
    {path: '**', redirectTo: '/404'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}