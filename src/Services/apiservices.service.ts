import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export interface ProductFilter {
  modelCode?: string;
  modelName?: string;
  displayName?: string;
  ratingsAverage?: number;
  promotionPrice?: string;
  listPrice?: string;
}

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

  getProducts(
    filter?: ProductFilter,
    sort?: string,
    limit?: number,
    page?: number
  ): Observable<any> {
    const params: any = {};
    if (filter && Object.keys(filter).length > 0) {
      params.filter = JSON.stringify(filter);
    }
    if (sort) {
      params.sort = sort;
    }
    if (limit) {
      params.limit = limit.toString();
    }
    if (page) {
      params.page = page.toString();
    }

    return this.http.get(this.apiUrl, { params }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching products:', error);
        return throwError(error);
      })
    );
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { catchError, Observable, throwError } from 'rxjs';
// export interface ProductFilter {
//   modelCode?: string;
//   modelName?: string;
//   displayName?: string;
//   ratingsAverage?: number;
//   promotionPrice?: string;
//   listPrice?: string;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class APIServicesService {
//   private apiUrl = 'http://localhost:4000/api/v1/Product';
//   // private apiUrl="https://raw.githubusercontent.com/manish5476/shivamelecdata/refs/heads/main/product.json"
//   constructor(private http: HttpClient) {} // Use HttpClient here
//   createProduct(product: any) {
//     return this.http.post(this.apiUrl, product).pipe(
//       catchError((error: HttpErrorResponse) => {
//         console.error('Error creating product:', error);
//         return throwError(error);
//       })
//     );
//   }

//   getProducts(
//     filter?: any,
//     sort?: string,
//     limit?: number,
//     page?: number
//   ): Observable<any> {
//     const params: any = {};
//     if (filter) params.filter = JSON.stringify(filter);
//     if (sort) params.sort = sort;
//     if (limit) params.limit = limit;
//     if (page) params.page = page;
//     return this.http.get(this.apiUrl, { params });
//   }

//   getProductById(id: string): Observable<any> {
//     return this.http.get(`${this.apiUrl}/${id}`);
//   }
// }
