import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { WINDOW } from '../../../../core/services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public enableSticky: boolean = false;
  public bannerSize: number = 0;
  public hideBar: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window
  ) {}

  ngOnInit(): void {}

  setBannerSize(size: number) {
    this.bannerSize = size;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number =
      this.window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;

    if (number > this.bannerSize) {
      this.enableSticky = true;
    } else {
      this.enableSticky = false;
    }

    if (number > 70) {
      this.hideBar = true;
    } else {
      this.hideBar = false;
    }
  }
}
