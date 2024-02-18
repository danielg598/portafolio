import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGlobalComponent } from './modal-global.component';

describe('ModalGlobalComponent', () => {
  let component: ModalGlobalComponent;
  let fixture: ComponentFixture<ModalGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
