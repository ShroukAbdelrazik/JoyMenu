import { AppRoutingModule } from '../../../app-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, ViewComponent],
  exports: [HeaderComponent, FooterComponent, ViewComponent],
  entryComponents: [HeaderComponent, FooterComponent, ViewComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [TranslateService],
})
export class LayoutModule {}
// for translation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
