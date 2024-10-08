import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxDemoComponent } from './nx-demo.component';

describe('NxDemoComponent', () => {
  let component: NxDemoComponent;
  let fixture: ComponentFixture<NxDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
