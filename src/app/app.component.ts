import { Component } from '@angular/core';
import { DataService } from './data.service';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: User[];
  selectedUser: User = new User();

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
      this.users = data;
    });
  }

  add() {
    if (this.selectedUser.name === '') alert('Nombre Requerido');
    else {
      if (this.selectedUser.id == 0) {
        this.selectedUser.id = this.users.length + 1;
        this.users.push(this.selectedUser);
      }
      this.selectedUser = new User();
    }
  }

  editUser(user) {
    this.selectedUser = user;
  }

  deleteUser(selectUser) {
    this.users = this.users.filter((user) => {
      return user.id !== selectUser.id;
    });
  }

  saveClick() {
    if (this.selectedUser.name === '') alert('Nombre Requerido');
    else this.selectedUser = new User();
  }
}
