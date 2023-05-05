import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HeroService} from '../hero.service';
import {Valid} from '../valid'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
      e=""
      p=""
      fl=0;
      data:any=[];
      msg=""
      valid=new Valid();

      constructor(private router: Router,private apiservice:HeroService) { }
      onsubmit(e1:any){
        this.e=e1.target.email.value;
        this.p=e1.target.password.value;
      
        if(this.e==='admin'&&this.p==='admin'){
          this.router.navigate(['/profile']);
          //this.fl=1;
        }
        else{
          this.router.navigate(['/insert']);
        }
          /*this.apiservice.validuser(this.valid).subscribe(res=>{
            if(res){
              console.log("valid");
            }
            else{
              console.log("no");
            }
          console.log(this.data);
      })*/
      }
    
    
}
