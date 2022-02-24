import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { Project1Component } from './component/project1/project1.component';
import { Project2Component } from './component/project2/project2.component';
import { Project3Component } from './component/project3/project3.component';
import { Project4Component } from './component/project4/project4.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'project1', component: Project1Component },
  { path: 'project2', component: Project2Component },
  { path: 'project3', component: Project3Component },
  { path: 'project4', component: Project4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
