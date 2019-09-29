import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseSetterPage } from './phrase-setter.page';

describe('PhraseSetterPage', () => {
  let component: PhraseSetterPage;
  let fixture: ComponentFixture<PhraseSetterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseSetterPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseSetterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
