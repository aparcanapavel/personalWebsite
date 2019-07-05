import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { DcimComponent } from './dcim/dcim.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { depth: '1'} },
  { path: 'portfolio', component: PortfolioComponent, data: {depth:'2'}},
  { path: 'portfolio/:id', component: ProjectComponent, data: {depth:'3'}},
  { path: 'portfolio/3/dcimcapstone', component: DcimComponent},
  { path: 'contact', component: ContactComponent, data: {depth:'4'}},
  { path: 'contact/blog/:id', component: BlogComponent, data: {depth:'5'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
