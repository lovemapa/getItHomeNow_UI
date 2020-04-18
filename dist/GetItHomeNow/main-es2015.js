(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _componentPackage_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentPackage/dashboard/dashboard.component */ "./src/app/componentPackage/dashboard/dashboard.component.ts");
/* harmony import */ var _componentPackage_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentPackage/login/login.component */ "./src/app/componentPackage/login/login.component.ts");
/* harmony import */ var _layout_full_full_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/full/full.component */ "./src/app/layout/full/full.component.ts");
/* harmony import */ var _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/blank/blank.component */ "./src/app/layout/blank/blank.component.ts");
/* harmony import */ var _componentPackage_add_adds_add_adds_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentPackage/add-adds/add-adds.component */ "./src/app/componentPackage/add-adds/add-adds.component.ts");
/* harmony import */ var _componentPackage_profile_setting_change_profile_setting_change_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentPackage/profile-setting-change/profile-setting-change.component */ "./src/app/componentPackage/profile-setting-change/profile-setting-change.component.ts");
/* harmony import */ var _componentPackage_show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentPackage/show-profile/show-profile.component */ "./src/app/componentPackage/show-profile/show-profile.component.ts");











const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _componentPackage_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    {
        path: '',
        component: _layout_full_full_component__WEBPACK_IMPORTED_MODULE_4__["FullComponent"],
        children: [
            { path: 'advertisment', component: _componentPackage_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
            { path: 'add/advertisment', component: _componentPackage_add_adds_add_adds_component__WEBPACK_IMPORTED_MODULE_6__["AddAddsComponent"] },
            { path: 'settings', component: _componentPackage_profile_setting_change_profile_setting_change_component__WEBPACK_IMPORTED_MODULE_7__["ProfileSettingChangeComponent"] },
            { path: 'show/profile', component: _componentPackage_show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_8__["ShowProfileComponent"] },
        ]
    },
    {
        path: '',
        component: _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_5__["BlankComponent"],
        children: [
            { path: 'login', component: _componentPackage_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
        ]
    },
    { path: '**', redirectTo: 'login' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'GetItHomeNow';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["bdOpacity", "0.1", "bdColor", "rgba(209, 127, 161, 0.26)", "size", "medium", "color", "#ff586b", "type", "ball-clip-rotate-pulse", "fullScreen", "true"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _componentPackage_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentPackage/login/login.component */ "./src/app/componentPackage/login/login.component.ts");
/* harmony import */ var _componentPackage_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentPackage/dashboard/dashboard.component */ "./src/app/componentPackage/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _material_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material/material */ "./src/app/material/material.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layout_full_full_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/full/full.component */ "./src/app/layout/full/full.component.ts");
/* harmony import */ var _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/blank/blank.component */ "./src/app/layout/blank/blank.component.ts");
/* harmony import */ var _componentPackage_add_adds_add_adds_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentPackage/add-adds/add-adds.component */ "./src/app/componentPackage/add-adds/add-adds.component.ts");
/* harmony import */ var _componentPackage_profile_setting_change_profile_setting_change_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentPackage/profile-setting-change/profile-setting-change.component */ "./src/app/componentPackage/profile-setting-change/profile-setting-change.component.ts");
/* harmony import */ var _componentPackage_show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componentPackage/show-profile/show-profile.component */ "./src/app/componentPackage/show-profile/show-profile.component.ts");






















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__["HashLocationStrategy"] },
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"],
            _material_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _componentPackage_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _componentPackage_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        _layout_full_full_component__WEBPACK_IMPORTED_MODULE_15__["FullComponent"],
        _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_16__["BlankComponent"],
        _componentPackage_add_adds_add_adds_component__WEBPACK_IMPORTED_MODULE_17__["AddAddsComponent"],
        _componentPackage_profile_setting_change_profile_setting_change_component__WEBPACK_IMPORTED_MODULE_18__["ProfileSettingChangeComponent"],
        _componentPackage_show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_19__["ShowProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"],
        _material_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _componentPackage_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _componentPackage_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                    _layout_full_full_component__WEBPACK_IMPORTED_MODULE_15__["FullComponent"],
                    _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_16__["BlankComponent"],
                    _componentPackage_add_adds_add_adds_component__WEBPACK_IMPORTED_MODULE_17__["AddAddsComponent"],
                    _componentPackage_profile_setting_change_profile_setting_change_component__WEBPACK_IMPORTED_MODULE_18__["ProfileSettingChangeComponent"],
                    _componentPackage_show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_19__["ShowProfileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"],
                    _material_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    },
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__["HashLocationStrategy"] },
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/commonmethod/common-method.ts":
/*!***********************************************!*\
  !*** ./src/app/commonmethod/common-method.ts ***!
  \***********************************************/
/*! exports provided: CommonMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonMethods", function() { return CommonMethods; });
class CommonMethods {
    static showconsole(tag, message) {
        console.log(tag, message);
    }
    /*
     *Show Error Dialog Message Common Method
     */
    static showErrorDialog(snackBar, message) {
        snackBar.open(message, "", {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'end',
            panelClass: ['blue-snackbar']
        });
    }
    /*
          Show Success Dialog Message Common Method
    */
    static showSuccessDialog(snackBar, message) {
        snackBar.open(message, "", {
            duration: 3000,
            panelClass: ['sucess-snackbar'],
            verticalPosition: 'top',
            horizontalPosition: 'end',
        });
    }
}


/***/ }),

/***/ "./src/app/componentPackage/add-adds/add-adds.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/componentPackage/add-adds/add-adds.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddAddsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddsComponent", function() { return AddAddsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_modalPackages_advertisement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modalPackages/advertisement */ "./src/app/modalPackages/advertisement.ts");
/* harmony import */ var src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonmethod/common-method */ "./src/app/commonmethod/common-method.ts");
/* harmony import */ var src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utillpackage/my-routing-methods */ "./src/app/utillpackage/my-routing-methods.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/admin-service.service */ "./src/app/services/admin-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









