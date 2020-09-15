import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Navegators } from '../../../../shared/enums/navegators.enum';
import { NavegatorService } from '../../../../core/services/navegator.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent implements OnInit, AfterViewInit {
  @ViewChild('aboutme', { static: true }) public aboutme: ElementRef<
    HTMLDivElement
  >;
  @Output() size: EventEmitter<number> = new EventEmitter<number>();
  constructor(private nav: NavegatorService) {}

  ngOnInit(): void {
    this.nav.getObservable().subscribe((to) => {
      if (to === Navegators.ABOUTME) {
        this.moveToAboutme();
      }
    });
  }

  ngAfterViewInit() {
    this.size.emit(this.aboutme.nativeElement.offsetHeight);
  }

  moveToAboutme(): void {
    this.aboutme.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }
}
