import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaConocimientosComponent } from './grafica-conocimientos.component';

describe('GraficaConocimientosComponent', () => {
  let component: GraficaConocimientosComponent;
  let fixture: ComponentFixture<GraficaConocimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaConocimientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficaConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
