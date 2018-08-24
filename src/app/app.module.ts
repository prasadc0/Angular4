import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {newHostlisterner} from './pop-up-directive.directive';
import {loopconstructer} from './loopin-directive';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {TranslateModule,TranslateService,
  TranslateLoader,
  TranslateStaticLoader} from 'ng2-translate/ng2-translate';
 
//material design imports
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';


// declared components and services imports 
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { RtvdetailscompComponent } from './rtvdetailscomp/rtvdetailscomp.component';
import { TransferNavigateComponent } from './transfer-navigate/transfer-navigate.component';
import {SearchpanelComponent} from './searchpanel/searchpanel.component';
/// ad-banner - component. ts///
import {AdDirective} from './ad.component/ad.directive';
import { AdComponentComponent } from './ad.component/ad.component.component';
import { AdBannerComponent} from './ad.component/ad-banner.component';
//import { AdItem} from './ad.component/ad-item'; 
import { HeroJobAdComponent} from './ad.component/hero-job-ad.component';
import { HeroProfileComponent} from './ad.component/hero-profile.component';
import {Eld} from './Directives/EventListener'
import {Http} from '@angular/http';
import {customPopUp} from './CustomPopUp';

///importing modal for bootstrap 
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ShipdetailsComponent } from './shipdetails/shipdetails.component';   

const appRoutes: Routes = [
  {
    path: 'testComp',
    component: TestComponentComponent 
  },
  {
    path : 'rtvDetails',
    component : RtvdetailscompComponent
  },
  {
    path :'app-transfer-navigate/:id',
    component : TransferNavigateComponent
  } ,
  {
    path:'app-shipdetails',
    component : ShipdetailsComponent
  }
];
export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    RtvdetailscompComponent,
    TransferNavigateComponent,
    SearchpanelComponent,
    newHostlisterner,
    loopconstructer,
    AdDirective,
    AdComponentComponent,
    AdBannerComponent ,
    HeroJobAdComponent,
    HeroProfileComponent,
    Eld,customPopUp, ShipdetailsComponent
      ],
  imports: [ 
  BrowserModule, 
  HttpModule ,
  HttpClientModule,
  RouterModule.forRoot(appRoutes,{ enableTracing: true }),
  NgbModule.forRoot(),
  FormsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MatListModule,
  MatTableModule,
  TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
  BootstrapModalModule.forRoot({container:document.body}) 
  ],
  entryComponents: [HeroJobAdComponent,HeroProfileComponent,customPopUp],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

} 
 
 
