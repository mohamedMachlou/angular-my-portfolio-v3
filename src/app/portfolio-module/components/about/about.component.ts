import { Component, signal } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  goTo(choose: String) {
    if (choose == 'fa') {
      window.open(
        'https://www.facebook.com/profile.php?id=61560877224041',
        '-blank'
      );
    }
    if (choose == 'git') {
      window.open('https://github.com/mohamedMachlou', '-blank');
    }
    if (choose == 'in') {
      window.open('https://www.instagram.com/agadirdeveloper/', '-blank');
    }
    if (choose == 'tw') {
      window.open('https://x.com/MachlouMohamed', '-blank');
    }
    if (choose == 'lin') {
      window.open('https://www.linkedin.com/in/machloumohamed/', '-blank');
    }
  }
}
