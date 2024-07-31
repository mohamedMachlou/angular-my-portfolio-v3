///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
////// Portfolio Version 3 Created by Mohamed Machlou /////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
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
  ////////// Switch Color Global Method /////////////
  ////////////////////////////////////////////
  switchColorMethod() {
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

    /// Get Elements  li  h2  h4 h6 -- To switch color Black/white
    const header2 = Array.from(document.querySelectorAll('h2'));
    const header4 = Array.from(document.querySelectorAll('h4'));
    const header6 = Array.from(document.querySelectorAll('h6'));
    const gBW = [...header2, ...header4, ...header6];
    /// Get Elements h3 -- To Main Color
    const header3 = Array.from(document.querySelectorAll('h3'));
    /// Get Elements h5 p -- To switch color Gray/Gray
    const header5 = Array.from(document.querySelectorAll('h5'));
    const paras = Array.from(document.querySelectorAll('p'));
    const gGG = [...header5, ...paras];

    // Set Color to Text Available on About Component
    const available = document.querySelector('.available');

    // Get Switch color status true/falsefrom Appearance Service
    this.appearanceService.toSwitchContrast();
    this.switchClr.set(this.appearanceService.switchContrast());

    if (this.switchClr()) {
      //////////////////////////////////////////////
      /////////// Switch Color : True //////////////
      //////////////////////////////////////////////

      // Switch to White color for Elements   h2  h4 h6
      gBW.map((ele) => {
        ele?.setAttribute('style', 'color: var(--txt-h2h4h6-after)');
      });

      // Switch to Gray color for Elements  h5 p
      gGG.map((ele) => {
        ele?.setAttribute('style', 'color: var(--txt-h5p-after)');
      });

      // Switch to Black color All Front Elements
      frontElem.map((ele) => {
        ele?.setAttribute(
          'style',
          'background-color :var(--front-color-After)'
        );
      });

      // Add color to price header
      priceHeader.map((ele) => {
        ele?.setAttribute('style', 'color : var(--front-color-After)');
      });

      // Switch color After to Back Elements : body and portfolio
      back.map((ele) => {
        ele?.setAttribute(
          'style',
          'background-color : var(--back-color-After)'
        );
      });

      // Add color to Disable Services at Prices Plan
      disableServices.map((ele) => {
        ele?.setAttribute('style', 'color : var(--txt-deactive-after)');
      });
      //
      //
    } else {
      //////////////////////////////////////////////
      /////////// Switch Color : False /////////////
      //////////////////////////////////////////////

      // Switch to Black color for Elements   h2  h4 h6
      gBW.map((ele) => {
        ele?.setAttribute('style', 'color: var(--txt-h2h4h6-befor)');
      });

      // Switch to Gray color for Elements  h5 p
      gGG.map((ele) => {
        ele?.setAttribute('style', 'color: var(--txt-h5p-befor)');
      });

      // Switch to White color All Front Elements
      frontElem.map((ele) => {
        ele?.setAttribute(
          'style',
          'background-color :var(--front-color-Befor)'
        );
      });

      // Add color to price header
      priceHeader.map((ele) => {
        ele?.setAttribute('style', 'color : var(--front-color-Befor)');
      });

      // Switch color After to Back Elements : body and portfolio
      back.map((ele) => {
        ele?.setAttribute(
          'style',
          'background-color : var(--back-color-befor)'
        );
      });

      // Add color to Disable Services at Prices Plan
      disableServices.map((ele) => {
        ele?.setAttribute('style', 'color : var(--txt-deactive-befor)');
      });
    }
    // Set Color to Text Available on About Component
    available?.setAttribute('style', 'color: var(--available-color)');
  }

  ngOnInit(): void {}
}
