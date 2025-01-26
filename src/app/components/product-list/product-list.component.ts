import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
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
    console.log('Produs ok:', this.products);
  }
// ejemplo img reloj: https://cdn.pixabay.com/photo/2015/09/09/02/03/clock-931027_1280.jpg
  addProduct(product: any): void {
    this.products.push(product);
  }

  deleteProduct(index: number): void {
    this.products.splice(index, 1);
  }
}
