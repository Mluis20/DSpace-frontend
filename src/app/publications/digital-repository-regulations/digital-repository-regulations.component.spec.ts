import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalRepositoryRegulationsComponent } from './digital-repository-regulations.component';

describe('DigitalRepositoryRegulationsComponent', () => {
  let component: DigitalRepositoryRegulationsComponent;
  let fixture: ComponentFixture<DigitalRepositoryRegulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalRepositoryRegulationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalRepositoryRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
