import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { InterditComponent } from './interdit/interdit.component';
import { PersonneEditGuard } from './personnes/partager/guards/personne-edit.guard';
import { PersonneEditComponent } from './personnes/personne-edit/personne-edit.component';

const routes: Routes = [
  {
    path: 'login', component: AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'interdit',
    component: InterditComponent
  },
  {
    path: 'personnes',
    component: PersonneEditComponent, canActivate:[PersonneEditGuard]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
