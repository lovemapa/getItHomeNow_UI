import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/modalPackages/login';
import { CommonMethods } from 'src/app/commonmethod/common-method';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyRoutingMethods } from 'src/app/utillpackage/my-routing-methods';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MyCookies } from 'src/app/utillpackage/my-cookies';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Tag = "LoginComponent";
  loginModel: LoginModel;

  constructor(public snackBar: MatSnackBar, public router: Router, public adminServiceService: AdminServiceService,
    public spinner: NgxSpinnerService, public cookiesService: CookieService) {
    this.loginModel = new LoginModel("", "");
    // this.checkLoginMethod();
  }

  ngOnInit(): void {
  }

  /**Check Login */
  checkLoginMethod() {
    let logincheck = MyCookies.checkLoginStatus(this.cookiesService);
    if (logincheck) {
      MyRoutingMethods.gotoAds(this.router);
    } else {
      MyRoutingMethods.gotoLogin(this.router);
    }
  }

  /**
   * show Password Icon Click Function 
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
    if (this.loginModel.email.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackBar, "Enter email");
      return false;
    } else if (!EMAIL_REGEXP.test(this.loginModel.email.trim())) {
      CommonMethods.showErrorDialog(this.snackBar, "Email is invalid");
      return false;
    } else if (this.loginModel.password.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackBar, "Enter password");
      return false;
    } else {
      return true;
    }
  }
  /**End */

  /**
   * Login Api Call 
   */
  callLoginApi() {
    if (this.validation()) {
      this.spinner.show();
      this.adminServiceService.adminLoginAPI(this.loginModel.email, this.loginModel.password).subscribe(response => {
        if (response.success) {
          this.spinner.hide();
          // Calling Routing Function Goto TO Dashborad 
          MyRoutingMethods.gotoAds(this.router);
        }
        else {
          this.spinner.hide();
          CommonMethods.showErrorDialog(this.snackBar, response.message);
        }
      })

    }
  }
  /**End */
}
