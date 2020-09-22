import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NavegatorService } from '../services/navegator.service';
import { Navegators } from '../../shared/enums/navegators.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() hideBottomBar: boolean = false;
  @Input() enableSticky: boolean = false;
  @Output() size: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('header', { static: true }) public header: ElementRef<
    HTMLDivElement
  >;
  public isActive: boolean = false;
  public bannerClicked: boolean = true;
  public aboutmeClicked: boolean = false;
  public experienceClicked: boolean = false;
  public projectsClicked: boolean = false;
  public blogsClicked: boolean = false;
  public resumeClicked: boolean = false;

  constructor(private nav: NavegatorService) {}

  ngOnInit(): void {
    this.size.emit(this.header.nativeElement.offsetHeight);
    this.nav.getObservableColor().subscribe((nav) => this.changeColor(nav));
  }

  changeStateToFalse(): void {
    this.aboutmeClicked = false;
    this.bannerClicked = false;
    this.blogsClicked = false;
    this.experienceClicked = false;
    this.projectsClicked = false;
    this.resumeClicked = false;
  }

  moveTo(type: number) {
    switch (type) {
      case 1:
        this.changeColor(Navegators.BANNER);
        this.nav.moveTo(Navegators.BANNER);
        break;
      case 2:
        this.changeColor(Navegators.ABOUTME);
        this.nav.moveTo(Navegators.ABOUTME);
        break;
      case 3:
        this.changeColor(Navegators.EXPERIENCE);
        this.nav.moveTo(Navegators.EXPERIENCE);
        break;
      case 4:
        this.changeColor(Navegators.PROJECTS);
        this.nav.moveTo(Navegators.PROJECTS);
        break;
      case 5:
        this.changeColor(Navegators.BLOGS);
        this.nav.moveTo(Navegators.BLOGS);
        break;
      case 6:
        this.changeColor(Navegators.RESUME);
        this.nav.moveTo(Navegators.RESUME);
        break;
    }
  }

  changeColor(nav: Navegators) {
    switch (nav) {
      case 1:
        this.changeStateToFalse();
        this.bannerClicked = true;
        break;
      case 2:
        this.changeStateToFalse();
        this.aboutmeClicked = true;
        break;
      case 3:
        this.changeStateToFalse();
        this.experienceClicked = true;
        break;
      case 4:
        this.changeStateToFalse();
        this.projectsClicked = true;
        break;
      case 5:
        this.changeStateToFalse();
        this.blogsClicked = true;
        break;
      case 6:
        this.changeStateToFalse();
        this.resumeClicked = true;
        break;
    }
  }
}
