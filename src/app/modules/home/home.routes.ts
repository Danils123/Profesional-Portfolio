import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/main/home.component';

export const HOMEROUTES: Routes = [{ path: 'home', component: HomeComponent }];
