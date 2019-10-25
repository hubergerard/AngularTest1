import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonnComponent } from './pokemonn.component';

describe('PokemonnComponent', () => {
  let component: PokemonnComponent;
  let fixture: ComponentFixture<PokemonnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
