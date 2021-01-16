import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNineComponent } from './select-nine.component';

describe('SelectNineComponent', () => {
  let component: SelectNineComponent;
  let fixture: ComponentFixture<SelectNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
