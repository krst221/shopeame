import { product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  url: string = 'https://shopeame-backend.vercel.app/products';

  product: product = {
    id: '',
    name: '',
    price: '',
    description: '',
    image: '',
  }

  products?: product[];

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.url);
  }

  addProduct(newproduct: product){
    return this.http.post(this.url, newproduct);
  }

  getProductById(id: string){
    return this.http.get(this.url + '/' + id);
  }

  editProduct(newproduct: product){
    return this.http.put(this.url + '/' + newproduct.id, newproduct);
  }

  deleteProduct(id: string){
    return this.http.delete(this.url + '/' + id);
  }
}
