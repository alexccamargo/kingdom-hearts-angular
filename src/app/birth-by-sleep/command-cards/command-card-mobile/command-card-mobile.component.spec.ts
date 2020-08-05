import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandCardMobileComponent } from './command-card-mobile.component';

describe('CommandCardMobileComponent', () => {
  let component: CommandCardMobileComponent;
  let fixture: ComponentFixture<CommandCardMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommandCardMobileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandCardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
