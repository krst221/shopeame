import { product } from './../../shared/models/product.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  productRegisterForm!: FormGroup;

  isSubmit: boolean = false;

  id: string = '';

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private router: Router) { }

  submitProduct() {
    this.isSubmit = true;
    if(this.productRegisterForm.valid){
      if(this.id === ''){
        const newproduct: product = {
          id: '',
          name: this.productRegisterForm.get('name')?.value,
          price: this.productRegisterForm.get('price')?.value,
          description: this.productRegisterForm.get('description')?.value,
          stars: this.productRegisterForm.get('stars')?.value,
          image: this.productRegisterForm.get('image')?.value,
        }
        this.productsService.addProduct(newproduct).subscribe();
      }

      else {
        const modproduct: product = {
          id: this.id,
          name: this.productRegisterForm.get('name')?.value,
          price: this.productRegisterForm.get('price')?.value,
          description: this.productRegisterForm.get('description')?.value,
          stars: this.productRegisterForm.get('stars')?.value,
          image: this.productRegisterForm.get('image')?.value,
        }
        this.productsService.editProduct(modproduct).subscribe();
        this.id = '';
      }

      this.productRegisterForm.reset();
      this.isSubmit = false;
      this.router.navigate(['/products'])
    }
  }

  ngOnInit(): void {
    this.id = this.productsService.product.id;
    this.productRegisterForm = this.formBuilder.group({
      name: [this.productsService.product.name, [Validators.required]],
      price: [this.productsService.product.price, [Validators.required, Validators.pattern(/[0-9]/)]],
      description: [this.productsService.product.description, [Validators.required]],
      stars: [this.productsService.product.stars, [Validators.required, Validators.pattern(/^[0-5]$/)]],
      image: [this.productsService.product.image, [Validators.required]],
    })
    this.productsService.product.id = '';
    this.productsService.product.name = '';
    this.productsService.product.price = '';
    this.productsService.product.description = '';
    this.productsService.product.stars = undefined;
    this.productsService.product.image = '';

  }

}
