import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Iproduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-product-form-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form-reactive.component.html',
  styleUrls: ['./product-form-reactive.component.css']
})
export class ProductFormReactiveComponent {
  @Output() productCreated = new EventEmitter<Iproduct>();

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    price: new FormControl(0, [Validators.required, Validators.min(1)]),
    image: new FormControl('', [Validators.required])
  });

  addProduct(): void {
    if (this.productForm.valid) {
      const newProduct: Iproduct = this.productForm.value as Iproduct;
      this.productCreated.emit(newProduct);
      console.log('Nuevo producto ok:', newProduct);

      this.productForm.reset({
        name: '',
        description: '',
        price: 0,
        image: ''
      });
    } else {
      console.error('Formulario inválido');
    }
  }
}
