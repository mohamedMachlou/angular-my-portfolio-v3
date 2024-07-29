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
  switchColorMethod() {
    // Get Switch color status true/false☻ from Appearance Service
    this.appearanceService.toSwitchContrast();
    this.switchClr.set(this.appearanceService.switchContrast());

    /// Get Elements Back Body and Portfolio -- To switch color
    const body = document.querySelector('body');
    const portfolio = document.querySelector('.portfolio');
    const back = [body, portfolio];

    /// Get Elements Front  -- To switch color
    const about = Array.from(document.querySelectorAll('#about'));
    const blogs = Array.from(document.querySelectorAll('#blogs'));
    const contact = Array.from(document.querySelectorAll('#contact'));
    const education = Array.from(document.querySelectorAll('#education'));
    const service = Array.from(document.querySelectorAll('#service'));
    const navbar = Array.from(document.querySelectorAll('#navbar'));
    const myportfolio = Array.from(document.querySelectorAll('#myportfolio'));
    const price = Array.from(document.querySelectorAll('#price'));
    const priceHeader = Array.from(document.querySelectorAll('#price-header'));
    const disableServices = Array.from(
      document.querySelectorAll('.service-disable')
    );
    const recommendation = Array.from(
      document.querySelectorAll('#recommendation')
    );
    const welcome = Array.from(document.querySelectorAll('#welcome'));
    const footer = Array.from(document.querySelectorAll('#footer'));

    const frontElem = [
      ...about,
      ...blogs,
      ...contact,
      ...education,
      ...service,
      ...navbar,
      ...myportfolio,
      ...price,
      ...recommendation,
      ...welcome,
      ...footer,
    ];
    // const navbar = portfolio?.children[2]?.children[0]?.children[0];
    // const about = portfolio?.children[0];
    // const elemFront = [about, navbar];

    // Get Container's children
    const containerChldrs = Array.from(portfolio?.children[1].children!);

    /// Get Elements  li  h2  h4 -- To switch color Black/white
    // const divs = Array.from(document.querySelectorAll('div'));
    const lists = Array.from(document.querySelectorAll('li'));
    const header2 = Array.from(document.querySelectorAll('h2'));
    const header4 = Array.from(document.querySelectorAll('h4'));
    const gBW = [...lists, ...header2, ...header4];

    /// Get Elements h3 -- To Main Color
    const header3 = Array.from(document.querySelectorAll('h3'));

    /// Get Elements h5 p -- To switch color Gray/Gray
    const header5 = Array.from(document.querySelectorAll('h5'));
    const paras = Array.from(document.querySelectorAll('p'));
    const gGG = [...header5, ...paras];

    console.log(disableServices);

    //////////////////////////////////////////////
    /////////// Switch Color : True //////////////
    //////////////////////////////////////////////
    if (this.switchClr()) {
      // Switch to White color for Elements  li  h2  h4
      gBW.map((ele) => {
        ele?.setAttribute('style', 'color: white');
      });

      // Switch to Gray color for Elements  h5 p
      gGG.map((ele) => {
        ele?.setAttribute('style', 'color: var(--text-gray-contrastA)');
      });

      // Switch to Black color All FrontElem
      frontElem.map((ele) => {
        ele?.setAttribute(
          'style',
          'background-color :var(--front-color-After)'
        );
      });

      // Add black color to price header
      priceHeader.map((ele) => {
        ele?.setAttribute('style', 'color : black');
      });

      // Switch to Black color for Container Childrens

      // Switch to Gray color for body and portfolio◘
      back.map((ele) => {
        ele?.setAttribute(
          'style',
          'background-color : var(--gray-back-colorA)'
        );
      });

      // Add Gray color to Disable Services at Prices Plan
      disableServices.map((ele) => {
        ele?.setAttribute('style', 'color : var(--text-gray-contrastA)');
      });
    } else {
      //////////////////////////////////////////////
      /////////// Switch Color : False /////////////
      //////////////////////////////////////////////
      // Switch to Black color for Elements   h2  h4
      gBW.map((ele) => {
        ele?.setAttribute('style', 'color: black');
      });

      // Switch to Gray color for Elements  h5 p
      gGG.map((ele) => {
        ele?.setAttribute('style', 'color: Black');
      });

      // Switch to White color All FrontElem
      frontElem.map((ele) => {
        ele?.setAttribute(
          'style',
          'background-color :var(--front-color-Befor)'
        );
      });

      // Switch to White color for Container Childrens
      containerChldrs.map((ele) => {
        ele?.setAttribute('style', 'background-color : white');
      });

      // Switch to Gray color for body and portfolio
      back.map((ele) => {
        ele?.setAttribute(
          'style',
          'background-color : var(--gray-back-colorB)'
        );
      });

      // Add Gray color to Disable Services at Prices Plan
      disableServices.map((ele) => {
        ele?.setAttribute('style', 'color : var(--text-gray-contrastA)');
      });
    }
  }

  ngOnInit(): void {
    this.switchColorMethod();
  }
}
