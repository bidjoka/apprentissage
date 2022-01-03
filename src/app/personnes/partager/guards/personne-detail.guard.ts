import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneDetailGuard implements CanActivate {

constructor(private router: Router){

}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    const id = +route.url[1].path;
    
    if(isNaN(id) || id <= 0){
      alert('la personne est inconnu');

      this.router.navigate(['/personnes']);

      return false;
    }
      
    
      return true;
  }
  
}
