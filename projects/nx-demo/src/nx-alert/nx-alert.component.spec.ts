import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NxAlertComponent } from './nx-alert.component';

describe('NxAlertComponent', () => {
  let component: NxAlertComponent;
  let fixture: ComponentFixture<NxAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxAlertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NxAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
