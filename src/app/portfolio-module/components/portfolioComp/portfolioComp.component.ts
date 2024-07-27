import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'portfolioComp',
  templateUrl: './portfolioComp.component.html',
  styleUrl: './portfolioComp.component.css',
})
export class PortfolioComponent implements OnInit {
  toStyle = signal<String>('all');
  switchTo(name: string) {
    this.toStyle.set(name);
  }

  // Design Images :
  design_img = [
    '../../../../assets/images/Portfolio__Images/design_images/design__1.svg',
    '../../../../assets/images/Portfolio__Images/design_images/design__2.svg',
    '../../../../assets/images/Portfolio__Images/design_images/design__3.svg',
    '../../../../assets/images/Portfolio__Images/design_images/design__4.svg',
    '../../../../assets/images/Portfolio__Images/design_images/design__5.svg',
  ];

  // Web Templates Images :
  web_templates_img = [
    '../../../../assets/images/Portfolio__Images/website_images/website__1.svg',
    '../../../../assets/images/Portfolio__Images/website_images/website__2.svg',
    '../../../../assets/images/Portfolio__Images/website_images/website__3.svg',
    '../../../../assets/images/Portfolio__Images/website_images/website__4.svg',
  ];

  // Web Apps Images :
  web_apps_img = [
    '../../../../assets/images/Portfolio__Images/web_images/web_app__1.svg',
    '../../../../assets/images/Portfolio__Images/web_images/web_app__2.svg',
    '../../../../assets/images/Portfolio__Images/web_images/web_app__3.svg',
    '../../../../assets/images/Portfolio__Images/web_images/web_app__4.svg',
    '../../../../assets/images/Portfolio__Images/web_images/web_app__5.svg',
    '../../../../assets/images/Portfolio__Images/web_images/web_app__6.svg',
  ];

  // Logo Images :
  logo_img = [
    '../../../../assets/images/Portfolio__Images/logo_images/logo___1.svg',
    '../../../../assets/images/Portfolio__Images/logo_images/logo___2.svg',
    '../../../../assets/images/Portfolio__Images/logo_images/logo___3.svg',
    '../../../../assets/images/Portfolio__Images/logo_images/logo___4.svg',
    '../../../../assets/images/Portfolio__Images/logo_images/logo___5.svg',
  ];

  //show All Images Array
  showImg: String[] = [
    ...this.web_templates_img,
    ...this.design_img,
    ...this.web_apps_img,
    ...this.logo_img,
  ];
  //show All Images Method
  show_all() {
    this.showImg = [
      ...this.web_templates_img,
      ...this.design_img,
      ...this.web_apps_img,
      ...this.logo_img,
    ];
  }
  //show Design Images
  show_design_img() {
    this.showImg = [...this.design_img];
  }
  //show Web Templates Images
  show_web_tem_img() {
    this.showImg = [...this.web_templates_img];
  }
  //show  Web Apps Images
  show_web_apps_img() {
    this.showImg = [...this.web_apps_img];
  }
  //show Logo Images
  show_logo_img() {
    this.showImg = [...this.logo_img];
  }

  ngOnInit(): void {}
}
