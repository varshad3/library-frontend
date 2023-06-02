import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommentedBooksComponent } from './recommented-books.component';

describe('RecommentedBooksComponent', () => {
  let component: RecommentedBooksComponent;
  let fixture: ComponentFixture<RecommentedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommentedBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommentedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
