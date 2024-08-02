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
  prevImg = signal<string>('');
  mainImg = signal<string>('');
  nextImg = signal<string>('');
  // Injections Services
  manageListsService = inject(ManageListsService);
  showPotfolioImgService = inject(ShowPotfolioImgService);

  // set current ID method
  setId(id: number) {
    this.manageListsService.manageListById(id);
  }

  /// Get Images To show
  getImages() {
    this.showPotfolioImgService.showImages();
    this.imgToShow = this.showPotfolioImgService.showImgfromService;
  }

  //// Slider
  slider() {
    const slide = document.querySelectorAll('slide');
    console.log(slide);
    this.prevImg.set(this.imgToShow[0]);
    this.mainImg.set(this.imgToShow[1]);
    this.nextImg.set(this.imgToShow[2]);
  }

  ngOnInit(): void {
    this.setId(0);
    this.getImages();
    this.slider();
  }
}
