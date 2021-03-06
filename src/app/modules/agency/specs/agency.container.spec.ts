import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyContainer } from '../agency.container';

describe('AgencyContainer', () => {
  let component: AgencyContainer;
  let fixture: ComponentFixture<AgencyContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
