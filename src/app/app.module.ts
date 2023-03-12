import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BottomJavascriptComponent } from './bottom-javascript/bottom-javascript.component';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { PortfolioItemModalComponent } from './portfolio/portfolio-item/portfolio-item-modal/portfolio-item-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioListComponent,
    PortfolioItemComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    BottomJavascriptComponent,
    PortfolioComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    PortfolioItemModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
