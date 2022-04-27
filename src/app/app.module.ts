import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MainComponent } from './pages/main/main.component';
import { LiveComponent } from './pages/live/live.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { AboutComponent } from './pages/about/about.component';
import { HighlightsComponent } from './pages/highlights/highlights.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    LiveComponent,
    FeaturedComponent,
    AboutComponent,
    HighlightsComponent,
    CustomersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
