import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';

export const routes: Routes = [
    { path:'', component: HomeComponent },
    { path: 'panier', component: PanierComponent }
];