class AddAddsComponent {
    constructor(snackBar, router, adminServiceService) {
        this.snackBar = snackBar;
        this.router = router;
        this.adminServiceService = adminServiceService;
    }
    ngOnInit() {
    }
    createAdvertisement() {
        this.advertisementModel = new src_app_modalPackages_advertisement__WEBPACK_IMPORTED_MODULE_1__["AdvertisementModel"]();
        this.advertisementModel.name = this.title;
        this.advertisementModel.mainContent = this.mHeading + "%" + this.cHeading + "%" + this.body;
        this.advertisementModel.phone = this.contectNo;
        this.adminServiceService.createAdvertisement(this.advertisementModel).subscribe(response => {
            if (response.success) {
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showSuccessDialog(this.snackBar, response.message);
                src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__["MyRoutingMethods"].gotoAds(this.router);
            }
            else {
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackBar, response.message);
            }
        });
    }
}
AddAddsComponent.ɵfac = function AddAddsComponent_Factory(t) { return new (t || AddAddsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_6__["AdminServiceService"])); };
AddAddsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddAddsComponent, selectors: [["app-add-adds"]], decls: 26, vars: 5, consts: [["routerLink", "/advertisment", 1, "add-more"], [1, "mdi", "mdi-arrow-left"], [1, "form-outer"], [1, "form-element"], ["for", "title"], ["placeholder", "Title", "type", "text", "id", "title", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "mHeading"], ["type", "text", "id", "mHeading", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "cHeading"], ["type", "text", "id", "cHeading", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "body"], ["type", "text", "id", "body", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "contectNo"], ["type", "tel", "id", "contectNo", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "form-element", 2, "text-align", "center"], [1, "submit-btn", 3, "click"]], template: function AddAddsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAddsComponent_Template_input_ngModelChange_6_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Main Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAddsComponent_Template_input_ngModelChange_10_listener($event) { return ctx.mHeading = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sub Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAddsComponent_Template_input_ngModelChange_14_listener($event) { return ctx.cHeading = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAddsComponent_Template_input_ngModelChange_18_listener($event) { return ctx.body = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAddsComponent_Template_input_ngModelChange_22_listener($event) { return ctx.contectNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAddsComponent_Template_a_click_24_listener() { return ctx.createAdvertisement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contectNo);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: [".form-outer[_ngcontent-%COMP%] {\n    padding: 20px 0;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 4px;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    padding: 10px 15px;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n    background: #e92330;\n    border-radius: 4px;\n    text-align: center;\n    padding: 15px 10px;\n    min-width: 300px;\n    display: inline-block;\n    color: #fff;\n    margin-top: 15px;\n    text-decoration: none;\n    transition: 0.3s all;\n    font-size: 16px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    cursor: pointer;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\n    background: #444;\n    transition: 0.3s all;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n    color: #707070;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n    color: #707070;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n    color: #707070;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n    color: #707070;\n}\n\n.add-more[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 60px;\n    width: 60px;\n    background: #E92330;\n    border-radius: 50%;\n    top: 87px;\n    right: 24px;\n    cursor: pointer;\n}\n\n.add-more[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 25px;\n    color: #fff;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9hZGQtYWRkcy9hZGQtYWRkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUZBO0lBQ0ksY0FBYztBQUNsQjs7QUFGQTtJQUNJLGNBQWM7QUFDbEI7O0FBRkE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudFBhY2thZ2UvYWRkLWFkZHMvYWRkLWFkZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLW91dGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cblxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCAuc3VibWl0LWJ0biB7XG4gICAgYmFja2dyb3VuZDogI2U5MjMzMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCAuc3VibWl0LWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzQ0NDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5hZGQtbW9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTkyMzMwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0b3A6IDg3cHg7XG4gICAgcmlnaHQ6IDI0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLW1vcmUgaSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddAddsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-adds',
                templateUrl: './add-adds.component.html',
                styleUrls: ['./add-adds.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_6__["AdminServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentPackage/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/componentPackage/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_modalPackages_advertisement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modalPackages/advertisement */ "./src/app/modalPackages/advertisement.ts");
/* harmony import */ var src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonmethod/common-method */ "./src/app/commonmethod/common-method.ts");
/* harmony import */ var src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utillpackage/my-routing-methods */ "./src/app/utillpackage/my-routing-methods.ts");
/* harmony import */ var src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utillpackage/my-cookies */ "./src/app/utillpackage/my-cookies.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/admin-service.service */ "./src/app/services/admin-service.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














function DashboardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.getAdvertisment(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show All Ads");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Advertisement Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Store,Estate,Garage Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "The Uber\u00AE of Moving Stuff");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_6_div_1_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ads_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx_r11.AddModalFuntion(_r3, "updateAddvertisment", ads_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_6_div_1_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ads_r10 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx_r13.deleteModalCall(_r5, ads_r10._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ads_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ads_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r9.createContent(ads_r10.mainContent)[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.createContent(ads_r10.mainContent)[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.createContent(ads_r10.mainContent)[2]);
} }
function DashboardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_6_div_1_Template, 27, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.adsList);
} }
function DashboardComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_9_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.JoinAndClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_9_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Main Heading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_9_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.mHeading = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sub Heading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_9_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.cHeading = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_9_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.body = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_9_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.contectNo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_9_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.hitRequiredFunction(ctx_r21.methodToCall); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.modalHeading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.mHeading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.cHeading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.contectNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.showbutton);
} }
function DashboardComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Are you sure, you want to Delete?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_11_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.JoinAndClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_11_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.deleteAdvertisement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(snackBar, spinner, cookiesService, router, adminServiceService, modalService) {
        this.snackBar = snackBar;
        this.spinner = spinner;
        this.cookiesService = cookiesService;
        this.router = router;
        this.adminServiceService = adminServiceService;
        this.modalService = modalService;
        this.Tag = "DashboardComponent";
        this.searchString = "";
        this.adsList = [];
        this.showTable = false;
        this.currentSelectedAdId = '';
        this.methodToCall = '';
        this.showTable = false;
        this.adsList = [];
        this.modalHeading = "";
        this.showbutton = "";
        this.checkLoginMethod();
    }
    ngOnInit() {
    }
    /**Check Login */
    checkLoginMethod() {
        let logincheck = src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_4__["MyCookies"].checkLoginStatus(this.cookiesService);
        if (logincheck) {
            this.getAdvertisment();
        }
        else {
            src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__["MyRoutingMethods"].gotoLogin(this.router);
        }
    }
    /**GEt AdverTisMEnt List */
    getAdvertisment(searchTerm) {
        if (searchTerm || searchTerm == '') {
            this.searchString = searchTerm;
        }
        this.spinner.show();
        this.adminServiceService.getAdvertisement(this.searchString).subscribe(response => {
            if (response.success) {
                this.adsList = response.data;
                this.showTable = true;
                if (this.adsList.length == 0) {
                    this.showTable = false;
                }
            }
            else {
                src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_4__["MyCookies"].deletecookies(this.cookiesService);
                src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__["MyRoutingMethods"].gotoLogin(this.router);
            }
            this.spinner.hide();
        });
    }
    createContent(content) {
        let contentArray = content.split("%");
        return contentArray;
    }
    /**
      *
      * Open  Modal Function
      */
    openModal(content, context) {
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
    AddModalFuntion(content, onclickButton, ad) {
        if (onclickButton == 'addAddvertisment') {
            this.modalHeading = "Add Advertisement";
            this.showbutton = "Add";
            this.methodToCall = 'createAdvertisement()';
        }
        else {
            this.setSelectedAd(ad);
            this.modalHeading = "Update Advertisement";
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
        let advertisementModel = new src_app_modalPackages_advertisement__WEBPACK_IMPORTED_MODULE_1__["AdvertisementModel"]();
        advertisementModel.name = this.title;
        advertisementModel.mainContent = this.mHeading + "%" + this.cHeading + "%" + this.body;
        advertisementModel.phone = this.contectNo;
        this.adminServiceService.createAdvertisement(advertisementModel).subscribe(response => {
            if (response.success) {
                this.JoinAndClose();
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showSuccessDialog(this.snackBar, response.message);
                this.reset();
                setTimeout(() => {
                    this.getAdvertisment();
                }, 100);
            }
            else {
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackBar, response.message);
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
            this.JoinAndClose();
            if (response.success) {
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showSuccessDialog(this.snackBar, response.message);
                this.getAdvertisment();
            }
            else {
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackBar, response.message);
            }
            this.spinner.hide();
        });
    }
    /**
     * method to call delete modal
     * @param deletemodal delete modal content
     * @param deleteId selected ad id
     */
    deleteModalCall(deletemodal, deleteId) {
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
    setSelectedAd(currentSelectedAdModel) {
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
        let advertisementModel = new src_app_modalPackages_advertisement__WEBPACK_IMPORTED_MODULE_1__["AdvertisementModel"]();
        advertisementModel.advertiseId = this.currentSelectedAdId;
        advertisementModel.name = this.title;
        advertisementModel.mainContent = this.mHeading + "%" + this.cHeading + "%" + this.body;
        advertisementModel.phone = this.contectNo;
        this.adminServiceService.updateAdvertisement(advertisementModel).subscribe(response => {
            if (response.success) {
                this.JoinAndClose();
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showSuccessDialog(this.snackBar, response.message);
                this.reset();
                setTimeout(() => {
                    this.getAdvertisment();
                }, 100);
            }
            else {
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackBar, response.message);
            }
            this.spinner.hide();
        });
    }
    /**
     * method to call specific method
     * @param methodName method to call
     */
    hitRequiredFunction(methodName) {
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
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_9__["AdminServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 13, vars: 4, consts: [[1, "search-box-outer"], ["name", "searchBar", "id", "searchBarforAds", "value", "", "placeholder", "Search..", "type", "text", "autocomplete", "off", 1, "search-box", 3, "ngModel", "ngModelChange", "keyup.enter", "keyup"], ["id", "search-box-icon", "type", "submit", 1, "search", "btn", "btn-link", "text-danger", 3, "click"], [1, "fa", "fa-search", "search-icon"], ["class", "float-right getAllAd-btn", 4, "ngIf"], [4, "ngIf"], ["class", "card-wrapper", 4, "ngIf"], [1, "add-more", 3, "click"], [1, "mdi", "mdi-plus"], ["content", ""], ["deleteModal", ""], [1, "float-right", "getAllAd-btn"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "card-wrapper"], ["class", " card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "topStatic"], [1, "Image"], ["src", "./assets/imgs/logoSmall3.png", "alt", "", 1, "imageLogo"], [1, "bodyCenter"], [1, "big-stuff"], [1, "title-1"], [1, "title-2"], [1, "title-3"], [1, "bottom"], [1, "imageBottom"], ["src", "./assets/imgs/contact.png", "alt", ""], [1, "bottom-title"], [1, "action-btn"], [1, "btns"], [1, "edit-btn", 3, "click"], [1, "mdi", "mdi-border-color"], [1, "delete-btn", 3, "click"], [1, "mdi", "mdi-delete"], [1, "modal-body", 2, "text-align", "center"], [1, "close-icon", 3, "click"], [1, "fa", "fa-times"], [1, "title-heading"], [1, "form-outer"], [1, "form-element"], ["for", "title"], ["placeholder", "Title", "type", "text", "id", "title", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "col-12"], ["for", "mHeading"], ["type", "text", "id", "mHeading", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "cHeading"], ["type", "text", "id", "cHeading", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "body"], ["type", "text", "id", "body", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "contectNo"], ["type", "tel", "id", "contectNo", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "form-element", "submit-btn", 2, "text-align", "center"], [1, "submit-btn", 3, "click"], [1, "modal-content"], [1, "modal-btns"], [1, "cancel-btn", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_1_listener($event) { return ctx.searchString = $event; })("keyup.enter", function DashboardComponent_Template_input_keyup_enter_1_listener() { return ctx.getAdvertisment(); })("keyup", function DashboardComponent_Template_input_keyup_1_listener() { return ctx.getAdvertisment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_2_listener() { return ctx.getAdvertisment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_4_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_5_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.AddModalFuntion(_r3, "addAddvertisment"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DashboardComponent_ng_template_9_Template, 32, 7, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DashboardComponent_ng_template_11_Template, 12, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchString != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTable);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"]], styles: [".add-more[_ngcontent-%COMP%] {\n    position: fixed;\n    height: 60px;\n    width: 60px;\n    background: #E92330;\n    border-radius: 50%;\n    bottom: 20px;\n    right: 20px;\n    cursor: pointer;\n}\n\n.add-more[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 25px;\n    color: #fff;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n\n\n.card-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 220px;\n    padding-bottom: 10px;\n    padding-top: 10px;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .imageBottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 270px;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: calc(33.3% - 10px);\n    border-radius: 5px;\n    text-align: center;\n    margin-right: 10px;\n    margin-bottom: 10px;\n    transition: 0.3s all;\n    border-bottom-left-radius: 50px;\n    border-top-right-radius: 50px;\n    position: relative;\n    overflow: hidden;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\n    transform: scale(1.02);\n    transition: 0.3s all;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n    padding: 0;\n    font-style: italic;\n    background: #e92330;\n    margin-bottom: 0px;\n    padding: 10px;\n    color: #fff;\n    border-top-right-radius: 50px;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .card.card-2[_ngcontent-%COMP%], .card-wrapper[_ngcontent-%COMP%]   .card.card-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    border-top-right-radius: 50px;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: #70707050;\n    z-index: 0;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    flex-flow: row wrap;\n    align-items: center;\n    visibility: hidden;\n    transition: 0.3s all;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: auto;\n    display: inline-block;\n    text-align: center;\n    padding: 10px;\n    border-radius: 50%;\n    color: #fff;\n    text-decoration: none;\n    margin: 0 5px;\n    height: 50px;\n    width: 50px;\n    position: relative;\n    cursor: pointer;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 22px;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n    width: 80%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n    background: #e92330;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\n    background: green;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .action-btn[_ngcontent-%COMP%] {\n    visibility: visible;\n    transition: 0.3s all;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .big-stuff[_ngcontent-%COMP%] {\n    color: #e92330;\n    font-size: 22px;\n    font-weight: 800;\n    letter-spacing: 2px;\n    margin-bottom: 10px;\n    text-transform: uppercase;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%] {\n    font-size: 17px;\n    font-weight: 800;\n    padding: 6px 0;\n    margin-bottom: 5px;\n    text-transform: uppercase;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%] {\n    margin-bottom: 12px;\n    font-size: 20px;\n    font-weight: 800;\n    text-transform: uppercase;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .title-3[_ngcontent-%COMP%] {\n    color: #e92330;\n    font-size: 22px;\n    font-style: italic;\n    font-weight: 800;\n    padding-top: 10px;\n    text-transform: uppercase;\n}\n\n.card-wrapper[_ngcontent-%COMP%]   .bottom-title[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 10px;\n    font-size: 16px;\n    color: #fff;\n    background: #444;\n    border-bottom-left-radius: 50px;\n}\n\n.cardButton[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 500px;\n    left: 0;\n    top: 180px;\n    text-align: center;\n    opacity: 0;\n    transition: opacity .35s ease;\n}\n\n.bodyCenter[_ngcontent-%COMP%] {\n    padding: 0 15px;\n}\n\n.cardButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 200px;\n    padding: 12px 48px;\n    text-align: center;\n    color: white;\n    border: solid 2px white;\n    z-index: 1;\n}\n\n.card[_ngcontent-%COMP%]:hover   .cardButton[_ngcontent-%COMP%] {\n    opacity: 1;\n}\n\n.form-outer[_ngcontent-%COMP%] {\n    padding: 20px 0;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n    display: block;\n}\n\n.form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n    padding: 0;\n    display: flex;\n    justify-content: space-between;\n}\n\n.form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n    width: 48%;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element.submit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 0;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 4px;\n    text-align: left;\n    display: block;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    padding: 6px 15px;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n    background: #e92330;\n    border-radius: 4px;\n    text-align: center;\n    padding: 12px 10px;\n    min-width: 300px;\n    display: inline-block;\n    color: #fff;\n    margin-top: 15px;\n    text-decoration: none;\n    transition: 0.3s all;\n    font-size: 16px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    cursor: pointer;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\n    background: #444;\n    transition: 0.3s all;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n    color: #707070;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n    color: #707070;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n    color: #707070;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n    color: #707070;\n}\n\n.search-box-outer[_ngcontent-%COMP%] {\n    height: 40px;\n    border-radius: 5px;\n    padding: 0 40px 0px 5px;\n    transition: .3s;\n    width: 100%;\n    max-width: 300px;\n    background-color: #fff;\n    border: 1px solid #d7d7e3;\n    position: relative;\n    right: 0;\n    max-width: 300px;\n    margin-left: auto;\n    top: -60px;\n}\n\n.search-box-outer[_ngcontent-%COMP%]:after {\n    content: '';\n    display: block;\n    clear: both;\n}\n\n.search-box-outer[_ngcontent-%COMP%]   input.search-box[_ngcontent-%COMP%] {\n    background: none;\n    border: none;\n    color: #666;\n    border: none;\n    padding-left: 10px;\n    outline: none;\n    width: 100%;\n    height: 38px;\n    font-size: 15px\n}\n\n.search-box-outer[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    \n    width: 0;\n    height: 0;\n    position: absolute;\n    right: 20px;\n    top: 50%;\n    cursor: pointer;\n    margin-top: -17.5px;\n    margin-left: -8px;\n    border: none;\n    background-size: contain;\n}\n\n.search-icon[_ngcontent-%COMP%]{\n    font-size: x-large;\n}\n\n.getAllAd-btn[_ngcontent-%COMP%]{\n    position: relative;\n    right: 265px;\n    top: -38px;\n}\n\n@media (max-width: 1279px) {\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 18px;\n        border-top-right-radius: 20px;\n    }\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        border-bottom-left-radius: 20px;\n        border-top-right-radius: 20px;\n        margin-right: 10px;\n        margin-bottom: 10px;\n    }\n    .card-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 180px;\n        padding: 15px 0;\n    }\n    .card-wrapper[_ngcontent-%COMP%]   .big-stuff[_ngcontent-%COMP%] {\n        font-size: 20px;\n        letter-spacing: 1px;\n    }\n    .bodyCenter[_ngcontent-%COMP%] {\n        padding: 0 10px;\n    }\n    .card-wrapper[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n    .card-wrapper[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%] {\n        font-size: 17px;\n    }\n    .card-wrapper[_ngcontent-%COMP%]   .title-3[_ngcontent-%COMP%] {\n        font-size: 20px;\n        margin-bottom: 8px;\n    }\n    .card-wrapper[_ngcontent-%COMP%]   .imageBottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 230px;\n        max-width: 80%;\n    }\n    .card-wrapper[_ngcontent-%COMP%]   .bottom-title[_ngcontent-%COMP%] {\n        font-size: 14px;\n        border-bottom-left-radius: 20px;\n    }\n}\n\n@media (max-width: 991px) {\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n    .card-wrapper[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%] {\n        margin-bottom: 8px;\n    }\n}\n\n@media (max-width: 767px) {\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        width: calc(50% - 10px);\n    }\n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n        min-width: auto;\n        padding: 10px 15px;\n        width: 100%;\n    }\n    .search-box-outer[_ngcontent-%COMP%] {\n        max-width: 250px;\n        top: -55px;\n    }\n}\n\n@media (max-width: 576px) {\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-right: 0;\n    }\n    .form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n        display: block\n    }\n    .form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .search-box-outer[_ngcontent-%COMP%] {\n        max-width: 100%;\n        top: 0;\n        margin-bottom: 20px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0FBQ3BDOztBQUdBLGFBQWE7O0FBRWI7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQjtJQUMzQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lB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STtJQUNKO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7UUFDZixNQUFNO1FBQ04sbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRQYWNrYWdlL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtbW9yZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTkyMzMwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLW1vcmUgaSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cblxuLyogY2FyZCBjc3MgKi9cblxuLmNhcmQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmNhcmQtd3JhcHBlciBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5jYXJkLXdyYXBwZXIgLmltYWdlQm90dG9tIGltZyB7XG4gICAgd2lkdGg6IDI3MHB4O1xufVxuXG4uY2FyZC13cmFwcGVyIC5jYXJkIHtcbiAgICB3aWR0aDogY2FsYygzMy4zJSAtIDEwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQtd3JhcHBlciAuY2FyZDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG59XG5cbi5jYXJkLXdyYXBwZXIgLmNhcmQgaDIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBiYWNrZ3JvdW5kOiAjZTkyMzMwO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xufVxuXG4uY2FyZC13cmFwcGVyIC5jYXJkLmNhcmQtMixcbi5jYXJkLXdyYXBwZXIgLmNhcmQuY2FyZC0yIGgyIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcbn1cblxuLmNhcmQtd3JhcHBlciAuYWN0aW9uLWJ0bjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA1MDtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbn1cblxuLmNhcmQtd3JhcHBlciAuYWN0aW9uLWJ0biBhIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW46IDAgNXB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuIGEgaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbi5jYXJkLXdyYXBwZXIgLmFjdGlvbi1idG4gLmJ0bnMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuIC5kZWxldGUtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTkyMzMwO1xufVxuXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuIC5lZGl0LWJ0biB7XG4gICAgYmFja2dyb3VuZDogZ3JlZW47XG59XG5cbi5jYXJkLXdyYXBwZXIgLmNhcmQ6aG92ZXIgLmFjdGlvbi1idG4ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG59XG5cbi5jYXJkLXdyYXBwZXIgLmJpZy1zdHVmZiB7XG4gICAgY29sb3I6ICNlOTIzMzA7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXJkLXdyYXBwZXIgLnRpdGxlLTEge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHBhZGRpbmc6IDZweCAwO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FyZC13cmFwcGVyIC50aXRsZS0yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXJkLXdyYXBwZXIgLnRpdGxlLTMge1xuICAgIGNvbG9yOiAjZTkyMzMwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FyZC13cmFwcGVyIC5ib3R0b20tdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XG59XG5cbi5jYXJkQnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAxODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zNXMgZWFzZTtcbn1cblxuLmJvZHlDZW50ZXIge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLmNhcmRCdXR0b24gYSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDEycHggNDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5jYXJkOmhvdmVyIC5jYXJkQnV0dG9uIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uZm9ybS1vdXRlciB7XG4gICAgcGFkZGluZzogMjBweCAwO1xufVxuXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybS1vdXRlciAuY29sLTEyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZm9ybS1vdXRlciAuY29sLTEyIC5mb3JtLWVsZW1lbnQge1xuICAgIHdpZHRoOiA0OCU7XG59XG5cbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQuc3VibWl0LWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA2cHggMTVweDtcbn1cblxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCAuc3VibWl0LWJ0biB7XG4gICAgYmFja2dyb3VuZDogI2U5MjMzMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEycHggMTBweDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCAuc3VibWl0LWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzQ0NDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5zZWFyY2gtYm94LW91dGVyIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDAgNDBweCAwcHggNXB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzO1xuICAgIC1vLXRyYW5zaXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkN2Q3ZTM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgdG9wOiAtNjBweDtcbn1cblxuLnNlYXJjaC1ib3gtb3V0ZXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4uc2VhcmNoLWJveC1vdXRlciBpbnB1dC5zZWFyY2gtYm94IHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweFxufVxuXG4uc2VhcmNoLWJveC1vdXRlciAuc2VhcmNoIHtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3NlYXJjaC5wbmcnKSBuby1yZXBlYXQ7ICovXG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTE3LjVweDtcbiAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uc2VhcmNoLWljb257XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG4uZ2V0QWxsQWQtYnRue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMjY1cHg7XG4gICAgdG9wOiAtMzhweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIC5jYXJkLXdyYXBwZXIgLmNhcmQgaDIge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICAgIH1cbiAgICAuY2FyZC13cmFwcGVyIC5jYXJkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLmNhcmQtd3JhcHBlciBpbWcge1xuICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICB9XG4gICAgLmNhcmQtd3JhcHBlciAuYmlnLXN0dWZmIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIH1cbiAgICAuYm9keUNlbnRlciB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG4gICAgLmNhcmQtd3JhcHBlciAudGl0bGUtMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLmNhcmQtd3JhcHBlciAudGl0bGUtMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG4gICAgLmNhcmQtd3JhcHBlciAudGl0bGUtMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgICAuY2FyZC13cmFwcGVyIC5pbWFnZUJvdHRvbSBpbWcge1xuICAgICAgICB3aWR0aDogMjMwcHg7XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgIH1cbiAgICAuY2FyZC13cmFwcGVyIC5ib3R0b20tdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuY2FyZC13cmFwcGVyIC5jYXJkIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAuY2FyZC13cmFwcGVyIC50aXRsZS0yIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNhcmQtd3JhcHBlciAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgIH1cbiAgICAuZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IC5zdWJtaXQtYnRuIHtcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuc2VhcmNoLWJveC1vdXRlciB7XG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgICAgIHRvcDogLTU1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAuY2FyZC13cmFwcGVyIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgLmZvcm0tb3V0ZXIgLmNvbC0xMiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgfVxuICAgIC5mb3JtLW91dGVyIC5jb2wtMTIgLmZvcm0tZWxlbWVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuc2VhcmNoLWJveC1vdXRlciB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_9__["AdminServiceService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentPackage/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/componentPackage/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_modalPackages_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modalPackages/login */ "./src/app/modalPackages/login.ts");
/* harmony import */ var src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonmethod/common-method */ "./src/app/commonmethod/common-method.ts");
/* harmony import */ var src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utillpackage/my-routing-methods */ "./src/app/utillpackage/my-routing-methods.ts");
/* harmony import */ var src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utillpackage/my-cookies */ "./src/app/utillpackage/my-cookies.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/admin-service.service */ "./src/app/services/admin-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");













function LoginComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_32_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.JoinAndClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_32_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.forgetPassword(_r28.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(snackBar, router, adminServiceService, spinner, cookiesService, modalService) {
        this.snackBar = snackBar;
        this.router = router;
        this.adminServiceService = adminServiceService;
        this.spinner = spinner;
        this.cookiesService = cookiesService;
        this.modalService = modalService;
        this.Tag = "LoginComponent";
        this.loginModel = new src_app_modalPackages_login__WEBPACK_IMPORTED_MODULE_1__["LoginModel"]("", "");
        this.checkLoginMethod();
    }
    ngOnInit() {
    }
    /**Check Login */
    checkLoginMethod() {
        let logincheck = src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_4__["MyCookies"].checkLoginStatus(this.cookiesService);
        if (logincheck) {
            src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__["MyRoutingMethods"].gotoAds(this.router);
        }
        else {
            src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__["MyRoutingMethods"].gotoLogin(this.router);
        }
    }
    /**
     * show Password Icon Click Function
     */
    showPassword() {
        if (document.getElementById('password').type == 'password') {
            document.getElementById('password').type = 'text';
            document.getElementById('myiconconfirm').className = "fa fa-eye";
        }
        else {
            document.getElementById('password').type = "password";
            document.getElementById('myiconconfirm').className = "fa fa-eye-slash";
        }
    }
    /**
     end
     */
    /**
     * Validation Function
     */
    validation() {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.loginModel.email.trim().length == 0) {
            src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackBar, "Enter email");
            return false;
        }
        else if (!EMAIL_REGEXP.test(this.loginModel.email.trim())) {
            src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackBar, "Email is invalid");
            return false;
        }
        else if (this.loginModel.password.trim().length == 0) {
            src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackBar, "Enter password");
            return false;
        }
        else {
            return true;
        }
    }
    /**End */
    /**
     * Login Api Call
     */
    callLoginApi() {
        if (this.validation()) {
            this.spinner.show();
            this.adminServiceService.adminLoginAPI(this.loginModel.email, this.loginModel.password).subscribe(response => {
                if (response.success) {
                    this.spinner.hide();
                    // Calling Routing Function Goto TO Dashborad 
                    src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__["MyRoutingMethods"].gotoAds(this.router);
                }
                else {
                    this.spinner.hide();
                    src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackBar, response.message);
                }
            });
        }
    }
    /**End */
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
    /**CallIng Modal Function */
    CallModalForm(content) {
        this.openModal(content);
    }
    /**
     * method to send revocery mail on specific email
     * @param email email to send recovery link
     */
    forgetPassword(email) {
        this.spinner.show();
        this.adminServiceService.forgotPassword(email).subscribe(response => {
            this.spinner.hide();
            this.JoinAndClose();
            if (response.success) {
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showSuccessDialog(this.snackBar, response.message);
            }
            else {
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackBar, response.message);
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_7__["AdminServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 34, vars: 2, consts: [["id", "wrapper"], [1, "backlayer"], [1, "layerLeft", 2, "background-image", "url(./assets/imgs/mainBackGround.png)", "background-repeat", "no-repeat"], [1, "logo"], ["alt", "", "src", "./assets/imgs/mainLogo.png"], [1, "layerRight", 2, "background-image", "url(./assets/imgs/mainBackGround.png)", "background-repeat", "no-repeat"], [1, "panels"], [1, "innerpanel"], [1, "right"], [1, "formcontainer"], [1, "login100-form"], [1, "field"], ["type", "text", "name", "email", "id", "email", "placeholder", " ", "autocomplete", "off", "required", "", 3, "ngModel", "ngModelChange"], ["for", "email"], ["aria-hidden", "true", 1, "fieldIcon", "fa", "fa-user"], ["type", "password", "name", "password", "id", "password", "placeholder", " ", "required", "", 3, "ngModel", "ngModelChange"], ["for", "password"], ["aria-hidden", "true", 1, "fieldIcon", "fa", "fa-lock"], ["type", "submit", 1, "submit", "button", 3, "click"], [1, "field", "d-flex", "spcl-field"], ["id", "moveleft", "href", "javascript:void(0)", 1, "linkright", "linkslide", 3, "click"], ["content", ""], [1, "modal-body", 2, "text-align", "center"], [1, "close-icon", 3, "click"], [1, "fa", "fa-times"], [1, "title-heading"], [1, "form-element"], ["placeholder", "Enter Email", "type", "email", "autocomplete", "off"], ["inputEmail", ""], [1, "field", 2, "margin-bottom", "0"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.loginModel.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) { return ctx.loginModel.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_26_listener() { return ctx.callLoginApi(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return ctx.CallModalForm(_r26); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, LoginComponent_ng_template_32_Template, 15, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginModel.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginModel.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n        font-size: 100%;\n        font-weight: normal;\n        text-transform: capitalize;\n        color: #555;\n        padding: 0 0 10px 0;\n    }\n    \n    h1[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n    \n    h2[_ngcontent-%COMP%] {\n        font-size: 28px;\n    }\n    \n    h3[_ngcontent-%COMP%] {\n        font-size: 26px;\n    }\n    \n    h4[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n    \n    h5[_ngcontent-%COMP%] {\n        font-size: 20px;\n    }\n    \n    h6[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n    \n    \n    \n    \n    \n    .checkbox[_ngcontent-%COMP%] {\n        display: inline-block;\n        position: relative;\n        vertical-align: middle;\n        padding: 0 0 0 25px;\n        height: 20px;\n    }\n    \n    .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        top: 0;\n        left: 0;\n        margin: 0 !important;\n        z-index: 1;\n        cursor: pointer;\n        opacity: 0;\n        filter: alpha(opacity=0);\n    }\n    \n    .checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%], .checkbox-inline[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n        position: absolute;\n        margin-left: -20px;\n        margin-top: 4px \\9;\n    }\n    \n    .checkbox[_ngcontent-%COMP%]   .input-helper[_ngcontent-%COMP%]:before, .checkbox[_ngcontent-%COMP%]   .input-helper[_ngcontent-%COMP%]:after {\n        transition: all;\n        transition-duration: 250ms;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        position: absolute;\n        content: \"\";\n    }\n    \n    .checkbox[_ngcontent-%COMP%]   .input-helper[_ngcontent-%COMP%]:before {\n        left: 0;\n        border: 1px solid #ccc;\n    }\n    \n    .checkbox.disabled[_ngcontent-%COMP%] {\n        opacity: 0.6;\n        filter: alpha(opacity=60);\n    }\n    \n    .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 17px;\n        height: 17px;\n    }\n    \n    .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .input-helper[_ngcontent-%COMP%]:before {\n        transform: scale(1);\n    }\n    \n    .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .input-helper[_ngcontent-%COMP%]:after {\n        transform: scale(1) rotate(-50deg);\n        opacity: 1;\n        filter: alpha(opacity=100);\n    }\n    \n    .checkbox[_ngcontent-%COMP%]   .input-helper[_ngcontent-%COMP%]:before {\n        top: 0px;\n        width: 17px;\n        height: 17px;\n    }\n    \n    .checkbox[_ngcontent-%COMP%]   .input-helper[_ngcontent-%COMP%]:after {\n        opacity: 0;\n        filter: alpha(opacity=0);\n        transform: scale(0) rotate(80deg);\n        width: 22px;\n        height: 9px;\n        border-bottom: 2px solid #ff586b;\n        border-left: 2px solid #ff586b;\n        border-bottom-left-radius: 2px;\n        left: 2px;\n        top: -2px;\n    }\n    \n    \n    \n    .backlayer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n        \n        display: table;\n        position: relative;\n        z-index: 1;\n        top: 13px;\n        padding: 10px 26px;\n        \n        \n        \n        \n        \n    }\n    \n    .backlayer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 150px;\n    }\n    \n    \n    \n    .backlayer[_ngcontent-%COMP%] {\n        height: 100%;\n        position: absolute;\n        width: 100%;\n    }\n    \n    .backlayer[_ngcontent-%COMP%]   .layerLeft[_ngcontent-%COMP%] {\n        background-size: cover;\n        background-position: 50% 50%;\n        height: 100%;\n        position: absolute;\n        right: 0;\n        width: 45%;\n    }\n    \n    .backlayer[_ngcontent-%COMP%]   .layerLeft[_ngcontent-%COMP%]:before {\n        position: absolute;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        content: \"\";\n        \n        background: rgba(0, 0, 0, 0.50);\n        background-size: cover;\n        background-attachment: fixed;\n    }\n    \n    .backlayer[_ngcontent-%COMP%]   .layerRight[_ngcontent-%COMP%] {\n        background-size: cover;\n        background-position: 50% 50%;\n        height: 100%;\n        left: 0;\n        position: absolute;\n        width: 55%;\n    }\n    \n    .backlayer[_ngcontent-%COMP%]   .layerRight[_ngcontent-%COMP%]:before {\n        position: absolute;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        content: \"\";\n        \n        background: rgba(0, 0, 0, 0.50);\n        background-size: cover;\n        background-attachment: fixed;\n    }\n    \n    .innerpanel[_ngcontent-%COMP%] {\n        height: 100%;\n        left: -100%;\n        position: relative;\n        width: 200%;\n    }\n    \n    .left[_ngcontent-%COMP%] {\n        background: #2c3034;\n        height: 100%;\n        left: 0;\n        position: absolute;\n        width: 50%;\n        background: #fff;\n        z-index: 1;\n    }\n    \n    .right[_ngcontent-%COMP%] {\n        height: 100%;\n        position: absolute;\n        right: 0;\n        width: 45%;\n        background: #fff;\n        z-index: 1;\n    }\n    \n    .panels[_ngcontent-%COMP%] {\n        \n        height: 100%;\n        margin-left: 50%;\n        max-height: 100%;\n        overflow: hidden;\n        position: absolute;\n        width: 50%;\n    }\n    \n    .backlayer[_ngcontent-%COMP%]   .layerRight[_ngcontent-%COMP%]:after, .backlayer[_ngcontent-%COMP%]   .layerLeft[_ngcontent-%COMP%]:after {\n        background: url('pattern.png') repeat;\n        content: \"\";\n        bottom: 0;\n        left: 0;\n        position: absolute;\n        right: 0;\n        top: 0;\n        width: 100%;\n    }\n    \n    .linkright[_ngcontent-%COMP%] {\n        float: right;\n        text-decoration: none;\n        text-transform: uppercase;\n        color: #ff586b;\n    }\n    \n    .linkright[_ngcontent-%COMP%]:hover {\n        color: #ff586b;\n    }\n    \n    \n    \n    .formcontainer[_ngcontent-%COMP%] {\n        max-width: 500px;\n        \n        padding: 20px;\n        position: relative;\n        margin: 0 auto;\n        display: block;\n        top: 50%;\n        \n        transform: translate(0, -50%);\n    }\n    \n    .formcontainer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n    \n    .fieldIcon[_ngcontent-%COMP%] {\n        width: -webkit-max-content;\n        width: -moz-max-content;\n        width: max-content;\n        position: absolute;\n        left: 2px;\n        bottom: 12px;\n        border: none;\n        color: #707070;\n        background: transparent;\n        font-size: 15px;\n        cursor: pointer;\n    }\n    \n    input[_ngcontent-%COMP%]:focus > .fieldIcon[_ngcontent-%COMP%] {\n        color: #ff586b !important;\n    }\n    \n    .spcl-field[_ngcontent-%COMP%] {\n        display: flex;\n        flex-flow: row wrap;\n        justify-content: space-between;\n    }\n    \n    .login100-form[_ngcontent-%COMP%]   .spcl-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        float: none;\n        margin: 0;\n    }\n    \n    input[_ngcontent-%COMP%]:focus {\n        border-color: #ff586b;\n    }\n    \n    .fieldIcon.password[_ngcontent-%COMP%] {\n        right: 2px;\n        bottom: 10px;\n        left: unset;\n    }\n    \n    .fieldIcon[_ngcontent-%COMP%]:focus {\n        outline: unset;\n    }\n    \n    .linkright[_ngcontent-%COMP%] {\n        float: right;\n        text-decoration: none;\n        text-transform: uppercase;\n        color: #ff586b;\n    }\n    \n    .linkright[_ngcontent-%COMP%]:hover {\n        color: #ff586b;\n    }\n    \n    .login100-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        text-transform: uppercase;\n    }\n    \n    .login100-form[_ngcontent-%COMP%]   .leftlabel[_ngcontent-%COMP%] {\n        float: left;\n        margin: 0 0 0 25px;\n    }\n    \n    \n    \n    .submit.button[_ngcontent-%COMP%] {\n        font-size: 14px;\n        border-radius: 2px;\n        display: block;\n        width: 100%;\n        padding: 10px 20px;\n        border: 0 none;\n        text-transform: uppercase;\n        position: relative;\n        overflow: hidden;\n        cursor: pointer;\n        vertical-align: middle;\n        border: none;\n        background: #ff586b;\n        color: #fff;\n        margin-top: 25px;\n    }\n    \n    .submit[_ngcontent-%COMP%]::before {\n        content: \"\";\n        width: 0;\n        height: 1px;\n        position: absolute;\n        transition: all 0.2s linear;\n        background: #fff;\n    }\n    \n    .submit[_ngcontent-%COMP%]::after {\n        content: \"\";\n        width: 0;\n        height: 1px;\n        position: absolute;\n        transition: all 0.2s linear;\n        background: #fff;\n    }\n    \n    .submit[_ngcontent-%COMP%]:hover {\n        background: #333;\n    }\n    \n    .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n        content: \"\";\n        width: 1px;\n        height: 0;\n        position: absolute;\n        transition: all 0.2s linear;\n        background: #fff;\n    }\n    \n    .submit[_ngcontent-%COMP%]:hover::before, .submit[_ngcontent-%COMP%]:hover::after {\n        width: 100%;\n    }\n    \n    .submit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::before, .submit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::after {\n        height: 100%;\n    }\n    \n    .submit[_ngcontent-%COMP%]::before {\n        left: 50%;\n        top: 3px;\n        transition-duration: 0.4s;\n    }\n    \n    .submit[_ngcontent-%COMP%]::after {\n        left: 50%;\n        bottom: 3px;\n        transition-duration: 0.4s;\n    }\n    \n    .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n        left: 3px;\n        top: 50%;\n        transition-duration: 0.4s;\n    }\n    \n    .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n        right: 3px;\n        top: 50%;\n        transition-duration: 0.4s;\n    }\n    \n    .submit[_ngcontent-%COMP%]:hover::before, .submit[_ngcontent-%COMP%]:hover::after {\n        left: 3px;\n        width: calc(100% - 6px);\n    }\n    \n    .submit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::before, .submit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::after {\n        top: 3px;\n        height: calc(100% - 6px);\n    }\n    \n    .login100-form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n        margin-top: 20px;\n    }\n    \n    .login100-form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        font-size: 14px;\n        margin-bottom: 4px;\n        text-align: left;\n        display: block;\n        text-transform: none;\n    }\n    \n    .login100-form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 100%;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        padding: 8px 15px;\n    }\n    \n    \n    \n    \n    \n    @media only screen and (max-width:990px) {\n        input[_ngcontent-%COMP%] {\n            background: none;\n        }\n        .backlayer[_ngcontent-%COMP%]   .layerLeft[_ngcontent-%COMP%] {\n            width: 100%;\n            height: 240px;\n        }\n        .backlayer[_ngcontent-%COMP%]   .layerRight[_ngcontent-%COMP%] {\n            display: none;\n        }\n        .panels[_ngcontent-%COMP%] {\n            margin-left: 0;\n            width: 100%;\n            height: 100%;\n            padding-top: 240px;\n            position: relative;\n            overflow: visible;\n            box-shadow: none;\n        }\n        .innerpanel[_ngcontent-%COMP%] {\n            height: 100%;\n            left: 0;\n            width: 100%;\n            position: relative;\n        }\n        .left[_ngcontent-%COMP%] {\n            height: 100%;\n            width: 100%;\n            position: absolute;\n            opacity: 0;\n            left: 0;\n            right: 0;\n            transform: translate3d(-300px, 0px, 0px);\n            \n            \n            transform: translate3d(-300px, 0px, 0px);\n            transition: all 300ms ease 0s;\n        }\n        body.active-left[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n            opacity: 1;\n            transform: translate3d(0px, 0px, 0px);\n            -ms-transform: translate3d(0px, 0px, 0px);\n            \n            -webkit-transform: translate3d(0px, 0px, 0px);\n            \n        }\n        body.active-left[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n            opacity: 0;\n            transform: translate3d(-300px, 0px, 0px);\n            \n            \n            transform: translate3d(-300px, 0px, 0px);\n            transition: all 300ms ease 0s;\n        }\n        .right[_ngcontent-%COMP%] {\n            height: 100%;\n            width: 100%;\n            position: absolute;\n            top: 0;\n            right: 0;\n            left: 0;\n            transform: translate3d(0, 0px, 0px);\n            \n            \n            transform: translate3d(0, 0px, 0px);\n            transition: all 300ms ease 0s;\n        }\n        .formcontainer[_ngcontent-%COMP%] {\n            top: 0;\n            \n            \n            transform: translate(0, 0);\n        }\n        .backlayer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n            display: table;\n            position: relative;\n            z-index: 1;\n            top: 50%;\n            left: 50%;\n            \n            \n            transform: translate(-50%, -50%);\n        }\n        .backlayer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n            width: 180px;\n        }\n        .formcontainer[_ngcontent-%COMP%] {\n            padding: 20px;\n        }\n        .field_control.fieldicon.user[_ngcontent-%COMP%]:before {\n            left: 0;\n        }\n        .field_control.fieldicon.key[_ngcontent-%COMP%]:before {\n            left: 0;\n        }\n        .field_control.fieldicon.mail[_ngcontent-%COMP%]:before {\n            left: 0;\n        }\n        .field_control.fieldicon.secure[_ngcontent-%COMP%]:before {\n            left: 0;\n        }\n        .field_control.fieldicon[_ngcontent-%COMP%]   .field_label[_ngcontent-%COMP%] {\n            left: 45px;\n        }\n        .field_control.fieldicon[_ngcontent-%COMP%] {\n            padding-left: 20px;\n            margin: 15px 0;\n        }\n        .circlebutton[_ngcontent-%COMP%] {\n            position: relative;\n            right: 0;\n            top: 0;\n            display: block;\n            overflow: hidden;\n            width: 100%;\n            border-radius: 3px;\n            height: 35px;\n            font-size: 14px;\n            text-transform: uppercase;\n            color: #fff;\n            line-height: 35px;\n        }\n        .circlebutton[_ngcontent-%COMP%]:before {\n            display: none;\n        }\n        .web_form[_ngcontent-%COMP%]   .leftlabel[_ngcontent-%COMP%] {\n            margin-left: 0px;\n        }\n        .web_form[_ngcontent-%COMP%] {\n            font-size: 11px;\n        }\n        .field_label[_ngcontent-%COMP%] {\n            top: 8px;\n        }\n        .field_control[_ngcontent-%COMP%] {\n            margin: 10px 0;\n        }\n        .circlebutton[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\n            height: 35px;\n            line-height: 35px;\n            font-size: 14px;\n            color: #fff;\n            width: 100%;\n            display: block;\n            opacity: 1;\n            background: #f44336;\n        }\n        .circlebutton[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\n            background: #f44336;\n        }\n        .left[_ngcontent-%COMP%]   .formcontainer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .left[_ngcontent-%COMP%]   .formcontainer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n            padding-left: 0;\n            text-align: center;\n        }\n        .left[_ngcontent-%COMP%]   .formcontainer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n            font-size: 18px;\n        }\n        .left[_ngcontent-%COMP%]   .formcontainer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n            font-size: 12px;\n        }\n        \n        .field_cover[_ngcontent-%COMP%]   .captchapic[_ngcontent-%COMP%] {\n            width: 100px;\n            right: 20px;\n        }\n        #moveright.linkslide[_ngcontent-%COMP%] {\n            display: block;\n            margin: 10px 0 0;\n            float: none;\n            text-align: center;\n        }\n        .errorlist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            font-size: 10px;\n        }\n        .field_cover[_ngcontent-%COMP%]   .errorlist[_ngcontent-%COMP%] {\n            padding: 6px;\n        }\n        .field[_ngcontent-%COMP%] {\n            margin-bottom: 20px;\n        }\n        .formcontainer[_ngcontent-%COMP%] {\n            max-width: 100%;\n            background: #fff;\n            margin: 0;\n        }\n        .formcontainer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n            text-align: center;\n        }\n        .formcontainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n            max-width: 550px;\n            margin: 0 auto;\n        }\n    }\n    \n    @media (max-width: 500px) {\n        form[_ngcontent-%COMP%] {\n            margin-top: 0;\n        }\n        .modal-body[_ngcontent-%COMP%] {\n            padding: 20px 15px;\n        }\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJJQUFJLGFBQWE7O0lBRWI7Ozs7OztRQU1JLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBQ0EsU0FBUzs7SUFDVCxhQUFhOztJQUViO1FBQ0kscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxNQUFNO1FBQ04sT0FBTztRQUNQLG9CQUFvQjtRQUNwQixVQUFVO1FBQ1YsZUFBZTtRQUNmLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7O0lBRUE7O1FBRUksa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixrQkFBa0I7SUFDdEI7O0lBRUE7O1FBSUksZUFBZTtRQUVmLDBCQUEwQjtRQUMxQixtQ0FBbUM7UUFFbkMsMkJBQTJCO1FBQzNCLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxPQUFPO1FBQ1Asc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBSUksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBSUksa0NBQWtDO1FBQ2xDLFVBQVU7UUFDViwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO1FBSXhCLGlDQUFpQztRQUNqQyxXQUFX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Q0E7WUFDSSxrQkFBa0I7UUFDdEI7SUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudFBhY2thZ2UvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAvKiBoZWFkaW5ncyAqL1xuICAgIFxuICAgIGgxLFxuICAgIGgyLFxuICAgIGgzLFxuICAgIGg0LFxuICAgIGg1LFxuICAgIGg2IHtcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG4gICAgfVxuICAgIFxuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgICBcbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB9XG4gICAgXG4gICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgfVxuICAgIFxuICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICBcbiAgICBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgXG4gICAgaDYge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIC8qIGVuZHMgKi9cbiAgICAvKiBjaGVja2JveCAqL1xuICAgIFxuICAgIC5jaGVja2JveCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBwYWRkaW5nOiAwIDAgMCAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC5jaGVja2JveCBpbnB1dCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAgIH1cbiAgICBcbiAgICAuY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuICAgIC5jaGVja2JveC1pbmxpbmUgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweCBcXDk7XG4gICAgfVxuICAgIFxuICAgIC5jaGVja2JveCAuaW5wdXQtaGVscGVyOmJlZm9yZSxcbiAgICAuY2hlY2tib3ggLmlucHV0LWhlbHBlcjphZnRlciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGw7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuICAgIFxuICAgIC5jaGVja2JveCAuaW5wdXQtaGVscGVyOmJlZm9yZSB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgfVxuICAgIFxuICAgIC5jaGVja2JveC5kaXNhYmxlZCB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTYwKTtcbiAgICB9XG4gICAgXG4gICAgLmNoZWNrYm94IGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICB9XG4gICAgXG4gICAgLmNoZWNrYm94IGlucHV0OmNoZWNrZWQrLmlucHV0LWhlbHBlcjpiZWZvcmUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICBcbiAgICAuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCsuaW5wdXQtaGVscGVyOmFmdGVyIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgtNTBkZWcpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoLTUwZGVnKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoLTUwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoLTUwZGVnKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gICAgfVxuICAgIFxuICAgIC5jaGVja2JveCAuaW5wdXQtaGVscGVyOmJlZm9yZSB7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgIH1cbiAgICBcbiAgICAuY2hlY2tib3ggLmlucHV0LWhlbHBlcjphZnRlciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg4MGRlZyk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg4MGRlZyk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDgwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoODBkZWcpO1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgaGVpZ2h0OiA5cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmY1ODZiO1xuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZjU4NmI7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcbiAgICAgICAgbGVmdDogMnB4O1xuICAgICAgICB0b3A6IC0ycHg7XG4gICAgfVxuICAgIC8qIGVuZHMgKi9cbiAgICBcbiAgICAuYmFja2xheWVyIC5sb2dvIHtcbiAgICAgICAgLyogZGlzcGxheTogdGFibGU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTsgKi9cbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdG9wOiAxM3B4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDI2cHg7XG4gICAgICAgIC8qIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgKi9cbiAgICAgICAgLyogSUUgOSAqL1xuICAgICAgICAvKiAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAqL1xuICAgICAgICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgICAgICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7ICovXG4gICAgfVxuICAgIFxuICAgIC5iYWNrbGF5ZXIgLmxvZ28gaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICB9XG4gICAgLyogZm9ybSBzZWN0aW9ucyAqL1xuICAgIFxuICAgIC5iYWNrbGF5ZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5iYWNrbGF5ZXIgLmxheWVyTGVmdCB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICB9XG4gICAgXG4gICAgLmJhY2tsYXllciAubGF5ZXJMZWZ0OmJlZm9yZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAvKmJhY2tncm91bmQ6IHJnYmEoMzMsMTUwLDI0MywwLjcpOyovXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MCk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgfVxuICAgIFxuICAgIC5iYWNrbGF5ZXIgLmxheWVyUmlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDU1JTtcbiAgICB9XG4gICAgXG4gICAgLmJhY2tsYXllciAubGF5ZXJSaWdodDpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgLypiYWNrZ3JvdW5kOiByZ2JhKDMzLDE1MCwyNDMsMC43KTsqL1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTApO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIH1cbiAgICBcbiAgICAuaW5uZXJwYW5lbCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDIwMCU7XG4gICAgfVxuICAgIFxuICAgIC5sZWZ0IHtcbiAgICAgICAgYmFja2dyb3VuZDogIzJjMzAzNDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgIFxuICAgIC5yaWdodCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgXG4gICAgLnBhbmVscyB7XG4gICAgICAgIC8qIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7ICovXG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICBcbiAgICAuYmFja2xheWVyIC5sYXllclJpZ2h0OmFmdGVyLFxuICAgIC5iYWNrbGF5ZXIgLmxheWVyTGVmdDphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWdzL3BhdHRlcm4ucG5nXCIpIHJlcGVhdDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAubGlua3JpZ2h0IHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjZmY1ODZiO1xuICAgIH1cbiAgICBcbiAgICAubGlua3JpZ2h0OmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZjU4NmI7XG4gICAgfVxuICAgIC8qZnJvbSBzZWN0aW9uIENzcyovXG4gICAgXG4gICAgLmZvcm1jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAvKmJvcmRlcjogMXB4IHNvbGlkICNkZGQ7ICovXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgICAgICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgfVxuICAgIFxuICAgIC5mb3JtY29udGFpbmVyIGg2IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICBcbiAgICAuZmllbGRJY29uIHtcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgYm90dG9tOiAxMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIGlucHV0OmZvY3VzPi5maWVsZEljb24ge1xuICAgICAgICBjb2xvcjogI2ZmNTg2YiAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAuc3BjbC1maWVsZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgXG4gICAgLmxvZ2luMTAwLWZvcm0gLnNwY2wtZmllbGQgbGFiZWwge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBcbiAgICBpbnB1dDpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmNTg2YjtcbiAgICB9XG4gICAgXG4gICAgLmZpZWxkSWNvbi5wYXNzd29yZCB7XG4gICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgfVxuICAgIFxuICAgIC5maWVsZEljb246Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiB1bnNldDtcbiAgICB9XG4gICAgXG4gICAgLmxpbmtyaWdodCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogI2ZmNTg2YjtcbiAgICB9XG4gICAgXG4gICAgLmxpbmtyaWdodDpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZmY1ODZiO1xuICAgIH1cbiAgICBcbiAgICAubG9naW4xMDAtZm9ybSBsYWJlbCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIFxuICAgIC5sb2dpbjEwMC1mb3JtIC5sZWZ0bGFiZWwge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAyNXB4O1xuICAgIH1cbiAgICAvKiBsb2dpbiBidG4gKi9cbiAgICBcbiAgICAuc3VibWl0LmJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjU4NmI7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIH1cbiAgICBcbiAgICAuc3VibWl0OjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cbiAgICBcbiAgICAuc3VibWl0OjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgfVxuICAgIFxuICAgIC5zdWJtaXQ6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIH1cbiAgICBcbiAgICAuc3VibWl0IHNwYW46OmJlZm9yZSxcbiAgICAuc3VibWl0IHNwYW46OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB9XG4gICAgXG4gICAgLnN1Ym1pdDpob3Zlcjo6YmVmb3JlLFxuICAgIC5zdWJtaXQ6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5zdWJtaXQ6aG92ZXIgc3Bhbjo6YmVmb3JlLFxuICAgIC5zdWJtaXQ6aG92ZXIgc3Bhbjo6YWZ0ZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5zdWJtaXQ6OmJlZm9yZSB7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgfVxuICAgIFxuICAgIC5zdWJtaXQ6OmFmdGVyIHtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBib3R0b206IDNweDtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICB9XG4gICAgXG4gICAgLnN1Ym1pdCBzcGFuOjpiZWZvcmUge1xuICAgICAgICBsZWZ0OiAzcHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIH1cbiAgICBcbiAgICAuc3VibWl0IHNwYW46OmFmdGVyIHtcbiAgICAgICAgcmlnaHQ6IDNweDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgfVxuICAgIFxuICAgIC5zdWJtaXQ6aG92ZXI6OmJlZm9yZSxcbiAgICAuc3VibWl0OmhvdmVyOjphZnRlciB7XG4gICAgICAgIGxlZnQ6IDNweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XG4gICAgfVxuICAgIFxuICAgIC5zdWJtaXQ6aG92ZXIgc3Bhbjo6YmVmb3JlLFxuICAgIC5zdWJtaXQ6aG92ZXIgc3Bhbjo6YWZ0ZXIge1xuICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cHgpO1xuICAgIH1cbiAgICBcbiAgICAubG9naW4xMDAtZm9ybSAuZm9ybS1lbGVtZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgXG4gICAgLmxvZ2luMTAwLWZvcm0gLmZvcm0tZWxlbWVudCBsYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIC5sb2dpbjEwMC1mb3JtIC5mb3JtLWVsZW1lbnQgaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICB9XG4gICAgLyoqRW5kKi9cbiAgICAvKiogbWVkaWEgcXVlcmllcyAqKi9cbiAgICBcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkwcHgpIHtcbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuYmFja2xheWVyIC5sYXllckxlZnQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5iYWNrbGF5ZXIgLmxheWVyUmlnaHQge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucGFuZWxzIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjQwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmlubmVycGFuZWwge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwMHB4LCAwcHgsIDBweCk7XG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAwcHgsIDBweCwgMHB4KTtcbiAgICAgICAgICAgIC8qIElFIDkgKi9cbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAwcHgsIDBweCwgMHB4KTtcbiAgICAgICAgICAgIC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAwcHgsIDBweCwgMHB4KTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkuYWN0aXZlLWxlZnQgLmxlZnQge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICAgICAgICAgIC8qIElFIDkgKi9cbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICAgICAgICAgIC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICAgICAgICB9XG4gICAgICAgIGJvZHkuYWN0aXZlLWxlZnQgLnJpZ2h0IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMDBweCwgMHB4LCAwcHgpO1xuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwMHB4LCAwcHgsIDBweCk7XG4gICAgICAgICAgICAvKiBJRSA5ICovXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwMHB4LCAwcHgsIDBweCk7XG4gICAgICAgICAgICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwMHB4LCAwcHgsIDBweCk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcbiAgICAgICAgfVxuICAgICAgICAucmlnaHQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDBweCwgMHB4KTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDBweCwgMHB4KTtcbiAgICAgICAgICAgIC8qIElFIDkgKi9cbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwcHgsIDBweCk7XG4gICAgICAgICAgICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMHB4LCAwcHgpO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XG4gICAgICAgIH1cbiAgICAgICAgLmZvcm1jb250YWluZXIge1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgLyogSUUgOSAqL1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgLmJhY2tsYXllciAubG9nbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIC8qIElFIDkgKi9cbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5iYWNrbGF5ZXIgLmxvZ28gaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgfVxuICAgICAgICAuZm9ybWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5maWVsZF9jb250cm9sLmZpZWxkaWNvbi51c2VyOmJlZm9yZSB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5maWVsZF9jb250cm9sLmZpZWxkaWNvbi5rZXk6YmVmb3JlIHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmZpZWxkX2NvbnRyb2wuZmllbGRpY29uLm1haWw6YmVmb3JlIHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmZpZWxkX2NvbnRyb2wuZmllbGRpY29uLnNlY3VyZTpiZWZvcmUge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICAuZmllbGRfY29udHJvbC5maWVsZGljb24gLmZpZWxkX2xhYmVsIHtcbiAgICAgICAgICAgIGxlZnQ6IDQ1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZpZWxkX2NvbnRyb2wuZmllbGRpY29uIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5jaXJjbGVidXR0b24ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5jaXJjbGVidXR0b246YmVmb3JlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLndlYl9mb3JtIC5sZWZ0bGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAud2ViX2Zvcm0ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG4gICAgICAgIC5maWVsZF9sYWJlbCB7XG4gICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAuZmllbGRfY29udHJvbCB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAuY2lyY2xlYnV0dG9uIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgICAgICAgfVxuICAgICAgICAuY2lyY2xlYnV0dG9uIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgICAgICAgfVxuICAgICAgICAubGVmdCAuZm9ybWNvbnRhaW5lciBoNixcbiAgICAgICAgLmxlZnQgLmZvcm1jb250YWluZXIgaDUge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5sZWZ0IC5mb3JtY29udGFpbmVyIGg1IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICAubGVmdCAuZm9ybWNvbnRhaW5lciBoNiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLyouZmllbGRfY292ZXIgLmNhcHRjaGFwaWMsIC5maWVsZF9jb3ZlciAucmVsb2FkbGlua3twb3NpdGlvbjogc3RhdGljOyBtYXJnaW46IDEwcHggMCAwO30qL1xuICAgICAgICAuZmllbGRfY292ZXIgLmNhcHRjaGFwaWMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgI21vdmVyaWdodC5saW5rc2xpZGUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmVycm9ybGlzdCBsaSBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZmllbGRfY292ZXIgLmVycm9ybGlzdCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZpZWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvcm1jb250YWluZXIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuZm9ybWNvbnRhaW5lciBoNSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZvcm1jb250YWluZXIgZm9ybSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICAubW9kYWwtYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gICAgICAgIH1cbiAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_7__["AdminServiceService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentPackage/profile-setting-change/profile-setting-change.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/componentPackage/profile-setting-change/profile-setting-change.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProfileSettingChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingChangeComponent", function() { return ProfileSettingChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/commonmethod/common-method */ "./src/app/commonmethod/common-method.ts");
/* harmony import */ var src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utillpackage/my-routing-methods */ "./src/app/utillpackage/my-routing-methods.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/admin-service.service */ "./src/app/services/admin-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class ProfileSettingChangeComponent {
    constructor(snackBar, router, adminServiceService) {
        this.snackBar = snackBar;
        this.router = router;
        this.adminServiceService = adminServiceService;
    }
    ngOnInit() {
    }
    updateAdminDetails() {
        if (this.newPwd.toString() != '' && this.newPwd.toUpperCase().match(this.confirmPwd.toUpperCase())) {
            let adminDetails = {};
            adminDetails.oldPassword = this.oldPwd;
            adminDetails.newPassword = this.newPwd;
            this.adminServiceService.updateDetails(adminDetails).subscribe(response => {
                if (response.success) {
                    src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showSuccessDialog(this.snackBar, response.message);
                    src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_2__["MyRoutingMethods"].gotoAds(this.router);
                }
                else {
                    src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, response.message);
                }
            });
        }
        else {
            if (this.newPwd.toString() == '') {
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, "Password field can't be empty.");
            }
            else {
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, "Oops, that's not the same password as the first one");
            }
        }
    }
}
ProfileSettingChangeComponent.ɵfac = function ProfileSettingChangeComponent_Factory(t) { return new (t || ProfileSettingChangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_5__["AdminServiceService"])); };
ProfileSettingChangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileSettingChangeComponent, selectors: [["app-profile-setting-change"]], decls: 16, vars: 3, consts: [[1, "form-outer"], [1, "form-element"], ["for", "oldpassword"], ["placeholder", "Old Password", "type", "password", "id", "oldpassword", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "npassword"], ["placeholder", "New Password", "type", "password", "id", "npassword", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "cpassword"], ["placeholder", "Confirm Password", "type", "password", "id", "cpassword", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "form-element", 2, "text-align", "center"], [1, "submit-btn", 3, "click"]], template: function ProfileSettingChangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Old Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileSettingChangeComponent_Template_input_ngModelChange_4_listener($event) { return ctx.oldPwd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileSettingChangeComponent_Template_input_ngModelChange_8_listener($event) { return ctx.newPwd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileSettingChangeComponent_Template_input_ngModelChange_12_listener($event) { return ctx.confirmPwd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSettingChangeComponent_Template_a_click_14_listener() { return ctx.updateAdminDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oldPwd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newPwd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPwd);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".form-outer[_ngcontent-%COMP%] {\n    padding: 20px 0;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 4px;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    padding: 10px 15px;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n    background: #e92330;\n    border-radius: 4px;\n    text-align: center;\n    padding: 15px 10px;\n    min-width: 300px;\n    display: inline-block;\n    color: #fff;\n    margin-top: 15px;\n    text-decoration: none;\n    transition: 0.3s all;\n    font-size: 16px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\n    background: #444;\n    transition: 0.3s all;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n    color: #707070;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n    color: #707070;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n    color: #707070;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n    color: #707070;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9wcm9maWxlLXNldHRpbmctY2hhbmdlL3Byb2ZpbGUtc2V0dGluZy1jaGFuZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRkE7SUFDSSxjQUFjO0FBQ2xCOztBQUZBO0lBQ0ksY0FBYztBQUNsQjs7QUFGQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRQYWNrYWdlL3Byb2ZpbGUtc2V0dGluZy1jaGFuZ2UvcHJvZmlsZS1zZXR0aW5nLWNoYW5nZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tb3V0ZXIge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IC5zdWJtaXQtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTkyMzMwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgLnN1Ym1pdC1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM0NDQ7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNzA3MDcwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileSettingChangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-setting-change',
                templateUrl: './profile-setting-change.component.html',
                styleUrls: ['./profile-setting-change.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_5__["AdminServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentPackage/show-profile/show-profile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/componentPackage/show-profile/show-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: ShowProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowProfileComponent", function() { return ShowProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/commonmethod/common-method */ "./src/app/commonmethod/common-method.ts");
/* harmony import */ var src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utillpackage/my-routing-methods */ "./src/app/utillpackage/my-routing-methods.ts");
/* harmony import */ var src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utillpackage/my-cookies */ "./src/app/utillpackage/my-cookies.ts");
/* harmony import */ var src_app_utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utillpackage/constant */ "./src/app/utillpackage/constant.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/admin-service.service */ "./src/app/services/admin-service.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");













function ShowProfileComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowProfileComponent_ng_template_15_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.JoinAndClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Old Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowProfileComponent_ng_template_15_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.oldPwd = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "New password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowProfileComponent_ng_template_15_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.newPwd = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Confirm password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowProfileComponent_ng_template_15_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.confirmPwd = $event; })("keyup.enter", function ShowProfileComponent_ng_template_15_Template_input_keyup_enter_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.updatePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowProfileComponent_ng_template_15_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.updatePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.oldPwd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.newPwd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.confirmPwd);
} }
class ShowProfileComponent {
    constructor(modalService, snackBar, router, adminServiceService, cookiesService, spiner) {
        this.modalService = modalService;
        this.snackBar = snackBar;
        this.router = router;
        this.adminServiceService = adminServiceService;
        this.cookiesService = cookiesService;
        this.spiner = spiner;
        this.Tag = "ShowProfileComponent";
        this.selectedImageUrl = null;
        this.checkLoginMethod();
        this.imageurl = this.cookiesService.get('profilePic');
        if (!this.imageurl) {
            this.imageurl = "./assets/imgs/default-admin.jpg";
        }
        else {
            this.imageurl = src_app_utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__["MyConstants"].serverURL + this.imageurl;
        }
    }
    ngOnInit() {
    }
    /**Check Login */
    checkLoginMethod() {
        let logincheck = src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_3__["MyCookies"].checkLoginStatus(this.cookiesService);
        if (logincheck) {
            this.email = src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_3__["MyCookies"].getEmaild(this.cookiesService);
            // this.email=MyCookies
        }
        else {
            src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_2__["MyRoutingMethods"].gotoLogin(this.router);
        }
    }
    onSelectFile(event) {
        if (event.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (innerEvent) => {
                this.imageurl = innerEvent.target.result;
                this.selectedImageUrl = event.target.files[0];
                const adminDetails = new FormData();
                adminDetails.append('file', this.selectedImageUrl, this.selectedImageUrl.name);
                this.updateAdminDetails(adminDetails);
            };
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
    showProileModal(content) {
        this.openModal(content);
    }
    // CHnage Proilfe 
    updatePassword() {
        if (this.newPwd.toString() != '' && this.newPwd.toUpperCase() == this.confirmPwd.toUpperCase()
            && this.oldPwd != '' && this.newPwd.toUpperCase() != this.oldPwd.toUpperCase()) {
            this.spiner.show();
            let adminDetails = {};
            adminDetails.oldPassword = this.oldPwd;
            adminDetails.newPassword = this.newPwd;
            this.adminServiceService.updateDetails(adminDetails).subscribe(response => {
                this.JoinAndClose();
                if (response.success) {
                    this.spiner.hide();
                    src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showSuccessDialog(this.snackBar, response.message);
                    src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_3__["MyCookies"].deletecookies(this.cookiesService);
                    src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_2__["MyRoutingMethods"].gotoLogin(this.router);
                    src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showSuccessDialog(this.snackBar, response.message + " please Login Again");
                }
                else {
                    this.spiner.hide();
                    src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, response.message);
                }
            });
        }
        else {
            if (this.newPwd.toString() == '') {
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, "Password field can't be empty.");
            }
            else if (this.newPwd.toUpperCase() == this.oldPwd.toUpperCase()) {
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, "New Password can't be same as Old Password");
            }
            else {
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, "Oops, New Password & Confirm Password are not same");
            }
            this.JoinAndClose();
        }
    }
    /**
     * method to update admin details
     * @param adminDetails updated admin details object
     */
    updateAdminDetails(adminDetails) {
        this.spiner.show();
        this.adminServiceService.updateDetails(adminDetails).subscribe(response => {
            this.spiner.hide();
            if (response.success) {
                this.adminServiceService.setCurrentProfilePic(this.cookiesService.get('profilePic'));
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showSuccessDialog(this.snackBar, response.message);
            }
            else {
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, response.message);
            }
        });
    }
    /**
     * method to reset all variables of admindetail object
     */
    reset() {
        this.oldPwd = '';
        this.newPwd = '';
        this.confirmPwd = '';
    }
}
ShowProfileComponent.ɵfac = function ShowProfileComponent_Factory(t) { return new (t || ShowProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_8__["AdminServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"])); };
ShowProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowProfileComponent, selectors: [["app-show-profile"]], decls: 17, vars: 2, consts: [[1, "card", "profile-section"], [1, "card-body"], [1, "cabinet", "center-block"], ["id", "item-img-output", 1, "gambar", "img-responsive", "img-thumbnail", 3, "src"], [1, "fa", "fa-camera"], ["type", "file", "accept", "image/*", "name", "file_photo", 1, "item-img", "file", "center-block", 3, "change"], [1, "profile-name"], [3, "click"], ["content", ""], [1, "modal-body", 2, "text-align", "center"], [1, "close-icon", 3, "click"], [1, "fa", "fa-times"], [1, "title-heading"], [1, "form-outer"], [1, "form-element"], ["for", "oldpassword"], ["placeholder", "Old Password", "type", "password", "id", "oldpassword", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "npassword"], ["placeholder", "New Password", "type", "password", "id", "npassword", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "cpassword"], ["placeholder", "Confirm Password", "type", "password", "id", "cpassword", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "form-element", 2, "text-align", "center"], [1, "submit-btn", 3, "click"]], template: function ShowProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ShowProfileComponent_Template_input_change_7_listener($event) { return ctx.onSelectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowProfileComponent_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return ctx.showProileModal(_r38); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ShowProfileComponent_ng_template_15_Template, 22, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imageurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]], styles: ["label.cabinet[_ngcontent-%COMP%] {\n    display: block;\n    cursor: pointer;\n    position: relative;\n    width: 200px;\n    height: 200px;\n    background: #fff;\n    border-radius: 50%;\n    border: 1px solid #707070;\n    padding: 2px;\n    margin: auto;\n    z-index: 1;\n}\n\nlabel.cabinet[_ngcontent-%COMP%]   input.file[_ngcontent-%COMP%] {\n    position: absolute;\n    opacity: 0;\n    -moz-opacity: 0;\n    width: 100%;\n    top: 0;\n    height: 100%;\n    left: 0;\n    cursor: pointer;\n    padding: 0;\n}\n\n.floating-label[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin-top: 19px;\n}\n\n.cabinet[_ngcontent-%COMP%]   .img-thumbnail[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    border-radius: 50%;\n}\n\n#upload-demo[_ngcontent-%COMP%] {\n    width: 250px;\n    height: 250px;\n    padding-bottom: 25px;\n}\n\nfigure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    color: #fff;\n    text-shadow: 0 0 10px #000;\n    text-align: justify;\n}\n\nfigure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 25px;\n}\n\n.profile-section[_ngcontent-%COMP%] {\n    border: none;\n}\n\n.profile-name[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-bottom: 20px;\n}\n\n.profile-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 25px;\n    padding-top: 5px;\n    text-transform: uppercase;\n    letter-spacing: 1.2px;\n}\n\n.profile-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 22px;\n    padding-top: 4px;\n}\n\n.profile-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    display: inline-block;\n    padding: 10px 15px;\n    background: #e92330;\n    min-width: 180px;\n    color: #fff;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n.form-outer[_ngcontent-%COMP%] {\n    padding: 20px 0;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n    display: block;\n}\n\n.form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n    padding: 0;\n    display: flex;\n    justify-content: space-between;\n}\n\n.form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n    width: 48%;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element.submit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 0;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 4px;\n    text-align: left;\n    display: block;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    padding: 6px 15px;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n    background: #e92330;\n    border-radius: 4px;\n    text-align: center;\n    padding: 12px 10px;\n    min-width: 300px;\n    display: inline-block;\n    color: #fff;\n    margin-top: 15px;\n    text-decoration: none;\n    transition: 0.3s all;\n    font-size: 16px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    cursor: pointer;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\n    background: #444;\n    transition: 0.3s all;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n    color: #707070;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n    color: #707070;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n    color: #707070;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n    color: #707070;\n}\n\n@media (max-width: 991px){\n    label.cabinet[_ngcontent-%COMP%]{height: 180px;width: 180px;}\n}\n\n@media (max-width: 767px){\n    label.cabinet[_ngcontent-%COMP%]{height: 150px;width: 150px;}\n    figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size: 20px;}\n    .profile-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size: 22px;letter-spacing: 1px;margin-bottom: 0px;}\n    .profile-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size: 18px;}\n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]{margin-bottom: 20px;}\n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{min-width: auto;padding: 10px 15px;width: 100%;}\n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]:last-child{margin-bottom: 0;}\n    .form-outer[_ngcontent-%COMP%]{padding-bottom: 0;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9zaG93LXByb2ZpbGUvc2hvdy1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2YsV0FBVztJQUNYLE1BQU07SUFDTixZQUFZO0lBQ1osT0FBTztJQUNQLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFGQTtJQUNJLGNBQWM7QUFDbEI7O0FBRkE7SUFDSSxjQUFjO0FBQ2xCOztBQUZBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWMsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUM3Qzs7QUFFQTtJQUNJLGNBQWMsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUN6QyxvQkFBb0IsZUFBZSxDQUFDO0lBQ3BDLGlCQUFpQixlQUFlLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUM7SUFDeEUsZ0JBQWdCLGVBQWUsQ0FBQztJQUNoQywwQkFBMEIsbUJBQW1CLENBQUM7SUFDOUMsc0NBQXNDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7SUFDckYscUNBQXFDLGdCQUFnQixDQUFDO0lBQ3RELFlBQVksaUJBQWlCLENBQUM7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRQYWNrYWdlL3Nob3ctcHJvZmlsZS9zaG93LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsLmNhYmluZXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbmxhYmVsLmNhYmluZXQgaW5wdXQuZmlsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1vei1vcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmZsb2F0aW5nLWxhYmVsIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLXRvcDogMTlweDtcbn1cblxuLmNhYmluZXQgLmltZy10aHVtYm5haWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4jdXBsb2FkLWRlbW8ge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuXG5maWd1cmUgZmlnY2FwdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5maWd1cmUgZmlnY2FwdGlvbiBpIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5wcm9maWxlLXNlY3Rpb24ge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnByb2ZpbGUtbmFtZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4ucHJvZmlsZS1uYW1lIGgyIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbn1cblxuLnByb2ZpbGUtbmFtZSBwIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLnByb2ZpbGUtbmFtZSBhIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2U5MjMzMDtcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtLW91dGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mb3JtLW91dGVyIC5jb2wtMTIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5mb3JtLW91dGVyIC5jb2wtMTIgLmZvcm0tZWxlbWVudCB7XG4gICAgd2lkdGg6IDQ4JTtcbn1cblxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudC5zdWJtaXQtYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xufVxuXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IC5zdWJtaXQtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTkyMzMwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTJweCAxMHB4O1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IC5zdWJtaXQtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzcwNzA3MDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KXtcbiAgICBsYWJlbC5jYWJpbmV0e2hlaWdodDogMTgwcHg7d2lkdGg6IDE4MHB4O31cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXtcbiAgICBsYWJlbC5jYWJpbmV0e2hlaWdodDogMTUwcHg7d2lkdGg6IDE1MHB4O31cbiAgICBmaWd1cmUgZmlnY2FwdGlvbiBpe2ZvbnQtc2l6ZTogMjBweDt9XG4gICAgLnByb2ZpbGUtbmFtZSBoMntmb250LXNpemU6IDIycHg7bGV0dGVyLXNwYWNpbmc6IDFweDttYXJnaW4tYm90dG9tOiAwcHg7fVxuICAgIC5wcm9maWxlLW5hbWUgcHtmb250LXNpemU6IDE4cHg7fVxuICAgIC5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnR7bWFyZ2luLWJvdHRvbTogMjBweDt9XG4gICAgLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCAuc3VibWl0LWJ0bnttaW4td2lkdGg6IGF1dG87cGFkZGluZzogMTBweCAxNXB4O3dpZHRoOiAxMDAlO31cbiAgICAuZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50Omxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTogMDt9XG4gICAgLmZvcm0tb3V0ZXJ7cGFkZGluZy1ib3R0b206IDA7fVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-profile',
                templateUrl: './show-profile.component.html',
                styleUrls: ['./show-profile.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_8__["AdminServiceService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/blank/blank.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/blank/blank.component.ts ***!
  \*************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class BlankComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BlankComponent.ɵfac = function BlankComponent_Factory(t) { return new (t || BlankComponent)(); };
BlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankComponent, selectors: [["app-blank"]], decls: 1, vars: 0, template: function BlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ibGFuay9ibGFuay5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blank',
                templateUrl: './blank.component.html',
                styleUrls: ['./blank.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/full/full.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/full/full.component.ts ***!
  \***********************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utillpackage/my-routing-methods */ "./src/app/utillpackage/my-routing-methods.ts");
/* harmony import */ var src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utillpackage/my-cookies */ "./src/app/utillpackage/my-cookies.ts");
/* harmony import */ var src_app_utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utillpackage/constant */ "./src/app/utillpackage/constant.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_services_sidebar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sidebar.service */ "./src/app/services/sidebar.service.ts");
/* harmony import */ var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/admin-service.service */ "./src/app/services/admin-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");












