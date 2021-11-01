import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCaseSubModule1Component } from './show-case-sub-module1.component';

describe('ShowCaseSubModule1Component', () => {
  let component: ShowCaseSubModule1Component;
  let fixture: ComponentFixture<ShowCaseSubModule1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCaseSubModule1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCaseSubModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
