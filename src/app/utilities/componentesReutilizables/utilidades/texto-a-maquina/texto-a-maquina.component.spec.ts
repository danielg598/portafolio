import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoAMaquinaComponent } from './texto-a-maquina.component';

describe('TextoAMaquinaComponent', () => {
  let component: TextoAMaquinaComponent;
  let fixture: ComponentFixture<TextoAMaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoAMaquinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoAMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
