import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from "@angular/core";

@Component({
  selector: 'nui-header',
  template: ''
})
class HeaderStubComponent {}

@Component({
  selector: 'nui-docs',
  template: ''
})
class DocsStubComponent {}

describe('AppComponent >', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderStubComponent,
        DocsStubComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should assign url', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const url = "http://example.com"
    component.setSelectedUrl(url);
    expect(expect(component.selectedUrl).toBe(url));
  });
});
