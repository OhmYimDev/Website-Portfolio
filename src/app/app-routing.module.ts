import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { Project1Component } from './component/project1/project1.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'project1', component: Project1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
