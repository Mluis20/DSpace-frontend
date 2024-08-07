import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsPublishedPageComponent } from './what-is-published-page.component';

describe('WhatIsPublishedPageComponent', () => {
  let component: WhatIsPublishedPageComponent;
  let fixture: ComponentFixture<WhatIsPublishedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsPublishedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsPublishedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
