import { Component, OnInit } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonMethods } from 'src/app/commonmethod/common-method';
import { MyRoutingMethods } from 'src/app/utillpackage/my-routing-methods';
import { MyCookies } from 'src/app/utillpackage/my-cookies';
import { CookiesModel } from 'src/app/modalPackages/cookies';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MyConstants } from 'src/app/utillpackage/constant';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {

  Tag="ShowProfileComponent";
  imageurl:any;
  modalReference:NgbModalRef;
  selectedImageUrl:File ;
  public oldPwd:string;
  public newPwd:string;
  public confirmPwd:string;

  public userName:string;
  public email:string;

  constructor(public modalService:NgbModal,public snackBar: MatSnackBar, public router: Router, public adminServiceService: AdminServiceService,
    public cookiesService:CookieService,public spiner:NgxSpinnerService) {
    this.selectedImageUrl=null;
    this.checkLoginMethod();
    this.imageurl=this.cookiesService.get('profilePic');
    if(!this.imageurl){
      this.imageurl="./assets/imgs/default-admin.jpg";
    }
    else{
      this.imageurl=MyConstants.serverURL+this.imageurl;
    }
   }
  
  ngOnInit(): void {
  }

  /**Check Login */
  checkLoginMethod() {
    let logincheck = MyCookies.checkLoginStatus(this.cookiesService);
    if (logincheck) {
      this.email=MyCookies.getEmaild(this.cookiesService);
      // this.email=MyCookies
    } else {
      MyRoutingMethods.gotoLogin(this.router);
    }
  }


  onSelectFile(event) {
  
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (innerEvent) => {
        this.imageurl = (<FileReader>innerEvent.target).result;

        this.selectedImageUrl = event.target.files[0];
        const adminDetails: FormData = new FormData();
        adminDetails.append('file', this.selectedImageUrl, this.selectedImageUrl.name);
        this.updateAdminDetails(adminDetails);
      }
    }
  }

  /**
        * 
        * Open  Modal Function 
        */
  openModal(content) {
    this.modalReference = this.modalService.open(content, { centered: true });
    this.modalReference.result.then((result) => { }, (reson) => {
      this.reset();
    });
    //  this. modalReference.componentInstance.actionMessage = this.actionmessage;
  }

  /**
   * 
   * close Modal Function 
   */
  JoinAndClose() {
    if (this.modalReference) {
      this.reset();
      this.modalReference.close();
    }
  }

  showProileModal(content){
    this.openModal(content);
  }


  // CHnage Proilfe 
  updatePassword() {
    if (this.newPwd.toString() != '' && this.newPwd.toUpperCase() == this.confirmPwd.toUpperCase()
      &&  this.oldPwd !='' && this.newPwd.toUpperCase() != this.oldPwd.toUpperCase()) {
      this.spiner.show();
      let adminDetails: any = {};
      adminDetails.oldPassword = this.oldPwd;
      adminDetails.newPassword = this.newPwd;
      this.adminServiceService.updateDetails(adminDetails).subscribe(response => {
        this.JoinAndClose();
        if (response.success) {
          this.spiner.hide();
          CommonMethods.showSuccessDialog(this.snackBar, response.message);
          MyCookies.deletecookies(this.cookiesService);
          MyRoutingMethods.gotoLogin(this.router);
          CommonMethods.showSuccessDialog(this.snackBar, response.message + " please Login Again");
        }
        else {
          this.spiner.hide();
          CommonMethods.showErrorDialog(this.snackBar, response.message);
        }
      });
    } else {
      if (this.newPwd.toString() == '') {
        CommonMethods.showErrorDialog(this.snackBar, "Password field can't be empty.");
      }
      else if(this.newPwd.toUpperCase() == this.oldPwd.toUpperCase()){
        CommonMethods.showErrorDialog(this.snackBar, "New Password can't be same as Old Password");
      }
      else{
        CommonMethods.showErrorDialog(this.snackBar, "Oops, New Password & Confirm Password are not same");
      }
      this.JoinAndClose();
    }

  }

  /**
   * method to update admin details
   * @param adminDetails updated admin details object
   */
  updateAdminDetails(adminDetails:any){
    this.spiner.show();
    this.adminServiceService.updateDetails(adminDetails).subscribe(response =>{
      this.spiner.hide();
      if(response.success){
        this.adminServiceService.setCurrentProfilePic(this.cookiesService.get('profilePic'));
        CommonMethods.showSuccessDialog(this.snackBar,response.message);
      }
      else{
        CommonMethods.showErrorDialog(this.snackBar,response.message);
      }
    });
  }

  /**
   * method to reset all variables of admindetail object
   */
  reset(){
    this.oldPwd = '';
    this.newPwd = '';
    this.confirmPwd = '';
  }
}
