import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/Operators'

import { IPersonne } from '../models//ipersonne';

@Injectable({
  providedIn: 'root'
})
export class PersonneListService {

  private readonly PERSONNE_API_URL = 'http://localhost:9000/backend/personnes';


  constructor(private http: HttpClient) {

   }

   public getApiPersonnes(): Observable<IPersonne[]>{
     return this.http.get<IPersonne[]>(this.PERSONNE_API_URL).pipe(
       catchError(this.handleError)
     );
   }

   public updatePersonne(personne: IPersonne): Observable<IPersonne>{
     const url = `${this.PERSONNE_API_URL}/${personne.id}`;
     return this.http.put<IPersonne>(url, personne).pipe(
       catchError(this.handleError)
     );
   }

   public deletedPersonne(id: number): Observable<{}>{
     const url = `${this.PERSONNE_API_URL}/${id}`;
     return this.http.delete<IPersonne>(url).pipe(
       catchError(this.handleError)
     );
   }

   public createPersonne(personne: IPersonne): Observable<IPersonne>{
    return this.http.post<IPersonne>(this.PERSONNE_API_URL, personne).pipe(
      catchError(this.handleError)
    );
  }

  public getPersonneById(id: number): Observable<IPersonne> {

    const url = `${this.PERSONNE_API_URL}/${id}`;
    if (id==0){
      return of(this.getDefaultPersonne());
    }
    return this.http.get<IPersonne>(url).pipe(
      catchError(this.handleError)
    );
  }

  private getDefaultPersonne(): IPersonne {
    return {
      id:0,
      nom: null,
      prenom: null,
      age: null,
      imageUrl: null
    };
  }

  private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}

}
