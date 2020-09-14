import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, AfterViewInit {
  @Input() hideBottomBar: boolean = false;
  @ViewChild('banner') banner: ElementRef;
  @Output() sizeBanner: EventEmitter<number> = new EventEmitter<number>();
  public titleA: string = '';
  public titleB: string = '';
  public subTitle: string = '';
  public textList = [
    'Hello, I’m',
    'Daniel Ramírez',
    'I’m a front end web developer',
  ];

  private timeBetweenCharacters = 90;

  constructor() {}

  ngAfterViewInit() {
    this.sizeBanner.emit(this.banner.nativeElement.offsetHeight);
  }

  activeAnimation() {
    this.titleA = '';
    this.titleB = '';
    this.subTitle = '';

    let time = 0;
    this.textList.forEach((text, index) => {
      setTimeout(() => this.typeWriter(text, index), time);
      if (index !== this.textList.length - 1) {
        time = this.textList[index + 1].length * this.timeBetweenCharacters;
      }
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activeAnimation();
    }, 1000);
  }

  typeWriter(text: string, type: number) {
    text.split('').forEach((char, index, array) => {
      setTimeout(() => {
        switch (type) {
          case 0:
            this.titleA = text.substring(0, index + 1);
            break;
          case 1:
            this.titleB = text.substring(0, index + 1);
            break;
          case 2:
            this.subTitle = text.substring(0, index + 1);
            break;
        }
      }, index * this.timeBetweenCharacters);
    });
  }
}
