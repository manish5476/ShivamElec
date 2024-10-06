import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetaiViewComponent } from './product-detai-view.component';

describe('ProductDetaiViewComponent', () => {
  let component: ProductDetaiViewComponent;
  let fixture: ComponentFixture<ProductDetaiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetaiViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetaiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
