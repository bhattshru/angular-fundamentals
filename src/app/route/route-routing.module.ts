import { SustainabilityComponent } from './../sustainability/sustainability.component';
import { GovernanceComponent } from './../governance/governance.component';
import { DevelopmentComponent } from './../development/development.component';
import { AboutFifaComponent } from './../about-fifa/about-fifa.component';
import { HomePageComponent } from './../home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomePageComponent },
  { path: 'about', component: AboutFifaComponent },
  { path: 'development', component: DevelopmentComponent },
  { path: 'governance', component: GovernanceComponent },
  { path: 'sustainability', component: SustainabilityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
