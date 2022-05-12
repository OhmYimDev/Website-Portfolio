import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { Project1Component } from './component/project1/project1.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { Project2Component } from './component/project2/project2.component';
import { Project3Component } from './component/project3/project3.component';
import { Project4Component } from './component/project4/project4.component';
import { Project5Component } from './component/project5/project5.component';
import { Project6Component } from './component/project6/project6.component';
import { Project7Component } from './component/project7/project7.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    Project1Component,
    NavbarComponent,
    FooterComponent,
    Project2Component,
    Project3Component,
    Project4Component,
    Project5Component,
    Project6Component,
    Project7Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
