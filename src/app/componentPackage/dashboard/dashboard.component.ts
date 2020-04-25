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
  Tag = "DashboardComponent"
  public searchString: string = "";
  modalReference: NgbModalRef;
  public adsList: Array<AdvertisementModel> = [];
  showTable = false
  public title: string;
  public mHeading: string;
  public cHeading: string;
  public body: string;
  public contectNo: number;
  public modalHeading: string;
  public showbutton: string;
  public currentSelectedAdId: string = '';
  public methodToCall: string = '';
  public nextButton = false;
  public previousButton = false;
  public pageNumber: number;
  public pageLimit: number;
  public paggination: Array<any>;
  public isLoadingPaggition = false;
  public lastPageNumber:number;


  constructor(public snackBar: MatSnackBar, public spinner: NgxSpinnerService,
    public cookiesService: CookieService, public router: Router, public adminServiceService: AdminServiceService, public modalService: NgbModal) {
    this.showTable = false;
    this.adsList = [];
    this.modalHeading = "";
    this.showbutton = "";
    this.previousButton = true;
    this.nextButton = false;
    this.pageNumber = 1;
    this.pageLimit = 6;
    this.paggination = [];
    this.lastPageNumber=0;
    this.isLoadingPaggition = false

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
  getAdvertisment(searchTerm?: string) {
    this.adsList = [];
    // if (searchTerm || searchTerm == '') {
    //   this.searchString = searchTerm;
    // }

    //  if(this.searchString.trim().length !=0)
    //  {
    //   this.isLoadingPaggition=false;
    //  }
    this.spinner.show();
    this.adminServiceService.getAdvertisement(this.searchString, this.pageNumber).subscribe(response => {
      if (response.success) {
        CommonMethods.showconsole(this.Tag, "array:- " + JSON.stringify(response.countDocument))
        this.adsList = response.data;
        this.showTable = true;
        if (this.adsList.length == 0) {
          this.showTable = false;
        }

        if (this.pageNumber == response.totalPages) {
          this.nextButton = true
        }
        else {
          this.nextButton = false
        }
        this.lastPageNumber=response.totalPages;
        if (this.isLoadingPaggition == false) {
          this.paggination=[];
           CommonMethods.showconsole(this.Tag,"Function Is woking Once Time ")
          
          for (var i = 0; i < response.totalPages; i++) {
            // CommonMethods.showconsole(this.Tag, "Paggition " + i)
            var state = false;
            if (i == 0) {
              state = true
            }
            this.paggination.push({
              "pageNo": i + 1,
              "status": state
            });
          }
          this.isLoadingPaggition = true;
        }
        CommonMethods.showconsole(this.Tag, "Array :- " + JSON.stringify(this.paggination))
        this.spinner.hide();
      }
      else {
        MyCookies.deletecookies(this.cookiesService);
        MyRoutingMethods.gotoLogin(this.router);
      }
      setTimeout(() => {
        this.spinner.hide();
      }, 200);
    });
  }


  clickOnshowAll(){
    this.pageNumber=1;
    this.searchString=""
     CommonMethods.showconsole(this.Tag,"isLoadingPaggition:- "+this.isLoadingPaggition)
     this.isLoadingPaggition=false;
     CommonMethods.showconsole(this.Tag,"after isLoadingPaggition:- "+this.isLoadingPaggition)
    this.getAdvertisment("");
  }
  
onKeypressSearch(){
  this.pageNumber=1;
  this.isLoadingPaggition=false;
  CommonMethods.showconsole(this.Tag,"after isLoadingPaggition:- Function IS working  "+this.isLoadingPaggition)
  this.getAdvertisment("");
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
    if (this.modalHeading.match("Update Promotions")) {
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

  AddModalFuntion(content, onclickButton: string, ad?: AdvertisementModel) {
    if (onclickButton == 'addPromotions') {
      this.modalHeading = "Add Promotion";
      this.showbutton = "Add";
      this.methodToCall = 'createAdvertisement()';
    } else {
      this.setSelectedAd(ad);
      this.modalHeading = "Update Promotion";
      this.showbutton = "Update";
      this.methodToCall = 'updateSelectedAd()';
    }
    this.openModal(content);
  }


  /**
   * method to Add Advertismnet
   */
  createAdvertisement() {
    this.spinner.show();
    let advertisementModel = new AdvertisementModel();
    advertisementModel.name = this.title;
    advertisementModel.mainContent = this.mHeading + "%" + this.cHeading + "%" + this.body;
    advertisementModel.phone = this.contectNo;
    this.adminServiceService.createAdvertisement(advertisementModel).subscribe(response => {
      if (response.success) {
        this.JoinAndClose()
        CommonMethods.showSuccessDialog(this.snackBar, response.message);
        this.reset();
        setTimeout(() => {
          this.isLoadingPaggition=false;
          this.getAdvertisment()
        }, 100);
      }
      else {
        CommonMethods.showErrorDialog(this.snackBar, response.message);
      }
      this.spinner.hide();
    });
  }

  /**
   * method to delete selected Ad
   */
  deleteAdvertisement() {
    this.spinner.show();
    this.adminServiceService.deleteAdvertisement(this.currentSelectedAdId).subscribe(response => {
      this.JoinAndClose()
      if (response.success) {
        CommonMethods.showSuccessDialog(this.snackBar, response.message);
        this.isLoadingPaggition=false
        this.getAdvertisment();
      }
      else {
        CommonMethods.showErrorDialog(this.snackBar, response.message);
      }
      this.spinner.hide();
    });
  }

  /**
   * method to call delete modal
   * @param deletemodal delete modal content
   * @param deleteId selected ad id
   */
  deleteModalCall(deletemodal, deleteId: any) {
    this.deleteModal(deletemodal);
    this.currentSelectedAdId = deleteId;
  }

  /**
   * method to reset all variables of add ad modal
   */
  reset() {
    this.title = '';
    this.mHeading = '';
    this.cHeading = '';
    this.body = '';
    this.contectNo = null;
  }

  /**
   * method to set current selected advertisement
   * @param currentSelectedAdModel selected ad
   */
  setSelectedAd(currentSelectedAdModel: AdvertisementModel) {
    this.currentSelectedAdId = currentSelectedAdModel._id;
    this.title = currentSelectedAdModel.name;
    let mainContentArray = this.createContent(currentSelectedAdModel.mainContent);
    this.mHeading = mainContentArray[0];
    this.cHeading = mainContentArray[1];
    this.body = mainContentArray[2];
    this.contectNo = currentSelectedAdModel.phone;
  }

  /**
   * method to update current selected Ad
   */
  updateSelectedAd() {
    this.spinner.show();
    let advertisementModel = new AdvertisementModel();
    advertisementModel.advertiseId = this.currentSelectedAdId;
    advertisementModel.name = this.title;
    advertisementModel.mainContent = this.mHeading + "%" + this.cHeading + "%" + this.body;
    advertisementModel.phone = this.contectNo;
    this.adminServiceService.updateAdvertisement(advertisementModel).subscribe(response => {
      if (response.success) {
        this.JoinAndClose()
        CommonMethods.showSuccessDialog(this.snackBar, response.message);
        this.reset();
        setTimeout(() => {
          this.getAdvertisment()
        }, 100);
      }
      else {
        CommonMethods.showErrorDialog(this.snackBar, response.message);
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


  /**
   *   Previous  Click Function
   */
  previous() {
    this.pageNumber--;
    this.pageNumberClick(this.pageNumber)
  }
  /**
   * End
   */
  /**
   *   next  Click Function
   */
  next() {
    this.previousButton = false;
    this.pageNumber++;
    this.pageNumberClick(this.pageNumber)
  }
  /**
   * End
   */

  /**
   * Page Number Click
   */
  pageNumberClick(currentPageNumber: number) {
    this.pageNumber = 0;

    CommonMethods.showconsole(this.Tag, "Page Number :- " + currentPageNumber);
    for (var i = 0; i < this.paggination.length; i++) {
      if (this.paggination[i].pageNo == currentPageNumber) {
        this.paggination[i].status = true;
      } else {
        this.paggination[i].status = false;
      }
    }
    this.pageNumber = currentPageNumber;
     if(this.pageNumber == 1)
     {
        this.previousButton =true;
     }else{
      this.previousButton =false;
     }
      if(this.pageNumber  ==  this.lastPageNumber)
      {
        this.nextButton = true
      }else{
        this.nextButton=false
      }
    this.getAdvertisment();

  }

}
