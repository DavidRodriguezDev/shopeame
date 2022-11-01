import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id!: any;
  product!: any;

  constructor(private route : ActivatedRoute, private productsService : ProductsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));

      this.product = this.productsService.getProductById(this.id)
    });
  }
}
