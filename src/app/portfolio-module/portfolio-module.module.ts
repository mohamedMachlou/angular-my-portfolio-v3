import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { PricePlansComponent } from './components/price-plans/price-plans.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { EducationComponent } from './components/education/education.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavBarComponent,
    AboutComponent,
    WelcomeComponent,
    MyServicesComponent,
    PricePlansComponent,
    RecommendationsComponent,
    EducationComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModuleModule { }
