import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestConocimientosComponent } from './nest-conocimientos.component';

describe('NestConocimientosComponent', () => {
  let component: NestConocimientosComponent;
  let fixture: ComponentFixture<NestConocimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestConocimientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
