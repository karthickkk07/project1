import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StringService } from '../string.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    email: string='';
    password: string='';
    constructor(private router: Router,private service: StringService){


    }

    login() {
        if(this.email==this.service.email && this.password==this.password)
        {
          this.router.navigate(['xyz'])
        }
      
      
    }
}
