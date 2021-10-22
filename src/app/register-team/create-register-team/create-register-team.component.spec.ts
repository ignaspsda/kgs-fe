import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegisterTeamComponent } from './create-register-team.component';

describe('CreateRegisterTeamComponent', () => {
  let component: CreateRegisterTeamComponent;
  let fixture: ComponentFixture<CreateRegisterTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRegisterTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRegisterTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
