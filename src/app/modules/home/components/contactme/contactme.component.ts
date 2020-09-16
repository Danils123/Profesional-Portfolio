import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

import { NavegatorService } from '../../../../core/services/navegator.service';
import { Navegators } from '../../../../shared/enums/navegators.enum';
import { EmailService } from '../../../../core/services/email.service';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';

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
  public isSaving: boolean = false;
  public contactmeForm: FormGroup;
  constructor(
    private nav: NavegatorService,
    private formBuilder: FormBuilder,
    private es: EmailService,
    private snotifyService: SnotifyService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.nav.getObservable().subscribe((to) => {
      if (to === Navegators.RESUME) {
        this.moveToResume();
      }
    });
  }

  buildForm() {
    this.contactmeForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    this.size.emit(this.resume.nativeElement.offsetHeight);
  }

  sendMail() {
    this.isSaving = true;
    this.es.sendEmail(this.contactmeForm.value).subscribe((x) => {
      this.snotifyService.success(
        `the resume was sent`,
        `Thanks ${this.contactmeForm.get('name').value}`,
        {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          titleMaxLength: 40,
          position: SnotifyPosition.centerTop,
        }
      );
      this.buildForm();
      this.isSaving = false;
    });
  }

  public moveToResume(): void {
    this.resume.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }
}
