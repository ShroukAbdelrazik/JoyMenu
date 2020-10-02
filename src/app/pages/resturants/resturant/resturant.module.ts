import { ResturantComponent } from './resturant.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [{ path: '', component: ResturantComponent }];

@NgModule({
  declarations: [ResturantComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ResturantModule {}
