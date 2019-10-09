import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseFormComponent } from './phrase-form.component';

describe('PhraseFormComponent', () => {
  let component: PhraseFormComponent;
  let fixture: ComponentFixture<PhraseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
