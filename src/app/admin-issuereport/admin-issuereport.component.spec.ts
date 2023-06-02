import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIssuereportComponent } from './admin-issuereport.component';

describe('AdminIssuereportComponent', () => {
  let component: AdminIssuereportComponent;
  let fixture: ComponentFixture<AdminIssuereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminIssuereportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminIssuereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
