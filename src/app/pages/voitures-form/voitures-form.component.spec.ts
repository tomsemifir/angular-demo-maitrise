import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoituresFormComponent } from './voitures-form.component';

describe('VoituresFormComponent', () => {
  let component: VoituresFormComponent;
  let fixture: ComponentFixture<VoituresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoituresFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoituresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
