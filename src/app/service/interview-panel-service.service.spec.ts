import { TestBed } from '@angular/core/testing';

import { InterviewPanelServiceService } from './interview-panel-service.service';

describe('InterviewPanelServiceService', () => {
  let service: InterviewPanelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewPanelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
