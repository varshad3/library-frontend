import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-addbooks',
  templateUrl: './admin-addbooks.component.html',
  styleUrls: ['./admin-addbooks.component.css']
})
export class AdminAddbooksComponent {

  addbookErrorMsg:string = ''
  addbookStatus:boolean=false
  addbookSuccessMsg:string=''

  addbooksadmin=this.fb.group({
    // form array
    booktitle:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    author:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    publisher:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    image:['',],
    pubdate:['',[Validators.required]],
    countbooks:['',[Validators.required]]
  })

  constructor(private api:ApiService,private fb:FormBuilder,private adminRouteraddbook:Router){

  }

  addbooks(){
    if(this.addbooksadmin.valid){
      let booktitle=this.addbooksadmin.value.booktitle
      let author=this.addbooksadmin.value.author
      let publisher=this.addbooksadmin.value.publisher
      let image=this.addbooksadmin.value.image
      let pubdate=this.addbooksadmin.value.pubdate
      let countbooks=this.addbooksadmin.value.countbooks
      
      this.api.addbooks(booktitle,
        author,
        publisher,
        image,
        pubdate,
        countbooks)
.subscribe((result:any)=>{
     // login success status set as true
     this.addbookStatus=true
     // alert(result.message)
alert(this.addbookSuccessMsg=result.message)
  setTimeout(() => {
    this.adminRouteraddbook.navigateByUrl('adminbooks')

  }, 1000);
},
(result:any)=>{
  this.addbookErrorMsg = result.error.message
  setTimeout(()=>{
    this.addbooksadmin.reset()
    this.addbookErrorMsg=''
  },3000)
}
)
    }
    else{
      alert('Not Properly Inserted....')

    }
  }
}
