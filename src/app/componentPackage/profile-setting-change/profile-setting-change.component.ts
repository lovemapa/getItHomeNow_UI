import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { CommonMethods } from 'src/app/commonmethod/common-method';
import { MyRoutingMethods } from 'src/app/utillpackage/my-routing-methods';

@Component({
  selector: 'app-profile-setting-change',
  templateUrl: './profile-setting-change.component.html',
  styleUrls: ['./profile-setting-change.component.css']
})
export class ProfileSettingChangeComponent implements OnInit {

  private oldPwd:string;
  private newPwd:string;
  private confirmPwd:string;

  
  constructor(public snackBar: MatSnackBar, public router: Router, public adminServiceService: AdminServiceService) { }

  ngOnInit(): void {
  }

  updateAdminDetails(){
    if(this.newPwd.toString()!='' && this.newPwd.toUpperCase().match(this.confirmPwd.toUpperCase())){
      let adminDetails:any={};
      adminDetails.oldPassword=this.oldPwd;
      adminDetails.newPassword=this.newPwd;
      this.adminServiceService.updateDetails(adminDetails).subscribe(response =>{
        if(response.success){
          CommonMethods.showSuccessDialog(this.snackBar,response.message);
          MyRoutingMethods.gotoAds(this.router);
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
