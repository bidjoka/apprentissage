import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonneListService } from '../partager/services/personne-list.service';
import { IPersonne } from '../partager/models/ipersonne';

@Component({
  selector: 'app-personne-detail',
  templateUrl: './personne-detail.component.html',
  styleUrls: ['./personne-detail.component.scss']
})
export class PersonneDetailComponent implements OnInit {

  public personne: IPersonne = <IPersonne>{};


  constructor(private route: ActivatedRoute, 
    private personneListService: PersonneListService,
    private router: Router) {}

  ngOnInit(): void {
    
    const id: number = +this.route.snapshot.paramMap.get('id');
    
    this.personneListService.getApiPersonnes().subscribe(
      (personnes: IPersonne[]) => {
        this.personne = personnes.find(personne => personne.id == id)
        console.log('personne',this.personne)
      })
  }

  public backToList(): void{
    this.router.navigate(['/personnes']);
  }

}
