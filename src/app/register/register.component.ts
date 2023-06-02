import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerErrorMsg:string=''
  registerSuccessMsg:string=''

  // form group
registerForm=this.registerFb.group({
  // form array
  username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  email:['',[Validators.required]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
  repassword:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]]
})


  constructor(private registerFb:FormBuilder,private api:ApiService,private registerRouter:Router){

  }
  register(){
    if(this.registerForm.valid){
      let uname=this.registerForm.value.username
      let mail=this.registerForm.value.email
      let pswd=this.registerForm.value.password
      let rpswd=this.registerForm.value.repassword

      // api cal
      this.api.register(uname,mail,pswd,rpswd)
      .subscribe(
        // 200
        (result:any)=>{
this.registerSuccessMsg=result.message
setTimeout(() => {
  this.registerRouter.navigateByUrl('login')

}, 2000);
      },
      (result:any)=>{
        this.registerErrorMsg=result.error.message
        setTimeout(() => {
          this.registerForm.reset()
          this.registerErrorMsg=''
        }, 3000);
      }
      )
    }
   
    else{
      alert('invalid register form')
    }
  }

}
