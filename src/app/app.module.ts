import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { VetrinaComponent } from './components/vetrina.component';
import { ProdottoComponent } from './components/prodotto.component';
import { WizardComponent } from './components/wizard.component';
import { RegistrazioneComponent } from './components/registrazione.component';
import { WizardResultComponent } from './components/wizardresult.component';
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
import { GiftWizardComponent } from './components/giftwizard/giftwizard.component';
import { WizardResultHeadComponent } from './components/wizardresulthead/wizardresulthead.component';
import { WizardResultpComponent } from './components/wizardresultp/wizardresultp.component';
import { WizardResultInterestComponent } from './components/wizardresultinterest/wizardresultinterest.component';
import { WizardResultHeroComponent } from './components/wizardresulthero/wizardresulthero.component';
import { RegistrationWizardComponent } from './components/registrationwizard/registrationwizard.component';
import { ProductInfoComponent } from './components/productinfo/productinfo.component';

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
    WizardComponent,
    RegistrazioneComponent,
    WizardResultComponent,
    FiltriComponent,
    VetrinapComponent,
    GiftWizardComponent,
    WizardResultHeadComponent,
    WizardResultpComponent,
    WizardResultInterestComponent,
    WizardResultHeroComponent,
    RegistrationWizardComponent,
    ProductInfoComponent
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
      },
      {
        path: 'wizard',
        component: WizardComponent
      },
      {
        path: 'wizardresult',
        component: WizardResultComponent
      },
      {
        path: 'registrazione',
        component: RegistrazioneComponent
      },
      {
        path: 'prodotto/:id',
        component: ProdottoComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
