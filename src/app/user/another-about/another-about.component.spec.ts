import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherAboutComponent } from './another-about.component';

describe('AnotherAboutComponent', () => {
  let component: AnotherAboutComponent;
  let fixture: ComponentFixture<AnotherAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
