import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { VoituresComponent } from './pages/voitures/voitures.component';
import { VoituresFormComponent } from './pages/voitures-form/voitures-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VoitureComponent } from './components/voitures/voiture/voiture.component';
import { DetailsVoitureComponent } from './pages/details-voiture/details-voiture.component';
import { ModifierVoitureComponent } from './pages/modifier-voiture/modifier-voiture.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    VoituresComponent,
    VoituresFormComponent,
    NotFoundComponent,
    VoitureComponent,
    DetailsVoitureComponent,
    ModifierVoitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
