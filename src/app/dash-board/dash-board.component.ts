import { Component,OnInit } from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit{
  student:any[]=[];
  constructor(private studentService:StudentService){}
  ngOnInit(){
    this.studentService.getEmployees().subscribe((data)=>{
      this.student=data;
    });
  }
}