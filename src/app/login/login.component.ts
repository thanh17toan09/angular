import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { IUser } from '../interface/user.interface';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private appService: AppService,
    private router: Router
  ) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  @Output() login = new EventEmitter<IUser>()

  onSubmit(): void {
    if (!this.loginForm.value.username) return;
    if (!this.loginForm.value.password) return;
    const userName: string = this.loginForm.value.username;
    const passWord: string = this.loginForm.value.password;

    if (this.checkLogin({ username: userName, password: passWord })) {
      this.appService.setCurrentUser({ username: userName, password: passWord });
      // this.router.navigate(['/information-user']);    
    }
    else alert("sai ten dang nhap hoac mat khau")
  }

  checkLogin(user: IUser): boolean {
    return this.loginService.checkUser(user);
  };
}
