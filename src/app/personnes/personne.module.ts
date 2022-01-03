//module angular
import { NgModule } from '@angular/core';
import { PartageModule } from './partager/partage.module';

//module créer
import { PersonneListComponent } from './personne-list/personne-list.component';
import { PersonneDetailComponent } from './personne-detail/personne-detail.component';
import { PersonneRoutingModule } from './partager/personne-routing.module';
import { PersonneEditComponent } from './personne-edit/personne-edit.component'


@NgModule({
  declarations: [
    PersonneListComponent,
    PersonneDetailComponent,
    PersonneEditComponent,
    PersonneEditComponent 
  ],
  imports: [
    PersonneRoutingModule,
    PartageModule
  ]
})
export class PersonneModule { }
