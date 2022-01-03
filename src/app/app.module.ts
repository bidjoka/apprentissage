//module Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

//module cr�er
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnfantPersonneComponent } from './partage/enfant-personne/enfant-personne.component';
import { HomeComponent } from './home/home.component';
import { PersonneModule } from './personnes/personne.module';
;
import { CartesComponent } from './cartes/cartes.component';
import { CarteListComponent } from './cartes/carte-list/carte-list.component';
import { CarteDetailComponent } from './cartes/carte-detail/carte-detail.component';
import { CarteEditComponent } from './cartes/carte-edit/carte-edit.component';
import { AuthComponent } from './auth/auth.component';
import { InterditComponent } from './interdit/interdit.component';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    EnfantPersonneComponent,
    HomeComponent,
    CartesComponent  ,
    CarteListComponent  ,
    CarteDetailComponent,
    CarteEditComponent,
    AuthComponent,
    InterditComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PersonneModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
