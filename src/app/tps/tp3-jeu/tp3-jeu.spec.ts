import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tp3Jeu } from './tp3-jeu';

describe('Tp3Jeu', () => {
  let component: Tp3Jeu;
  let fixture: ComponentFixture<Tp3Jeu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tp3Jeu],
    }).compileComponents();

    fixture = TestBed.createComponent(Tp3Jeu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
