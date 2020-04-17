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
  public modalHeading:string;
  public showbutton:string;
  public currentSelectedAdId:string = '';
  public methodToCall:string = '';


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
      this.getAdvertisment();
    } else {
      MyRoutingMethods.gotoLogin(this.router);
    }
  }

/**GEt AdverTisMEnt List */
  getAdvertisment(searchTerm?:string){
    if(searchTerm || searchTerm == ''){
      this.searchString=searchTerm;
    }
    this.spinner.show();
    this.adminServiceService.getAdvertisement(this.searchString).subscribe(response => {
      if (response.success) {
        this.adsList = response.data;
        this.showTable = true;
        if(this.adsList.length==0){
          this.showTable=false;
        }
      }
      else {
        MyCookies.deletecookies(this.cookiesService);
        MyRoutingMethods.gotoLogin(this.router);
      }
      this.spinner.hide();
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
  openModal(content, context?: string) {
    this.modalReference = this.modalService.open(content, { centered: true });
    if (this.modalHeading.match("Update Advertisement")) {
      this.modalReference.result.then((result) => { }, (reson) => {
        this.reset();
      });
    }
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
    this.reset();
  }


  /**CallIng Modal Function */

  AddModalFuntion(content,onclickButton:string,ad?:AdvertisementModel) 
  {
     if(onclickButton == 'addAddvertisment'){
      this.modalHeading="Add Advertisement";
      this.showbutton="Add";
      this.methodToCall='createAdvertisement()';
     }else{
      this.setSelectedAd(ad);
      this.modalHeading="Update Advertisement";
      this.showbutton="Update";
      this.methodToCall='updateSelectedAd()';
     }
    this.openModal(content);
  }


  /**
   * method to Add Advertismnet
   */
  createAdvertisement(){
    this.spinner.show();
    let advertisementModel= new AdvertisementModel();
    advertisementModel.name=this.title;
    advertisementModel.mainContent=this.mHeading+"%"+this.cHeading+"%"+this.body;
    advertisementModel.phone=this.contectNo;
    this.adminServiceService.createAdvertisement(advertisementModel).subscribe(response =>{
      if(response.success){
        this.JoinAndClose()
        CommonMethods.showSuccessDialog(this.snackBar,response.message);
        this.reset();
        setTimeout(() => {
          this.getAdvertisment()
        }, 100);
      }
      else{
        CommonMethods.showErrorDialog(this.snackBar,response.message);
      }
      this.spinner.hide();
    });
  }

  /**
   * method to delete selected Ad
   */
  deleteAdvertisement(){
    this.spinner.show();
    this.adminServiceService.deleteAdvertisement(this.currentSelectedAdId).subscribe(response => {
      this.JoinAndClose()
      if (response.success) {
        CommonMethods.showSuccessDialog(this.snackBar,response.message);
        this.getAdvertisment();
      }
      else{
        CommonMethods.showErrorDialog(this.snackBar,response.message);
      }
      this.spinner.hide();
    });
  }

  /**
   * method to call delete modal
   * @param deletemodal delete modal content
   * @param deleteId selected ad id
   */
  deleteModalCall(deletemodal,deleteId:any){
    this.deleteModal(deletemodal);
    this.currentSelectedAdId = deleteId;
  }

  /**
   * method to reset all variables of add ad modal
   */
  reset(){
    this.title='';
    this.mHeading='';
    this.cHeading='';
    this.body='';
    this.contectNo=null;
  }

  /**
   * method to set current selected advertisement
   * @param currentSelectedAdModel selected ad
   */
  setSelectedAd(currentSelectedAdModel:AdvertisementModel){
    this.currentSelectedAdId=currentSelectedAdModel._id;
    this.title=currentSelectedAdModel.name;
    let mainContentArray=this.createContent(currentSelectedAdModel.mainContent);
    this.mHeading=mainContentArray[0];
    this.cHeading=mainContentArray[1];
    this.body=mainContentArray[2];
    this.contectNo=currentSelectedAdModel.phone;
  }

  /**
   * method to update current selected Ad
   */
  updateSelectedAd(){
    this.spinner.show();
    let advertisementModel= new AdvertisementModel();
    advertisementModel.advertiseId=this.currentSelectedAdId;
    advertisementModel.name=this.title;
    advertisementModel.mainContent=this.mHeading+"%"+this.cHeading+"%"+this.body;
    advertisementModel.phone=this.contectNo;
    this.adminServiceService.updateAdvertisement(advertisementModel).subscribe(response =>{
      if(response.success){
        this.JoinAndClose()
        CommonMethods.showSuccessDialog(this.snackBar,response.message);
        this.reset();
        setTimeout(() => {
          this.getAdvertisment()
        }, 100);
      }
      else{
        CommonMethods.showErrorDialog(this.snackBar,response.message);
      }
      this.spinner.hide();
    });
  }

  /**
   * method to call specific method
   * @param methodName method to call
   */
  hitRequiredFunction(methodName: string) {
    if (methodName != '') {
      if (methodName.match('update')) {
        this.updateSelectedAd();
      }
      else {
        this.createAdvertisement();
      }
    }
  }
}
