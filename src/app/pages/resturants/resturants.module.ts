import { ResturantsComponent } from './resturants.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const routes: Routes = [
  {
    path: '',
    component: ResturantsComponent,
    children: [
      {
        path: 'all',
        loadChildren: () =>
          import('./all-resturants/all-resturants.module').then(
            (m) => m.AllResturantsModule
          ),
      },
      {
        path: 'resturant/:id',
        loadChildren: () =>
          import('./resturant/resturant.module').then((m) => m.ResturantModule),
      },
    ],
  },
];

@NgModule({
  declarations: [ResturantsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    TranslateModule.forChild({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class ResturantsModule {}
// for translation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
