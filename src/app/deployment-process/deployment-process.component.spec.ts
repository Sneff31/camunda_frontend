import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentProcessComponent } from './deployment-process.component';

describe('DeploymentProcessComponent', () => {
  let component: DeploymentProcessComponent;
  let fixture: ComponentFixture<DeploymentProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeploymentProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeploymentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
