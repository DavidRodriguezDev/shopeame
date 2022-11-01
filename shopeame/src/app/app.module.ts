import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsComponent } from './pages/products/products.component';
import { ManagementComponent } from './pages/management/management.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { PreviewComponent } from './components/preview/preview.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsComponent,
    ManagementComponent,
    HeaderComponent,
    FooterComponent,
    FormErrorsComponent,
    ProductDetailComponent,
    PreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Este no lo importa directamente
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
