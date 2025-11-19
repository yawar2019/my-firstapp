import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDeactivate } from './test-deactivate';

describe('TestDeactivate', () => {
  let component: TestDeactivate;
  let fixture: ComponentFixture<TestDeactivate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDeactivate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDeactivate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
