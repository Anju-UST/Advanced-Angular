import { Component } from '@angular/core';
import { Cart } from '../Model/Cart';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-cadd',
  templateUrl: './cadd.component.html',
  styleUrls: ['./cadd.component.css']
})
export class CaddComponent {
cart: Cart=new Cart();
message!:string;
constructor(private cartservice: CartService){}

ngOnInit():void{}
onSubmit() {
this.add();
console.log(this.cart);
}

add(){
  this.cartservice.addtoCart(this.cart).subscribe(
    (response) => {
      this.message = response as string;
      console.log('Product', this.message);
    },
   (error)=>console.log(error));
  }
}
  

