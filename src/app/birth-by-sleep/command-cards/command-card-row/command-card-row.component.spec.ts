import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommandCardRowComponent } from './command-card-row.component';

describe('CommandCardRowComponent', () => {
  let component: CommandCardRowComponent;
  let fixture: ComponentFixture<CommandCardRowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CommandCardRowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandCardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
