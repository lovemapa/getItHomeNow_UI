import { Component, OnInit } from '@angular/core';
import { LoginModal } from 'src/app/modalPackages/login';
import { CommonMethods } from 'src/app/commonmethod/common-method';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyRoutingMethods } from 'src/app/utillpackage/my-routing-methods';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Tag = "LoginComponent"
  loginModal: LoginModal

  constructor(public snackBar: MatSnackBar,public router:Router) {
    this.loginModal = new LoginModal("", "")
  }

  ngOnInit(): void {
  }

  /**
   * 
   * show Password Icon Click Function 
   * 
   */

  showPassword() {

    if ((document.getElementById('password') as HTMLInputElement).type == 'password') {
      (document.getElementById('password') as HTMLInputElement).type = 'text';
      (document.getElementById('myiconconfirm') as HTMLInputElement).className = "fa fa-eye";
    }
    else {
      (document.getElementById('password') as HTMLInputElement).type = "password";
      (document.getElementById('myiconconfirm') as HTMLInputElement).className = "fa fa-eye-slash";
    }
  }
  /**
   end
   */

  /**
   * Validation Function
   */
  validation() {
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.loginModal.email.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackBar, "Enter email")
      return false
    }else if (!EMAIL_REGEXP.test(this.loginModal.email.trim())) {
      CommonMethods.showErrorDialog(this.snackBar, "Email is invalid")
      return false
    } else if (this.loginModal.password.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackBar, "Enter password")
      return false
    } else {
      return true
    }
  }
  /**End */

  /**
   * Login Api Call 
   */
  callLoginApi()
  {
      if(this.validation())
      {
        // Calling Routing Function Goto TO DAsh Borad 
        MyRoutingMethods.gotoAds(this.router)
      }
  }
  /**End */
}
