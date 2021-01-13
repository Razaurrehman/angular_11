import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup;
  emailRegex: any = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', Validators.required],
    });
  }

  public signInFormHandle() {
    localStorage.setItem('isLoggedin', 'true');
    console.log(this.signinForm.value);
    this.router.navigate(['/dashboard']);
  }

  public goToSignUpPage(){
    this.router.navigate(['/session/signup']);
  }
}
