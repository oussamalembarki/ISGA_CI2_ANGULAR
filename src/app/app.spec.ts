import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app';
import { routes } from './app.routes';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the TP navigation and router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nav')?.textContent).toContain('Accueil');
    expect(compiled.querySelector('nav')?.textContent).toContain('TP1');
    expect(compiled.querySelector('nav')?.textContent).toContain('TP2');
    expect(compiled.querySelector('nav')?.textContent).toContain('TP3');
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
