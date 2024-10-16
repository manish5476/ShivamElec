import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { APIServicesService } from '../../Services/apiservices.service';
@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrl: './user-master.component.scss',
})
export class UserMasterComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private api: APIServicesService) {
    this.productForm = this.fb.group({
      monthlyPriceInfo: this.fb.group({
        leasingUpfront: [5000],
        leasingMonthly: [2000],
        leasingMonths: [12],
        interest: [5],
      }),
      promotionPrice: [null],
      listPrice: [null],
      modelCode: ['', Validators.required],
      modelName: [''],
      displayName: ['', Validators.required],
      thumbUrl: [''],
      thumbUrlAlt: [''],
      largeUrl: [''],
      galleryImage: this.fb.array([]),
      galleryImageAlt: this.fb.array([]),
      ratingsAverage: [null],
      ratingsCount: [null],
      reviewUrl: [''],
      selected: [false],
      fmyChipList: this.fb.array([]),
      keySummary: this.fb.array([]),
      pviTypeName: ['mobile'],
      pviSubtypeName: ['SmartPhone'],
      ctaLocalText: ['Buy now'],
      ctaEngText: ['Buy now'],
      configuratorUseYn: [false],
      specCompareYN: [false],
      isComingSoon: [false],
      packageYN: [false],
    });

    this.initGalleryImages(['']);
    this.initGalleryImageAlt(['frontl30 Silver Shadow']);
    this.initFmyChipList([
      { fmyChipType: 'COLOR', fmyChipName: 'Silver Shadow' },
    ]);
    this.initKeySummary([{ displayType: 'Spec' }]);
  }

  // Gallery Image Array Handling
  get galleryImage() {
    return this.productForm.get('galleryImage') as FormArray;
  }

  initGalleryImages(images: string[]) {
    images.forEach((img) => this.galleryImage.push(this.fb.control(img)));
  }

  addGalleryImage() {
    this.galleryImage.push(this.fb.control(''));
  }

  // Gallery Image Alt Array Handling
  get galleryImageAlt() {
    return this.productForm.get('galleryImageAlt') as FormArray;
  }

  initGalleryImageAlt(alts: string[]) {
    alts.forEach((alt) => this.galleryImageAlt.push(this.fb.control(alt)));
  }

  addGalleryImageAlt() {
    this.galleryImageAlt.push(this.fb.control(''));
  }

  // Chip List Handling
  get fmyChipList() {
    return this.productForm.get('fmyChipList') as FormArray;
  }

  initFmyChipList(chips: any[]) {
    chips.forEach((chip) => {
      this.fmyChipList.push(
        this.fb.group({
          fmyChipType: [chip.fmyChipType, Validators.required],
          fmyChipName: [chip.fmyChipName, Validators.required],
        })
      );
    });
  }

  addFmyChip() {
    this.fmyChipList.push(
      this.fb.group({
        fmyChipType: [''],
        fmyChipName: [''],
      })
    );
  }

  // Key Summary Handling
  get keySummary() {
    return this.productForm.get('keySummary') as FormArray;
  }

  initKeySummary(summary: any[]) {
    summary.forEach((item) => {
      this.keySummary.push(
        this.fb.group({
          displayType: [item.displayType, Validators.required],
        })
      );
    });
  }

  addKeySummary() {
    this.keySummary.push(
      this.fb.group({
        displayType: [''],
      })
    );
  }

  // Form submission
  onSubmit() {
    // console.log(this.productForm.value);
    this.api.createProduct(this.productForm.value).subscribe((data: any) => {
      console.log('Product created successfully:', data);
    });
  }

  resetForm() {
    this.productForm.reset();
  }
}
