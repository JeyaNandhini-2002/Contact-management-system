import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { Data } from './data';
import {Valid} from './valid';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private http:HttpClient) { 
  }
  apicall(){
    return this.http.get('http://localhost:8083/iraiva/FifthServlet')
  }
  adddata(data:Data){
    return this.http.post('http://localhost:8083/iraiva/FifthServlet',data);    
  }
  deldata(data:any){
    return this.http.delete('http://localhost:8083/iraiva/FifthServlet',{ body: { name: data } }); 
  }
  validuser(valid:Valid){
    return this.http.post('http://localhost:8083/iraiva/FifthServlet',valid);    

  }
}
