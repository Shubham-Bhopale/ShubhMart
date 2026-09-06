import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../services/product';
import { ApiResponseModel } from '../../models/api.response.models';
import { Icategory, Iproduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  productList = signal<Iproduct[]>([]);
  categoryList = signal<Icategory[]>([]);
  activeCategoryId = signal<number | null>(null);
  productsrv = inject(Product);
  ngOnInit(): void {
    this.getallProducts();
    this.getallCategories();
  }

  getallProducts() {
    this.productsrv.getAllProducts().subscribe({
      next: (res: ApiResponseModel) => {
        this.productList.set(res.data);
        console.log(this.productList);
      }
    });
    this.activeCategoryId.set(null);
  }

  getallCategories() {
    this.productsrv.getAllCategories().subscribe({
      next: (res: ApiResponseModel) => {
        this.categoryList.set(res.data);
      }
    })
  }

  getProductsByCategory(categoryId: number) {
    this.productsrv.getProductByID(categoryId).subscribe({
      next: (res: ApiResponseModel) => {
        this.productList.set(res.data);
      }
    });
    this.activeCategoryId.set(categoryId);

  }
}
