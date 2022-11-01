import { Router } from '@angular/router';
import { ProductsService } from './../../shared/services/products.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products : any;

  constructor(private productsService: ProductsService, private router : Router) { }

  ngOnInit(): void {

    this.productsService.getProducts().subscribe( (res:any )=> {
      console.log(res);
      
      this.products = res;
    })

   
  }
  
  editProduct(id: string){
    this.productsService.getProductById(id).subscribe((res: any) => {
      this.productsService.product = res;
      this.router.navigate(['/management']);
    });
  }

  deleteProduct (id: string) {
    this.productsService.deleteProduct(id).subscribe((res: any) => {
      this.ngOnInit();
    });
  }


}
