import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [
  ]
})
export class AuthComponent implements OnInit {

  user = new User();
  erreur = 0;
  constructor(private authService : AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLoggedin(): void{
    console.log(this.user);
    let isValidUser : Boolean = this.authService.SignIn(this.user);
    if(isValidUser){
      this.router.navigate(['/']);
    }else{
      //alert('Login ou mot de passe incorrecte');
      this.erreur = 1;
    }
  }



}
