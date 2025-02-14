import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotoComponent } from './noto.component';

describe('NotoComponent', () => {
  let component: NotoComponent;
  let fixture: ComponentFixture<NotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
