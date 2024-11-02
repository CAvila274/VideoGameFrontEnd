import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameConsoleComponent } from './gameconsole.component';

describe('GameConsoleComponent', () => {
  let component: GameConsoleComponent;
  let fixture: ComponentFixture<GameConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameConsoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
