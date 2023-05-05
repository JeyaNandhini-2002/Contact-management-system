import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { DeleteComponent } from './delete/delete.component';
import { InsertComponent } from './insert/insert.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
const appRoute:Routes=[
  
    {path:'index',component:IndexComponent},
   {path:'profile',component:ProfileComponent},
   {path:'register', component:RegisterComponent},
   {path:'delete',component:DeleteComponent},
   {path:'insert',component:InsertComponent},
   {path:'about',component:AboutComponent},
   {path:'logout',component:IndexComponent},
  
];
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProfileComponent,
    RegisterComponent,
    DeleteComponent,
    InsertComponent,
    AboutComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
