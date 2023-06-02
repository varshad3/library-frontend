import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  logoutStatus:boolean=false
 constructor(private api:ApiService,private adminDashRouter:Router){

 }




  logout(){
    //remove all data stored  in local storage  for this perticular user
  //update logout status as true
  this.logoutStatus=true
    
  //wait 2 sec to redrict
  setTimeout(()=>{
    //navigate to login
    this.adminDashRouter.navigateByUrl('')
  },2000);
  }
  
}
