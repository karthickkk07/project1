import { Component } from '@angular/core';
import { StringService } from '../string.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public string:StringService){

    

  }
  
}
