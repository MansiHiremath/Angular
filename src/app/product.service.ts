import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from './product';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'  //no need to register service wth app module
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts():Observable<Product[]>{
 return this.http.get<Product[]>('../assets/data/product1.json').pipe(catchError(this.errorHandler));
//return this.http.get<Product[]>('http://localhost:8181/products')
  }
  addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>('http://localhost:8181/products/add',product).pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message ||'Server Error')
  }
}
