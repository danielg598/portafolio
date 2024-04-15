import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAppModalComponent } from './form-app-modal.component';

describe('FormAppModalComponent', () => {
  let component: FormAppModalComponent;
  let fixture: ComponentFixture<FormAppModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAppModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAppModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
