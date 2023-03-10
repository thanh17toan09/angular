import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendComponent } from './friend/friend.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { PopupMessengerComponent } from './header/ui/popup-messenger/popup-messenger.component';
import { PopupNotificationComponent } from './header/ui/popup-notification/popup-notification.component';
import { PopupSettingComponent } from './header/ui/popup-setting/popup-setting.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    FriendComponent,
    IntroduceComponent,
    PopupMessengerComponent,
    PopupNotificationComponent,
    PopupSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
