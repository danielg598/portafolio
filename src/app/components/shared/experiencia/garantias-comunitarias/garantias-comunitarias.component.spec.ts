import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiasComunitariasComponent } from './garantias-comunitarias.component';

describe('GarantiasComunitariasComponent', () => {
  let component: GarantiasComunitariasComponent;
  let fixture: ComponentFixture<GarantiasComunitariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarantiasComunitariasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarantiasComunitariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
