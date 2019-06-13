import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentadialogComponent } from './ventadialog.component';

describe('VentadialogComponent', () => {
  let component: VentadialogComponent;
  let fixture: ComponentFixture<VentadialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentadialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentadialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
