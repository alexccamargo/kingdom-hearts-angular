import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandCardRowComponent } from './command-card-row.component';

describe('CommandCardRowComponent', () => {
  let component: CommandCardRowComponent;
  let fixture: ComponentFixture<CommandCardRowComponent>;

  beforeEach(async(() => {
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
