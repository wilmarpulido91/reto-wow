import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyPresenter } from '../agency.presenter';

describe('AgencyPresenter', () => {
  let component: AgencyPresenter;
  let fixture: ComponentFixture<AgencyPresenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyPresenter ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
