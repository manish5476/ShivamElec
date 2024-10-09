import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-product-detai-view',
  templateUrl: './product-detai-view.component.html',
  styleUrls: ['./product-detai-view.component.scss'],
})
export class ProductDetaiViewComponent implements OnInit {
  @Input() data: any;
  product: any;
  selectedColor: any;
  selectedMemory: any;

  ngOnInit() {
    this.product = this.data;
    this.selectedColor = this.product.fmyChipList.find(
      (chip: { fmyChipType: string }) => chip.fmyChipType === 'COLOR'
    )?.fmyChipCode;
    this.selectedMemory = this.product.fmyChipList.find(
      (chip: { fmyChipType: string }) => chip.fmyChipType === 'MOBILE MEMORY'
    )?.fmyChipCode;
  }
  quantity = 1;

  getChipsByType(type: string) {
    return this.product.fmyChipList.filter(
      (chip: { fmyChipType: string }) => chip.fmyChipType === type
    );
  }

  selectImage(image: string) {
    this.product.largeUrl = image;
  }

  addToCart() {
    console.log('Added to cart:', {
      product: this.product.displayName,
      color: this.selectedColor,
      memory: this.selectedMemory,
      quantity: this.quantity,
    });
  }

  addToWishlist() {
    console.log('Added to wishlist:', this.product.displayName);
  }

  share() {
    console.log('Sharing product:', this.product.displayName);
  }
}
//   currentImageIndex = 0;
//   quantity = 1;
//   activeTab = 'description';
//   zoomPosition = { x: 0, y: 0 };
//   isZoomed = false;
//   tabs = ['description', 'warranty', 'reviews'];

//   // ngOnInit() {
//   //   console.log(this.data);
//   //   this.product = this.data;
//   //   // Initialization logic can be added here if needed
//   // }
//   // ngOnChanges(changes: SimpleChanges): void {
//   //   // console.log(changes);
//   //   // console.log(this.data);
//   // }

//   handlePrevImage() {
//     this.currentImageIndex =
//       this.currentImageIndex === 0
//         ? this.product.images.length - 1
//         : this.currentImageIndex - 1;
//   }

//   handleNextImage() {
//     this.currentImageIndex =
//       this.currentImageIndex === this.product.images.length - 1
//         ? 0
//         : this.currentImageIndex + 1;
//   }

//   handleThumbnailClick(index: number) {
//     this.currentImageIndex = index;
//   }

//   handleQuantityChange(change: number) {
//     this.quantity = Math.max(1, this.quantity + change);
//   }

//   handleImageZoom(event: MouseEvent) {
//     if (!this.isZoomed) return;
//     const element = event.currentTarget as HTMLElement;
//     const { left, top, width, height } = element.getBoundingClientRect();
//     const x = (event.clientX - left) / width;
//     const y = (event.clientY - top) / height;
//     this.zoomPosition = { x, y };
//   }

//   getChipsByType(type: string) {
//     return this.product.fmyChipList.filter(
//       (chip: { fmyChipType: string }) => chip.fmyChipType === type
//     );
//   }

//   resetZoom() {
//     this.zoomPosition = { x: 0, y: 0 };
//     this.isZoomed = false;
//   }

//   setActiveTab(tab: string) {
//     this.activeTab = tab;
//   }
// }
