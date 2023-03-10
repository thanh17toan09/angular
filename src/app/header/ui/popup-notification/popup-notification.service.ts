import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/interface/user.interface';
import { APIUserService } from 'src/app/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class PopupNotificationService {
  constructor(
    private apiUserService: APIUserService
  ) { }

  private $list_friend = new BehaviorSubject<IUser[]>([]);
  list_friend$ = this.$list_friend.asObservable();

  getListUser(user: IUser): IUser[] {
    return this.apiUserService.getListUser();
  }

  getListFriend(user: IUser): void {
    this.$list_friend.next(this.apiUserService.getListFriend(user));
  }
}

