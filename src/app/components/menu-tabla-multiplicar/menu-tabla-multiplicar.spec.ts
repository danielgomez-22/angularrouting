import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuTablaMultiplicar } from './menu-tabla-multiplicar';

describe('MenuTablaMultiplicar', () => {
  let component: MenuTablaMultiplicar;
  let fixture: ComponentFixture<MenuTablaMultiplicar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuTablaMultiplicar],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuTablaMultiplicar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
