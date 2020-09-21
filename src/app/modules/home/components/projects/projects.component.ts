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
import { NavegatorService } from '../../../../core/services/navegator.service';
import { Navegators } from '../../../../shared/enums/navegators.enum';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('projects', { static: true }) public projects: ElementRef<
    HTMLDivElement
  >;
  @Output() size: EventEmitter<number> = new EventEmitter<number>();
  @Input() headerSize: number = 0;
  constructor(private nav: NavegatorService) {}

  ngOnInit(): void {
    this.nav.getObservable().subscribe((to) => {
      if (to === Navegators.PROJECTS) {
        this.moveToProjects();
      }
    });
  }

  ngAfterViewInit() {
    this.size.emit(this.projects.nativeElement.offsetHeight);
  }

  moveToProjects(): void {
    this.projects.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }
}
