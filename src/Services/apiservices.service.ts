import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIServicesService {
  // createProduct(payload: {
  //   tags: string[];
  //   images: string[];
  //   reviews: { user: string; rating: number; comment: string; date: Date }[];
  //   id: string;
  //   title: string;
  //   description: string;
  //   category: string;
  //   price: number;
  //   discountPercentage: number;
  //   rating: number;
  //   stock: number;
  //   brand: string;
  //   sku: string;
  //   weight: number;
  //   features: string[];
  //   dimensions: { width: number; height: number; depth: number };
  //   warrantyInformation: string;
  //   shippingInformation: string;
  //   availabilityStatus: string;
  //   returnPolicy: string;
  //   minimumOrderQuantity: number;
  //   meta: { createdAt: Date; updatedAt: Date; barcode: string; qrCode: string };
  //   thumbnail: string;
  // }) {
  //   throw new Error('Method not implemented.');
  // }
  private apiUrl = 'http://localhost:4000/api/v1/Product';
  constructor(private http: HttpClient) {} // Use HttpClient here
  createProduct(product: any) {
    return this.http.post(this.apiUrl, product).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error creating product:', error);
        return throwError(error);
      })
    );
  }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
