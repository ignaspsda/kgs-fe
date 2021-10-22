import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTournamentComponent } from './my-tournament.component';

describe('MyTournamentComponent', () => {
  let component: MyTournamentComponent;
  let fixture: ComponentFixture<MyTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
