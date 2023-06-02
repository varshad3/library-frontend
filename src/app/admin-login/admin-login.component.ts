import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  // form group
  adminForm = this.adminfbRouter.group({
   
  })

  constructor(private adminfbRouter:FormBuilder,private api:ApiService,private adminRouter:Router){

  }

  // adminLogin
  adminlogin(){
    // console.log(this.adminForm);  
 alert('helooo....')
  }
}
