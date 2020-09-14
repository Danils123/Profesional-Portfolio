import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-preloading',
  templateUrl: './preloading.component.html',
  styleUrls: ['./preloading.component.scss'],
})
export class PreloadingComponent implements OnInit {
  public isDay: boolean = true;
  public programmerBlue: boolean = true;
  public finishAnimation: boolean = false;
  public classesMoon: string = ' animate__bounceInUp animate__slow';
  public classesSun: string = ' animate__bounceInUp animate__slow';
  public hiddenClass: string = '';
  public loadingText: string;
  public loadingTexts: string[] = [
    'Assets',
    'Images',
    'Files',
    'How to conquer the world',
    'Projects',
    'How to cook potatoes',
    'Css files',
    'Html files',
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.classesMoon = ' animate__bounceOutDown animate__slow';
      this.hiddenClass = ' animate__fadeOut animate__slow animate__delay-1s';
    }, 6000);

    setTimeout(() => {
      this.router.navigate(['home'], { relativeTo: this.route });
    }, 7500);

    setTimeout(() => {
      this.classesSun = ' animate__bounceOutDown animate__slow';
      setTimeout(() => {
        this.isDay = !this.isDay;
        setTimeout(() => {
          this.programmerBlue = !this.programmerBlue;
        }, 500);
      }, 1000);
    }, 2000);
    this.replaceTextLoading();
  }

  replaceTextLoading() {
    this.loadingTexts.forEach((item, index) => {
      setTimeout(() => {
        this.loadingText = item;
      }, index * 700);
    });
  }
}
