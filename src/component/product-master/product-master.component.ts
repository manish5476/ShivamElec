import { Component, OnInit } from '@angular/core';

interface Price {
  currency: string;
  amount: number;
}

interface Variant {
  storage: string;
  ram: string;
  price: Price;
}

interface RearCamera {
  resolution: string;
  aperture: string;
  type: string;
}

interface Smartphone {
  id: string;
  name: string;
  brand: string;
  model: string;
  releaseDate: string;
  price: Price;
  images: string[]; // Assuming these are URLs or paths to images
  variants: Variant[];
  rearCameras: RearCamera[];
}

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.scss'],
})
export class ProductMasterComponent implements OnInit {
  smartphone: Smartphone = {
    id: '',
    name: '',
    brand: '',
    model: '',
    releaseDate: '',
    price: {
      currency: '',
      amount: 0,
    },
    images: [],
    variants: [],
    rearCameras: [],
  };

  constructor() {}

  ngOnInit(): void {}

  addVariant() {
    this.smartphone.variants.push({
      storage: '',
      ram: '',
      price: { currency: '', amount: 0 },
    });
  }

  removeVariant(index: number) {
    this.smartphone.variants.splice(index, 1);
  }

  addRearCamera() {
    this.smartphone.rearCameras.push({
      resolution: '',
      aperture: '',
      type: '',
    });
  }

  removeRearCamera(index: number) {
    this.smartphone.rearCameras.splice(index, 1);
  }

  onSubmit() {
    console.log(this.smartphone);
    // Here you can send the smartphone data to your backend or perform further actions
  }
}

// import { Component, OnInit } from '@angular/core';
// import {
//   FormArray,
//   FormBuilder,
//   FormGroup,
//   FormControl,
//   Validators,
// } from '@angular/forms';

// @Component({
//   selector: 'app-product-master',
//   templateUrl: './product-master.component.html',
//   styleUrls: ['./product-master.component.scss'],
// })
// export class ProductMasterComponent implements OnInit {
//   smartphoneForm!: FormGroup;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.smartphoneForm = this.fb.group({
//       id: ['', Validators.required],
//       name: ['', Validators.required],
//       brand: ['', Validators.required],
//       model: ['', Validators.required],
//       releaseDate: ['', Validators.required],
//       price: this.fb.group({
//         currency: ['', Validators.required],
//         amount: [0, Validators.required],
//       }),
//       images: this.fb.array([this.fb.control('', Validators.required)]),
//       availability: this.fb.group({
//         inStock: [false],
//         regions: this.fb.array([this.fb.control('', Validators.required)]),
//         colors: this.fb.array([this.fb.control('', Validators.required)]),
//         variants: this.fb.array([
//           this.fb.group({
//             storage: ['', Validators.required],
//             ram: ['', Validators.required],
//             price: this.fb.group({
//               currency: ['', Validators.required],
//               amount: [0, Validators.required],
//             }),
//           }),
//         ]),
//       }),
//       specifications: this.fb.group({
//         buildMaterial: this.fb.group({
//           front: [''],
//           back: [''],
//           frame: [''],
//         }),
//         dimensions: this.fb.group({
//           height: [''],
//           width: [''],
//           depth: [''],
//           weight: [''],
//         }),
//         display: this.fb.group({
//           type: [''],
//           size: [''],
//           resolution: [''],
//           refreshRate: [''],
//           brightness: [''],
//         }),
//         processor: this.fb.group({
//           chipset: [''],
//           cpu: [''],
//           gpu: [''],
//         }),
//         memory: this.fb.group({
//           ramOptions: this.fb.array([this.fb.control('', Validators.required)]),
//           storageOptions: this.fb.array([
//             this.fb.control('', Validators.required),
//           ]),
//           expandable: [false],
//         }),
//         camera: this.fb.group({
//           rear: this.fb.array([
//             this.fb.group({
//               resolution: [''],
//               aperture: [''],
//               type: [''],
//               features: this.fb.array([
//                 this.fb.control('', Validators.required),
//               ]),
//             }),
//           ]),
//           front: this.fb.group({
//             resolution: [''],
//             aperture: [''],
//           }),
//           features: this.fb.array([this.fb.control('', Validators.required)]),
//         }),
//         battery: this.fb.group({
//           capacity: [''],
//           charging: this.fb.group({
//             wired: [''],
//             wireless: [false],
//           }),
//         }),
//         os: this.fb.group({
//           name: [''],
//           version: [''],
//           basedOn: [''],
//           updateSupport: this.fb.group({
//             osUpdates: [''],
//             securityUpdates: [''],
//           }),
//         }),
//         connectivity: this.fb.group({
//           networks: this.fb.array([this.fb.control('', Validators.required)]),
//           sim: [''],
//           wifi: [''],
//           bluetooth: [''],
//           gps: [''],
//           nfc: [false],
//           usb: [''],
//         }),
//       }),
//     });
//   }
//   //

//   // Helper methods for dynamic controls
//   get images(): FormArray {
//     return this.smartphoneForm.get('images') as FormArray;
//   }

//   addImage() {
//     this.images.push(new FormControl('', Validators.required));
//   }

//   removeImage(index: number) {
//     this.images.removeAt(index);
//   }

//   get variants(): FormArray {
//     return this.smartphoneForm.get(['availability', 'variants']) as FormArray;
//   }

//   addVariant() {
//     this.variants.push(
//       this.fb.group({
//         storage: ['', Validators.required],
//         ram: ['', Validators.required],
//         price: this.fb.group({
//           currency: ['', Validators.required],
//           amount: [0, Validators.required],
//         }),
//       })
//     );
//   }

//   removeVariant(index: number) {
//     this.variants.removeAt(index);
//   }

//   get rearCameras(): FormArray {
//     return this.smartphoneForm.get([
//       'specifications',
//       'camera',
//       'rear',
//     ]) as FormArray;
//   }

//   addRearCamera() {
//     this.rearCameras.push(
//       this.fb.group({
//         resolution: [''],
//         aperture: [''],
//         type: [''],
//         features: this.fb.array([this.fb.control('', Validators.required)]),
//       })
//     );
//   }

//   removeRearCamera(index: number) {
//     this.rearCameras.removeAt(index);
//   }

//   onSubmit() {
//     console.log(this.smartphoneForm.value);
//   }
// }
