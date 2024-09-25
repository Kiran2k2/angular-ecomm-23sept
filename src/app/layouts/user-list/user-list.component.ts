import { Component, inject, OnInit } from '@angular/core';
import { UsersListService } from '../../Services/users-list.service';
import { CommonModule } from '@angular/common';
import { UserList } from '../../Model/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

userList:UserList[]=[]
  userService=inject(UsersListService)


ngOnInit(): void {
  this.userService.getUsers().subscribe(res=>{
    this.userList=res
    console.log(res);
  })
}




}
