import { Component } from '@angular/core';
import {HeroService} from '../hero.service';
import { Router } from '@angular/router';
import {Data} from '../data'
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  data=new Data();
  constructor(private router: Router,private apiservice:HeroService) { }
  onsubmit(e1:any){
    //console.log(this.data.name);
    this.apiservice.deldata(this.data.name).subscribe(res=>{
        console.log(this.data);
    })
    
    
  }
}
