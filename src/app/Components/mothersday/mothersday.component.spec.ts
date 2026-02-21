import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MothersdayComponent } from './mothersday.component';

describe('MothersdayComponent', () => {
  let component: MothersdayComponent;
  let fixture: ComponentFixture<MothersdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MothersdayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MothersdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
