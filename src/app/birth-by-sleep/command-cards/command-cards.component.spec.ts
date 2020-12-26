import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommandCardsComponent } from './command-cards.component';

describe('CommandCardComponent', () => {
  let component: CommandCardsComponent;
  let fixture: ComponentFixture<CommandCardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CommandCardsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
