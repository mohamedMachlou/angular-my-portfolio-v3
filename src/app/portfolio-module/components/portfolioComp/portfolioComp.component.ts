import { ShowPotfolioImgService } from './../../services/show-potfolio-img.service';
import { ManageListsService } from './../../services/manage-lists.service';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'portfolioComp',
  templateUrl: './portfolioComp.component.html',
  styleUrl: './portfolioComp.component.css',
})
export class PortfolioComponent implements OnInit {
  imgToShow: any[] = [];
  // Injections Services
  manageListsService = inject(ManageListsService);
  showPotfolioImgService = inject(ShowPotfolioImgService);

  // set current ID  method
  setId(id: number) {
    this.manageListsService.manageListById(id);
  }

  /// Get Images To show
  getImages() {
    this.showPotfolioImgService.showImages();
    this.imgToShow = this.showPotfolioImgService.showImgfromService;
  }

  // //show Design Images
  // show_design_img() {
  //   this.showImg = [...this.design_img];
  // }
  // //show Web Templates Images
  // show_web_tem_img() {
  //   this.showImg = [...this.web_templates_img];
  // }
  // //show  Web Apps Images
  // show_web_apps_img() {
  //   this.showImg = [...this.web_apps_img];
  // }
  // //show Logo Images
  // show_logo_img() {
  //   this.showImg = [...this.logo_img];
  // }

  ngOnInit(): void {
    this.setId(0);
    this.getImages();
  }
}
