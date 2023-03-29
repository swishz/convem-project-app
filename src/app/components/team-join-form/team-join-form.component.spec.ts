import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TeamJoinFormComponent } from './team-join-form.component';

import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from "@angular/material/form-field";

describe('TeamJoinFormComponent', () => {
  let component: TeamJoinFormComponent;
  let fixture: ComponentFixture<TeamJoinFormComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatInputModule, MatButtonModule,MatFormFieldModule],
      declarations: [TeamJoinFormComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamJoinFormComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set success message if answer is "sim"', () => {
    component.answer = 'sim';
    component.confirm();
    const req = httpTestingController.expectOne('https://6421bc3386992901b2baf3b0.mockapi.io/answer?message=success');
    req.flush([{message: component.successMessage}]);
    expect(component.result).toEqual(component.successMessage);
    expect(component.showResult).toBeTrue();
    setTimeout(() => {
      expect(component.showResult).toBeFalse();
    }, 4000);
  });

  it('should set error message if answer is not "sim"', () => {
    component.answer = 'não';
    component.confirm();
    const req = httpTestingController.expectOne('https://6421bc3386992901b2baf3b0.mockapi.io/answer?message=error');
    req.flush([{message: component.errorMessage}]);
    expect(component.result).toEqual(component.errorMessage);
    expect(component.showResult).toBeTrue();
    setTimeout(() => {
      expect(component.showResult).toBeFalse();
    }, 4000);
  });
});