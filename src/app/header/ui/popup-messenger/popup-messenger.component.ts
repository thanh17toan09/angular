import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IUser } from 'src/app/interface/user.interface';
import { PopupMessengerService } from './popup-messenger.service';

@Component({
  selector: 'app-popup-messenger',
  templateUrl: './popup-messenger.component.html',
  styleUrls: ['./popup-messenger.component.scss']
})
export class PopupMessengerComponent implements OnInit {
  constructor(
    private appService: AppService,
    private popupService: PopupMessengerService,
  ) { }

 @Input() current_user: IUser | null = null;
  _list_user: IUser[] = [];

  ngOnInit(): void {
    this.onGetListUser();
    this.onGetCurrentUser();
  }

  onGetListUser():void{
    this.popupService.list_friend$.subscribe((_users)=>{
      this._list_user = _users;
    })
  }

  onGetCurrentUser():void{
    this.appService.current_user$.subscribe((user)=>{      
      this.current_user = user;
      if(this.current_user) this.popupService.getListFriend(this.current_user);
    })
  }
}

