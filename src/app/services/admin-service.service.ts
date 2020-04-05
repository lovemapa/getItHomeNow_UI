import { Injectable } from '@angular/core';
import { MyCookies } from '../utillpackage/my-cookies';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { MyConstants } from '../utillpackage/constant';
import { CommonMethods } from '../commonmethod/common-method';
import { CookiesModel } from '../modalPackages/cookies';
import { AdvertisementModel } from '../modalPackages/advertisement';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private loginUrl: string = MyConstants.BASEURL + "admin/login";
  private createAdvertisementUrl: string = MyConstants.BASEURL + "admin/createAdvertisement";
  private updateAdvertisementUrl: string = MyConstants.BASEURL + "admin/updateAdvertisment";
  private deleteAdvertisementUrl: string = MyConstants.BASEURL + "admin/deleteAdvertisment";
  private getAdvertisementUrl: string = MyConstants.BASEURL + "admin/getAdvertisments?name=";
  private userForgotPasswordUrl: string = MyConstants.BASEURL + "admin/forget-password";
  private updateAdminPwdUrl: string = MyConstants.BASEURL + "admin/changePassword";


  private userId: string;
  private token: string;
  header: HttpHeaders;
  userIdRequestParam: HttpParams;


  constructor(private http: HttpClient, public cookiesServices: CookieService) { }


  /**
    * method to set token for header
    */
  setHeader() {
    this.userId = MyCookies.getId(this.cookiesServices);
    this.token = MyCookies.getToken(this.cookiesServices);
    this.header = new HttpHeaders().append('token', this.token);
    this.userIdRequestParam = new HttpParams().set("_id", this.userId);
  }

  /**
   * method to login for admin
   * @param username username to login
   * @param password password to login
   */
  adminLoginAPI(username: string, password: string): Observable<any> {
    let data: any = {};
    data.email = username;
    data.password = password;
    return this.http.post<any>(this.loginUrl, data)
      .pipe(map(response => {
        CommonMethods.showconsole("login", response);
        // login successful if there's a token in thedata response
        if (response.success && response.data.token) {
          MyCookies.saveLoginDataInCookies(this.cookiesServices, new CookiesModel(response.data));
        }
        return response;
      }));
  }

  /**
   * method to create new advertisement
   * @param adData AdvertisementModel
   */
  createAdvertisement(adData: AdvertisementModel): Observable<any> {
    //for setting token in headers
    this.setHeader();
    const httpOptions = {
      headers: this.header
    };
    return this.http.post(this.createAdvertisementUrl, adData, httpOptions);
  }

  /**
    * method to update advertisement
    * @param adData AdvertisementModel
  */
  updateAdvertisement(adData: AdvertisementModel): Observable<any> {
    //for setting token in headers
    this.setHeader();
    const httpOptions = {
      headers: this.header
    };
    return this.http.patch(this.updateAdvertisementUrl, adData, httpOptions);
  }

  /**
    * mw=ethod to create new advertisement
    * @param adId advertisement Id
   */
  deleteAdvertisement(adId: string): Observable<any> {
    //for setting token in headers
    this.setHeader();
    const httpOptions = {
      headers: this.header
    };
    return this.http.patch(this.deleteAdvertisementUrl, adId, httpOptions);
  }

  /**
    * mw=ethod to create new advertisement
    * @param searchString string to search in advertisements
  */
  getAdvertisement(searchString: string): Observable<any> {
    //for setting token in headers
    this.setHeader();
    const httpOptions = {
      headers: this.header
    };
    this.getAdvertisementUrl=this.getAdvertisementUrl+searchString;
    return this.http.get(this.getAdvertisementUrl, httpOptions);
  }

  /**
    * method to update admin details
    * @param adminDetails admin details to update
   */
  updateDetails(adminDetails: any): Observable<any> {
    //for setting token in headers
    this.setHeader();
    const httpOptions = {
      headers: this.header
    };
    return this.http.patch(this.updateAdminPwdUrl, adminDetails, httpOptions);

  }

  /**
    * method for forgotpassword 
    * @param email email id to send reset link
  */
  forgotPassword(email: string): Observable<any> {
    let data: any = {};
    data.email = email;
    return this.http.post<any>(this.userForgotPasswordUrl, data)
      .pipe(map(data => {
        return data;
      }));
  }

}
