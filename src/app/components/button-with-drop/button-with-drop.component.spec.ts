import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithDropComponent } from './button-with-drop.component';

describe('ButtonWithDropComponent', () => {
  let component: ButtonWithDropComponent;
  let fixture: ComponentFixture<ButtonWithDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonWithDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
