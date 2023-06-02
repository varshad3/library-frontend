import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit{
  logoutStatus:boolean=false
  table:any
  users:any[] = [];
  searchKey:string=''
  constructor(private dashboardrouter:Router,private api:ApiService,private router:Router){

  }

  ngOnInit(): void {
    this.dashboardrouter.navigateByUrl('all-books')
    this.api.getbooks().subscribe((result:any)=>{
      console.log(result);
      this.table=result
    })

  }
  logout(){
    //remove all data stored  in local storage  for this perticular user
  //update logout status as true
  this.logoutStatus=true
    
  //wait 2 sec to redrict
  setTimeout(()=>{
    //navigate to login
    this.dashboardrouter.navigateByUrl('login')
  },2000);
  }

  itemBook(product:any){
    let name=localStorage.getItem('currentUser')
this.api.itemBook(product,name).subscribe((result:any)=>{
  console.log(result);
  alert(result.message)
  
},
(result:any)=>{
  alert(result.error.message)
}
)
  }
  
}
