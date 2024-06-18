import { Component, signal } from '@angular/core';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  toStyle = signal<String>('all');

  switchTo(name: string) {
    this.toStyle.set(name);
  }
}
