import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Users: User[] = [{"username":"admin", "password":"123", "roles":["ADMIN"]},
                   {"username":"alex", "password":"123", "roles":["USER"]}]
  public loggedUser: string;
  public isloggedIn: Boolean = false;
  public roles: string[];

  SignIn(user :User):Boolean{
    let validUser: Boolean = false;
    this.Users.forEach((curUser) => {
      if(user.username=== curUser.username && user.password==curUser.password){
          validUser = true;

      this.loggedUser = curUser.username;
      this.isloggedIn = true;
      this.roles = curUser.roles;
      localStorage.setItem('loggedUser',this.loggedUser);
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
      }
    });
    return validUser;
  }

  isAdmin(): Boolean{
    if (!this.roles)
      return false;
    return(this.roles.indexOf('ADMIN') > -1);
  }

  logout(): void{
    this.isloggedIn=false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  setLoggedUserFromLocalStorage(login : string){
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username : string){
    this.Users.forEach((curUser)=>{
      if(curUser.username == username){
        this.roles = curUser.roles;
      }
    })
  }

  constructor(private router: Router) { }
}
