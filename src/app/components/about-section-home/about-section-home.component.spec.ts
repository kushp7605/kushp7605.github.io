import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionHomeComponent } from './about-section-home.component';

describe('AboutSectionHomeComponent', () => {
  let component: AboutSectionHomeComponent;
  let fixture: ComponentFixture<AboutSectionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSectionHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
