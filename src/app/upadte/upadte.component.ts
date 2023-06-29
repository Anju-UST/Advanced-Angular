import { Component } from '@angular/core';
import { OrderService } from 'src/Service/order.service';

@Component({
  selector: 'app-upadte',
  templateUrl: './upadte.component.html',
  styleUrls: ['./upadte.component.css']
})
export class UpadteComponent {
  id:number=0;
  order:any;
  constructor(private orderservice:OrderService){}
  ngOnInit(){}

  retrieveOrderById(): void {
    this.orderservice.getOrderById(this.id).subscribe(
      (order) => {
        this.order=order;
      },
      (error) => {
        console.log('Error retrieving order:', error);
      }
    );
  }

  saveUpdatedOrder(): void {
    this.orderservice.updateOrder(this.order).subscribe(
      (response) => {
        console.log('Order updated successfully');
      },
      (error) => {
        console.log('Error updating order:', error);
      }
    );
  }

}
