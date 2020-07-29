import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthBySleepComponent } from './birth-by-sleep.component';

describe('BirthBySleepComponent', () => {
  let component: BirthBySleepComponent;
  let fixture: ComponentFixture<BirthBySleepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthBySleepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthBySleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
