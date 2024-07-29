import { Component, inject, OnInit, signal } from '@angular/core';
import { AppearanceService } from '../../services/appearance.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  isActive = signal<String>('home');
  switchClr = signal<boolean>(false);

  // Injection Appearance Service
  appearanceService = inject(AppearanceService);

  goToSection(name: string) {
    document.getElementById(name)?.scrollIntoView();
    this.isActive.set(name);
  }

  //
  switchColor() {
    this.appearanceService.toSwitchContrast();
    this.switchClr.set(this.appearanceService.switchContrast());

    // Appearance Service
    const body = document.querySelector('body');
    const portfolio = document.querySelector('.portfolio');
    const about = portfolio?.children[0];
    // const pers = document.querySelectorAll('.perso');
    // const perso = Array.from(pers);
    const container = portfolio?.children[1];
    const navbar = portfolio?.children[2]?.children[0]?.children[0];
    const elemBack = [body, portfolio];
    const elemFront = [about, container, navbar];
    /// Get Elements div li  h2  h4 -- To switch color Black/white
    const divs = Array.from(document.querySelectorAll('div'));
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

    console.log(gGG);

    if (this.switchClr()) {
      gBW.map((ele) => {
        ele?.setAttribute('style', 'color: white');
      });
      gGG.map((ele) => {
        ele?.setAttribute('style', 'color: var(--text-gray-contrastA)');
      });
      elemFront.map((ele) => {
        ele?.setAttribute('style', 'background-color :var(--main-back-color)');
      });
      elemBack.map((ele) => {
        ele?.setAttribute(
          'style',
          'background-color : var(--gray-back-colorA)'
        );
      });
    } else {
      gBW.map((ele) => {
        ele?.setAttribute('style', 'color: black');
      });
      gGG.map((ele) => {
        ele?.setAttribute('style', 'color: Black');
      });
      elemFront.map((ele) => {
        ele?.setAttribute('style', 'background-color :  white');
      });
      elemBack.map((ele) => {
        ele?.setAttribute(
          'style',
          'background-color : var(--gray-back-colorB)'
        );
      });
    }
  }

  ngOnInit(): void {}
}
/////////////////////////////////////////////////////////
///////////// Start Scrolling Function //////////////////
/////////////////////////////////////////////////////////
let currentSection = 'home';
window.addEventListener('scroll', () => {
  const divs = document.querySelectorAll('div');
  const sections = Array.from(divs).filter((section) => {
    return section.classList.contains('section');
  });

  // On Scrolling
  sections.forEach((section, index1) => {
    if (window.scrollY >= section.offsetTop) {
      // Get Links and set Classes
      const links = Array.from(document.querySelectorAll('a')).splice(1);
      //remove Classes from all links
      links.map((link) => {
        link.classList.remove('isDeactiveClass');
        link.classList.remove('isActiveClass');
      });
      //Filtrage Active Link
      const activeLink = links.splice(index1, 1);
      //background
      activeLink[0].classList.remove('isDeactiveClass');
      activeLink[0].classList.add('isActiveClass');
      //switch images
      activeLink[0].children[0].removeAttribute('style');
      activeLink[0].children[1].removeAttribute('style');
      activeLink[0].children[0].setAttribute('style', 'display: flex');
      activeLink[0].children[1].setAttribute('style', 'display: none');

      //Filtrage Inactive Links
      const inactiveLinks = links.filter((link) => link != activeLink[0]);
      inactiveLinks.map((link) => {
        link.classList.add('isDeactiveClass');
        link.children[0].removeAttribute('style');
        link.children[1].removeAttribute('style');
        link.children[0].setAttribute('style', 'display: none');
        link.children[1].setAttribute('style', 'display: flex');
      });
    }
  });
});
