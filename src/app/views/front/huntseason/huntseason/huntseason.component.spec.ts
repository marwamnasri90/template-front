import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntseasonComponent } from './huntseason.component';

describe('HuntseasonComponent', () => {
  let component: HuntseasonComponent;
  let fixture: ComponentFixture<HuntseasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuntseasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuntseasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
