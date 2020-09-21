import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/main/home.component';
import { DetailComponent } from './components/projects/detail/detail.component';

export const HOMEROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'project/detail/:id', component: DetailComponent },
];
