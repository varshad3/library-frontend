import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-issued-books',
  templateUrl: './issued-books.component.html',
  styleUrls: ['./issued-books.component.css']
})
export class IssuedBooksComponent {
  itemBook:any
  bookstatusmsg=''
  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.api.requestgetbook().subscribe((result:any)=>{
      console.log(result);
      this.itemBook=result  
    })
  }
clear(booktitle:any){
  this.api.deletebook(booktitle).subscribe((result:any)=>{
    this.itemBook=result;
    window.location.reload()
    if(this.itemBook.length===0){
      this.bookstatusmsg = result.error.message;
    }
  },(result: any) => {
    alert(result.error.message);
  }
  )
}

}
