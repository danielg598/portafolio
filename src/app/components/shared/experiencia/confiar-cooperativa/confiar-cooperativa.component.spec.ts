import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiarCooperativaComponent } from './confiar-cooperativa.component';

describe('ConfiarCooperativaComponent', () => {
  let component: ConfiarCooperativaComponent;
  let fixture: ComponentFixture<ConfiarCooperativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiarCooperativaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiarCooperativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
