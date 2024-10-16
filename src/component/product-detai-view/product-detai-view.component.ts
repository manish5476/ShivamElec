import {
  ChangeDetectorRef,
  Component,
  OnInit,
  OnDestroy,
  Input,
  ViewChild,
  PLATFORM_ID,
  Inject,
} from '@angular/core';

import { Galleria, GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-product-detai-view',
  templateUrl: './product-detai-view.component.html',
  styleUrls: ['./product-detai-view.component.scss'],
  // standalone: true,
  // imports: [GalleriaModule],
})
export class ProductDetaiViewComponent implements OnInit {
  @Input() data: any;
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  images: any[] | undefined;
  product: any;
  selectedColor: any;
  selectedMemory: any;
  showThumbnails: boolean | undefined;

  fullscreen: boolean = false;

  activeIndex: number = 0;

  onFullScreenListener: any;

  @ViewChild('galleria') galleria: Galleria | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private cd: ChangeDetectorRef
  ) {}

  //
  ngOnInit() {
    console.log(this.data); // Check what data is being passed
    this.product = this.data;
    if (this.product && this.product.galleryImage) {
      this.images = this.product.galleryImage.map((element: any) => {
        return {
          itemImageSrc: `${'https:'}${element}`,
          thumbnailImageSrc: element,
          alt: this.product.displayName,
          title: this.product.displayName,
        };
      });
      console.log(this.images); // Check generated images
    } else {
      console.error('No gallery images found for this product.');
    }
    //
    this.selectedColor = this.product.fmyChipList.find(
      (chip: { fmyChipType: string }) => chip.fmyChipType === 'COLOR'
    )?.fmyChipCode;
    this.selectedMemory = this.product.fmyChipList.find(
      (chip: { fmyChipType: string }) => chip.fmyChipType === 'MOBILE MEMORY'
    )?.fmyChipCode;
    this.bindDocumentListeners();
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

  onThumbnailButtonClick() {
    this.showThumbnails = !this.showThumbnails;
  }

  toggleFullScreen() {
    if (this.fullscreen) {
      this.closePreviewFullScreen();
    } else {
      this.openPreviewFullScreen();
    }

    this.cd.detach();
  }

  openPreviewFullScreen() {
    let elem =
      this.galleria?.element.nativeElement.querySelector('.p-galleria');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem['mozRequestFullScreen']) {
      /* Firefox */
      elem['mozRequestFullScreen']();
    } else if (elem['webkitRequestFullscreen']) {
      /* Chrome, Safari & Opera */
      elem['webkitRequestFullscreen']();
    } else if (elem['msRequestFullscreen']) {
      /* IE/Edge */
      elem['msRequestFullscreen']();
    }
  }

  onFullScreenChange() {
    this.fullscreen = !this.fullscreen;
    this.cd.detectChanges();
    this.cd.reattach();
  }

  closePreviewFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any)['mozCancelFullScreen']) {
      (document as any)['mozCancelFullScreen']();
    } else if ((document as any)['webkitExitFullscreen']) {
      (document as any)['webkitExitFullscreen']();
    } else if ((document as any)['msExitFullscreen']) {
      (document as any)['msExitFullscreen']();
    }
  }

  bindDocumentListeners() {
    this.onFullScreenListener = this.onFullScreenChange.bind(this);
    document.addEventListener('fullscreenchange', this.onFullScreenListener);
    document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
    document.addEventListener(
      'webkitfullscreenchange',
      this.onFullScreenListener
    );
    document.addEventListener('msfullscreenchange', this.onFullScreenListener);
  }

  unbindDocumentListeners() {
    document.removeEventListener('fullscreenchange', this.onFullScreenListener);
    document.removeEventListener(
      'mozfullscreenchange',
      this.onFullScreenListener
    );
    document.removeEventListener(
      'webkitfullscreenchange',
      this.onFullScreenListener
    );
    document.removeEventListener(
      'msfullscreenchange',
      this.onFullScreenListener
    );
    this.onFullScreenListener = null;
  }

  ngOnDestroy() {
    this.unbindDocumentListeners();
  }

  galleriaClass() {
    return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
  }

  fullScreenIcon() {
    return `pi ${
      this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'
    }`;
  }
}
