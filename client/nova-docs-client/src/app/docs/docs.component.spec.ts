import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsComponent } from './docs.component';
import {SafePipe} from "../../pipes/safe.pipe";

describe('DocsComponent', () => {
  let component: DocsComponent;
  let fixture: ComponentFixture<DocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsComponent, SafePipe ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
