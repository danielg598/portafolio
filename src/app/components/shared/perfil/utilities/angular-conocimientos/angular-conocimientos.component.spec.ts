import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularConocimientosComponent } from './angular-conocimientos.component';

describe('AngularConocimientosComponent', () => {
  let component: AngularConocimientosComponent;
  let fixture: ComponentFixture<AngularConocimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularConocimientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
