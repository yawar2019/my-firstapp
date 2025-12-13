import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCompox } from './signal-compox';

describe('SignalCompox', () => {
  let component: SignalCompox;
  let fixture: ComponentFixture<SignalCompox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalCompox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalCompox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
