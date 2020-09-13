import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersMainComponent } from './users-main/users-main.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersEditComponent } from './users-edit/users-edit.component';



@NgModule({
  declarations: [UsersMainComponent, UsersCreateComponent, UsersEditComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
