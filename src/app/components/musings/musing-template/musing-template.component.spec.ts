import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusingTemplateComponent } from './musing-template.component';

describe('MusingTemplateComponent', () => {
  let component: MusingTemplateComponent;
  let fixture: ComponentFixture<MusingTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusingTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
