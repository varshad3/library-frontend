import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  user:string=''
  logoutStatus:boolean=false
  isStatus:boolean=false
  currentEmail:any=''
  email:string=''
  constructor(private api:ApiService,private dashboardrouter:Router){

  }

  ngOnInit(): void {
    if(localStorage.getItem('currentUser')){
    this.user= localStorage.getItem('currentUser') ||''
    }
    if(localStorage.getItem('currentEmail')){
      this.currentEmail= localStorage.getItem('currentEmail') ||''
    }
  }

  logout(){
    //remove all data stored  in local storage  for this perticular user
  //update logout status as true
  this.logoutStatus=true
    
  //wait 2 sec to redrict
  setTimeout(()=>{
    //navigate to login
    this.dashboardrouter.navigateByUrl('')
  },2000);
  }
  
allboks(){
  setTimeout(() => {
    this.isStatus=true

  }, 1000);
}

getemail(){
this.api.getemail(this.currentEmail)
.subscribe(
  (result:any)=>{
  this.email = result.email
},
(result:any)=>{
  alert(result.error.message)
}
)

}

}
