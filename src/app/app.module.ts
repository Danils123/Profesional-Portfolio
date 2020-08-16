import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { UnderconstructionModule } from './modules/underconstruction/underconstruction.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HomeModule,
    UnderconstructionModule,
    BrowserModule,
    RouterModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
