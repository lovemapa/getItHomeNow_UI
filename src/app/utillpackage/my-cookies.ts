import { CookieService } from "ngx-cookie-service";
import { CommonMethods } from '../commonmethod/common-method';
import { CookiesModal } from '../modalPackages/cookies';


export class MyCookies {
 
    static saveLoginDataInCookies(cookieService: CookieService, cookiesModal:CookiesModal) {
        cookieService.set('UserId',cookiesModal.userId, 365,'/');
        cookieService.set('Session',cookiesModal.session, 365,'/');
        cookieService.set('Auth',cookiesModal.auth, 365,'/');
        cookieService.set('AccountType',cookiesModal.accountType, 365,'/');
        cookieService.set('UserPublicId',cookiesModal.userPublidId, 365,'/');
        cookieService.set('userName', cookiesModal.fullName, 365,'/');
      
    }
  

    static checkLoginStatus(cookieService: CookieService): boolean {
        var cookieExists: boolean = cookieService.check('UserId')
        cookieExists = cookieService.get('UserId') != ""
        if (cookieExists) {
            cookieExists = cookieService.check('Auth');
            cookieExists = cookieService.get('Auth') != ""
            if (cookieExists) {
                cookieExists = cookieService.check('Session');
                cookieExists = cookieService.get('Session') != ""
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

    static getUserId(cookieService: CookieService): string {
        return cookieService.get('UserId');
    }
    static getUserPublicId(cookieService: CookieService): string {
        return cookieService.get('UserPublicId');
    }
    static getUserName(cookieService: CookieService): string {
        return cookieService.get('userName');
    }
    static getUserType(cookieService: CookieService): string {
        return cookieService.get('AccountType');
    }
    static getAuthorization(cookieService: CookieService): string {
        return cookieService.get('Auth');
    }
    static getSessionTime(cookieService: CookieService): string {
        return cookieService.get('Session');
    }
   

    static getExpiryTime() {
        let date = new Date()
        date.setDate(date.getDate() +1)
        return date
    }

    static deletecookies(cookieService: CookieService) {
         CommonMethods.showconsole("MyCookies"," Function is working  into cookies method ")
        cookieService.deleteAll();

    }
}