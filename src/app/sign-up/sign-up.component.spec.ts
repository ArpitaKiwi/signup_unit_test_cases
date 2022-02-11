import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let compiled: { querySelector: (arg0: string) => any; };
   
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ]
    })
    .compileComponents();
  });
  const getByTestId = (testId: string) => {
    return compiled.querySelector(`[data-test-id="${testId}"]`);
  };
  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it(`should have as title 'Sign Up'`, () => {
   const fixture = TestBed.createComponent(SignUpComponent);
   const app = fixture.componentInstance;
     expect(app.title).toEqual('Sign Up');
 });

  it('checkbox is checked if value is true', () => {
   // compiled.value = true;
    fixture.detectChanges();
  
    const inEl = fixture.debugElement.query(By.css('#simpleInput'));
    expect(inEl.nativeElement.checked).toBe(true);
  });


});
