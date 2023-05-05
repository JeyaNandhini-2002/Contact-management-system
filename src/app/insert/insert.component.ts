import { Component } from '@angular/core';
import {HeroService} from '../hero.service';
import { Router } from '@angular/router';
import {Data} from '../data'


@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  data=new Data();
  constructor(private router: Router,private apiservice:HeroService) { }
  onsubmit(e1:any){
    this.apiservice.adddata(this.data).subscribe(res=>{
        console.log(this.data);
    })
    
    
  }
}
