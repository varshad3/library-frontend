import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecombooksComponent } from './admin-recombooks.component';

describe('AdminRecombooksComponent', () => {
  let component: AdminRecombooksComponent;
  let fixture: ComponentFixture<AdminRecombooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRecombooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRecombooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
