import { TestBed } from '@angular/core/testing';

import { DeckEditorService } from './deck-editor.service';

describe('DeckEditorService', () => {
  let service: DeckEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
