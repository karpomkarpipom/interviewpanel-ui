import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInterviewqaComponent } from './add-interviewqa.component';

describe('AddInterviewqaComponent', () => {
  let component: AddInterviewqaComponent;
  let fixture: ComponentFixture<AddInterviewqaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInterviewqaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInterviewqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
