import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseSetDisplayComponent } from './phrase-set-display.component';

describe('PhraseSetDisplayComponent', () => {
  let component: PhraseSetDisplayComponent;
  let fixture: ComponentFixture<PhraseSetDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseSetDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseSetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
