import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDragndropInputComponent } from './ng-dragndrop-input.component';

describe('NgDragndropInputComponent', () => {
  let component: NgDragndropInputComponent;
  let fixture: ComponentFixture<NgDragndropInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDragndropInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDragndropInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
