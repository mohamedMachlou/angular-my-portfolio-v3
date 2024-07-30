import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppearanceService {
  // switchContrast is a boolean to switch the color of the appearance
  switchContrast = signal<boolean>(false);

  toSwitchContrast() {
    this.switchContrast.set(!this.switchContrast());
  }
}
