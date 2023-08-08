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
}
