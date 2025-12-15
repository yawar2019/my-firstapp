import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksOnChanges } from './hooks-on-changes';

describe('HooksOnChanges', () => {
  let component: HooksOnChanges;
  let fixture: ComponentFixture<HooksOnChanges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HooksOnChanges]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HooksOnChanges);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
