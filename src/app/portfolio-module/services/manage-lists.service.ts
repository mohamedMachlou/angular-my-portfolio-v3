import { SwitchColorService } from './switch-color.service';
import { inject, Injectable, OnInit, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManageListsService {
  enableList: any[] = [];
  disableList: any[] = [];
  currentId = signal<number>(0);
  switchClr = signal<boolean>(false);

  // Set Enable Color to Active Portfolio List
  // --main-color: #2a4fa7;
  enableClr = signal<String>('#2a4fa7');
  // Set Disable Color to Deactive Portfolio List
  disableClr = signal<String>('#000000');

  //// Services
  switchColorService = inject(SwitchColorService);

  manageListById(id: number) {
    this.currentId.set(id);
    console.log('from manage list : ', this.currentId());

    const lists = Array.from(document.querySelectorAll('li'));
    this.enableList = lists.filter((li, index) => {
      return index == this.currentId();
    });
    this.disableList = lists.filter((li, index) => {
      return index != this.currentId();
    });
    console.log(this.enableList, this.disableList);

    // Get switch Color Status
    this.switchClr.set(this.switchColorService.switchClr());
    console.log('switchClr : ', this.switchClr());

    /////// Remove Style of All Lists
    lists.map((li) => {
      li.removeAttribute('style');
    });
    /////// Add Style to Active list
    this.enableList.map((li) => {
      li.setAttribute('style', 'color : #2a4fa7');
    });

    //// Choose Disable Color
    if (this.switchClr()) {
      // Set Disable Color to Deactive Portfolio List
      this.disableClr = signal<String>('#ffffff');
      /////// Add Style to Deactive list
      this.disableList.map((li) => {
        li.setAttribute('style', 'color : #ffffff');
      });
    } else {
      // Set Disable Color to Deactive Portfolio List
      this.disableClr = signal<String>('#000000');
      /////// Add Style to Deactive list
      this.disableList.map((li) => {
        li.setAttribute('style', 'color : #000000');
      });
    }
  }

  ngOnInit(): void {}
}
