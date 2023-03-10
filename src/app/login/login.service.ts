import { Injectable } from '@angular/core';
import { IUser } from '../interface/user.interface';
import { APIUserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private apiUserService: APIUserService
  ) { }
  
  checkUser(user: IUser):boolean{
    return this.apiUserService.checkUser(user);
  }
}
