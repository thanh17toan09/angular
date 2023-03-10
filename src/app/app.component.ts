import { Component } from '@angular/core';
import { AppService } from './app.service';
import { IUser } from './interface/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aloapp';
  current_user: IUser | null = null;
  _list_user: IUser[] = [];
  
  constructor(
   private appService: AppService,
  ) {}

  ngOnInit(): void {
    this.onGetCurrentUser();
  }
  getListUser(data:IUser[]):void{
    this._list_user=data;
    console.log(this._list_user);
  }

  onGetCurrentUser():void{
    this.appService.current_user$.subscribe((user)=>{      
      this.current_user = user;
    })
  }
}
