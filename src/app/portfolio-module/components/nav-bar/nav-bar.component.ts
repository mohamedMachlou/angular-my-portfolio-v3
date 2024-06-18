import { Component, signal } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  isActive = signal<String>('home');

  goToSection(name: string) {
    document.getElementById(name)?.scrollIntoView();
    this.isActive.set(name);
  }
}
