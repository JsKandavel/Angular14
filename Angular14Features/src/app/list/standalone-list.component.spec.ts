import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneListComponent } from './standalone-list.component';

describe('StandaloneListComponent', () => {
  let component: StandaloneListComponent;
  let fixture: ComponentFixture<StandaloneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StandaloneListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
