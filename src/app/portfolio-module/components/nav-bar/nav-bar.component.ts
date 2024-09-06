import { ManageListsService } from './../../services/manage-lists.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ScrollingService } from '../../services/scrolling.service';
import { SwitchColorService } from '../../services/switch-color.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  selected = signal<String>('home');
  // Switch Color status
  switchClr = signal<boolean>(false);

  // Injection Services
  switchColorService = inject(SwitchColorService);
  manageListsService = inject(ManageListsService);

  goToSection(name: string) {
    document.getElementById(name)?.scrollIntoView();
    this.selected.set(name);
  }

  switchColor() {
    this.switchColorService.switchColorMethod();
    this.switchClr.set(this.switchColorService.switchClr());
    this.manageListsService.manageListById(0);
  }
 
  ngOnInit(): void {}
}
/////////////////////////////////////////////////////////
///////////// Start Scrolling Function //////////////////
/////////////////////////////////////////////////////////
window.addEventListener('scroll', () => {
  ScrollingService.prototype.scrolling();
});
