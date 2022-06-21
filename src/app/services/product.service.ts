import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productUrl  } from 'src/app/config/api';

// const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products : Product[] = [
  //   new Product(1, 'Product 1', "Lorem Ipsum 1" , 200),
  //   new Product(2, 'Product 2', "Lorem Ipsum 2" , 300),
  //   new Product(3, 'Product 3', "Lorem Ipsum 3" , 400),
  //   new Product(4, 'Product 4', "Lorem Ipsum 4" , 500),
  //   new Product(5, 'Product 5', "Lorem Ipsum 5" , 600),
  //   new Product(6, 'Product 6', "Lorem Ipsum 6" , 700),
  // ]
  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(productUrl);
  }
}
