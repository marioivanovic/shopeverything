import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { PageProductComponent } from './pages/page-product/page-product.component';
import { PagePanierComponent } from './pages/page-panier/page-panier.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageSignUpComponent } from './pages/signup/signup.component';
import { PageLoginComponent } from './pages/login/login.component';
import { CardProductComponent} from './components/card-product/card-product.component'
import { IconComponent } from './components/icon/icon.component';
import {FilterSideBarComponent} from './components/filter-side-bar/filter-side-bar.component'
import { AvisBarComponent } from './components/avis-bar/avis-bar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { BtnFilterComponent } from './components/btn-filter/btn-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageAccueilComponent,
    PageDetailsComponent,
    PageProductComponent,
    PagePanierComponent,
    PageSignUpComponent,
    PageLoginComponent,
    PageNotFoundComponent,
    PageProductComponent,
    CardProductComponent,
    FilterSideBarComponent,
    IconComponent,
    AvisBarComponent,
    SearchbarComponent,
    BtnFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
