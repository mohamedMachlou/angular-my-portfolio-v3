import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './portfolio-module/components/welcome/welcome.component';
import { MyServicesComponent } from './portfolio-module/components/my-services/my-services.component';
import { EducationComponent } from './portfolio-module/components/education/education.component';
import { PortfolioComponent } from './portfolio-module/components/portfolio/portfolio.component';
import { BlogComponent } from './portfolio-module/components/blog/blog.component';
import { ContactComponent } from './portfolio-module/components/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'service', component: MyServicesComponent },
  { path: 'education', component: EducationComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
