import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImagesComponent } from './user-images.component';

describe('UserImagesComponent', () => {
  let component: UserImagesComponent;
  let fixture: ComponentFixture<UserImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
