import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/main/home.component';
import { RouterModule } from '@angular/router';
import { HOMEROUTES } from './home.routes';
import { BannerComponent } from './components/banner/banner.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactmeComponent } from './components/contactme/contactme.component';

@NgModule({
  declarations: [HomeComponent, BannerComponent, AboutmeComponent, ProjectsComponent, ExperienceComponent, ContactmeComponent],
  imports: [CommonModule, RouterModule.forRoot(HOMEROUTES)],
  exports: [RouterModule],
})
export class HomeModule {}
