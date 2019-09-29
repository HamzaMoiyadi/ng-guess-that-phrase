import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterWindowComponent } from './letter-window.component';

describe('LetterWindowComponent', () => {
  let component: LetterWindowComponent;
  let fixture: ComponentFixture<LetterWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
