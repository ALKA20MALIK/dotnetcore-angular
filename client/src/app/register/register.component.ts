import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model:any = {}

  constructor(private accountService: AccountService, private toastrService : ToastrService) { }

  ngOnInit(): void {}

  register(){
    this.accountService.register(this.model).subscribe(response=>{
      console.log(response);
      this.cancel();
    },error=>{
      this.toastrService.error(error.error);
      console.log(error);
    })
  }
  cancel(){
    this.cancelRegister.emit(false);
  }
}
