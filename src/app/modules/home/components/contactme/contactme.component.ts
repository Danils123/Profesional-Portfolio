import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NavegatorService } from '../../../../core/services/navegator.service';
import { Navegators } from '../../../../shared/enums/navegators.enum';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss'],
})
export class ContactmeComponent implements OnInit, AfterViewInit {
  @ViewChild('resume', { static: true }) public resume: ElementRef<
    HTMLDivElement
  >;
  @Output() size: EventEmitter<number> = new EventEmitter<number>();
  constructor(private nav: NavegatorService) {}

  ngOnInit(): void {
    this.nav.getObservable().subscribe((to) => {
      if (to === Navegators.RESUME) {
        this.moveToResume();
      }
    });
  }

  ngAfterViewInit() {
    this.size.emit(this.resume.nativeElement.offsetHeight);
  }

  public moveToResume(): void {
    this.resume.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }
}