const _c0 = function (a0) { return { "active": a0 }; };
function FullComponent_li_42_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_li_42_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const i_r35 = ctx.index; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.gotoRouting(i_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuList_r34 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, menuList_r34.status == "active"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r33.setNgClass(menuList_r34.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuList_r34.title);
} }
const _c1 = function (a0) { return { "slide": a0 }; };
const _c2 = function (a0) { return { "mobile-slide": a0 }; };
class FullComponent {
    constructor(router, cookiesService, navBarService, adminServiceService, ngzone) {
        this.router = router;
        this.cookiesService = cookiesService;
        this.navBarService = navBarService;
        this.adminServiceService = adminServiceService;
        this.ngzone = ngzone;
        this.Tag = "FullComponent";
        this.showprofile = false;
        this.showSideBar = false;
        this.showBackButtun = false;
        this.searchTerm = "";
        this.mobileView = false;
        this.showprofile = false;
        this.showSideBar = false;
        this.showBackButtun = false;
        this.mobileView = false;
        this.menu = [];
        this.user_Name = "";
        // Set Menu List From Side Bar Service 
        this.menu = this.navBarService.getMenuList();
        this.router.events.subscribe(value => {
            if (value instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.checkAndSetValue();
            }
        });
        this.user_Name = "Admin";
    }
    ngOnInit() {
        this.adminServiceService.currentProfilePic.subscribe(profilePicUrl => {
            this.profilePic = profilePicUrl;
            if (profilePicUrl == '') {
                this.profilePic = this.cookiesService.get('profilePic');
            }
            if (!this.profilePic) {
                this.profilePic = "./assets/imgs/default-admin.jpg";
            }
            else {
                this.profilePic = src_app_utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__["MyConstants"].serverURL + this.profilePic;
            }
        });
    }
    /**
     *
     * Profile Dialog Show Image
     *
     */
    showProflieDown() {
        this.showprofile = !this.showprofile;
    }
    /**End */
    /**
   *
   * Menue Toggle Image
   *
   */
    menueToggle() {
        if (this.showSideBar == false) {
            this.showSideBar = true;
        }
        else {
            this.showSideBar = false;
        }
    }
    toggleButton() {
        this.mobileView = !this.mobileView;
    }
    /**
     *
     * Get Top HEading Function
     *
     */
    checkAndSetValue() {
        this.showprofile = false;
        this.ngzone.run(() => {
            this.topHeading = "";
            var currentUrl = this.router.url;
            var matched = false;
            this.menu.forEach((element, index) => {
                element.status = "inactive";
                if (!matched) {
                    if (currentUrl == element.url) {
                        matched = true;
                        // this.toggleButton();
                        this.topHeading = element.title;
                        element.status = "active";
                    }
                }
                else {
                    element.status = "inactive";
                }
                // element.urlTitleList.forEach(pageInnerUrls => {
                //   if (!matched) {
                //     if (currentUrl.includes(pageInnerUrls.url)) {
                //       matched = true
                //       this.topHeading = pageInnerUrls.title
                //       element.status = "active"
                //     }
                //   }
                // });
                // element.innerOptions.forEach((innerElement, innerIndex) => {
                //   innerElement.status = "inactive"
                //   if (!matched) {
                //     if (currentUrl == "/" + innerElement.url) {
                //       matched = true
                //       this.topHeading = innerElement.title
                //       innerElement.status = "active"
                //       element.status = "active"
                //       this.currentInnermenuIndex = innerIndex
                //       this.currentmenuIndex = index
                //       // CommonMethods.showconsole(this.Tag, "Status:- " + element.status)
                //       CommonMethods.showconsole(this.Tag, "Current main Menu Index :- " + index)
                //       CommonMethods.showconsole(this.Tag, "Current main inner Menu Index :- " + innerIndex)
                //     }
                //   }
                //   innerElement.urlTitleList.forEach(pageInnerUrls => {
                //     if (!matched) {
                //       if (currentUrl.includes(pageInnerUrls.url) ) {
                //         matched = true
                //         this.topHeading = pageInnerUrls.title
                //         innerElement.status = "active"
                //         element.status = "active"
                //       }
                //     }
                //   });
                // })
            });
        });
    }
    /**End */
    gotoRouting(index) {
        this.router.navigate([this.menu[index].url]);
        this.topHeading = this.menu[index].title;
    }
    // gotoSubmenuPage(oterindex: number, innerindex: number) {
    //   this.router.navigate(['/' + this.menus[oterindex].innerOptions[innerindex].url])
    //   this.topHeading = this.menus[oterindex].innerOptions[innerindex].title
    // }
    /**
     * Logout Function
     */
    logout() {
        src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_3__["MyCookies"].deletecookies(this.cookiesService);
        src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_2__["MyRoutingMethods"].gotoLogin(this.router);
    }
    /**End */
    /**
     * Toggle Css CHnage
     */
    getCustomCss() {
        if (this.showSideBar == true) {
            return 'fa-toggle-off';
        }
        else {
            return 'fa-toggle-on';
        }
    }
    /**Ng Class Icon Set */
    setNgClass(className) {
        return className;
    }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_7__["AdminServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full"]], decls: 48, vars: 11, consts: [[3, "ngClass"], [1, "wrapper", 3, "ngClass"], [1, "top-bar"], [1, "left-section"], [1, "left-side-section"], [1, "toggle-btn", 3, "click"], [1, "logo-img"], ["src", "./assets/imgs/logo.png"], [1, "right-section"], [1, "profile-settings"], [1, "navdrop-box", 2, "display", "flex", "justify-content", "center"], [3, "src"], [2, "position", "relative", "top", "3px", "margin", "2px", "font-weight", "bold", "font-size", "16px"], [1, "fa", "fa-chevron-down", 2, "position", "relative", "top", "9px", "margin-left", "9px"], [1, "dropdown-menu"], ["routerLink", "/show/profile"], [1, "dropdown-menu-footer"], [3, "click"], [1, "side-bar"], [1, "backlayer-sidebar", 3, "click"], [1, "side-header"], ["href", "", 1, "logo-text"], ["src", "./assets/imgs/Logo_car_black_and_white.png"], [1, "logo-name"], [1, "toggle-switch", "fa", 3, "ngClass", "click"], [1, "sidebar-header"], [1, "fa", "fa-times"], [1, "nav-bar"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "main-container", "dashboard"], [1, "main-title"], [3, "ngClass", "click"], [1, "side-icon", 3, "ngClass"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_div_click_5_listener() { return ctx.toggleButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "View Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_24_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_div_click_27_listener() { return ctx.toggleButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "GetItHomeNow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_i_click_34_listener() { return ctx.menueToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_38_listener() { return ctx.toggleButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "perfect-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, FullComponent_li_42_Template, 5, 5, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.showSideBar));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx.mobileView));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user_Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getCustomCss());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.topHeading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n    padding: 0;\n    margin: 0\n}\n\nli[_ngcontent-%COMP%] {\n    list-style: none;\n    cursor: pointer;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: inherit;\n    outline: none;\n}\n\nimg[_ngcontent-%COMP%] {\n    max-width: 100%;\n    vertical-align: top;\n}\n\n.clear[_ngcontent-%COMP%] {\n    clear: both\n}\n\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n    height: auto;\n    letter-spacing: 0;\n    cursor: default;\n    min-height: 100%;\n    font-size: 14px;\n    letter-spacing: 0.1px;\n    color: #79859a;\n    background: #E4E9F0;\n}\n\nbody.no-scroll[_ngcontent-%COMP%] {\n    overflow: hidden!important\n}\n\n.margin-top40[_ngcontent-%COMP%] {\n    margin-top: 40px;\n}\n\n\n\n.cellgrid[_ngcontent-%COMP%] {\n    margin: 0 -10px;\n}\n\n.cellgrid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n}\n\n.cellgrid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: table-cell;\n    padding: 10px 10px 20px 10px;\n}\n\n.cellgrid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    transition: 0.6s all;\n    position: relative;\n    padding: 25px;\n    border-radius: 5px;\n    background: #404041;\n}\n\n.cellgrid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   .card[_ngcontent-%COMP%] {\n    background: linear-gradient(to right, #209287 0%, #36c1b8 100%);\n}\n\n\n\n.cellgrid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .org[_ngcontent-%COMP%] {\n    background: #F98866;\n}\n\n.cellgrid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%] {\n    background: #f07d85;\n}\n\n.cellgrid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .mini-icon[_ngcontent-%COMP%] {\n    text-align: center;\n    color: rgba(255, 255, 255, 0.3);\n    float: right;\n    position: absolute;\n    right: 0px;\n    bottom: 0px;\n}\n\n.cellgrid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .mini-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 100px;\n}\n\n.cellgrid[_ngcontent-%COMP%]   .text-white[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    color: #333;\n}\n\n.cellgrid[_ngcontent-%COMP%]   .text-white[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .cellgrid.user-page[_ngcontent-%COMP%]   .text-white[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    color: #333;\n}\n\n.cellgrid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-size: 16px;\n    color: #fff;\n    font-weight: 400;\n    letter-spacing: 1px;\n}\n\n.cellgrid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    text-transform: none;\n}\n\n.cellgrid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 32px;\n    color: #fff;\n    font-weight: 500;\n    padding: 0px 0 10px 0;\n}\n\n.cellgrid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 25px;\n    color: #fff;\n    font-weight: 400;\n    padding-bottom: 10px;\n}\n\n.cellgrid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 0.6em;\n    font-weight: normal;\n}\n\n.flexbox[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    margin: 0 -10px;\n    min-width: 100%;\n}\n\n.flexbox[_ngcontent-%COMP%]   [class*=\"col-\"][_ngcontent-%COMP%] {\n    margin: 0 10px 20px 10px;\n}\n\n.flexbox[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\n    width: calc(33.33% - 20px);\n    text-align: center;\n    background: #fff;\n    border-radius: 5px;\n    padding: 20px 10px;\n}\n\n.flexbox[_ngcontent-%COMP%]   .received-payment[_ngcontent-%COMP%] {\n    border: 2px solid #1d8178;\n    order: 2;\n    color: #1d8178;\n}\n\n.flexbox[_ngcontent-%COMP%]   .col-8[_ngcontent-%COMP%] {\n    width: calc(66.66% - 20px);\n    order: 1;\n    background: #fff;\n    border-radius: 4px;\n}\n\n.transactions-table[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.total-payment[_ngcontent-%COMP%]   .imgbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 150px;\n    margin-bottom: 20px;\n}\n\n.total-payment[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n    padding: 20px;\n}\n\n.total-payment[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n    font-size: 40px;\n    font-weight: 500;\n}\n\n.total-payment[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%] {\n    padding: 0px;\n}\n\n.total-payment[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%] {\n    padding: 0px;\n}\n\n.total-payment[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 15px 0 15px 15px;\n}\n\n.total-payment[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding-left: 15px;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n    padding-top: 75px;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 220px;\n    width: calc(100% - 220px);\n    top: 0;\n    z-index: 99;\n    padding: 15px 20px;\n    background: #f7f7ff;\n    box-shadow: 0 0 15px #70707010;\n    padding: 15px 20px;\n}\n\n.top-bar[_ngcontent-%COMP%]::after {\n    content: '';\n    display: block;\n    clear: both;\n}\n\n.left-section[_ngcontent-%COMP%] {\n    float: left;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.search-box-outer[_ngcontent-%COMP%] {\n    height: 40px;\n    border-radius: 30px;\n    float: left;\n    position: relative;\n    padding: 0 40px 0px 5px;\n    transition: .3s;\n    width: 300px;\n    background-color: #fff;\n    border: 1px solid #d7d7e3;\n    display: none;\n}\n\n.search-box-outer[_ngcontent-%COMP%]   input.search-box[_ngcontent-%COMP%] {\n    background: none;\n    border: none;\n    color: #666;\n    border: none;\n    padding-left: 10px;\n    outline: none;\n    width: 100%;\n    height: 38px;\n    font-size: 15px\n}\n\n.search-box-outer[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    background: url('search.png') no-repeat;\n    width: 29px;\n    height: 23px;\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    cursor: pointer;\n    margin-top: -11.5px;\n    margin-left: -8px;\n    border: none;\n    background-size: contain;\n}\n\n.right-section[_ngcontent-%COMP%] {\n    float: right;\n}\n\n.logo[_ngcontent-%COMP%] {\n    padding: 15px;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 135px;\n}\n\n.toggle-btn[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    padding: 0 15px;\n    margin-top: 25px;\n    cursor: pointer;\n    float: left;\n}\n\n.toggle-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 3px;\n    border-radius: 4px;\n    margin-bottom: 6px;\n    background: #2d96f1;\n    display: block;\n    transition: 0.5s all;\n}\n\n.profile-settings[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 30px;\n    max-height: 30px;\n    border-radius: 50%;\n    vertical-align: middle;\n    margin-right: 4px;\n    width: 30px;\n    height: 30px;\n}\n\n.profile-settings[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\n    transform: scaleY(1);\n    transition: 0.3s all;\n    display: unset;\n}\n\n.notification[_ngcontent-%COMP%]   .mdi-bell-ring[_ngcontent-%COMP%] {\n    font-size: 25px;\n    padding: 10px 5px;\n    color: #ff586b;\n}\n\n.notification[_ngcontent-%COMP%]   .mdi-bell-ring[_ngcontent-%COMP%]:before {\n    -webkit-animation: bells 0.2s linear infinite alternate;\n            animation: bells 0.2s linear infinite alternate;\n}\n\n@-webkit-keyframes bells {\n    0% {\n        transform-origin: center;\n        transform: rotate(4deg);\n    }\n    100% {\n        transform-origin: center;\n        transform: rotate(-4deg);\n    }\n}\n\n@keyframes bells {\n    0% {\n        transform-origin: center;\n        transform: rotate(4deg);\n    }\n    100% {\n        transform-origin: center;\n        transform: rotate(-4deg);\n    }\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 100%;\n    width: 180px;\n    max-width: 180px;\n    border-radius: 5px;\n    background: #fff;\n    right: 0;\n    left: unset;\n    text-align: center;\n    box-shadow: 0 0 25px rgba(0, 0, 0, 0.12);\n    cursor: default;\n    transform: scaleY(0);\n    transition: 0.3s all;\n    display: unset;\n    transform-origin: top;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: #2d96f1;\n    text-transform: uppercase;\n    padding: 10px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 15px;\n    display: block;\n    transition: 0.3s all;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background: #f1f1f1;\n    transition: 0.3s all;\n}\n\n.dropdown-menu-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    \n    padding: 12px;\n    cursor: pointer;\n}\n\n.dropdown-menu.show[_ngcontent-%COMP%] {\n    transform: scaleY(1);\n    transition: 0.3s all;\n    display: unset;\n}\n\n\n\n.side-bar[_ngcontent-%COMP%]   .child-menu.active[_ngcontent-%COMP%]   .menu-wrap[_ngcontent-%COMP%] {\n    display: block;\n}\n\n.nav-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background: none;\n}\n\n.side-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%]   .menu-wrap[_ngcontent-%COMP%] {\n    display: none;\n    background: #ccc;\n}\n\n.side-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after {\n    content: \"\\F35D\";\n    font-family: \"Material Design Icons\";\n    position: absolute;\n    right: 6px;\n    top: 50%;\n    transform: translate(0, -50%);\n    font-size: 30px;\n}\n\n.side-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%] > .menu-wrap[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 15px 10px 15px 30px\n}\n\n.side-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%] > .menu-wrap[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]:before {\n    position: absolute;\n    left: 30px;\n    top: 0;\n    bottom: 0;\n    content: \"\";\n    background: #999;\n    width: 1px;\n}\n\n.side-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%]   .menu-wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 7px 10px 7px 35px;\n    font-size: 15px;\n    display: block;\n    color: #75787e;\n}\n\n.side-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%]   .menu-wrap[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #027bb2;\n}\n\n.side-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%]   .menu-wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    color: #fff;\n}\n\n.side-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%]   .menu-wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n    position: absolute;\n    left: 0;\n    top: 15px;\n    height: 1px;\n    background: #999;\n    border-right: none;\n    content: \"\";\n    width: 20px;\n    transition: all 300ms ease 0s;\n}\n\n\n\n.broadcast-notification[_ngcontent-%COMP%] {\n    width: 350px;\n    max-width: 350px;\n}\n\n.broadcast-notification[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    color: #000\n}\n\n.broadcast-notification[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n    border-bottom: 2px solid #2d96f1\n}\n\n.broadcast-notification[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #2d96f1;\n    font-weight: 600;\n    font-size: 18px;\n    padding: 0 5px;\n}\n\n.broadcast-notification[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n    background: #fff;\n}\n\n.broadcast-notification[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 0;\n    display: block;\n}\n\n.broadcast-notification[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 15px;\n    font-size: 14px;\n    text-align: left;\n}\n\n.broadcast-notification[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #2d96f1;\n    padding-right: 10px;\n}\n\n.broadcast-notification[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding: 0 5px;\n    color: #2d96f1;\n    font-size: 12px;\n}\n\n.notification-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background: #ddd;\n    padding: 12px;\n}\n\n.count-notification[_ngcontent-%COMP%] {\n    position: absolute;\n    background: #717071;\n    padding: 0;\n    font-size: 9px;\n    color: #fff;\n    border-radius: 50%;\n    top: -10px;\n    right: -10px;\n    width: 18px;\n    height: 18px;\n    padding-left: 4px;\n}\n\n.side-bar[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 220px;\n    height: 100%;\n    box-shadow: 0 35px 25px rgba(0, 0, 0, 0.12);\n    \n    transition: 0.5s all;\n    color: #868686;\n    font-size: 15px;\n    background: url('sidebar-back.jpg') no-repeat;\n    background-size: cover;\n    background-position: center center;\n    overflow: hidden;\n    white-space: nowrap;\n    z-index: 999;\n}\n\n.side-bar[_ngcontent-%COMP%]::before {\n    position: absolute;\n    content: '';\n    height: 100%;\n    width: 100%;\n    left: 0;\n    top: 0;\n    background: rgba(0, 0, 0, 0.7);\n    z-index: -1;\n}\n\n.side-bar[_ngcontent-%COMP%]   .side-header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    padding: 15px 10px;\n    align-items: center;\n}\n\n.side-header[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #fff;\n    cursor: pointer;\n}\n\n.side-bar[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 60px;\n    margin-left: -5px;\n    vertical-align: bottom !important;\n}\n\n.side-bar[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%] {\n    color: #fff;\n    margin-left: 10px;\n}\n\n.side-bar[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n\n.nav-outer[_ngcontent-%COMP%] {\n    position: relative;\n    height: calc(100vh - 90px);\n    overflow: auto;\n    z-index: 4;\n}\n\n.nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    padding: 15px 10px;\n    transition: 0.3s all;\n    position: relative;\n    width: 100%;\n}\n\n.nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    vertical-align: middle;\n}\n\n.nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n    \n    background: rgba(200, 200, 200, 0.2);\n    transition: 0.3s all;\n    padding-left: 15px;\n}\n\n.nav-bar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background: rgba(200, 200, 200, 0.2);\n    border-left: 2px solid #ff586b;\n    color: #fff;\n}\n\n.nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 19px;\n    vertical-align: middle;\n    margin-right: 10px;\n    padding-left: 13px;\n}\n\n.right-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:after {\n    display: block;\n    clear: both;\n    content: '';\n}\n\n.right-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 0;\n    vertical-align: middle;\n    cursor: pointer;\n    position: relative;\n    margin-right: 20px;\n}\n\n.right-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    margin-right: 0;\n}\n\n.slide[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%] {\n    left: 70px;\n    width: calc(100% - 70px);\n    transition: 0.5s all;\n}\n\n.slide[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.slide[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%] {\n    width: 70px;\n    transition: 0.5s all;\n}\n\n.slide[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n    padding-left: 10px;\n}\n\n.slide[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.slide[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]:hover   .logo-text[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n.slide[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]:hover   .toggle-switch[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n.slide[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]:hover {\n    width: 220px;\n    transition: 0.5s all;\n}\n\n.slide[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]:hover   .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n    transition: 0.5s all;\n}\n\n.slide[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n    transition: 0.5s all;\n}\n\n.slide[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n    width: 16px;\n    transition: 0.5s all;\n}\n\n.slide[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n    margin-left: 70px;\n    \n}\n\n\n\n.main-container[_ngcontent-%COMP%] {\n    margin-left: 220px;\n    padding: 25px;\n    min-height: calc(100vh - 75px);\n    \n}\n\nul.grid-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n    float: left;\n    width: 25%;\n    padding: 0px 10px 20px 10px;\n}\n\nul.grid-2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n    float: left;\n    width: 50%;\n    padding: 0px 10px 20px 10px;\n}\n\nul.grid[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n    padding: 0px 0px 15px 0;\n}\n\n.main-title[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    display: inline-block;\n    vertical-align: top;\n    width: 100%;\n}\n\n.main-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-size: 28px;\n    text-transform: capitalize;\n    color: #000;\n}\n\n.whitebox[_ngcontent-%COMP%] {\n    background: #fff;\n    border-radius: 4px;\n}\n\n.top-section[_ngcontent-%COMP%] {\n    padding: 30px;\n    border-bottom: #ddd 1px solid;\n    display: inline-block;\n    vertical-align: top;\n    width: 100%;\n    vertical-align: top;\n}\n\n.chart-section[_ngcontent-%COMP%] {\n    padding: 40px 40px 40px 0;\n}\n\n.top-section[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.filters[_ngcontent-%COMP%] {\n    float: right;\n}\n\n.filters[_ngcontent-%COMP%]   .action-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    border: 1px solid #79859a;\n    border-radius: 30px;\n}\n\n.filters[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n    border-radius: 3px;\n    display: inline-block;\n    vertical-align: middle;\n    background: #ddd;\n}\n\n.filters[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: left;\n}\n\n.filters[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 12px;\n    border-radius: 2px;\n    display: block;\n    font-size: 14px;\n}\n\n.filters[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background: #1C7F76;\n    color: #fff;\n}\n\n.filter-section[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    background: #1c7f76;\n    padding: 9px 10px;\n    cursor: pointer;\n    color: #fff;\n    border-radius: 3px;\n    margin-left: 15px;\n}\n\n.filter-section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n}\n\n.search-outer[_ngcontent-%COMP%] {\n    height: 40px;\n    border-radius: 5px;\n    float: left;\n    position: relative;\n    padding: 0 40px 0px 5px;\n    transition: .3s;\n    width: 400px;\n    background-color: #fff;\n    border: 1px solid #d7d7e3;\n    margin-right: 0px;\n}\n\n.search-outer[_ngcontent-%COMP%]   input.search-box[_ngcontent-%COMP%] {\n    background: none;\n    border: none;\n    color: #666;\n    border: none;\n    padding-left: 10px;\n    outline: none;\n    width: 100%;\n    height: 38px;\n    font-size: 15px\n}\n\n.search-outer[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    width: 29px;\n    height: 23px;\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    cursor: pointer;\n    margin-top: -11.5px;\n    margin-left: -8px;\n    border: none\n}\n\n.left-side-section[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.sidebar-header[_ngcontent-%COMP%] {\n    display: none;\n}\n\n@media (max-width: 991px) {\n    .left-side-section[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n    }\n    .left-side-section[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 125px;\n    }\n    .left-side-section[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n        margin-top: 0;\n        padding-left: 0;\n    }\n    .left-side-section[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        background: #e92330;\n    }\n    .main-container[_ngcontent-%COMP%] {\n        margin-left: 0;\n        padding: 25px 20px;\n    }\n    .top-bar[_ngcontent-%COMP%] {\n        width: 100%;\n        left: 0;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n    .top-bar[_ngcontent-%COMP%]::after {\n        display: none;\n    }\n    .profile-settings[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 40px;\n        margin-right: 8px;\n    }\n    \n    .side-bar[_ngcontent-%COMP%] {\n        width: 180px;\n        left: -100%;\n    }\n    .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        padding: 15px 0;\n        font-size: 14px;\n    }\n    .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        font-size: 16px;\n        padding-left: 10px;\n    }\n    .side-bar[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .side-header[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .sidebar-header[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        width: 100%;\n    }\n    .side-bar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 120px;\n    }\n    .side-bar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        color: #fff;\n        font-size: 20px;\n    }\n    .backlayer-sidebar[_ngcontent-%COMP%] {\n        content: '';\n        position: fixed;\n        top: 0;\n        height: 100%;\n        width: 100%;\n        left: 0;\n        background: rgba(0, 0, 0, 0.5);\n        z-index: -1;\n        left: -100%;\n    }\n    .mobile-slide[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%] {\n        left: 0;\n    }\n    .mobile-slide[_ngcontent-%COMP%]   .backlayer-sidebar[_ngcontent-%COMP%] {\n        left: 0;\n    }\n    .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n        padding-left: 0;\n    }\n    .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        border-left: 2px solid transparent;\n    }\n}\n\n@media (max-width: 767px) {\n    .main-title[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n    }\n    .main-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n    .top-bar[_ngcontent-%COMP%] {\n        padding: 10px 20px;\n    }\n    .dropdown-menu[_ngcontent-%COMP%] {\n        width: 150px;\n    }\n    .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        padding: 8px 10px;\n    }\n    .dropdown-menu-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        padding: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Z1bGwvZnVsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0lBT0ksVUFBVTtJQUNWO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUdBLFlBQVk7O0FBRVo7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUdJLCtEQUErRDtBQUNuRTs7QUFHQSwrT0FBK087O0FBRS9PO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJB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QUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixtQkFBbUI7UUFDbkIsV0FBVztJQUNmO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsZUFBZTtRQUNmLE1BQU07UUFDTixZQUFZO1FBQ1osV0FBVztRQUNYLE9BQU87UUFDUCw4QkFBOEI7UUFDOUIsV0FBVztRQUNYLFdBQVc7SUFDZjtJQUNBO1FBQ0ksT0FBTztJQUNYO0lBQ0E7UUFDSSxPQUFPO0lBQ1g7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGtDQUFrQztJQUN0QztBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZnVsbC9mdWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCxcbmxpLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDBcbn1cblxubGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmNsZWFyIHtcbiAgICBjbGVhcjogYm90aFxufVxuXG5ib2R5LFxuaHRtbCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgY29sb3I6ICM3OTg1OWE7XG4gICAgYmFja2dyb3VuZDogI0U0RTlGMDtcbn1cblxuYm9keS5uby1zY3JvbGwge1xuICAgIG92ZXJmbG93OiBoaWRkZW4haW1wb3J0YW50XG59XG5cbi5tYXJnaW4tdG9wNDAge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cblxuLypkYXNoYm9hcmQqL1xuXG4uY2VsbGdyaWQge1xuICAgIG1hcmdpbjogMCAtMTBweDtcbn1cblxuLmNlbGxncmlkIHVsIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG4uY2VsbGdyaWQgdWwgbGkge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDIwcHggMTBweDtcbn1cblxuLmNlbGxncmlkIC5jYXJkIHtcbiAgICB0cmFuc2l0aW9uOiAwLjZzIGFsbDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogIzQwNDA0MTtcbn1cblxuLmNlbGxncmlkIHVsIGxpOmZpcnN0LWNoaWxkIC5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMjA5Mjg3IDAlLCAjMzZjMWI4IDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMyMDkyODcgMCUsICMzNmMxYjggMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjA5Mjg3IDAlLCAjMzZjMWI4IDEwMCUpO1xufVxuXG5cbi8qLmNlbGxncmlkIHVsIGxpOmxhc3QtY2hpbGQgLmNhcmR7YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgICMzNmMxYjggIDAlLCAjMjA5Mjg3IDEwMCUpOyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAgIzM2YzFiOCAgMCUsIzIwOTI4NyAxMDAlKTtiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICAjMzZjMWI4ICAwJSwjMjA5Mjg3IDEwMCUpO30qL1xuXG4uY2VsbGdyaWQgdWwgbGkgLm9yZyB7XG4gICAgYmFja2dyb3VuZDogI0Y5ODg2Njtcbn1cblxuLmNlbGxncmlkIHVsIGxpIC5waW5rIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjA3ZDg1O1xufVxuXG4uY2VsbGdyaWQgLmNhcmQgLm1pbmktaWNvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xufVxuXG4uY2VsbGdyaWQgLmNhcmQgLm1pbmktaWNvbiBzcGFuIHtcbiAgICBmb250LXNpemU6IDEwMHB4O1xufVxuXG4uY2VsbGdyaWQgLnRleHQtd2hpdGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4uY2VsbGdyaWQgLnRleHQtd2hpdGUgaDQsXG4uY2VsbGdyaWQudXNlci1wYWdlIC50ZXh0LXdoaXRlIGg2IHtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLmNlbGxncmlkIC5jYXJkIGg2IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5jZWxsZ3JpZCAuY2FyZCBoNiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5jZWxsZ3JpZCAuY2FyZCBoNSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xufVxuXG4uY2VsbGdyaWQgLmNhcmQgaDQge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uY2VsbGdyaWQgLmNhcmQgaDQgc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmZsZXhib3gge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMCAtMTBweDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5mbGV4Ym94IFtjbGFzcyo9XCJjb2wtXCJdIHtcbiAgICBtYXJnaW46IDAgMTBweCAyMHB4IDEwcHg7XG59XG5cbi5mbGV4Ym94IC5jb2wtNCB7XG4gICAgd2lkdGg6IGNhbGMoMzMuMzMlIC0gMjBweCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cblxuLmZsZXhib3ggLnJlY2VpdmVkLXBheW1lbnQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxZDgxNzg7XG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMztcbiAgICAtbXMtZmxleC1vcmRlcjogMjtcbiAgICBvcmRlcjogMjtcbiAgICBjb2xvcjogIzFkODE3ODtcbn1cblxuLmZsZXhib3ggLmNvbC04IHtcbiAgICB3aWR0aDogY2FsYyg2Ni42NiUgLSAyMHB4KTtcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xuICAgIC1tcy1mbGV4LW9yZGVyOiAxO1xuICAgIG9yZGVyOiAxO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4udHJhbnNhY3Rpb25zLXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnRvdGFsLXBheW1lbnQgLmltZ2JveCBpbWcge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRvdGFsLXBheW1lbnQgaDQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udG90YWwtcGF5bWVudCAudG90YWwge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udG90YWwtcGF5bWVudCAudG9wLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnRvdGFsLXBheW1lbnQgLnRhYmxlLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnRvdGFsLXBheW1lbnQgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGQgYSB7XG4gICAgcGFkZGluZzogMTVweCAwIDE1cHggMTVweDtcbn1cblxuLnRvdGFsLXBheW1lbnQgLnRhYmxlLXdyYXBwZXIgdGgge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLndyYXBwZXIge1xuICAgIHBhZGRpbmctdG9wOiA3NXB4O1xufVxuXG4udG9wLWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDIyMHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMjBweCk7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2ZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4ICM3MDcwNzAxMDtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG59XG5cbi50b3AtYmFyOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5sZWZ0LXNlY3Rpb24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2VhcmNoLWJveC1vdXRlciB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDAgNDBweCAwcHggNXB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzO1xuICAgIC1vLXRyYW5zaXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q3ZDdlMztcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2VhcmNoLWJveC1vdXRlciBpbnB1dC5zZWFyY2gtYm94IHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweFxufVxuXG4uc2VhcmNoLWJveC1vdXRlciAuc2VhcmNoIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3NlYXJjaC5wbmcnKSBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDI5cHg7XG4gICAgaGVpZ2h0OiAyM3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTExLjVweDtcbiAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4ucmlnaHQtc2VjdGlvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubG9nbyB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmxvZ28gaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEzNXB4O1xufVxuXG4udG9nZ2xlLWJ0biB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50b2dnbGUtYnRuIHNwYW4ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgYmFja2dyb3VuZDogIzJkOTZmMTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcbn1cblxuLnByb2ZpbGUtc2V0dGluZ3MgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDMwcHg7XG4gICAgbWF4LWhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5wcm9maWxlLXNldHRpbmdzOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgICBkaXNwbGF5OiB1bnNldDtcbn1cblxuLm5vdGlmaWNhdGlvbiAubWRpLWJlbGwtcmluZyB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIGNvbG9yOiAjZmY1ODZiO1xufVxuXG4ubm90aWZpY2F0aW9uIC5tZGktYmVsbC1yaW5nOmJlZm9yZSB7XG4gICAgYW5pbWF0aW9uOiBiZWxscyAwLjJzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgYmVsbHMge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTRkZWcpO1xuICAgIH1cbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogdW5zZXQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xuICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbn1cblxuLmRyb3Bkb3duLW1lbnUgaDUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzJkOTZmMTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5kcm9wZG93bi1tZW51IGEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xufVxuXG4uZHJvcGRvd24tbWVudSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xufVxuXG4uZHJvcGRvd24tbWVudS1mb290ZXIgYSB7XG4gICAgLyogYmFja2dyb3VuZDogI2RkZDsgKi9cbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gICAgZGlzcGxheTogdW5zZXQ7XG59XG5cblxuLypjaGlsZCBtZW51Ki9cblxuLnNpZGUtYmFyIC5jaGlsZC1tZW51LmFjdGl2ZSAubWVudS13cmFwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5hdi1iYXIgLmNoaWxkLW1lbnUgbGkgYSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnNpZGUtYmFyIC5jaGlsZC1tZW51IC5tZW51LXdyYXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLnNpZGUtYmFyIC5jaGlsZC1tZW51PmE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFxGMzVEXCI7XG4gICAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgRGVzaWduIEljb25zXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA2cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uc2lkZS1iYXIgLmNoaWxkLW1lbnU+Lm1lbnUtd3JhcD51bCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDE1cHggMTBweCAxNXB4IDMwcHhcbn1cblxuLnNpZGUtYmFyIC5jaGlsZC1tZW51Pi5tZW51LXdyYXA+dWw6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMzBweDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZDogIzk5OTtcbiAgICB3aWR0aDogMXB4O1xufVxuXG4uc2lkZS1iYXIgLmNoaWxkLW1lbnUgLm1lbnUtd3JhcCB1bCBsaSBhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogN3B4IDEwcHggN3B4IDM1cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjNzU3ODdlO1xufVxuXG4uc2lkZS1iYXIgLmNoaWxkLW1lbnUgLm1lbnUtd3JhcCAuYWN0aXZlIGEge1xuICAgIGNvbG9yOiAjMDI3YmIyO1xufVxuXG4uc2lkZS1iYXIgLmNoaWxkLW1lbnUgLm1lbnUtd3JhcCB1bCBsaSBhLmFjdGl2ZSB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zaWRlLWJhciAuY2hpbGQtbWVudSAubWVudS13cmFwIHVsIGxpIGE6OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAxNXB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6ICM5OTk7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcbn1cblxuXG4vKjQgZGVjIDIwMTkgKi9cblxuLmJyb2FkY2FzdC1ub3RpZmljYXRpb24ge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xufVxuXG4uYnJvYWRjYXN0LW5vdGlmaWNhdGlvbiBoNSB7XG4gICAgY29sb3I6ICMwMDBcbn1cblxuLmJyb2FkY2FzdC1ub3RpZmljYXRpb24gLm5vdGlmaWNhdGlvbi1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzJkOTZmMVxufVxuXG4uYnJvYWRjYXN0LW5vdGlmaWNhdGlvbiAubm90aWZpY2F0aW9uLWhlYWRlciBzcGFuIHtcbiAgICBjb2xvcjogIzJkOTZmMTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLmJyb2FkY2FzdC1ub3RpZmljYXRpb24gLm5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uYnJvYWRjYXN0LW5vdGlmaWNhdGlvbiAubm90aWZpY2F0aW9uLW1lc3NhZ2UgbGkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5icm9hZGNhc3Qtbm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24tbWVzc2FnZSBsaSBhIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYnJvYWRjYXN0LW5vdGlmaWNhdGlvbiAubm90aWZpY2F0aW9uLW1lc3NhZ2UgbGkgYSBpIHtcbiAgICBjb2xvcjogIzJkOTZmMTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uYnJvYWRjYXN0LW5vdGlmaWNhdGlvbiAubm90aWZpY2F0aW9uLW1lc3NhZ2UgbGkgYSBzcGFuIHtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICBjb2xvcjogIzJkOTZmMTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5ub3RpZmljYXRpb24tZm9vdGVyIGEge1xuICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgcGFkZGluZzogMTJweDtcbn1cblxuLmNvdW50LW5vdGlmaWNhdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICM3MTcwNzE7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdG9wOiAtMTBweDtcbiAgICByaWdodDogLTEwcHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4uc2lkZS1iYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgMzVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgLyogYmFja2dyb3VuZDogIzJmMzAzODsgKi9cbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgICBjb2xvcjogIzg2ODY4NjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3NpZGViYXItYmFjay5qcGcnKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5zaWRlLWJhcjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLnNpZGUtYmFyIC5zaWRlLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaWRlLWhlYWRlciAudG9nZ2xlLXN3aXRjaCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpZGUtYmFyIC5sb2dvLWltZyBpbWcge1xuICAgIG1heC13aWR0aDogNjBweDtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlLWJhciAubG9nby10ZXh0IC5sb2dvLW5hbWUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uc2lkZS1iYXIgLmxvZ28tdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2LW91dGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTBweCk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgei1pbmRleDogNDtcbn1cblxuLm5hdi1iYXIgbGkgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdi1iYXIgbGkgYSBzcGFuIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubmF2LWJhciBsaTpob3ZlciBhIHtcbiAgICAvKiBjb2xvcjogOyAqL1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5uYXYtYmFyIGxpLmFjdGl2ZSBhIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMik7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmY1ODZiO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2LWJhciBsaSBhIGkge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG59XG5cbi5yaWdodC1zZWN0aW9uIHVsOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjbGVhcjogYm90aDtcbiAgICBjb250ZW50OiAnJztcbn1cblxuLnJpZ2h0LXNlY3Rpb24gdWwgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5yaWdodC1zZWN0aW9uIHVsIGxpOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnNsaWRlIC50b3AtYmFyIHtcbiAgICBsZWZ0OiA3MHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcbn1cblxuLnNsaWRlIC50b2dnbGUtc3dpdGNoIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGUgLnNpZGUtYmFyIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcbn1cblxuLnNsaWRlIC5uYXYtYmFyIGxpOmhvdmVyIGEge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnNsaWRlIC5zaWRlLWJhciAubG9nby10ZXh0IC5sb2dvLW5hbWUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZSAuc2lkZS1iYXI6aG92ZXIgLmxvZ28tdGV4dCAubG9nby1uYW1lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zbGlkZSAuc2lkZS1iYXI6aG92ZXIgLnRvZ2dsZS1zd2l0Y2gge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNsaWRlIC5zaWRlLWJhcjpob3ZlciB7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xufVxuXG4uc2xpZGUgLnNpZGUtYmFyOmhvdmVyIC5uYXYtYmFyIGxpIGEgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xufVxuXG4uc2xpZGUgLm5hdi1iYXIgbGkgYSBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xufVxuXG4uc2xpZGUgLnRvZ2dsZS1idG4gc3BhbjpudGgtY2hpbGQoMikge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xufVxuXG4uc2xpZGUgLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICAvKiB0cmFuc2l0aW9uOiAwLjVzIGFsbDsgKi9cbn1cblxuXG4vKm1haW4tY29udGFpbmVyKi9cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjIwcHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XG4gICAgLyogdHJhbnNpdGlvbjogMC41cyBhbGw7ICovXG59XG5cbnVsLmdyaWQtND5saSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBwYWRkaW5nOiAwcHggMTBweCAyMHB4IDEwcHg7XG59XG5cbnVsLmdyaWQtMj5saSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAwcHggMTBweCAyMHB4IDEwcHg7XG59XG5cbnVsLmdyaWQ+bGkge1xuICAgIHBhZGRpbmc6IDBweCAwcHggMTVweCAwO1xufVxuXG4ubWFpbi10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW4tdGl0bGUgaDEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi53aGl0ZWJveCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi50b3Atc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3JkZXItYm90dG9tOiAjZGRkIDFweCBzb2xpZDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uY2hhcnQtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNDBweCA0MHB4IDQwcHggMDtcbn1cblxuLnRvcC1zZWN0aW9uIC5zdWItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmZpbHRlcnMge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmZpbHRlcnMgLmFjdGlvbi13cmFwIGEge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3OTg1OWE7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLmZpbHRlcnMgLmR1cmF0aW9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbn1cblxuLmZpbHRlcnMgLmR1cmF0aW9uIGxpIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmZpbHRlcnMgLmR1cmF0aW9uIGxpIGEge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZpbHRlcnMgLmR1cmF0aW9uIGxpLmFjdGl2ZSBhIHtcbiAgICBiYWNrZ3JvdW5kOiAjMUM3Rjc2O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uZmlsdGVyLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJhY2tncm91bmQ6ICMxYzdmNzY7XG4gICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmZpbHRlci1zZWN0aW9uIGkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNlYXJjaC1vdXRlciB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMCA0MHB4IDBweCA1cHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XG4gICAgLW8tdHJhbnNpdGlvbjogLjNzO1xuICAgIHRyYW5zaXRpb246IC4zcztcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDdkN2UzO1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uc2VhcmNoLW91dGVyIGlucHV0LnNlYXJjaC1ib3gge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgZm9udC1zaXplOiAxNXB4XG59XG5cbi5zZWFyY2gtb3V0ZXIgLnNlYXJjaCB7XG4gICAgd2lkdGg6IDI5cHg7XG4gICAgaGVpZ2h0OiAyM3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTExLjVweDtcbiAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICBib3JkZXI6IG5vbmVcbn1cblxuLmxlZnQtc2lkZS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lkZWJhci1oZWFkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC5sZWZ0LXNpZGUtc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5sZWZ0LXNpZGUtc2VjdGlvbiAubG9nby1pbWcgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjVweDtcbiAgICB9XG4gICAgLmxlZnQtc2lkZS1zZWN0aW9uIC50b2dnbGUtYnRuIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cbiAgICAubGVmdC1zaWRlLXNlY3Rpb24gLnRvZ2dsZS1idG4gc3BhbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlOTIzMzA7XG4gICAgfVxuICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDIwcHg7XG4gICAgfVxuICAgIC50b3AtYmFyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLnRvcC1iYXI6OmFmdGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnByb2ZpbGUtc2V0dGluZ3MgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG4gICAgLyogc2lkZWJhciAqL1xuICAgIC5zaWRlLWJhciB7XG4gICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgfVxuICAgIC5uYXYtYmFyIGxpIGEge1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLm5hdi1iYXIgbGkgYSBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIC5zaWRlLWJhciAubG9nby10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNpZGUtaGVhZGVyIC50b2dnbGUtc3dpdGNoIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNpZGViYXItaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnNpZGUtYmFyIC5zaWRlYmFyLWhlYWRlciAubG9nby1pbWcgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICB9XG4gICAgLnNpZGUtYmFyIC5zaWRlYmFyLWhlYWRlciBhIGkge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuYmFja2xheWVyLXNpZGViYXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIGxlZnQ6IC0xMDAlO1xuICAgIH1cbiAgICAubW9iaWxlLXNsaWRlIC5zaWRlLWJhciB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgIC5tb2JpbGUtc2xpZGUgLmJhY2tsYXllci1zaWRlYmFyIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgLm5hdi1iYXIgbGk6aG92ZXIgYSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG4gICAgLm5hdi1iYXIgbGkgYSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAubWFpbi10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC5tYWluLXRpdGxlIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICAudG9wLWJhciB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICB9XG4gICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgfVxuICAgIC5kcm9wZG93bi1tZW51IGEge1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICB9XG4gICAgLmRyb3Bkb3duLW1lbnUtZm9vdGVyIGEge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-full',
                templateUrl: './full.component.html',
                styleUrls: ['./full.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }, { type: src_app_services_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["SidebarService"] }, { type: src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_7__["AdminServiceService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/material/material.ts":
/*!**************************************!*\
  !*** ./src/app/material/material.ts ***!
  \**************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");










class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]
        ],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]], exports: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]
                ],
                exports: [
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modalPackages/advertisement.ts":
/*!************************************************!*\
  !*** ./src/app/modalPackages/advertisement.ts ***!
  \************************************************/
/*! exports provided: AdvertisementModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementModel", function() { return AdvertisementModel; });
class AdvertisementModel {
    constructor() { }
}


/***/ }),

/***/ "./src/app/modalPackages/cookies.ts":
/*!******************************************!*\
  !*** ./src/app/modalPackages/cookies.ts ***!
  \******************************************/
/*! exports provided: CookiesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiesModel", function() { return CookiesModel; });
class CookiesModel {
    constructor(user) {
        this._id = user._id;
        this.email = user.email;
        this.token = user.token;
        this.profilePic = user.profilePic;
        this.contact = user.contact;
    }
}


/***/ }),

/***/ "./src/app/modalPackages/login.ts":
/*!****************************************!*\
  !*** ./src/app/modalPackages/login.ts ***!
  \****************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
class LoginModel {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/modalPackages/sidenavBar.ts":
/*!*********************************************!*\
  !*** ./src/app/modalPackages/sidenavBar.ts ***!
  \*********************************************/
/*! exports provided: SideNavigationMain, SideNavigationUrlTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMain", function() { return SideNavigationMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationUrlTitle", function() { return SideNavigationUrlTitle; });
class SideNavigationMain {
    constructor(id, title, url, icon, status, type, urlTitleList, activeicon) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.icon = icon;
        this.status = status;
        this.type = type;
        this.urlTitleList = urlTitleList;
        this.activeicon = activeicon;
    }
}
class SideNavigationUrlTitle {
    constructor(url, title) {
        this.url = url;
        this.title = title;
    }
}


/***/ }),

