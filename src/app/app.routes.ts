import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AccueilComponent } from './accueil/accueil.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
    {path: '', component: AccueilComponent},
    {path: 'Error404', component: Error404Component},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}