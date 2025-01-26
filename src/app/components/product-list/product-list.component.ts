import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any[] = [];

  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    };

  async getProducts(): Promise<void> {
    this.products = await this.ProductService.getProducts();
  }

  addProduct(product: any): void {
    this.products.push(product);
  }
}
