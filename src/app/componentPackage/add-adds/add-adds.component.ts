import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { AdvertisementModel } from 'src/app/modalPackages/advertisement';
import { CommonMethods } from 'src/app/commonmethod/common-method';
import { MyRoutingMethods } from 'src/app/utillpackage/my-routing-methods';

@Component({
  selector: 'app-add-adds',
  templateUrl: './add-adds.component.html',
  styleUrls: ['./add-adds.component.css']
})
export class AddAddsComponent implements OnInit {

  public title:string;
  public mHeading:string;
  public cHeading:string;
  public body:string;
  public contectNo:number;
  public advertisementModel:AdvertisementModel;

  constructor(public snackBar: MatSnackBar, public router: Router, public adminServiceService: AdminServiceService) { }

  ngOnInit(): void {
  }

  createAdvertisement(){
    
    this.advertisementModel= new AdvertisementModel();
    this.advertisementModel.name=this.title;
    this.advertisementModel.mainContent=this.mHeading+"%"+this.cHeading+"%"+this.body;
    this.advertisementModel.phone=this.contectNo;
    this.adminServiceService.createAdvertisement(this.advertisementModel).subscribe(response =>{
      if(response.success){
        CommonMethods.showSuccessDialog(this.snackBar,response.message);
        MyRoutingMethods.gotoAds(this.router);
      }
      else{
        CommonMethods.showErrorDialog(this.snackBar,response.message);
      }
    })

    
  }
}
