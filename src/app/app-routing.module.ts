import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DetailsVoitureComponent } from './pages/details-voiture/details-voiture.component';
import { ModifierVoitureComponent } from './pages/modifier-voiture/modifier-voiture.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { VoituresFormComponent } from './pages/voitures-form/voitures-form.component';
import { VoituresComponent } from './pages/voitures/voitures.component';

const routes: Routes = [
  { path:"", component: AccueilComponent },
  { path:"voitures", component: VoituresComponent },
  { path:"voitures/:id/details", component: DetailsVoitureComponent },
  { path:"voitures/:id/modifier", component: ModifierVoitureComponent },
  { path:"formulaire", component: VoituresFormComponent },
  { path:"**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
