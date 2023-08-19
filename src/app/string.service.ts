import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
   
  email = 'karth@123';
  password = '123';
  public GetText(){
    return 'string from service';
  }

  Anime=[
    {name:'naruto',hero:'naruto'},
    {name:'onepiece',hero:'Luffy'},
    {name:'Dragon balls',hero:'Goku'},
    {name:'Attack On titans',hero:'Eren'},
  ]

   public anime(){
    return this.Anime;
   }
   

}
