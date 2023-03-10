import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IUser } from '../interface/user.interface';

@Component({
  selector: 'app-information-user',
  templateUrl: './information-user.component.html',
  styleUrls: ['./information-user.component.scss']
})
export class InformationUserComponent {
  infoForm = new FormGroup({});
  @Input() current_user: IUser | null = null;
}
