import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from './shared/modules/shared.module';
import { ViewComponent } from './shared/components/layout/view/view.component';
import { LayoutModule } from './shared/components/layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, BrowserAnimationsModule],
  providers: [TranslateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
