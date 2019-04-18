import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAllComponent } from './part-all.component';

describe('PartAllComponent', () => {
  let component: PartAllComponent;
  let fixture: ComponentFixture<PartAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
