import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionEntreComponentesComponent } from './comunicacion-entre-componentes.component';

describe('ComunicacionEntreComponentesComponent', () => {
  let component: ComunicacionEntreComponentesComponent;
  let fixture: ComponentFixture<ComunicacionEntreComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicacionEntreComponentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComunicacionEntreComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
