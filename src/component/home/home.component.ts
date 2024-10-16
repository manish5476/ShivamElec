import { Component, Renderer2 } from '@angular/core';
import { APIServicesService } from '../../Services/apiservices.service';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   oldPrice?: number;
//   image: string;
//   rating: number;
//   reviews: number;
// }

// interface Category {
//   name: string;
//   icon: string;
// }

interface Theme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  shopName = 'shivam Electronics';

  featuredProduct = {
    name: 'Shivam Electronics',
    rating: '',
    reviews: 'Explore the genuine product not the cheap!',
    image:
      'https://images.unsplash.com/photo-1517765371796-5bd3a7d30a29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  // categories: Category[] = [
  //   { name: 'Smartphones', icon: 'smartphone' },
  //   { name: 'Computers', icon: 'desktop_windows' },
  //   { name: 'Smartwatches', icon: 'watch' },
  //   { name: 'Cameras', icon: 'camera_alt' },
  //   { name: 'Headphones', icon: 'headset' },
  //   { name: 'Accessories', icon: 'devices_other' },
  //   { name: 'Gaming', icon: 'sports_esports' },
  // ];

  themes: Theme[] = [
    {
      name: 'Default',
      primary: '#3498db',
      secondary: '#2c3e50',
      accent: '#e74c3c',
    },
    {
      name: 'Dark',
      primary: '#34495e',
      secondary: '#2c3e50',
      accent: '#e74c3c',
    },
    {
      name: 'Light',
      primary: '#ecf0f1',
      secondary: '#bdc3c7',
      accent: '#e74c3c',
    },
    {
      name: 'Nature',
      primary: '#27ae60',
      secondary: '#2ecc71',
      accent: '#f1c40f',
    },
  ];

  currentTheme: Theme;
  data: any;
  toggle: boolean = false;
  singleProduct: any;

  constructor(private renderer: Renderer2, private api: APIServicesService) {
    this.currentTheme = this.themes[0]; // Set default theme
    // this.applyTheme(this.currentTheme);
  }
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.api.getProducts().subscribe((res: any) => {
      this.data = res.data.products;
    });
    console.log(this.data);
  }
  ProductPreview(product: any) {
    this.toggle = !this.toggle;
    this.singleProduct = product;
  }
}
