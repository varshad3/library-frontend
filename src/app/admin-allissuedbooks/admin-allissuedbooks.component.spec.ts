import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllissuedbooksComponent } from './admin-allissuedbooks.component';

describe('AdminAllissuedbooksComponent', () => {
  let component: AdminAllissuedbooksComponent;
  let fixture: ComponentFixture<AdminAllissuedbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllissuedbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAllissuedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
