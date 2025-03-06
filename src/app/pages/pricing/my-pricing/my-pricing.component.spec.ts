import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPricingComponent } from './my-pricing.component';

describe('MyPricingComponent', () => {
  let component: MyPricingComponent;
  let fixture: ComponentFixture<MyPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyPricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
