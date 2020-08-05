import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandCardsComponent } from './command-cards.component';

describe('CommandCardComponent', () => {
  let component: CommandCardsComponent;
  let fixture: ComponentFixture<CommandCardsComponent>;

  beforeEach(async(() => {
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
