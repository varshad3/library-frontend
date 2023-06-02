import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeviewComponent } from './admin-homeview.component';

describe('AdminHomeviewComponent', () => {
  let component: AdminHomeviewComponent;
  let fixture: ComponentFixture<AdminHomeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHomeviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHomeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
