import { Component } from '@angular/core';
import { APIServicesService } from '../../Services/apiservices.service';
interface ProductFilter {
  modelCode?: string;
  modelName?: string;
  displayName?: string;
  ratingsAverage?: number;
  promotionPrice?: string;
  listPrice?: string;
}

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

  data: any[] = [];
  currentPage: number = 1; // Current page for pagination
  pageSize: number = 10; // Number of items per page
  totalItems: number = 0; // Total number of items
  filter: ProductFilter = {};
  sort: string = '';

  sortOptions = [
    { label: 'Select Sort', value: '' },
    { label: 'Price', value: 'price' },
    { label: 'Price Descending', value: '-price' },
    { label: 'Rating', value: 'rating' },
    { label: 'Rating Descending', value: '-rating' },
    { label: 'Date Created', value: 'createdAt' },
    { label: 'Date Created Descending', value: '-createdAt' },
  ];

  pageSizeOptions = [
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '50', value: 50 },
    { label: '100', value: 100 },
  ];
  toggle: boolean = false;
  singleProduct: any;

  constructor(private api: APIServicesService) {}

  ngOnInit() {
    this.textMotion('hero1-text-motion', [
      'Cutting-Edge',
      'Innovative',
      'Smart',
      'Advanced',
    ]);
    this.textMotion('hero2-text-motion', [
      'Smart Home',
      'Tech Haven',
      'IoT Paradise',
      'Connected Life',
    ]);
    this.textMotion('hero3-text-motion', [
      'Inspire',
      'Empower',
      'Transform',
      'Innovate',
    ]);
    this.getData(); // Fetch initial data
  }
  textMotion(elementId: string, words: string[]): void {
    const element = document.getElementById(elementId);
    let currentIndex = 0;

    setInterval(() => {
      const currentSpan = element?.querySelector('span:not(.out)');
      const nextWord = words[currentIndex];

      const newSpan = document.createElement('span');
      newSpan.textContent = nextWord;
      newSpan.style.opacity = '0';
      newSpan.style.transform = 'translateY(100%)';
      element?.appendChild(newSpan);

      setTimeout(() => {
        if (currentSpan) {
          currentSpan.classList.add('out');
        }
        newSpan.classList.add('in');
      }, 50);

      setTimeout(() => {
        if (currentSpan) {
          currentSpan.remove();
        }
      }, 500);

      currentIndex = (currentIndex + 1) % words.length;
    }, 3000);
  }
  getData() {
    this.api
      .getProducts(this.filter, this.sort, this.pageSize, this.currentPage)
      .subscribe(
        (res: any) => {
          this.data = res.data.products;
          this.totalItems = res.total;
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
  }
  onFilterChange(key: keyof ProductFilter, event: Event) {
    const target = event.target as HTMLInputElement;
    (this.filter as any)[key] = target.value; // Update the specific filter key

    // If the value is empty, you might want to remove that filter key
    if (!target.value) {
      delete this.filter[key];
    }

    this.getData(); // Fetch data with the new filter
  }
  // onFilterChange(event: Event) {
  //   const target = event.target as HTMLInputElement; // Type assertion
  //   this.filter = target.value; // Set the new filter
  //   this.getData(); // Fetch data with the new filter
  // }

  onSortChange(event: any) {
    this.sort = event.value; // Set the new sort
    this.getData(); // Fetch data with the new sort
  }

  onPageChange(page: number) {
    this.currentPage = page; // Update current page
    this.getData(); // Fetch data for the new page
  }

  onPageSizeChange(size: number) {
    this.pageSize = size; // Update page size
    this.currentPage = 1; // Reset to the first page
    this.getData(); // Fetch data with the new page size
  }

  ProductPreview(product: any) {
    this.toggle = !this.toggle;
    this.singleProduct = product;
  }
}
// //
// toggle: boolean = false;
// singleProduct: any;

//   this.currentTheme = this.themes[0]; // Set default theme
// this.applyTheme(this.currentTheme);
// }

// getData() {
//   this.api.getProducts().subscribe((res: any) => {
//     this.data = res.data.products;
//   });
//   console.log(this.data);
// }
// ProductPreview(product: any) {
//   this.toggle = !this.toggle;
//   this.singleProduct = product;
// }
// }
