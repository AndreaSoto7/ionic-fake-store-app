import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeStoreService } from '../../services/fake-store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private fakeStoreService: FakeStoreService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId !== null) { // Comprobación para asegurarse de que productId no es null
      this.fakeStoreService.getProductById(+productId).subscribe(data => {
        this.product = data;
      });
    } else {
      // Manejo del caso en que productId es null
      console.error('El ID del producto no está disponible');
      // Aquí puedes redirigir al usuario a otra página o mostrar un mensaje de error
    }
  }
}
