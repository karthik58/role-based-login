import { Component, OnInit } from '@angular/core';
import { User, Role } from '../_models';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  currentUser: User;
  constructor(
    private authenticationService: AuthenticationService

  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  array = [
    {
      id: "Q001",
      customerName: "John Doe",
      insurance: "Car",
      value: 50000,
      rate: 0.01,
      premium: 500,
    }, {
      id: "Q002",
      customerName: "John Doe",
      insurance: "Car",
      value: 50000,
      rate: 0.01,
      premium: 500,
    }
  ]

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  ngOnInit() {
    console.log('isAdmin', this.isAdmin)
  }

}
