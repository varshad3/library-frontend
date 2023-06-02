import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddbooksComponent } from './admin-addbooks.component';

describe('AdminAddbooksComponent', () => {
  let component: AdminAddbooksComponent;
  let fixture: ComponentFixture<AdminAddbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
