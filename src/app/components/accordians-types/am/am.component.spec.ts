import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmComponent } from './am.component';

describe('AmComponent', () => {
  let component: AmComponent;
  let fixture: ComponentFixture<AmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
