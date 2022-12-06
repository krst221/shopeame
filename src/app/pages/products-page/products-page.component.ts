import { Router } from '@angular/router';
import { product } from './../../shared/models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: product[] = [];

  constructor(private productsService: ProductsService, private router: Router) { }

  edit(id: string): void {
    this.productsService.getProductById(id).subscribe((res: any) => {
      this.productsService.product = res;
      this.router.navigate(['/edit']);
    });
  }

  delete(product: product): void {
    this.productsService.deleteProduct(product.id).subscribe();
    this.products = this.products.filter(p => p !== product);
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.productsService.products = products;
      this.products = products;}
    );

  }
}
