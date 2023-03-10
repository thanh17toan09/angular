import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-popup-setting',
  templateUrl: './popup-setting.component.html',
  styleUrls: ['./popup-setting.component.scss']
})
export class PopupSettingComponent {
  @Input() current_user: IUser | null = null;

}
