import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { Project1Component } from './component/project1/project1.component';
import { Project2Component } from './component/project2/project2.component';
import { Project3Component } from './component/project3/project3.component';
import { Project4Component } from './component/project4/project4.component';
import { Project5Component } from './component/project5/project5.component';
import { Project6Component } from './component/project6/project6.component';
import { Project7Component } from './component/project7/project7.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'attraction-paper', component: Project1Component },
  { path: 'braferydays', component: Project2Component },
  { path: 'starbucks', component: Project3Component },
  { path: 'portfolio', component: Project4Component },
  { path: 'react-income-expense', component: Project5Component },
  { path: 'simple-website-react-bootstrap', component: Project6Component },
  { path: 'react-crud', component: Project7Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
