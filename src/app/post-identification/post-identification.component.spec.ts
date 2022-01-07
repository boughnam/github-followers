import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostIdentificationComponent } from './post-identification.component';

describe('PostIdentificationComponent', () => {
  let component: PostIdentificationComponent;
  let fixture: ComponentFixture<PostIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostIdentificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
