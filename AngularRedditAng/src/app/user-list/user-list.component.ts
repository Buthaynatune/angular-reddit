import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})yy
export class UserListComponent implements OnInit {

  names: string[]

  constructor() {
    this.names = ['Julia',Bouteina,Kenny 'Shak', 'Jeannie', 'Tom', 'Greg']
  }

  ngOnInit() {
  }

}
