import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollingService {
  constructor() {}

  //// Scrolling Method

  scrolling() {
    const divs = document.querySelectorAll('div');
    const sections = Array.from(divs).filter((section) => {
      return section.classList.contains('section');
    });

    // On Scrolling choose a section selected on navbar menu
    sections.forEach((section, index1) => {
      if (window.scrollY >= section.offsetTop) {
        //////// Get Links and set Classes /////////////
        const links = Array.from(document.querySelectorAll('a')).splice(1);

        ///////remove Classes from all links
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
  }
}
