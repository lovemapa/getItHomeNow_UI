import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingChangeComponent } from './profile-setting-change.component';

describe('ProfileSettingChangeComponent', () => {
  let component: ProfileSettingChangeComponent;
  let fixture: ComponentFixture<ProfileSettingChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSettingChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSettingChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
