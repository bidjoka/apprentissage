import { Component, OnInit } from '@angular/core';
import {IPersonne} from '../partager/models/ipersonne';
import { PersonneListService } from '../partager/services/personne-list.service';

@Component({
  selector: 'app-personne-list',
  templateUrl: './personne-list.component.html',
  styleUrls: ['./personne-list.component.scss']
})
export class PersonneListComponent implements OnInit {

  public title = "liste de personne";

  private _personneFiltre: string ="mot";

  public filtrePersonne: IPersonne[]=[];

  public personnes: IPersonne[] = [];

  public errorMsg: string="";

  constructor(private personneListService: PersonneListService) {
  }

  ngOnInit(): void {
    this.personneListService.getApiPersonnes().subscribe({
      next: personnes => {
        this.personnes = personnes,
        this.filtrePersonne =  this.personnes;
      },
      error: err => this.errorMsg = err
    });

    this._personneFiltre ="";

    //this.personnes = this.personneListService.getPersonnes();
  }

  get personneFiltre(): string{
    return this._personneFiltre;
  }

  set personneFiltre(personneFiltre: string) {
    this._personneFiltre = personneFiltre;

    this.filtrePersonne = this._personneFiltre ? this.filtrePersonnes(this._personneFiltre) : this.personnes
  }

  private filtrePersonnes(critere: string): IPersonne[]{
    //transfome le mot en minuscule
    critere = critere.toLocaleLowerCase();

    const res = this.personnes.filter(
      (personne: IPersonne) => personne.nom.toLocaleLowerCase().indexOf(critere)!= -1
    );
    return res
  }

}
