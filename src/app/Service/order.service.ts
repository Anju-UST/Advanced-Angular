import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Model/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) {}

  placeOrder(order:Order):
  Observable<Object>{
    return this.http.post("http://localhost:9091/order/placeorder",order);
    
  }
  
  getOrderById(id: number):
   Observable<Order> {
    return this.http.get<Order>(`http://localhost:9091/order/${id}`);
  }

  updateOrder(order:Order):
  Observable<object>{
    return this.http.put(`http://localhost:9091/order/update/${order.id}`,order);
  }
}
