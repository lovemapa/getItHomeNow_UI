import { Injectable } from '@angular/core';
import { MyCookies } from '../utillpackage/my-cookies';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Observable, BehaviorSubject } from 'rxjs';
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
  private updateAdminPwdUrl: string = MyConstants.BASEURL + "admin/updateProfile";


  private userId: string;
  private token: string;
  header: HttpHeaders;
  userIdRequestParam: HttpParams;

  private profilePic = new BehaviorSubject<string>('');
  readonly currentProfilePic=this.profilePic.asObservable();

  constructor(private http: HttpClient, public cookiesServices: CookieService) { }


  setCurrentProfilePic(profilePicUrl:string){
    this.profilePic.next(profilePicUrl);
  }

  getCurrentProfilePic(): Observable<string>{
    return this.profilePic.asObservable();
  }
  
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
          this.profilePic.next(this.cookiesServices.get('profilePic'));
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
    * @param advertiseId advertisement Id
   */
  deleteAdvertisement(advertiseId: string): Observable<any> {
    //for setting token in headers
    this.setHeader();
    const httpOptions = {
      headers: this.header
    };
    let data: any = {};
    data.advertiseId = advertiseId;
    return this.http.patch(this.deleteAdvertisementUrl, data, httpOptions);
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
    let searchurl:string='';
    searchurl=this.getAdvertisementUrl+searchString;
    return this.http.get(searchurl, httpOptions);
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
    return this.http.patch<any>(this.updateAdminPwdUrl, adminDetails, httpOptions).pipe(map(response=>{
      if (response.success && response.data.token) {
        MyCookies.saveLoginDataInCookies(this.cookiesServices, new CookiesModel(response.data));
        this.profilePic.next(this.cookiesServices.get('profilePic'));
      }
      return response;
    }));

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
