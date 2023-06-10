import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/Product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  productId: number = 0;
  product: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  retrieveProductById(): void {
    this.productService.getProductById(this.productId).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        console.log('Error retrieving product:', error);
      }
    );
  }

  DeleteProduct(): void {
    this.productService.deleteProduct(this.productId).subscribe(
      (response) => {
        console.log('Product deleted successfully');
      },
      (error) => {
        console.log('Error deleting product:', error);
      }
    );
  }
}