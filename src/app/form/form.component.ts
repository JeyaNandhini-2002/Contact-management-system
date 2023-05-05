import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
   res=0;
   x=0;
   y=0;
   res1=""
   onsubmit(event:any){
      this.x=parseInt(event.target.name.value);
      this.y=parseInt(event.target.number.value);
      this.res+=(this.x+this.y);
      this.res1=""+this.res;
   }
}
