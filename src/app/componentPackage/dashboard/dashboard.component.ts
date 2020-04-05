import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { AdvertisementModel } from 'src/app/modalPackages/advertisement';
import { CommonMethods } from 'src/app/commonmethod/common-method';
import { MyRoutingMethods } from 'src/app/utillpackage/my-routing-methods';
import { NgxSpinnerService } from 'ngx-spinner';
import { MyCookies } from 'src/app/utillpackage/my-cookies';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public searchString: string = "";
  public adsList: Array<AdvertisementModel> = [];
  showTable = false
  constructor(public snackBar: MatSnackBar, public spinner: NgxSpinnerService,
    public cookiesService: CookieService, public router: Router, public adminServiceService: AdminServiceService) {
    this.showTable = false;
    this.checkLoginMethod();
  }

  ngOnInit(): void {
    this.spinner.show();
    this.adminServiceService.getAdvertisement(this.searchString).subscribe(response => {
      CommonMethods.showconsole("all ads list", response);
      if (response.success) {
        this.adsList = response.data;
        setTimeout(() => {
          this.spinner.hide();
          this.showTable = true;
        }, 1000);
      }
      else{
        this.spinner.hide();
        MyRoutingMethods.gotoLogin(this.router);
      }
    });
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

  createContent(content:string):Array<string> {
    let contentArray:Array<string>= content.split("%");
    return contentArray;
  }
}
