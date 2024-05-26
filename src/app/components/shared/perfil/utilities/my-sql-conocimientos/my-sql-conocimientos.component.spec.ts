import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySqlConocimientosComponent } from './my-sql-conocimientos.component';

describe('MySqlConocimientosComponent', () => {
  let component: MySqlConocimientosComponent;
  let fixture: ComponentFixture<MySqlConocimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySqlConocimientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySqlConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
