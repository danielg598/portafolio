import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroAppComponent } from './filtro-app.component';

describe('FiltroAppComponent', () => {
  let component: FiltroAppComponent;
  let fixture: ComponentFixture<FiltroAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltroAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
