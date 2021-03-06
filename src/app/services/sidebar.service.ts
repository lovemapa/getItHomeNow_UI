import { Injectable, NgZone } from '@angular/core';
import { SideNavigationMain, SideNavigationUrlTitle } from '../modalPackages/sidenavBar';
import { CommonMethods } from '../commonmethod/common-method';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  tag = "SidebarService"
  toggled = false;
  pageName = ""
  accountType: string
  menus: Array<SideNavigationMain> = []
  storeid: string
  constructor(public ngzone: NgZone, public router: Router, public cookiesservice: CookieService) {
    this.accountType = ""
  }


  /**
   * 
   * Add Side Bar Into Menu
   * 
   */

  addSideOption() {
    this.menus = []
 
         var pageInnerUrls: Array<SideNavigationUrlTitle> = []
          this.menus.push(new SideNavigationMain("Promotions", "All Promotions", '/promotions', "fa fa-puzzle-piece", "inactive", "header", pageInnerUrls, ""));  
          this.menus.push(new SideNavigationMain("View Profile", "View Profile", '/show/profile', "fa fa-cog", "inactive", "header", [], "")); 
  }


  getMenuList() {
    this.addSideOption();
    return this.menus;
  }
}
