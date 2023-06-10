import { Component } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../Service/Product.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent {
  constructor(private service:ProductService)
  {
    
  }
  products: Product[]=[];
  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts():any{
    this.service.getProducts().subscribe((products)=>{
    this.products = products;
  });

  }
}
