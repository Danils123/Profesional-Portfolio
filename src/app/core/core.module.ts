import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AngularStickyThingsModule } from '@w11k/angular-sticky-things';
import { PreloadingComponent } from './preloading/preloading.component';
import { COREROUTES } from './core.routes';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PreloadingComponent],
  imports: [
    RouterModule,
    CommonModule,
    RouterModule.forRoot(COREROUTES),
    AngularStickyThingsModule,
  ],
  exports: [HeaderComponent, FooterComponent, PreloadingComponent],
})
export class CoreModule {}
