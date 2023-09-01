import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private student:any[]=[
    {name:'Moulis',Degree:'B.E',specialist:'E&I',address:'India',phoneNumber:'12121212'},
    {name:'Karthick',Degree:'B.tech',specialist:'IT',address:'US',phoneNumber:'2211334455'},
    {name:'Suve',Degree:'B.E',specialist:'IT',address:'Canada',phoneNumber:'3322114422'},
    {name:'Nive',Degree:' B.Tech',specialist:'IT',address:'Canada',phoneNumber:'5544663322'},
    {name:'Dharu',Degree:'B.Tech',specialist:'IT',address:'US',phoneNumber:'3322114455'},
    {name:'Abi',Degree:'B.E',specialist:'CSE',address:'canada',phoneNumber:'3421356421'},
    {name:'Narmadha',Degree:'B.E',specialist:'EEE',address:'Dubai',phoneNumber:'3421356421'},
    {name:'Balaji',Degree:'B.E',specialist:'ECE',address:'Australia',phoneNumber:'3421356421'},
    {name:'Mansoor',Degree:'B.Tech',specialist:'E&I',address:'Dubai',phoneNumber:'3421356421'},

  ];
  private studentSubject:BehaviorSubject<any[]>=new BehaviorSubject<any[]>(this.student)
    getEmployees():Observable<any[]>{
      return this.studentSubject.asObservable();

    }
    constructor() { }
  }
  