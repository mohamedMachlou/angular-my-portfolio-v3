import { Component, signal } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  isActive = signal<String>('home');

  goToHome() {
    document.getElementById('home')?.scrollIntoView();
    this.isActive.set('home');
  }
  goToService() {
    document.getElementById('service')?.scrollIntoView();
    this.isActive.set('service');
  }
  goToEducation() {
    document.getElementById('education')?.scrollIntoView();
    this.isActive.set('education');
  }
  goToPortfolio() {
    document.getElementById('portfolio')?.scrollIntoView();
    this.isActive.set('portfolio');
  }
  goToBlog() {
    document.getElementById('blog')?.scrollIntoView();
    this.isActive.set('blog');
  }
  goToContact() {
    document.getElementById('contact')?.scrollIntoView();
    this.isActive.set('contact');
  }
}
