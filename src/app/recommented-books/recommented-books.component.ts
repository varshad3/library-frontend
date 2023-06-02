import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-recommented-books',
  templateUrl: './recommented-books.component.html',
  styleUrls: ['./recommented-books.component.css']
})
export class RecommentedBooksComponent{
  requestbookErrorMsg:string = ''
  requestbookStatus:boolean=false
  requestbookSuccessMsg:string=''
  getbookid:any=[]

requestbookuser=this.requestfd.group({
  booktitle:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  author:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  publisher:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]]
})

constructor(private api:ApiService,private requestfd:FormBuilder,private requestbokrouter:Router)
{

}
requestbooks(){
    console.log(this.requestbookuser);

      let booktitle=this.requestbookuser.value.booktitle
      let author=this.requestbookuser.value.author
      let publisher=this.requestbookuser.value.publisher

      if(this.requestbookuser.valid){
      this.api.requestbooks(booktitle,
        author,
        publisher)
        .subscribe((result:any)=>{
alert(result.message);
this.requestbookStatus=true
setTimeout(() => {
  this.requestbokrouter.navigateByUrl('dashboard')
}, 1000);
        },
        (result:any)=>{
         alert(result.error.message)
         this.requestbookuser.reset()
        }
        )
  }
  else{
    alert('Not send the request properly')
  }
}

}
