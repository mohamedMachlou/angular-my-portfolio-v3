import { Component, inject, OnInit, signal } from '@angular/core';
import { AppearanceService } from '../../services/appearance.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  appearanceService = inject(AppearanceService);
  switchClr = signal<boolean>(false);

  //Switch Contrast Color
  ngOnInit(): void {
    this.switchClr.set(this.appearanceService.switchContrast());
    console.log(this.switchClr());
  }

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
