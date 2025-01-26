import { Output, EventEmitter, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  @Output() productCreated = new EventEmitter();

  newProduct = {
    name: '',
    description: '',
    price: 0,
    image: ''
  };

  addProduct() {
    this.productCreated.emit(this.newProduct);
    console.log('Nuevo producto:', this.newProduct);
  }
}
