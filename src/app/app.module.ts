import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { VetrinaComponent } from './vetrina.component';
import { ProdottoComponent } from './prodotto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { VideoComponent } from './components/video/video.component';
import { TrendsComponent } from './components/trends/trends.component';
import { CSSCarouselComponent } from './components/carousel/carousel.component';
import { HerowComponent } from './components/herow/herow.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShowHideComponent } from './components/showhide/showhide.component';
import { VetrinaHeadComponent } from './components/vetrinahead/vetrinahead.component';
import { FiltriComponent } from './components/filtri/filtri.component';
import { VetrinapComponent } from './components/vetrinap/vetrinap.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    VideoComponent,
    TrendsComponent,
    CSSCarouselComponent,
    HerowComponent,
    FooterComponent,
    ShowHideComponent,
    HomeComponent,
    VetrinaComponent,
    ProdottoComponent,
    VetrinaHeadComponent,
    FiltriComponent,
    VetrinapComponent
  ],
  imports: [
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'vetrina',
        component: VetrinaComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
