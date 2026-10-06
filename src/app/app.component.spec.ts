import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the document title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Revisión bibliográfica sobre Proteína Vegetal Texturizada',
    );
  });

  it('should build the outline from the document sections', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.outline.length).toBe(12);
    expect(app.outline[1].children.map((section) => section.title)).toContain(
      'Chícharo.',
    );
  });

  it('should render only primary sections in the visible outline', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('.desktop-outline .outline-link')).toHaveSize(12);
    expect(compiled.querySelector('.outline-link-secondary')).toBeNull();
  });
});
