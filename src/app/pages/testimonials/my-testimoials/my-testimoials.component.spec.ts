import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestimoialsComponent } from './my-testimoials.component';

describe('MyTestimoialsComponent', () => {
  let component: MyTestimoialsComponent;
  let fixture: ComponentFixture<MyTestimoialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyTestimoialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTestimoialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
