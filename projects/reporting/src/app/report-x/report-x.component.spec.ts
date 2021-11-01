import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportXComponent } from './report-x.component';

describe('ReportXComponent', () => {
  let component: ReportXComponent;
  let fixture: ComponentFixture<ReportXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
