import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { RouteRoutingModule } from './route/route-routing.module';
import { RouteModule } from './route/route.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageZoomModule } from 'angular2-image-zoom';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutFifaComponent } from './about-fifa/about-fifa.component';
import { DevelopmentComponent } from './development/development.component';
import { GovernanceComponent } from './governance/governance.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    AboutFifaComponent,
    DevelopmentComponent,
    GovernanceComponent,
    SustainabilityComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    RouteRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    ImageZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
