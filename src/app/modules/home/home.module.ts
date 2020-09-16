import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/main/home.component';
import { RouterModule } from '@angular/router';
import { HOMEROUTES } from './home.routes';
import { BannerComponent } from './components/banner/banner.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { UnderconstructionModule } from '../underconstruction/underconstruction.module';
import { CoreModule } from '../../core/core.module';
import { AngularStickyThingsModule } from '@w11k/angular-sticky-things';
import { WINDOW_PROVIDERS } from '../../core/services/scroll.service';
import { GridComponent } from './components/projects/grid/grid.component';
import { CardComponent } from './components/projects/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutmeComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactmeComponent,
    GridComponent,
    CardComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    UnderconstructionModule,
    RouterModule.forRoot(HOMEROUTES),
    AngularStickyThingsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
  ],
  exports: [RouterModule],
  providers: [
    WINDOW_PROVIDERS,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
