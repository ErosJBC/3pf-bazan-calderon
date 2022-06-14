import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  formLogin: FormGroup
  hide: boolean = true

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private fb: FormBuilder, private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  onSubmit(): void {
    if(this.formLogin.get('username').value === 'admin' && this.formLogin.get('password').value === 'admin'){
      this._snackbar.open('Login success', 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000
      })
      setTimeout(() => {
        window.location.assign('#/panel/dashboard')
      }, 4000)
    }else {
      this._snackbar.open('Username or password invalid', 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000
      })
    }
  }

}
