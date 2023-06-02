import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-issuereport',
  templateUrl: './admin-issuereport.component.html',
  styleUrls: ['./admin-issuereport.component.css']
})
export class AdminIssuereportComponent implements OnInit{
  itemBook:any
constructor(private api:ApiService){

  }

  ngOnInit(): void {
    this.api.requestgetbook().subscribe((result:any)=>{
      console.log(result);
      this.itemBook=result
      
    })
  }

}
