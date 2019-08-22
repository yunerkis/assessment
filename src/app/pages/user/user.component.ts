import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  datas: any

  constructor(
    private router: Router,
    public userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((result: any) => {
      this.datas = result.data
    });
  }

  clickItem(id) {
    localStorage.setItem('userDetail', id);
    this.router.navigate(['status']);
  }

}
