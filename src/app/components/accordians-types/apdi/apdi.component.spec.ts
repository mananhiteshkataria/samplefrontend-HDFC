import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApdiComponent } from './apdi.component';

describe('ApdiComponent', () => {
  let component: ApdiComponent;
  let fixture: ComponentFixture<ApdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApdiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
