import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../Model/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  addtoCart(cart:Cart):
    Observable<Object>{
      return this.http.post("http://localhost:9081/api/cart/items",cart);
  }

  getAll(){
    return this.http.get<Cart[]>("http://localhost:9081/api/cart/items");
  }

  deleteItem(id:number):
    Observable<Cart>{
      return this.http.delete<Cart>(`http://localhost:9081/api/remove/${id}`);
    }
    
}
