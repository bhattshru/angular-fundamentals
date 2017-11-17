import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFifaComponent } from './about-fifa.component';

describe('AboutFifaComponent', () => {
  let component: AboutFifaComponent;
  let fixture: ComponentFixture<AboutFifaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFifaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
