import { TestBed } from '@angular/core/testing';

import { NgDragndropInputService } from './ng-dragndrop-input.service';

describe('NgDragndropInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgDragndropInputService = TestBed.get(NgDragndropInputService);
    expect(service).toBeTruthy();
  });
});
