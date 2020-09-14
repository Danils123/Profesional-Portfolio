import { Routes } from '@angular/router';
import { PreloadingComponent } from './preloading/preloading.component';

export const COREROUTES: Routes = [
  { path: '', component: PreloadingComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];
