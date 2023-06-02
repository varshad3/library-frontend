import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginErrorMsg:string=''
  loginSuccessStatus:boolean=false

    // form group
loginForm=this.loginFb.group({
  // form array
  username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]]
})

constructor(private loginFb:FormBuilder,private api:ApiService,private loginRouter:Router){

}
login(){
 
  if(this.loginForm.valid){
    let uname=this.loginForm.value.username
    let pswd=this.loginForm.value.password
     // let uname=this.registerFb.value
this.api.login(uname,pswd).subscribe(
  // 200
  (result:any)=>{
    this.loginSuccessStatus=true
    localStorage.setItem("currentUser",result.currentUser)
    localStorage.setItem("token",result.token)
    localStorage.setItem("currentEmail",result.currentEmail)
    
    setTimeout(() => {
      this.loginRouter.navigateByUrl('dashboard')
    }, 2000);
},
// 400
(result:any)=>{
this.loginErrorMsg=result.error.message
setTimeout(() => {
  this.loginForm.reset()
  this.loginErrorMsg=''
}, 3000);
}
)
  }
 
  else{
    alert('invalid login form')
  }
}
}
