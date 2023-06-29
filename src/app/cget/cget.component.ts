import { Component } from '@angular/core';
import { Cart } from '../Model/Cart';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-cget',
  templateUrl: './cget.component.html',
  styleUrls: ['./cget.component.css']
})
export class CgetComponent {
  constructor(private cartservice:CartService){}
carts:Cart[]=[];
ngOnInit(): void {
  this.carts=this.getProducts();
}


  getProducts():any{
    this.cartservice.getAll().subscribe((carts)=>{
    this.carts=carts;
  });
}
}
