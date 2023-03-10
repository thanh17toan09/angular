import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InformationUserComponent } from './information-user.component';

export const routes:Routes=[
  {path:'',component:InformationUserComponent}
]

@NgModule({
    declarations: [InformationUserComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class InformationUserModule{}