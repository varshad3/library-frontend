import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isCollapse:boolean=true
  


constructor(private loginFb:FormBuilder){

}

collapse(){
  this.isCollapse=!this.isCollapse
}


}
