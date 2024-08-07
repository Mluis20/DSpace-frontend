import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowIsPublishedPageComponent } from './how-is-published-page.component';

describe('HowIsPublishedPageComponent', () => {
  let component: HowIsPublishedPageComponent;
  let fixture: ComponentFixture<HowIsPublishedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowIsPublishedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowIsPublishedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
