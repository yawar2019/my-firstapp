import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridExampleComponent } from './aggrid-example-component';

describe('AggridExampleComponent', () => {
  let component: AggridExampleComponent;
  let fixture: ComponentFixture<AggridExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggridExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggridExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
