import { Component, HostListener } from '@angular/core';
// import { APIServicesService } from '../../Services/apiservices.service';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
interface Product {
  productId: string;
  name: string;
  description: {
    text: string;
    images: Array<{ url: string; altText: string }>;
    video?: { url: string; description: string };
  };
  category: {
    main: string;
    sub: string;
    subCategories?: string[];
  };
  brand: {
    name: string;
    logo: string;
  };
  price: {
    current: number;
    original: number;
    currency: string;
    discount?: { percentage: number; expiresOn: string };
  };
  stock: {
    quantity: number;
    status: string;
  };
  images: {
    default: string;
    variants: Array<{
      color: string;
      images: Array<{ imageUrl: string; altText: string }>;
      stock: number | null;
    }>;
  };
  specifications?: any;
  metadata?: any;
  shipping?: any;
  reviews?: any[];
}

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.scss'],
})
export class ProductMasterComponent {
  product = {
    productId: '',
    name: '',
    description: {
      text: '',
      images: [],
      video: { url: '', description: '' },
    },
    category: {
      main: '',
      sub: '',
      subCategories: [],
    },
    brand: {
      name: '',
      logo: '',
    },
    price: {
      current: null,
      original: null,
      currency: 'USD',
      discount: { percentage: null, expiresOn: null },
    },
    stock: {
      quantity: null,
      status: 'in_stock',
    },
    images: {
      default: '',
      variants: [
        { color: '', images: [{ imageUrl: '', altText: '' }], stock: null },
      ],
    },
    specifications: {},
    metadata: {},
    shipping: {},
    reviews: [],
  };

  // Add a new variant
  addVariant() {
    this.product.images.variants.push({
      color: '',
      images: [{ imageUrl: '', altText: '' }],
      stock: null,
    });
  }

  // Add an image to a specific variant
  addVariantImage(index: number) {
    this.product.images.variants[index].images.push({
      imageUrl: '',
      altText: '',
    });
  }

  // Remove a specific variant
  removeVariant(index: number) {
    this.product.images.variants.splice(index, 1);
  }

  // Handle form submission
  onSubmit() {
    if (this.product.productId && this.product.name) {
      console.log('Submitted Product:', this.product);
      // Add further submission logic here, like sending data to a server
    } else {
      console.error('Product ID and Name are required.');
    }
  }
}
