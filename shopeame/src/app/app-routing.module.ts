import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ManagementComponent } from './pages/management/management.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path : "", component : HomePageComponent},
  {path : "products", component : ProductsComponent},
  {path : "products/:id", component : ProductDetailComponent},
  {path : "management", component : ManagementComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
