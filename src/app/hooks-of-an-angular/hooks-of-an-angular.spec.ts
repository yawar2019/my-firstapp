import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksOfAnAngular } from './hooks-of-an-angular';

describe('HooksOfAnAngular', () => {
  let component: HooksOfAnAngular;
  let fixture: ComponentFixture<HooksOfAnAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HooksOfAnAngular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HooksOfAnAngular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
