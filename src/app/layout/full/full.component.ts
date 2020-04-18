import { Component, OnInit, NgZone } from '@angular/core';
import { CommonMethods } from 'src/app/commonmethod/common-method';
import { Router, NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { MyRoutingMethods } from 'src/app/utillpackage/my-routing-methods';
import { MyCookies } from 'src/app/utillpackage/my-cookies';
import { MyConstants } from 'src/app/utillpackage/constant';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  Tag = "FullComponent";

  showprofile = false;
  showSideBar = false;
  topHeading: string;
  menu: Array<any>;
  user_Name: any;
  showBackButtun = false;
  searchTerm: string = "";
  profilePic: any;
  mobileView = false;

  constructor(public router: Router, public cookiesService: CookieService, public navBarService: SidebarService, public adminServiceService: AdminServiceService,
    public ngzone: NgZone) {
    this.showprofile = false
    this.showSideBar = false
    this.showBackButtun = false;
    this.mobileView = false;
    this.menu = [];
    this.user_Name = "";
    // Set Menu List From Side Bar Service 
    this.menu = this.navBarService.getMenuList()
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {

        this.checkAndSetValue()

      }
    });
    this.user_Name = "Admin"
  }


  ngOnInit(): void {
    this.adminServiceService.currentProfilePic.subscribe(profilePicUrl => {
      this.profilePic = profilePicUrl;
      if (profilePicUrl == '') {
        this.profilePic = this.cookiesService.get('profilePic');
      }
      if (!this.profilePic) {
        this.profilePic = "./assets/imgs/default-admin.jpg";
      }
      else {
        this.profilePic = MyConstants.serverURL + this.profilePic;
      }
    });
  }

  /**
   * 
   * Profile Dialog Show Image
   * 
   */
  showProflieDown() {
    this.showprofile = !this.showprofile;
  }
  /**End */

  /**
 * 
 * Menue Toggle Image
 * 
 */

  menueToggle() {
    if (this.showSideBar == false) {
      this.showSideBar = true;
    } else {
      this.showSideBar = false;
    }
  }

  toggleButton() {
    this.mobileView = !this.mobileView;

  }


  /**
   * 
   * Get Top HEading Function 
   * 
   */

  checkAndSetValue() {
    this.showprofile = false
    this.ngzone.run(() => {
      this.topHeading = ""
      var currentUrl = this.router.url
      var matched = false
      this.menu.forEach((element, index) => {
        element.status = "inactive"
        if (!matched) {
          if (currentUrl == element.url) {
            matched = true
            // this.toggleButton();
            this.topHeading = element.title
            element.status = "active"

          }
        } else {
          element.status = "inactive"
        }
        // element.urlTitleList.forEach(pageInnerUrls => {
        //   if (!matched) {
        //     if (currentUrl.includes(pageInnerUrls.url)) {
        //       matched = true
        //       this.topHeading = pageInnerUrls.title
        //       element.status = "active"
        //     }
        //   }
        // });
        // element.innerOptions.forEach((innerElement, innerIndex) => {
        //   innerElement.status = "inactive"


        //   if (!matched) {

        //     if (currentUrl == "/" + innerElement.url) {
        //       matched = true
        //       this.topHeading = innerElement.title
        //       innerElement.status = "active"
        //       element.status = "active"
        //       this.currentInnermenuIndex = innerIndex
        //       this.currentmenuIndex = index
        //       // CommonMethods.showconsole(this.Tag, "Status:- " + element.status)
        //       CommonMethods.showconsole(this.Tag, "Current main Menu Index :- " + index)
        //       CommonMethods.showconsole(this.Tag, "Current main inner Menu Index :- " + innerIndex)
        //     }
        //   }
        //   innerElement.urlTitleList.forEach(pageInnerUrls => {
        //     if (!matched) {
        //       if (currentUrl.includes(pageInnerUrls.url) ) {
        //         matched = true
        //         this.topHeading = pageInnerUrls.title
        //         innerElement.status = "active"
        //         element.status = "active"
        //       }
        //     }
        //   });
        // })
      })

    })
  }

  /**End */




  gotoRouting(index) {
    this.toggleButton()
    this.router.navigate([this.menu[index].url]);
    this.topHeading = this.menu[index].title
  }
  // gotoSubmenuPage(oterindex: number, innerindex: number) {

  //   this.router.navigate(['/' + this.menus[oterindex].innerOptions[innerindex].url])
  //   this.topHeading = this.menus[oterindex].innerOptions[innerindex].title
  // }






  /**
   * Logout Function
   */
  logout() {
    MyCookies.deletecookies(this.cookiesService);
    MyRoutingMethods.gotoLogin(this.router);
  }
  /**End */


  /**
   * Toggle Css CHnage 
   */
  getCustomCss() {
    if (this.showSideBar == true) {
      return 'fa-toggle-off'

    } else {
      return 'fa-toggle-on'
    }
  }

  /**Ng Class Icon Set */
  setNgClass(className) {
    return className;
  }
  /**End */

}
