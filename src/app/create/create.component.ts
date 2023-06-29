import { Component } from '@angular/core';
import { Order } from '../model/Order';
import { OrderService } from '../../Service/order.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  order: Order=new Order();
  message!: string;
  constructor(private orderservice:OrderService){}

  ngOnInit():void{}
onSubmit() {
  this.placeOrder();
    console.log(this.order);
}
placeOrder(){
  this.orderservice.placeOrder(this.order).subscribe(
  (response) => {
    this.message = response as string;
    console.log('Order placed successfully with id', this.message);
  },
 (error)=>console.log(error));
  
 

}


}
