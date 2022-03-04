import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { PageSignUpComponent } from './pages/signup/signup.component';
import { PageLoginComponent } from './pages/login/login.component';
import { PageProductComponent } from './pages/page-product/page-product.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PagePanierComponent } from './pages/page-panier/page-panier.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageAccueilComponent }, // try children route
  { path: 'details', component: PageDetailsComponent },
  { path: 'signup', component: PageSignUpComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'product', component: PageProductComponent },
  { path: 'panier', component: PagePanierComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
