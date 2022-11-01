import { Router } from '@angular/router';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  addProductForm! : FormGroup; //Primero creamos una variable para tener un formulario reactivo

  isSubmit: boolean = false;

  id:string = "";

  constructor(private formBuilder : FormBuilder, private productService : ProductsService, private router : Router) { } //Segundo paso declaramos el FormBuilder

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({  //Una vez importado el FormModule creamos el formulario
      img: ["", Validators.required],
      name: ["", Validators.required],      //Creamos la estructura del formulario
      description : ["", Validators.required],
      price : [10, Validators.required]
    })
  }

  submit() {
    console.log(this.addProductForm.value);
    console.log(this.addProductForm);
    this.isSubmit = true;
    if(this.addProductForm.valid) { //Si el formulario es válido
      if(this.id == "") {
        const newProduct:any = {
          img : this.addProductForm.get("img")?.value,
          name : this.addProductForm.get("name")?.value,
          description : this.addProductForm.get("description")?.value,
          price : this.addProductForm.get("price")?.value,
        }
        this.productService.addProduct(newProduct).subscribe();
      } else {
        const editProduct: any= {
          id: this.id,
          name: this.addProductForm.get('name')?.value,
          price: this.addProductForm.get('price')?.value,
          description: this.addProductForm.get('description')?.value,
          stars: this.addProductForm.get('stars')?.value,
          image: this.addProductForm.get('image')?.value,
        }
        this.productService.editProduct(editProduct).subscribe();
        this.id = '';
      }
      
      
      this.addProductForm.reset(); //Para que se resetee el formulario.
      this.isSubmit = false;
      this.router.navigate(["/products"]); //Redirecciona a la página
    }
  }


}
