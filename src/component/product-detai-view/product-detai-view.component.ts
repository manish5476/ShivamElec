import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
// import {
//   trigger,
//   transition,
//   style,
//   animate,
//   state,
// } from '@angular/animations';
// import { APIServicesService } from '../../Services/apiservices.service';

interface Variant {
  name: string;
  price: number;
}

interface Color {
  name: string;
  hex: string;
  images: string[];
}

@Component({
  selector: 'app-product-detai-view',
  templateUrl: './product-detai-view.component.html',
  styleUrls: ['./product-detai-view.component.scss'],
})
export class ProductDetaiViewComponent implements OnInit, OnChanges {
  @Input() data: any;
  // product = {
  //   _id: '66efb5b42b4905c2501d8f2c',
  //   name: 'RT28C3032 TMF with Digital Inverter Technology 236 ℓ',
  //   modelCode: 'RT28C3032GS/HL',
  //   displayName:
  //     '236 L Digital Inverter Technology Double Door Refrigerator RT28C3032GS',
  //   brand: 'Samsung',
  //   price: 30990,
  //   promotionPrice: 24690,
  //   listPrice: 24690,
  //   saveText: '6300',
  //   description: 'RT28C3032 TMF with Digital Inverter Technology 236 ℓ',
  //   features: [
  //     'Long-lasting and efficient compressor',
  //     'Evenly cools all over',
  //     'Voltage protection',
  //   ],
  //   images: [
  //     '//images.samsung.com/is/image/samsung/p6pim/in/rt28c3032gs-hl/gallery/in-ref-tmf-rt3000-448889-rt28c3032gs-hl-thumb-535217601',
  //     '//images.samsung.com/is/image/samsung/p6pim/in/rt28c3032gs-hl/gallery/in-ref-tmf-rt3000-448889-rt28c3032gs-hl-thumb-535217710',
  //     '//images.samsung.com/is/image/samsung/p6pim/in/rt28c3032gs-hl/gallery/in-ref-tmf-rt3000-448889-rt28c3032gs-hl-thumb-535050706',
  //     '//images.samsung.com/is/image/samsung/p6pim/in/rt28c3032gs-hl/gallery/in-ref-tmf-rt3000-448889-rt28c3032gs-hl-thumb-535050707',
  //     '//images.samsung.com/is/image/samsung/p6pim/in/rt28c3032gs-hl/gallery/in-ref-tmf-rt3000-448889-rt28c3032gs-hl-thumb-535050708',
  //     '//images.samsung.com/is/image/samsung/p6pim/in/rt28c3032gs-hl/gallery/in-ref-tmf-rt3000-448889-rt28c3032gs-hl-thumb-535050709',
  //   ],
  //   galleryImageAlt: [
  //     'RT28C3032GS/HL ',
  //     'RT28C3032GS/HL ',
  //     'front-open Titanium Silver',
  //     'front-open-with-food Titanium Silver',
  //     'detail1 Titanium Silver',
  //     'detail2 Titanium Silver',
  //   ],
  //   financing: true,
  //   financingDesc: ['No Cost EMI starts from ₹ 2743.33/ month.'],
  // };
  public product: any;
  currentImageIndex = 0;
  quantity = 1;
  activeTab = 'description';
  zoomPosition = { x: 0, y: 0 };
  isZoomed = false;
  tabs = ['description', 'warranty', 'reviews'];

  ngOnInit() {
    console.log(this.data);
    this.product = this.data;
    // Initialization logic can be added here if needed
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  handlePrevImage() {
    this.currentImageIndex =
      this.currentImageIndex === 0
        ? this.product.images.length - 1
        : this.currentImageIndex - 1;
  }

  handleNextImage() {
    this.currentImageIndex =
      this.currentImageIndex === this.product.images.length - 1
        ? 0
        : this.currentImageIndex + 1;
  }

  handleThumbnailClick(index: number) {
    this.currentImageIndex = index;
  }

  handleQuantityChange(change: number) {
    this.quantity = Math.max(1, this.quantity + change);
  }

  handleImageZoom(event: MouseEvent) {
    if (!this.isZoomed) return;
    const element = event.currentTarget as HTMLElement;
    const { left, top, width, height } = element.getBoundingClientRect();
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;
    this.zoomPosition = { x, y };
  }

  resetZoom() {
    this.zoomPosition = { x: 0, y: 0 };
    this.isZoomed = false;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
