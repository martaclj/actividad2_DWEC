import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiProducts = 'http://jsonblob.com/api/1333016573748895744';

  constructor() { }

  async getProducts(): Promise<any[]> {
    const response = await fetch(this.apiProducts);
    const data = await response.json();
    return data;
  }
}
