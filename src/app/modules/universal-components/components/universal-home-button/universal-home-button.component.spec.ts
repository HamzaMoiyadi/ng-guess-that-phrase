import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalHomeButtonComponent } from './universal-home-button.component';

describe('UniversalHomeButtonComponent', () => {
  let component: UniversalHomeButtonComponent;
  let fixture: ComponentFixture<UniversalHomeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversalHomeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalHomeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
