///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
////// Portfolio Version 3 Created by Mohamed Machlou /////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioModuleModule } from './portfolio-module/portfolio-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PortfolioModuleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
