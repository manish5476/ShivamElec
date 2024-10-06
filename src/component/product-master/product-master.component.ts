import { Component, HostListener } from '@angular/core';
import { APIServicesService } from '../../Services/apiservices.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  features: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: Date;
    updatedAt: Date;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
  reviews: Array<{ user: string; rating: number; comment: string; date: Date }>;
}

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.scss'],
})
export class ProductMasterComponent {
  product: Product = {
    id: '',
    title: '',
    description: '',
    category: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    tags: [''],
    brand: '',
    sku: '',
    weight: 0,
    features: [''],
    dimensions: {
      width: 0,
      height: 0,
      depth: 0,
    },
    warrantyInformation: '',
    shippingInformation: '',
    availabilityStatus: '',
    returnPolicy: '',
    minimumOrderQuantity: 1,
    meta: {
      createdAt: new Date(),
      updatedAt: new Date(),
      barcode: '',
      qrCode: '',
    },
    thumbnail: '',
    images: [''],
    reviews: [{ user: '', rating: 0, comment: '', date: new Date() }],
  };

  availabilityOptions = [
    { label: 'In Stock', value: 'IN_STOCK' },
    { label: 'Out of Stock', value: 'OUT_OF_STOCK' },
    { label: 'Pre-order', value: 'PRE_ORDER' },
  ];

  eventId: string = '';

  // constructor(private apiService: APIServicesService) {}

  addTag(): void {
    this.product.tags.push('');
  }

  removeTag(index: number): void {
    if (this.product.tags.length > 1) {
      this.product.tags.splice(index, 1);
    }
  }

  addFeature(): void {
    this.product.features.push('');
  }

  removeFeature(index: number): void {
    if (this.product.features.length > 1) {
      this.product.features.splice(index, 1);
    }
  }

  addImage(): void {
    this.product.images.push('');
  }

  removeImage(index: number): void {
    if (this.product.images.length > 1) {
      this.product.images.splice(index, 1);
    }
  }

  addReview(): void {
    this.product.reviews.push({
      user: '',
      rating: 0,
      comment: '',
      date: new Date(),
    });
  }

  removeReview(index: number): void {
    if (this.product.reviews.length > 1) {
      this.product.reviews.splice(index, 1);
    }
  }

  getEvent(event: string): void {
    this.eventId = event;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.ctrlKey && event.altKey) {
      switch (event.key) {
        case 'p':
          this.handleAddAction();
          break;
        case 'c':
          this.handleRemoveAction();
          break;
      }
      event.preventDefault();
    }
  }

  private handleAddAction(): void {
    switch (this.eventId) {
      case 'tag':
        this.addTag();
        break;
      case 'image':
        this.addImage();
        break;
      case 'user':
        this.addReview();
        break;
      case 'feature':
        this.addFeature();
        break;
    }
  }

  private handleRemoveAction(): void {
    switch (this.eventId) {
      case 'tag':
        this.removeTag(this.product.tags.length - 1);
        break;
      case 'image':
        this.removeImage(this.product.images.length - 1);
        break;
      case 'user':
        this.removeReview(this.product.reviews.length - 1);
        break;
      case 'feature':
        this.removeFeature(this.product.features.length - 1);
        break;
    }
  }

  trackByFn(index: number): number {
    return index;
  }

  onSubmit(): void {
    const payload = {
      ...this.product,
      tags: this.product.tags.filter((t) => t.trim() !== ''),
      images: this.product.images.filter((i) => i.trim() !== ''),
      reviews: this.product.reviews.filter((r) => r.user && r.rating !== null),
    };

    console.log('Form submitted. Data:', JSON.stringify(payload));

    // this.apiService.createProduct(payload).subscribe(
    //   (response) => {
    //     console.log('Product created successfully:', response);
    //     // Handle success (e.g., show a success message, reset form, navigate to product list)
    //   },
    //   (error) => {
    //     console.error('Error creating product:', error);
    //     // Handle error (e.g., show an error message)
    //   }
    // );
  }
}
