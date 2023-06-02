import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMaintabComponent } from './admin-maintab.component';

describe('AdminMaintabComponent', () => {
  let component: AdminMaintabComponent;
  let fixture: ComponentFixture<AdminMaintabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMaintabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMaintabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
