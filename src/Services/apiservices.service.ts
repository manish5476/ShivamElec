import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIServicesService {
  private apiUrl = 'http://localhost:4000/api/v1/Product';
  // private apiUrl="https://raw.githubusercontent.com/manish5476/shivamelecdata/refs/heads/main/product.json"
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
