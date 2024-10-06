import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTabsComponent } from './image-tabs.component';

describe('ImageTabsComponent', () => {
  let component: ImageTabsComponent;
  let fixture: ComponentFixture<ImageTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
