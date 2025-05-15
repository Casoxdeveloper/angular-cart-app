import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { products } from '../data/product.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  getProducts():Product[]{
    return products;
  }



  // getProductById(id:number):Product | undefined{
  //   return products.find(product=>product.id===id);
  // }

  // addProduct(product:Product):void{
  //   products.push(product);
  // }




}




