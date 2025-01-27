import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteurComponent } from './pasteur.component';

describe('PasteurComponent', () => {
  let component: PasteurComponent;
  let fixture: ComponentFixture<PasteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
