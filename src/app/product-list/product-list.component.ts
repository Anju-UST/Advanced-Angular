import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Model/product';
import { ProductserviceService } from '../Service/productservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Product[]=[];
  constructor(private productService:ProductserviceService,private router: Router){}
  ngOnInit(): void {
    this.getProductall();
  }
  private getProductall(){
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
  updateProducted(id:number){
    this.router.navigate(['update', id]);
  }
  deleteProducted(id: number){
    this.productService.deleteProduct(id).subscribe( (data: any) => {
      console.log(data);
      this.getProductall();
    })
  }
  }
