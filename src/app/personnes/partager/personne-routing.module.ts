import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonneListComponent } from '../personne-list/personne-list.component';
import { PersonneDetailComponent } from '../personne-detail/personne-detail.component';
import { PersonneDetailGuard } from './guards/personne-detail.guard';
import { PersonneEditComponent } from '../personne-edit/personne-edit.component';
import { PersonneEditGuard } from './guards/personne-edit.guard';

const routes: Routes = [
  {
    path: 'personnes',
    component: PersonneListComponent
  },
   {
    path: 'personnes/:id/edit',
    component: PersonneEditComponent,
    canDeactivate: [PersonneEditGuard]
  },
  {
    path: 'personnes/:id',
    component: PersonneDetailComponent,
    canActivate: [PersonneDetailGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonneRoutingModule { }
