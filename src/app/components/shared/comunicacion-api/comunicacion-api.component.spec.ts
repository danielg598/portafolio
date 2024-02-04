import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionApiComponent } from './comunicacion-api.component';

describe('ComunicacionApiComponent', () => {
  let component: ComunicacionApiComponent;
  let fixture: ComponentFixture<ComunicacionApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicacionApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComunicacionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
