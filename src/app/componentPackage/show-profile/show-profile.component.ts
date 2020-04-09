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

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {

  Tag="ShowProfileComponent";
  imageurl:any;
  modalReference:NgbModalRef;
  selectedImageUrl:any;
  public oldPwd:string;
  public newPwd:string;
  public confirmPwd:string;

  public userName:string;
  public email:string;

  constructor(public modalService:NgbModal,public snackBar: MatSnackBar, public router: Router, public adminServiceService: AdminServiceService,
    public cookiesService:CookieService,public spiner:NgxSpinnerService) {
    this.imageurl="./assets/imgs/user.jpg" ;
    this.selectedImageUrl="";
    this.checkLoginMethod();
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
      }
    }
  }

  /**
        * 
        * Open  Modal Function 
        */
       openModal(content) {
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

  showProileModal(content){
    this.openModal(content);
  }


  // CHnage Proilfe 

  updateAdminDetails(){
    if(this.newPwd.toString()!='' && this.newPwd.toUpperCase().match(this.confirmPwd.toUpperCase())){
      this.spiner.show();
      let adminDetails:any={};
      adminDetails.oldPassword=this.oldPwd;
      adminDetails.newPassword=this.newPwd;
      this.adminServiceService.updateDetails(adminDetails).subscribe(response =>{
        if(response.success){
          this.spiner.hide();
          this.JoinAndClose();
          CommonMethods.showSuccessDialog(this.snackBar,response.message);
        }
        else{
          CommonMethods.showErrorDialog(this.snackBar,response.message);
        }
      });
    }else{
      if(this.newPwd.toString()==''){
        CommonMethods.showErrorDialog(this.snackBar,"Password field can't be empty.")
      }
      else{
        CommonMethods.showErrorDialog(this.snackBar,"Oops, that's not the same password as the first one");
      }
    }

  }
  
}
