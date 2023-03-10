import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationUserComponent } from '../information-user/information-user.component';

const routes: Routes = [
  { path: 'information-user', component: InformationUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
