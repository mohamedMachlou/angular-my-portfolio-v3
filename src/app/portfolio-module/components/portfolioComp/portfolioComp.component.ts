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
  // Showing and Organisation Images
  myArray: number[] = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  displayArr: number[] = [];
  start = signal<number>(0);
  nbElem = signal<number>(8);
  // Increase the start number
  incraeseStar() {
    if (this.start() === 0) {
      console.log(`Firstly start\'value is : ${this.start()}`);
      this.start.set(9);
    } else if (this.start() > 0) {
      this.start.set(this.start() + 8);
      console.log(`start\'value is : ${this.start()}`);
    }
  }
  showArray(arr: any[]) {
    if (arr.length <= 9) {
      this.displayArr = arr.splice(0, 9);
    } else if (arr.length > 9) {
      this.incraeseStar();
      this.displayArr = arr.splice(this.start(), this.nbElem());
    }
    console.log(this.displayArr);
  }
  ngOnInit(): void {
    this.showArray(this.myArray);
  }
}
