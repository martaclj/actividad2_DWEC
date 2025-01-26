import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiProducts = 'https://jsonblob.com/api/1333016573748895744';

  constructor() { }

  async getProducts(): Promise<any[]> {
    try {
      const response = await fetch(this.apiProducts);
      if (!response.ok) {
        console.error('Error:', response.statusText);
        return [];
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
    // ejemplo de imagen para probar: https://cdn.pixabay.com/photo/2015/09/09/02/03/clock-931027_1280.jpg
    // const response = await fetch(this.apiProducts);
    // const data = await response.json();
    // return data;
  }
}
