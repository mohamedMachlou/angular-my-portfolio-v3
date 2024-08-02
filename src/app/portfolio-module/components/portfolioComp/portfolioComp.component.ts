import { ShowPotfolioImgService } from './../../services/show-potfolio-img.service';
import { ManageListsService } from './../../services/manage-lists.service';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'portfolioComp',
  templateUrl: './portfolioComp.component.html',
  styleUrl: './portfolioComp.component.css',
})
export class PortfolioComponent implements OnInit {
  //
  imgToShow: any[] = [];
  //
  prevImg = signal<string>('');
  mainImg = signal<string>('');
  nextImg = signal<string>('');

  //
  // prevImgIndex: number = 0;
  mainImgIndex: number = 0;
  // nextImgIndex: number = 0;

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
    if (this.imgToShow.length == 1) {
      this.mainImgIndex = 0;
    } else {
      this.mainImgIndex = 1;
    }
    this.slider();
  }

  //
  nextImage() {
    if (this.mainImgIndex < this.imgToShow.length - 1) {
      this.mainImgIndex++;
      console.log('mainImgIndex : ', this.mainImgIndex);
      console.log('imgToShow.length : ', this.imgToShow.length);
    }
    this.slider();
  }
  //
  prevImage() {
    if (this.mainImgIndex >= 1) {
      this.mainImgIndex--;
      console.log('mainImgIndex : ', this.mainImgIndex);
      console.log('imgToShow.length : ', this.imgToShow.length);
    }
    this.slider();
  }

  //// Slider
  slider() {
    this.prevImg.set(this.imgToShow[this.mainImgIndex - 1]);
    this.mainImg.set(this.imgToShow[this.mainImgIndex]);
    this.nextImg.set(this.imgToShow[this.mainImgIndex + 1]);
  }

  ngOnInit(): void {
    this.setId(0);
    this.getImages();
    this.slider();
  }
}
