import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllbooksComponent } from './admin-allbooks.component';

describe('AdminAllbooksComponent', () => {
  let component: AdminAllbooksComponent;
  let fixture: ComponentFixture<AdminAllbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAllbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
