import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPoductNotifyComponent } from './app-poduct-notify.component';

describe('AppPoductNotifyComponent', () => {
  let component: AppPoductNotifyComponent;
  let fixture: ComponentFixture<AppPoductNotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPoductNotifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppPoductNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
