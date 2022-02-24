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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    Project1Component,
    NavbarComponent,
    FooterComponent,
    Project2Component,
    Project3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
