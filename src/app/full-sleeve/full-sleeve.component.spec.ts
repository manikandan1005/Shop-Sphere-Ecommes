import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSleeveComponent } from './full-sleeve.component';

describe('FullSleeveComponent', () => {
  let component: FullSleeveComponent;
  let fixture: ComponentFixture<FullSleeveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullSleeveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullSleeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
