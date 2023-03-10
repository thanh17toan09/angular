import { Component } from '@angular/core';
import { IUser } from '../interface/user.interface';
import { PopupMessengerService } from './ui/popup-messenger/popup-messenger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Heading';
  constructor(
    private popUpMessengerService: PopupMessengerService
  ) { }
  ngOnInit() { }

  current_user: IUser | null = null;
  enum_popup: number = 0;
  
}
