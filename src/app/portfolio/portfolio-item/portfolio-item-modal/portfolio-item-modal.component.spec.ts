import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioItemModalComponent } from './portfolio-item-modal.component';

describe('PortfolioItemModalComponent', () => {
  let component: PortfolioItemModalComponent;
  let fixture: ComponentFixture<PortfolioItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioItemModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
