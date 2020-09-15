import { AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavegatorService } from '../../../../core/services/navegator.service';
import { Navegators } from '../../../../shared/enums/navegators.enum';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  @ViewChild('experience', { static: true }) public experience: ElementRef<
    HTMLDivElement
  >;
  @Output() size: EventEmitter<number> = new EventEmitter<number>();
  constructor(private nav: NavegatorService) {}

  ngOnInit(): void {
    this.nav.getObservable().subscribe((to) => {
      if (to === Navegators.EXPERIENCE) {
        this.moveToExperience();
      }
    });
  }
  ngAfterViewInit() {
    this.size.emit(this.experience.nativeElement.offsetHeight);
  }

  moveToExperience(): void {
    this.experience.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }
}
