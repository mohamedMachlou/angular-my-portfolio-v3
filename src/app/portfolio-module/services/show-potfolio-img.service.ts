///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
////// Portfolio Version 3 Created by Mohamed Machlou /////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
import { inject, Injectable } from '@angular/core';
import { ManageListsService } from './manage-lists.service';

@Injectable({
  providedIn: 'root',
})
export class ShowPotfolioImgService {
  // Injection Services
  manageListsService = inject(ManageListsService);

  // Design Images :
  design_img = [
    '../../../../assets/images/Portfolio__Images/design_images/design__1.svg',
    '../../../../assets/images/Portfolio__Images/design_images/design__2.svg',
    '../../../../assets/images/Portfolio__Images/design_images/design__3.svg',
    '../../../../assets/images/Portfolio__Images/design_images/design__4.svg',
    '../../../../assets/images/Portfolio__Images/design_images/design__5.svg',
  ];

  // Web Templates Images :
  web_templates_img = [
    '../../../../assets/images/Portfolio__Images/website_images/website__1.svg',
    '../../../../assets/images/Portfolio__Images/website_images/website__2.svg',
    '../../../../assets/images/Portfolio__Images/website_images/website__3.svg',
    '../../../../assets/images/Portfolio__Images/website_images/website__4.svg',
  ];

  // Web Apps Images :
  web_apps_img = [
    '../../../../assets/images/Portfolio__Images/web_images/web_app__1.svg',
    '../../../../assets/images/Portfolio__Images/web_images/web_app__2.svg',
    '../../../../assets/images/Portfolio__Images/web_images/web_app__3.svg',
    '../../../../assets/images/Portfolio__Images/web_images/web_app__4.svg',
    '../../../../assets/images/Portfolio__Images/web_images/web_app__5.svg',
    '../../../../assets/images/Portfolio__Images/web_images/web_app__6.svg',
  ];

  // Logo Images :
  logo_img = [
    '../../../../assets/images/Portfolio__Images/logo_images/logo___1.svg',
    '../../../../assets/images/Portfolio__Images/logo_images/logo___2.svg',
    '../../../../assets/images/Portfolio__Images/logo_images/logo___3.svg',
    '../../../../assets/images/Portfolio__Images/logo_images/logo___4.svg',
    '../../../../assets/images/Portfolio__Images/logo_images/logo___5.svg',
  ];

  //show All Images Array
  showImgfromService: string[] = [];

  showImages() {
    let currentId = this.manageListsService.currentId();
    if (currentId == 0) {
      this.showImgfromService = [
        ...this.design_img,
        ...this.web_templates_img,
        ...this.web_apps_img,
        ...this.logo_img,
      ];
    } else if (currentId == 1) {
      this.showImgfromService = this.design_img;
    } else if (currentId == 2) {
      this.showImgfromService = this.web_templates_img;
    } else if (currentId == 3) {
      this.showImgfromService = this.web_apps_img;
    } else if (currentId == 4) {
      this.showImgfromService = this.logo_img;
    }
  }
}
