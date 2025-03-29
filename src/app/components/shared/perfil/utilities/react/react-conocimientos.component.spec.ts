import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactConocimientosComponent } from './react.component';

describe('ReactConocimientosComponent', () => {
  let component: ReactConocimientosComponent;
  let fixture: ComponentFixture<ReactConocimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactConocimientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
