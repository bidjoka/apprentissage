import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonneListService } from '../partager/services/personne-list.service';
import { IPersonne } from '../partager/models/ipersonne';

@Component({
  selector: 'app-personne-edit',
  templateUrl: './personne-edit.component.html',
  styleUrls: ['./personne-edit.component.scss']
})
export class PersonneEditComponent implements OnInit {

  public personneForm: FormGroup;

  public personne: IPersonne;

  public pageTitle: string;

  public holderNom: string;

  public holderAge: string;

  public holderPrenom: string;

  public errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private personneService: PersonneListService
    ) { }

  ngOnInit(): void {
    this.personneForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', Validators.required],
      tags: this.fb.array([])
    });

    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');

      this.getSelectedPersonne(id);
    })
  }

  public get tags(): FormArray{
    return this.personneForm.get('tags') as FormArray;
  }

  public addTags(): void {
    this.tags.push(new FormControl());
  }

  public deleteTag(index: number): void {
    this.tags.removeAt(index);
    this.tags.markAsDirty();
  }

  public getSelectedPersonne(id: number): void {
    this.personneService.getPersonneById(id).subscribe((personne: IPersonne)=>{
        this.displayPersonne(personne);
    });
  }

  public displayPersonne(personne: IPersonne): void{
    this.personne = personne;

    if(this.personne.id == 0){
      this.pageTitle = 'Créer une personne';
      this.holderNom = 'Nom(obligatoire)';
      this.holderPrenom = 'Prenom(obligatoire)';
      this.holderAge = 'Age(obligatoire)';
    }else{
      this.pageTitle = `modifier la personne ${this.personne.nom}`;
      this.holderNom = `${this.personne.nom}`;
      this.holderPrenom = `${this.personne.prenom}`;
      this.holderAge = `${this.personne.age}`;
    }

    this.personneForm.patchValue({
      personneNom: this.personne.nom,
      personnePrenom: this.personne.prenom,
      personneAge: this.personne.age
    })
  }

  public savePersonne(): void{
    if(this.personneForm.valid){
      if(this.personneForm.dirty){
        const personne: IPersonne = {
          ...this.personne,
          ...this.personneForm.value
        };
        if(personne.id == 0){
          this.personneService.createPersonne(personne).subscribe({
            next: () => this.saveCompleted(),
            error: (err) => this.errorMessage = err
          });
        }else{
          this.personneService.updatePersonne(personne).subscribe({
            next: () => this.saveCompleted(),
            error: (err) => this.errorMessage = err
          });
        }
      }

    }
    console.log(this.personneForm.value);
  }

  public saveCompleted(): void{
    this.personneForm.reset();
    this.router.navigate(['/personnes']);
  }

  public deletePersonne(): void{
    if(confirm(`Voulez-vous réellement supprimer ${this.personne.nom}`)){
      this.personneService.deletedPersonne(this.personne.id).subscribe(
      {
          next: () => this.saveCompleted()
      });
    }
  }

}
