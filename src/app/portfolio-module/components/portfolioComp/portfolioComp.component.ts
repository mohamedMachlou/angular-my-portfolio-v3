import { Component, signal } from '@angular/core';

@Component({
  selector: 'portfolioComp',
  templateUrl: './portfolioComp.component.html',
  styleUrl: './portfolioComp.component.css',
})
export class PortfolioComponent {
  toStyle = signal<String>('all');

  switchTo(name: string) {
    this.toStyle.set(name);
  }
}
