import {IPersonne} from './ipersonne'

export class Personne implements IPersonne {
  constructor(
  public id: number,
  public nom: string="",
	public prenom: string="",
	public age: number=0,
	public imageUrl: string=""
  ){}


}
