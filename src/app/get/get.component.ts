import { Component } from '@angular/core';
import { OrderService } from '../Service/order.service';
import { Order } from '../Model/Order';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {
  id:number=0;
  order :any;
 // retrievedOrder: Order = new Order;
 //retrievedOrder: Order | undefined;
 retrievedOrder!: Order;

  constructor(private orderservice:OrderService){}
 ngOnInit():void{}
 getOrderById():void{
  this.orderservice.getOrderById(this.id).subscribe(
    (order)=>{
      this.order=order;
       console.log(this.order);
    },
    (error)=>{
      console.log('error retrieving order:',error);
    }
  );
  this.retrievedOrder=this.order;

 }

}
