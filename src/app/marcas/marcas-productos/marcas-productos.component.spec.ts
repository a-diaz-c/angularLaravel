import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasProductosComponent } from './marcas-productos.component';

describe('MarcasProductosComponent', () => {
  let component: MarcasProductosComponent;
  let fixture: ComponentFixture<MarcasProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
