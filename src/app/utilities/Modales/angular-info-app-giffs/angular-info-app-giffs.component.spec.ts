import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInfoAppGiffsComponent } from './angular-info-app-giffs.component';

describe('AngularInfoAppGiffsComponent', () => {
  let component: AngularInfoAppGiffsComponent;
  let fixture: ComponentFixture<AngularInfoAppGiffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularInfoAppGiffsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularInfoAppGiffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
