import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCompox1 } from './signal-compox1';

describe('SignalCompox1', () => {
  let component: SignalCompox1;
  let fixture: ComponentFixture<SignalCompox1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalCompox1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalCompox1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
