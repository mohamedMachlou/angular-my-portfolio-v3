import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
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
