import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service'

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit{

  constructor(
    private router: Router,
    public userService: UserService,
  ){}

  detail: any = [];

  ngOnInit() {
    if(localStorage.getItem('userDetail') != null){
      let id = localStorage.getItem('userDetail');
      this.userService.getDetail(id).subscribe((result: any) => {
        this.detail = result.data
      });
    }
  }

}
