import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  data:any=[];
  constructor(private router: Router,private apiservice:HeroService) { }
  ngOnInit(){
    this.apiservice.apicall().subscribe(res=>{
     console.log(res);
    this.data=res;
})
}
}
