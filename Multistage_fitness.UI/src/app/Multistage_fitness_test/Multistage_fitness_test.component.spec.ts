import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Multistage_fitness_testComponent } from './Multistage_fitness_test.component';

describe('Multistage_fitnessComponent', () => {
  let component: Multistage_fitness_testComponent;
  let fixture: ComponentFixture<Multistage_fitness_testComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Multistage_fitness_testComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Multistage_fitness_testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
