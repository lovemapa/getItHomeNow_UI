import { CookieService } from "ngx-cookie-service";
import { CommonMethods } from '../commonmethod/common-method';
import { CookiesModel } from '../modalPackages/cookies';


export class MyCookies {
 
    static saveLoginDataInCookies(cookieService: CookieService, cookiesModel:CookiesModel) {
        cookieService.set('_id',cookiesModel._id,1,'/');
        cookieService.set('email',cookiesModel.email,1,'/');
        cookieService.set('token',cookiesModel.token,1,'/');
        cookieService.set('profilePic',cookiesModel.profilePic,1,'/');
        cookieService.set('contact',cookiesModel.contact,1,'/');
        
    }
  

    static checkLoginStatus(cookieService: CookieService): boolean {
        var cookieExists: boolean = cookieService.check('_id');
        cookieExists = cookieService.get('_id') != "";
        if (cookieExists) {
            cookieExists = cookieService.check('email');
            cookieExists = cookieService.get('email') != "";
            if (cookieExists) {
                cookieExists = cookieService.check('token');
                cookieExists = cookieService.get('token') != "";
                if (cookieExists) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    static getId(cookieService: CookieService): string {
        return cookieService.get('_id');
    }
    static getEmaild(cookieService: CookieService): string {
        return cookieService.get('email');
    }
    static getToken(cookieService: CookieService): string {
        return cookieService.get('token');
    }
       

    static getExpiryTime() {
        let date = new Date();
        date.setDate(date.getDate() +1);
        return date;
    }

    static deletecookies(cookieService: CookieService) {
        cookieService.deleteAll();

    }
}