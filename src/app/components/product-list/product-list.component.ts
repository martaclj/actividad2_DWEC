import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../interfaces/iproduct';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Iproduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  deleteProduct(index: number): void {
    this.productService.deleteProduct(index);
  }
}

// ejemplo img reloj: https://cdn.pixabay.com/photo/2015/09/09/02/03/clock-931027_1280.jpg
// Antiguo addProduct
// addProduct(product: any): void {
  //   this.products.push(product);
  // }
