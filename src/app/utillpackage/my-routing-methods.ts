
import { Router } from '@angular/router';


export class MyRoutingMethods {
    static gotoLogin(router: Router) {
        router.navigate(['home']);
    }
    static gotoAds(router: Router) {
        router.navigate(['promotions']);
    }
  
}