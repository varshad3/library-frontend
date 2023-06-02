import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-admin-allissuedbooks',
  templateUrl: './admin-allissuedbooks.component.html',
  styleUrls: ['./admin-allissuedbooks.component.css']
})
export class AdminAllissuedbooksComponent implements OnInit{
  booktitle:any;
itemBook:any
  constructor(private route:ActivatedRoute,
    private api:ApiService){

  }

  ngOnInit(): void {
    this.api.getitempage().subscribe((result:any)=>{
      this.itemBook=result.bookitems
    })
  }
}
