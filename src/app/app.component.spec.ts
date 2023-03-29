import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TeamJoinFormComponent } from './components/team-join-form/team-join-form.component';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatInputModule, MatButtonModule,MatFormFieldModule, FormsModule,BrowserAnimationsModule],
      declarations: [
        AppComponent,
        TeamJoinFormComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'convem-project-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('convem-project-app');
  });
});
