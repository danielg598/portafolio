import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaravelConocimientosComponent } from './laravel-conocimientos.component';

describe('LaravelConocimientosComponent', () => {
  let component: LaravelConocimientosComponent;
  let fixture: ComponentFixture<LaravelConocimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaravelConocimientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaravelConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
