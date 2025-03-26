import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mainlayoutComponent } from './mainlayout.component';

describe('mainlayoutComponent', () => {
  let component: mainlayoutComponent;
  let fixture: ComponentFixture<mainlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [mainlayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(mainlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
