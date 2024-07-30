import { inject, Injectable, OnInit, signal } from '@angular/core';
import { AppearanceService } from './appearance.service';

@Injectable({
  providedIn: 'root',
})
export class SwitchColorService implements OnInit {
  // Switch Color status
  switchClr = signal<boolean>(false);

  // Injections Services
  appearanceService = inject(AppearanceService);

  ////////////////////////////////////////////
  ////////// Switch Color Method /////////////
  ////////////////////////////////////////////
  /// Get Elements Back Body and Portfolio -- To switch color
  body = document.querySelector('body');
  portfolio = document.querySelector('.portfolio');
  back = [this.body, this.portfolio];

  /// Get Elements Front  -- To switch color
  about = Array.from(document.querySelectorAll('#about'));
  blogs = Array.from(document.querySelectorAll('#blogs'));
  contact = Array.from(document.querySelectorAll('#contact'));
  education = Array.from(document.querySelectorAll('#education'));
  service = Array.from(document.querySelectorAll('#service'));
  navbar = Array.from(document.querySelectorAll('#navbar'));
  myportfolio = Array.from(document.querySelectorAll('#myportfolio'));
  price = Array.from(document.querySelectorAll('#price'));
  priceHeader = Array.from(document.querySelectorAll('#price-header'));
  disableServices = Array.from(document.querySelectorAll('.service-disable'));
  recommendation = Array.from(document.querySelectorAll('#recommendation'));
  welcome = Array.from(document.querySelectorAll('#welcome'));
  footer = Array.from(document.querySelectorAll('#footer'));

  frontElem = [
    ...this.about,
    ...this.blogs,
    ...this.contact,
    ...this.education,
    ...this.service,
    ...this.navbar,
    ...this.myportfolio,
    ...this.price,
    ...this.recommendation,
    ...this.welcome,
    ...this.footer,
  ];
  // const navbar = portfolio?.children[2]?.children[0]?.children[0];
  // const about = portfolio?.children[0];
  // const elemFront = [about, navbar];

  // Get Container's children
  containerChldrs = Array.from(this.portfolio?.children[1].children!);

  /// Get Elements  li  h2  h4 -- To switch color Black/white
  // const divs = Array.from(document.querySelectorAll('div'));
  lists = Array.from(document.querySelectorAll('li'));
  header2 = Array.from(document.querySelectorAll('h2'));
  header4 = Array.from(document.querySelectorAll('h4'));
  gBW = [...this.header2, ...this.header4];

  /// Get Elements h3 -- To Main Color
  header3 = Array.from(document.querySelectorAll('h3'));

  /// Get Elements h5 p -- To switch color Gray/Gray
  header5 = Array.from(document.querySelectorAll('h5'));
  paras = Array.from(document.querySelectorAll('p'));
  gGG = [...this.header5, ...this.paras];

  ////////////////////////////////////////////
  ////////// Switch Color Global Method /////////////
  ////////////////////////////////////////////
  switchColorMethod() {
    // Get Switch color status true/false☻ from Appearance Service
    this.appearanceService.toSwitchContrast();
    this.switchClr.set(this.appearanceService.switchContrast());

    console.log(this.containerChldrs);

    if (this.switchClr()) {
      //////////////////////////////////////////////
      /////////// Switch Color : True //////////////
      //////////////////////////////////////////////
      this.switchClrEnable();
    } else {
      //////////////////////////////////////////////
      /////////// Switch Color : False /////////////
      //////////////////////////////////////////////
      this.switchClrDisable();
    }
  }

  ngOnInit(): void {}
  //////////////////////////////////////////////
  ///// Switch Color : Enable Method //////////
  //////////////////////////////////////////////
  switchClrEnable() {
    // Switch to White color for Elements   h2  h4
    this.gBW.map((ele) => {
      ele?.setAttribute('style', 'color: white');
    });

    // Switch to Gray color for Elements  h5 p
    this.gGG.map((ele) => {
      ele?.setAttribute('style', 'color: var(--text-gray-contrastA)');
    });

    // Switch to Black color All FrontElem
    this.frontElem.map((ele) => {
      ele?.setAttribute('style', 'background-color :var(--front-color-After)');
    });

    // Add black color to price header
    this.priceHeader.map((ele) => {
      ele?.setAttribute('style', 'color : black');
    });

    // Switch to Black color for Container Childrens
    // this.frontElem.map((ele) => {
    //   ele?.setAttribute('style', 'background-color :var(--front-color-After)');
    // });
    // Switch to Gray color for body and portfolio
    this.back.map((ele) => {
      ele?.setAttribute('style', 'background-color : var(--gray-back-colorA)');
    });

    // Add Gray color to Disable Services at Prices Plan
    this.disableServices.map((ele) => {
      ele?.setAttribute('style', 'color : var(--text-gray-contrastA)');
    });
  }
  //////////////////////////////////////////////
  ///// Switch Color : Disable Method //////////
  //////////////////////////////////////////////
  switchClrDisable() {
    // Switch to Black color for Elements   h2  h4

    this.gBW.map((ele) => {
      ele?.setAttribute('style', 'color: black');
    });

    // Switch to Gray color for Elements  h5 p
    this.gGG.map((ele) => {
      ele?.setAttribute('style', 'color: Black');
    });

    // Switch to White color All Front Elements
    this.frontElem.map((ele) => {
      ele?.setAttribute('style', 'background-color :var(--front-color-Befor)');
    });

    // // Switch to White color for Container Childrens
    // this.containerChldrs.map((ele) => {
    //   ele?.setAttribute('style', 'background-color : var(--front-color-Befor)');
    // });

    // Switch to Gray color for body and portfolio
    this.back.map((ele) => {
      ele?.setAttribute('style', 'background-color : var(--gray-back-colorB)');
    });

    // Add Gray color to Disable Services at Prices Plan
    this.disableServices.map((ele) => {
      ele?.setAttribute('style', 'color : var(--text-gray-contrastA)');
    });
  }
}
