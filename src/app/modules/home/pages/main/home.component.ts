import { DOCUMENT } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
} from '@angular/core';
import { WINDOW } from '../../../../core/services/scroll.service';
import { NavegatorService } from '../../../../core/services/navegator.service';
import { Navegators } from 'src/app/shared/enums/navegators.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterContentInit {
  public enableSticky: boolean = false;
  public bannerSize: number = 0;
  public aboutmeSize: number = 0;
  public projectsSize: number = 0;
  public experienceSize: number = 0;
  public contactmeSize: number = 0;
  public hideBar: boolean = false;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window,
    private nav: NavegatorService
  ) {}

  ngAfterContentInit(): void {}

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

    if (number >= 0 && number < this.bannerSize) {
      this.nav.changeColor(Navegators.BANNER);
    } else if (number >= this.bannerSize && number < this.getAboutmeSize()) {
      this.nav.changeColor(Navegators.ABOUTME);
    } else if (
      number >= this.getAboutmeSize() &&
      number < this.getProjectsSize()
    ) {
      this.nav.changeColor(Navegators.PROJECTS);
    } else if (
      number >= this.getProjectsSize() &&
      number < this.getExperienceSize()
    ) {
      this.nav.changeColor(Navegators.EXPERIENCE);
    } else {
      this.enableSticky = false;
      this.nav.changeColor(Navegators.RESUME);
    }
  }

  getAboutmeSize(): number {
    return this.bannerSize + this.aboutmeSize;
  }
  getProjectsSize(): number {
    return this.bannerSize + this.aboutmeSize + this.projectsSize;
  }
  getExperienceSize(): number {
    return (
      this.bannerSize +
      this.aboutmeSize +
      this.projectsSize +
      this.experienceSize
    );
  }

  getContactmeSize(): number {
    return (
      this.bannerSize +
      this.aboutmeSize +
      this.projectsSize +
      this.experienceSize +
      this.contactmeSize
    );
  }
}
