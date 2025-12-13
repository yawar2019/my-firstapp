import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signalcompox2 } from './signalcompox2';

describe('Signalcompox2', () => {
  let component: Signalcompox2;
  let fixture: ComponentFixture<Signalcompox2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signalcompox2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signalcompox2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
