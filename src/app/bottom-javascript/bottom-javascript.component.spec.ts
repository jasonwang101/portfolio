import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomJavascriptComponent } from './bottom-javascript.component';

describe('BottomJavascriptComponent', () => {
  let component: BottomJavascriptComponent;
  let fixture: ComponentFixture<BottomJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomJavascriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
