import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSectionHomeComponent } from './service-section-home.component';

describe('ServiceSectionHomeComponent', () => {
  let component: ServiceSectionHomeComponent;
  let fixture: ComponentFixture<ServiceSectionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceSectionHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
