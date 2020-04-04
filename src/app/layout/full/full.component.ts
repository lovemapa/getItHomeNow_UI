import { Component, OnInit, NgZone } from '@angular/core';
import { CommonMethods } from 'src/app/commonmethod/common-method';
import { Router, NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { MyRoutingMethods } from 'src/app/utillpackage/my-routing-methods';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  Tag = "FullComponent"

  showprofile = false
  showSideBar = false
  topHeading: string
  menu: Array<any>
  user_Name: any
  showBackButtun=false;

  constructor(public router: Router, public cookiesService: CookieService, public navBarService: SidebarService,
    public ngzone: NgZone) {
    this.showprofile = false
    this.showSideBar = false
    this.showBackButtun=false;
    this.menu = []
    this.user_Name = ""
    // Set Menu List From Side Bar Service 
    this.menu = this.navBarService.getMenuList()
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {

        this.checkAndSetValue()

      }
    })

    this.user_Name = "Avinash Kumar"

  }


  ngOnInit(): void {
  }

  /**
   * 
   * Profile Dialog Show Image
   * 
   */

  showProflieDown() {
    if (this.showprofile == false) {
      this.showprofile = true;
    } else {
      this.showprofile = false;
    }

  }
  /**End */

  /**
 * 
 * Menue Toggle Image
 * 
 */

  menueToggle() {
    CommonMethods.showconsole(this.Tag, "Working")

    if (this.showSideBar == false) {
      this.showSideBar = true;
    } else {
      this.showSideBar = false;
    }
  }


  /**
   * 
   * Get Top HEading Function 
   * 
   */

  checkAndSetValue() {
    CommonMethods.showconsole(this.Tag, "  checkAndSetValue() ")
    this.ngzone.run(() => {
      this.topHeading = ""
      var currentUrl = this.router.url
      CommonMethods.showconsole(this.Tag, "Current Url:- " + currentUrl)

      var matched = false
      this.menu.forEach((element, index) => {
        element.status = "inactive"
        if (!matched) {
          CommonMethods.showconsole(this.Tag, "Show Element url:- " + element.url)
          if (currentUrl == element.url) {
            matched = true
            this.topHeading = element.title
            element.status = "active"
            // CommonMethods.showconsole(this.Tag, "Current main Menu Index :- " + this.currentmenuIndex)
            // CommonMethods.showconsole(this.Tag, "Current main Menu Index :- " + this.currentmenuIndex)

          }
        } else {
          element.status = "inactive"
        }
        element.urlTitleList.forEach(pageInnerUrls => {
          this.showBackButtun=true;
          if (!matched) {
            CommonMethods.showconsole(this.Tag, "fdasa Working")
            if (currentUrl.includes(pageInnerUrls.url)) {
              matched = true
             
              this.topHeading = pageInnerUrls.title
              element.status = "active"
            }
          }
        });
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
    CommonMethods.showconsole(this.Tag, "Urls" + this.menu[index].url)
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
    CommonMethods.showconsole(this.Tag, "Logout Function is working");

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
