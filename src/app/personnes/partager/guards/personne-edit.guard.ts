import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, CanActivate,RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

import { PersonneEditComponent } from '../../personne-edit/personne-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PersonneEditGuard implements CanDeactivate<PersonneEditComponent>,  CanActivate{

  constructor(private authService: AuthService,
    private router: Router){}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAdmin())
    return true;
    else{
      this.router.navigate(['interdit'])
      return false;
    }
  }
  canDeactivate(
    component: PersonneEditComponent): boolean  {
    if(component.personneForm.dirty){
      const personneNom = component.personneForm.get('personneNom').value || 'nouvelle personne';
      return confirm(`voulez-vous annuler les changements effectués sur ${personneNom}`);
    }
    return true;
  }


}
