import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeConocimientosComponent } from './node-conocimientos.component';

describe('NodeConocimientosComponent', () => {
  let component: NodeConocimientosComponent;
  let fixture: ComponentFixture<NodeConocimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeConocimientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NodeConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
