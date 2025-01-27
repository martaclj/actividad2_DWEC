import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiProducts = 'https://jsonblob.com/api/1333016573748895744';
  private products: Iproduct[] = [];

  constructor() {}

  async loadProducts(): Promise<void> {
    try {
      const response = await fetch(this.apiProducts);
      if (!response.ok) {
        console.error('Error al cargar productos:', response.statusText);
        return;
      }
      this.products = await response.json();
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  }

  getProducts(): Iproduct[] {
    return this.products;
  }

  addProduct(product: Iproduct): void {
    this.products.push(product);
  }

  deleteProduct(index: number): void {
    this.products.splice(index, 1);
  }
}
    // ejemplo de imagen para probar: https://cdn.pixabay.com/photo/2015/09/09/02/03/clock-931027_1280.jpg


