import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { AdvertisementModel } from 'src/app/modalPackages/advertisement';
import { CommonMethods } from 'src/app/commonmethod/common-method';
import { MyRoutingMethods } from 'src/app/utillpackage/my-routing-methods';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public searchString:string="";
  public AdsList:Array<AdvertisementModel>=[];
  constructor(public snackBar: MatSnackBar, public router: Router, public adminServiceService: AdminServiceService) { }

  ngOnInit(): void {
    this.adminServiceService.getAdvertisement(this.searchString).subscribe(response =>{
      CommonMethods.showconsole("all ads list",response);
      if(response.success){
       this.AdsList=response.data;
      }
    });
  }

  showAds(){
    // this.
  }
}
