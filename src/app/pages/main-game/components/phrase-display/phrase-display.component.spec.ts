import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseDisplayComponent } from './phrase-display.component';

describe('PhraseDisplayComponent', () => {
  let component: PhraseDisplayComponent;
  let fixture: ComponentFixture<PhraseDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
