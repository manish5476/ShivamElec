import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserMasterComponent } from '../component/user-master/user-master.component';
import { ProductDetaiViewComponent } from '../component/product-detai-view/product-detai-view.component';
import { HomeComponent } from '../component/home/home.component';
import { ProductMasterComponent } from '../component/product-master/product-master.component';

// Define the routes
const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'user-master', component: UserMasterComponent },
  { path: 'product-detail', component: ProductDetaiViewComponent },
  { path: 'product-master', component: ProductMasterComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route (404 page, redirect to home)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Register the routes
  exports: [RouterModule],
})
export class AppRoutingModule {}
