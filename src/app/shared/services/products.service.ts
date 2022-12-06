import { product } from './../models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  private url = 'localhost:3000/products';

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  product: product = {
    id: '',
    name: '',
    price: 0,
    description: '',
    image: '',
  }

  products: product[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.url).pipe(
      catchError(this.handleError<product[]>('getProducts', []))
    );
  }

  addProduct(newproduct: product): Observable<product>{
    return this.http.post<product>(this.url, newproduct, this.httpOptions).pipe(
      catchError(this.handleError<any>('addProduct'))
    );
  }

  getProductById(id: string): Observable<product>{
    return this.http.get<product>(this.url + '/' + id).pipe(
      catchError(this.handleError<product>(`getProductById id=${id}`))
    );
  }

  editProduct(newproduct: product): Observable<any>{
    return this.http.put(this.url + '/' + newproduct.id, newproduct, this.httpOptions).pipe(
      catchError(this.handleError<any>('editProduct'))
    );
  }

  deleteProduct(id: string): Observable<product>{
    return this.http.delete<product>(this.url + '/' + id, this.httpOptions).pipe(
      catchError(this.handleError<product>('deleteProduct'))
    );
  }
}
