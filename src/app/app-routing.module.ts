import { ViewComponent } from './shared/components/layout/view/view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: ViewComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'resturants',
        loadChildren: () =>
          import('./pages/resturants/resturants.module').then(
            (m) => m.ResturantsModule
          ),
      },
      {
        path: 'offers',
        loadChildren: () =>
          import('./pages/offers/offers/offers.module').then(
            (m) => m.OffersModule
          ),
      },
      {
        path: 'becomePartner',
        loadChildren: () =>
          import('./pages/partner/partner/partner.module').then(
            (m) => m.PartnerModule
          ),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./pages/auth/account/account.module').then(
            (m) => m.AccountModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./pages/cart/cart/cart.module').then((m) => m.CartModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