/***/ "./src/app/services/admin-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/admin-service.service.ts ***!
  \***************************************************/
/*! exports provided: AdminServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminServiceService", function() { return AdminServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utillpackage/my-cookies */ "./src/app/utillpackage/my-cookies.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _utillpackage_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utillpackage/constant */ "./src/app/utillpackage/constant.ts");
/* harmony import */ var _modalPackages_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modalPackages/cookies */ "./src/app/modalPackages/cookies.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");










class AdminServiceService {
    constructor(http, cookiesServices) {
        this.http = http;
        this.cookiesServices = cookiesServices;
        this.loginUrl = _utillpackage_constant__WEBPACK_IMPORTED_MODULE_5__["MyConstants"].BASEURL + "admin/login";
        this.createAdvertisementUrl = _utillpackage_constant__WEBPACK_IMPORTED_MODULE_5__["MyConstants"].BASEURL + "admin/createAdvertisement";
        this.updateAdvertisementUrl = _utillpackage_constant__WEBPACK_IMPORTED_MODULE_5__["MyConstants"].BASEURL + "admin/updateAdvertisment";
        this.deleteAdvertisementUrl = _utillpackage_constant__WEBPACK_IMPORTED_MODULE_5__["MyConstants"].BASEURL + "admin/deleteAdvertisment";
        this.getAdvertisementUrl = _utillpackage_constant__WEBPACK_IMPORTED_MODULE_5__["MyConstants"].BASEURL + "admin/getAdvertisments?name=";
        this.userForgotPasswordUrl = _utillpackage_constant__WEBPACK_IMPORTED_MODULE_5__["MyConstants"].BASEURL + "admin/forget-password";
        this.updateAdminPwdUrl = _utillpackage_constant__WEBPACK_IMPORTED_MODULE_5__["MyConstants"].BASEURL + "admin/updateProfile";
        this.profilePic = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        this.currentProfilePic = this.profilePic.asObservable();
    }
    setCurrentProfilePic(profilePicUrl) {
        this.profilePic.next(profilePicUrl);
    }
    getCurrentProfilePic() {
        return this.profilePic.asObservable();
    }
    /**
      * method to set token for header
      */
    setHeader() {
        this.userId = _utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getId(this.cookiesServices);
        this.token = _utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getToken(this.cookiesServices);
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('token', this.token);
        this.userIdRequestParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("_id", this.userId);
    }
    /**
     * method to login for admin
     * @param username username to login
     * @param password password to login
     */
    adminLoginAPI(username, password) {
        let data = {};
        data.email = username;
        data.password = password;
        return this.http.post(this.loginUrl, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            // login successful if there's a token in thedata response
            if (response.success && response.data.token) {
                _utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].saveLoginDataInCookies(this.cookiesServices, new _modalPackages_cookies__WEBPACK_IMPORTED_MODULE_6__["CookiesModel"](response.data));
                this.profilePic.next(this.cookiesServices.get('profilePic'));
            }
            return response;
        }));
    }
    /**
     * method to create new advertisement
     * @param adData AdvertisementModel
     */
    createAdvertisement(adData) {
        //for setting token in headers
        this.setHeader();
        const httpOptions = {
            headers: this.header
        };
        return this.http.post(this.createAdvertisementUrl, adData, httpOptions);
    }
    /**
      * method to update advertisement
      * @param adData AdvertisementModel
    */
    updateAdvertisement(adData) {
        //for setting token in headers
        this.setHeader();
        const httpOptions = {
            headers: this.header
        };
        return this.http.patch(this.updateAdvertisementUrl, adData, httpOptions);
    }
    /**
      * mw=ethod to create new advertisement
      * @param advertiseId advertisement Id
     */
    deleteAdvertisement(advertiseId) {
        //for setting token in headers
        this.setHeader();
        const httpOptions = {
            headers: this.header
        };
        let data = {};
        data.advertiseId = advertiseId;
        return this.http.patch(this.deleteAdvertisementUrl, data, httpOptions);
    }
    /**
      * mw=ethod to create new advertisement
      * @param searchString string to search in advertisements
    */
    getAdvertisement(searchString) {
        //for setting token in headers
        this.setHeader();
        const httpOptions = {
            headers: this.header
        };
        let searchurl = '';
        searchurl = this.getAdvertisementUrl + searchString;
        return this.http.get(searchurl, httpOptions);
    }
    /**
      * method to update admin details
      * @param adminDetails admin details to update
     */
    updateDetails(adminDetails) {
        //for setting token in headers
        this.setHeader();
        const httpOptions = {
            headers: this.header
        };
        return this.http.patch(this.updateAdminPwdUrl, adminDetails, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            if (response.success && response.data.token) {
                _utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].saveLoginDataInCookies(this.cookiesServices, new _modalPackages_cookies__WEBPACK_IMPORTED_MODULE_6__["CookiesModel"](response.data));
                this.profilePic.next(this.cookiesServices.get('profilePic'));
            }
            return response;
        }));
    }
    /**
      * method for forgotpassword
      * @param email email id to send reset link
    */
    forgotPassword(email) {
        let data = {};
        data.email = email;
        return this.http.post(this.userForgotPasswordUrl, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            return data;
        }));
    }
}
AdminServiceService.ɵfac = function AdminServiceService_Factory(t) { return new (t || AdminServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"])); };
AdminServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminServiceService, factory: AdminServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/sidebar.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sidebar.service.ts ***!
  \*********************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modalPackages_sidenavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modalPackages/sidenavBar */ "./src/app/modalPackages/sidenavBar.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");





class SidebarService {
    constructor(ngzone, router, cookiesservice) {
        this.ngzone = ngzone;
        this.router = router;
        this.cookiesservice = cookiesservice;
        this.tag = "SidebarService";
        this.toggled = false;
        this.pageName = "";
        this.menus = [];
        this.accountType = "";
    }
    /**
     *
     * Add Side Bar Into Menu
     *
     */
    addSideOption() {
        this.menus = [];
        var pageInnerUrls = [];
        this.menus.push(new _modalPackages_sidenavBar__WEBPACK_IMPORTED_MODULE_1__["SideNavigationMain"]("Advertisment", "All Advertisments", '/advertisment', "fa fa-puzzle-piece", "inactive", "header", pageInnerUrls, ""));
        this.menus.push(new _modalPackages_sidenavBar__WEBPACK_IMPORTED_MODULE_1__["SideNavigationMain"]("View Profile", "View Profile", '/show/profile', "fa fa-cog", "inactive", "header", [], ""));
    }
    getMenuList() {
        this.addSideOption();
        return this.menus;
    }
}
SidebarService.ɵfac = function SidebarService_Factory(t) { return new (t || SidebarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"])); };
SidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarService, factory: SidebarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/utillpackage/constant.ts":
/*!******************************************!*\
  !*** ./src/app/utillpackage/constant.ts ***!
  \******************************************/
/*! exports provided: MyConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyConstants", function() { return MyConstants; });
class MyConstants {
}
MyConstants.BASEURL = "http://3.21.83.36:8081/api/";
MyConstants.serverURL = "http://3.21.83.36:8081";


/***/ }),

/***/ "./src/app/utillpackage/my-cookies.ts":
/*!********************************************!*\
  !*** ./src/app/utillpackage/my-cookies.ts ***!
  \********************************************/
/*! exports provided: MyCookies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCookies", function() { return MyCookies; });
class MyCookies {
    static saveLoginDataInCookies(cookieService, cookiesModel) {
        cookieService.set('_id', cookiesModel._id, 1, '/');
        cookieService.set('email', cookiesModel.email, 1, '/');
        cookieService.set('token', cookiesModel.token, 1, '/');
        cookieService.set('profilePic', cookiesModel.profilePic, 1, '/');
        cookieService.set('contact', cookiesModel.contact, 1, '/');
    }
    static checkLoginStatus(cookieService) {
        var cookieExists = cookieService.check('_id');
        cookieExists = cookieService.get('_id') != "";
        if (cookieExists) {
            cookieExists = cookieService.check('email');
            cookieExists = cookieService.get('email') != "";
            if (cookieExists) {
                cookieExists = cookieService.check('token');
                cookieExists = cookieService.get('token') != "";
                if (cookieExists) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    static getId(cookieService) {
        return cookieService.get('_id');
    }
    static getEmaild(cookieService) {
        return cookieService.get('email');
    }
    static getToken(cookieService) {
        return cookieService.get('token');
    }
    static getExpiryTime() {
        let date = new Date();
        date.setDate(date.getDate() + 1);
        return date;
    }
    static deletecookies(cookieService) {
        cookieService.deleteAll();
    }
}


/***/ }),

/***/ "./src/app/utillpackage/my-routing-methods.ts":
/*!****************************************************!*\
  !*** ./src/app/utillpackage/my-routing-methods.ts ***!
  \****************************************************/
/*! exports provided: MyRoutingMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRoutingMethods", function() { return MyRoutingMethods; });
class MyRoutingMethods {
    static gotoLogin(router) {
        router.navigate(['home']);
    }
    static gotoAds(router) {
        router.navigate(['advertisment']);
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pawan/AngularProjects/getItHomeNow_UI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map