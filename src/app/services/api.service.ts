import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options ={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private userData:any
  constructor(private http:HttpClient) { }


  // register
  register(username:any,email:any,password:any,repassword:any){
 const body={
username,
email,
password,
repassword
}
    // make api cal server for register
  return this.http.post('http://localhost:3000/register',body)
  }

  // login
login(username:any,password:any){
  const body={
 username,
 password
 }
     // make api cal server for register
   return this.http.post('http://localhost:3000/login',body)
   }

  addbooks(booktitle:any,
    author:any,
    publisher:any,
    image:any,
    pubdate:any,
    countbooks:any){
      
  const body={
    booktitle,
    author,
    publisher,
    image,
    pubdate,
    countbooks
}
return this.http.post('http://localhost:3000/adminaddbook',body)


   }

   getbooks(){
    return this.http.get('http://localhost:3000/adminallbooks',this.appendtoken())
  }

  

   adminlogin(username:any,password:any){
    const body={
   username,
   password
   }
       // make api cal server for register
     return this.http.post('http://localhost:3000/adminlogin',body)
     }

     appendtoken(){
let token=localStorage.getItem('token')
let headers= new HttpHeaders()
if(token){
 headers= headers.append('verify-token',token)
 options.headers=headers
}
return options
     }
     

     getemail(username:any){
      return this.http.get('http://localhost:3000/get-email/'+username,this.appendtoken())
     }   

// deleteone
deletebook(booktitle:any){
  return this.http.delete('http://localhost:3000/delete-book/'+booktitle)

}


getUser(booktitle:any){
  return this.http.get('http://localhost:3000/issue-book/'+booktitle,this.appendtoken())
}



itemBook(product:any,name:any){
  const body={
    product,
    name
  }
return this.http.post('http://localhost:3000/adminaddedone',body)
}

getitempage(){
  return this.http.get('http://localhost:3000/adminpageget')
}


requestbooks(booktitle:any,
  author:any,
  publisher:any)
  {
    const body={
    booktitle,
    author,
    publisher
    }
  return this.http.post('http://localhost:3000/requestedbook',body)
}

requestgetbook(){
  return this.http.get('http://localhost:3000/requsetall',this.appendtoken())
}

 }
 

