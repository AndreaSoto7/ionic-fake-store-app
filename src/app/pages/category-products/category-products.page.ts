import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeStoreService } from '../../services/fake-store.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.page.html',
  styleUrls: ['./category-products.page.scss'],
})
export class CategoryProductsPage implements OnInit {
  category: string = '';
  products: any[] = [];

  constructor(private route: ActivatedRoute, private fakeStoreService: FakeStoreService) {}

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category') || '';
    this.fakeStoreService.getProductsByCategory(this.category).subscribe(data => {
      this.products = data;
    });
  }
}
