import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldTrainingComponent } from './old-training.component';

describe('OldTrainingComponent', () => {
  let component: OldTrainingComponent;
  let fixture: ComponentFixture<OldTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
