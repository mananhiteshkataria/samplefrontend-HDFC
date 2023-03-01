import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApdiDialogComponent } from './apdi-dialog.component';

describe('ApdiDialogComponent', () => {
  let component: ApdiDialogComponent;
  let fixture: ComponentFixture<ApdiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApdiDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApdiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
