import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { ProductFormReactiveComponent } from './components/product-form-reactive/product-form-reactive.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Iproduct } from './interfaces/iproduct';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductFormReactiveComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'actividad2_DWEC';

  constructor(private productService: ProductService) {}

  async ngOnInit(): Promise<void> {
    await this.productService.loadProducts();
  }

  addProduct(product: Iproduct): void {
    this.productService.addProduct(product);
  }
}
