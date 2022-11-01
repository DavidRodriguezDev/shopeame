import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  @Input() product: any = {
    image: '',
    name: '',
    price: '',
    description: '',
  
  }
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get("http://localhost:3000/products")
  }


  addProduct(newProduct:any) {
    return this.http.post("http://localhost:3000/products", newProduct)
  }

  getProductById(id: string){
    return this.http.get("http://localhost:3000/products" + '/' + id);
  }

  editProduct(newproduct: any){
    return this.http.put("http://localhost:3000/products"+ '/' + newproduct.id, newproduct);
  }

  deleteProduct(id: string){
    return this.http.delete("http://localhost:3000/products" + '/' + id);
  }
}












