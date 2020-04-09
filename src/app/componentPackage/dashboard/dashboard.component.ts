import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { AdvertisementModel } from 'src/app/modalPackages/advertisement';
import { CommonMethods } from 'src/app/commonmethod/common-method';
import { MyRoutingMethods } from 'src/app/utillpackage/my-routing-methods';
import { NgxSpinnerService } from 'ngx-spinner';
import { MyCookies } from 'src/app/utillpackage/my-cookies';
import { CookieService } from 'ngx-cookie-service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Tag="DashboardComponent"
  public searchString: string = "";
  modalReference: NgbModalRef;
  public adsList: Array<AdvertisementModel> = [];
  showTable = false

  public title:string;
  public mHeading:string;
  public cHeading:string;
  public body:string;
  public contectNo:number;
  public advertisementModel:AdvertisementModel;


  public modalHeading:string;
  public showbutton:string;

  constructor(public snackBar: MatSnackBar, public spinner: NgxSpinnerService,
    public cookiesService: CookieService, public router: Router, public adminServiceService: AdminServiceService, public modalService: NgbModal) {
    this.showTable = false;
    this.adsList=[]
    this.modalHeading="";
    this.showbutton="";
    this.checkLoginMethod();
  }

  ngOnInit(): void {

  }

 

  /**Check Login */
  checkLoginMethod() {
    let logincheck = MyCookies.checkLoginStatus(this.cookiesService);
    if (logincheck) {
      this.getAdvertisment()
    } else {
      MyRoutingMethods.gotoLogin(this.router);
    }
  }

/**GEt AdverTisMEnt List */
  getAdvertisment(){
    this.spinner.show();
    this.adminServiceService.getAdvertisement(this.searchString).subscribe(response => {
      CommonMethods.showconsole("all ads list", response);
      if (response.success) {
        this.adsList = response.data;

         CommonMethods.showconsole(this.Tag,"Show Array :- "+JSON.stringify(this.adsList))
        // setTimeout(() => {
          this.spinner.hide();
          this.showTable = true;
        // }, 1000);
      }
      else {
        this.spinner.hide();
        MyRoutingMethods.gotoLogin(this.router);
      }
    });
  }

  createContent(content: string): Array<string> {
    let contentArray: Array<string> = content.split("%");
    return contentArray;
  }

  /**
        * 
        * Open  Modal Function 
        */
  openModal(content) {
    this.modalReference = this.modalService.open(content, { centered: true });
    //  this. modalReference.componentInstance.actionMessage = this.actionmessage;
  }
  deleteModal(content) {
    this.modalReference = this.modalService.open(content, { centered: true });
    //  this. modalReference.componentInstance.actionMessage = this.actionmessage;
  }

  /**
   * 
   * close Modal Function 
   */

  JoinAndClose() {
    this.modalReference.close();
  }


  /**CallIng Modal Function */

  AddMOdalFuntion(content,onclickButton:any) 
  {
     if(onclickButton == 'addAddvertisment'){
      this.modalHeading="Add Advertisement";
      this.showbutton="Add";
     }else{
      this.modalHeading="Update Advertisement";
      this.showbutton="Update";
     }
    this.openModal(content)
  }


  /**
   * Add Advertismnet
   */

  createAdvertisement(){
    
    this.advertisementModel= new AdvertisementModel();
    this.advertisementModel.name=this.title;
    this.advertisementModel.mainContent=this.mHeading+"%"+this.cHeading+"%"+this.body;
    this.advertisementModel.phone=this.contectNo;
    this.adminServiceService.createAdvertisement(this.advertisementModel).subscribe(response =>{
      if(response.success){
        this.JoinAndClose()
        CommonMethods.showSuccessDialog(this.snackBar,response.message);
        setTimeout(() => {
          this.getAdvertisment()
        }, 100);
      }
      else{
        CommonMethods.showErrorDialog(this.snackBar,response.message);
      }
    })

    
  }


  deleteModalCall(deletemodal,deleteId:any){
     CommonMethods.showconsole(this.Tag,"Delete Id:= "+deleteId)
    this.deleteModal(deletemodal)
  }

}
