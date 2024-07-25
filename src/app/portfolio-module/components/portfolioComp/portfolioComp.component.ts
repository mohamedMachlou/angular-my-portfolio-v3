import { Component, signal } from '@angular/core';

@Component({
  selector: 'portfolioComp',
  templateUrl: './portfolioComp.component.html',
  styleUrl: './portfolioComp.component.css',
})
export class PortfolioComponent {
  toStyle = signal<String>('all');

  switchTo(name: string) {
    this.toStyle.set(name);
  }

  // Design Images :
  design_img = signal<String[]>([
    '../../../../assets/images/Portfolio__Images/design_images/design__1.svg',
    '../../../../assets/images/Portfolio__Images/design_images/design__2.svg',
    '../../../../assets/images/Portfolio__Images/design_images/design__3.svg',
    '../../../../assets/images/Portfolio__Images/design_images/design__4.svg',
    '../../../../assets/images/Portfolio__Images/design_images/design__5.svg',
  ]);

  // Web Templates Images :
  web_templates_img = signal<String[]>([
    '../../../../assets/images/Portfolio__Images/website_images/website__1.svg',
    '../../../../assets/images/Portfolio__Images/website_images/website__2.svg',
    '../../../../assets/images/Portfolio__Images/website_images/website__3.svg',
    '../../../../assets/images/Portfolio__Images/website_images/website__4.svg',
  ]);

  // Web Apps Images :
  web_apps_img = signal<String[]>([
    '../../../../assets/images/Portfolio__Images/web_images/web_app__1.svg',
    '../../../../assets/images/Portfolio__Images/web_images/web_app__2.svg',
    '../../../../assets/images/Portfolio__Images/web_images/web_app__3.svg',
    '../../../../assets/images/Portfolio__Images/web_images/web_app__4.svg',
    '../../../../assets/images/Portfolio__Images/web_images/web_app__5.svg',
    '../../../../assets/images/Portfolio__Images/web_images/web_app__6.svg',
  ]);

  // Logo Images :
  logo_img = signal<String[]>([
    '../../../../assets/images/Portfolio__Images/logo_images/logo___1.svg',
    '../../../../assets/images/Portfolio__Images/logo_images/logo___2.svg',
    '../../../../assets/images/Portfolio__Images/logo_images/logo___3.svg',
    '../../../../assets/images/Portfolio__Images/logo_images/logo___4.svg',
    '../../../../assets/images/Portfolio__Images/logo_images/logo___5.svg',
  ]);
}
