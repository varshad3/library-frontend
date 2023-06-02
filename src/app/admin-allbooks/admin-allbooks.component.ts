import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-allbooks',
  templateUrl: './admin-allbooks.component.html',
  styleUrls: ['./admin-allbooks.component.css']
})
export class AdminAllbooksComponent implements OnInit{
table:any
bookstatusmsg=''
searchKey=""
  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.api.getbooks().subscribe((result: any) => {
      console.log(result);
      this.table = result;
    });

  }
  removebook(booktitle: any) {
    this.api.deletebook(booktitle).subscribe(
      (result: any) => {
        this.table = result;
        window.location.reload()
        if (this.table.length === 0) {
          this.bookstatusmsg = result.error.message;
        }
      },
      (result: any) => {
        alert(result.error.message);
      }
    );
  }
}
