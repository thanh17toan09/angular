import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { IUser } from './interface/user.interface';

@Injectable({providedIn: 'root'})
export class AppService {
    private $current_user = new BehaviorSubject<IUser| null>(null);
    current_user$ = this.$current_user.asObservable();

    setCurrentUser(user:IUser){
        return this.$current_user.next(user);
    }
}