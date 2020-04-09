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
          this.menus.push(new SideNavigationMain("Advertisment", "All Advertisments", '/advertisment', "fa fa-puzzle-piece", "inactive", "header", pageInnerUrls, ""));  
          this.menus.push(new SideNavigationMain("Settings", "Settings", '/show/profile', "fa fa-cog", "inactive", "header", [], "")); 
  }


  getMenuList() {
    this.addSideOption();
    CommonMethods.showconsole(this.tag, " Function is working ")
    return this.menus;
  }
}
