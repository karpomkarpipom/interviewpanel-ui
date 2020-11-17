import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSettingsComponent } from './emailsettings.component';

describe('EmailsettingsComponent', () => {
  let component: EmailSettingsComponent;
  let fixture: ComponentFixture<EmailSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
