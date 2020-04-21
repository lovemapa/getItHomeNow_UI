function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _componentPackage_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./componentPackage/dashboard/dashboard.component */
    "./src/app/componentPackage/dashboard/dashboard.component.ts");
    /* harmony import */


    var _componentPackage_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./componentPackage/login/login.component */
    "./src/app/componentPackage/login/login.component.ts");
    /* harmony import */


    var _layout_full_full_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout/full/full.component */
    "./src/app/layout/full/full.component.ts");
    /* harmony import */


    var _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layout/blank/blank.component */
    "./src/app/layout/blank/blank.component.ts");
    /* harmony import */


    var _componentPackage_add_adds_add_adds_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./componentPackage/add-adds/add-adds.component */
    "./src/app/componentPackage/add-adds/add-adds.component.ts");
    /* harmony import */


    var _componentPackage_profile_setting_change_profile_setting_change_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./componentPackage/profile-setting-change/profile-setting-change.component */
    "./src/app/componentPackage/profile-setting-change/profile-setting-change.component.ts");
    /* harmony import */


    var _componentPackage_show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./componentPackage/show-profile/show-profile.component */
    "./src/app/componentPackage/show-profile/show-profile.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _componentPackage_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: '',
      component: _layout_full_full_component__WEBPACK_IMPORTED_MODULE_4__["FullComponent"],
      children: [{
        path: 'advertisement',
        component: _componentPackage_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
      }, {
        path: 'add/advertisment',
        component: _componentPackage_add_adds_add_adds_component__WEBPACK_IMPORTED_MODULE_6__["AddAddsComponent"]
      }, {
        path: 'settings',
        component: _componentPackage_profile_setting_change_profile_setting_change_component__WEBPACK_IMPORTED_MODULE_7__["ProfileSettingChangeComponent"]
      }, {
        path: 'show/profile',
        component: _componentPackage_show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_8__["ShowProfileComponent"]
      }]
    }, {
      path: '',
      component: _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_5__["BlankComponent"],
      children: [{
        path: 'login',
        component: _componentPackage_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
      }]
    }, {
      path: '**',
      redirectTo: 'login'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'GetItHomeNow';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [["bdOpacity", "0.1", "bdColor", "rgba(209, 127, 161, 0.26)", "size", "medium", "color", "#ff586b", "type", "ball-clip-rotate-pulse", "fullScreen", "true"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _componentPackage_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./componentPackage/login/login.component */
    "./src/app/componentPackage/login/login.component.ts");
    /* harmony import */


    var _componentPackage_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./componentPackage/dashboard/dashboard.component */
    "./src/app/componentPackage/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _material_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./material/material */
    "./src/app/material/material.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _layout_full_full_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./layout/full/full.component */
    "./src/app/layout/full/full.component.ts");
    /* harmony import */


    var _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./layout/blank/blank.component */
    "./src/app/layout/blank/blank.component.ts");
    /* harmony import */


    var _componentPackage_add_adds_add_adds_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./componentPackage/add-adds/add-adds.component */
    "./src/app/componentPackage/add-adds/add-adds.component.ts");
    /* harmony import */


    var _componentPackage_profile_setting_change_profile_setting_change_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./componentPackage/profile-setting-change/profile-setting-change.component */
    "./src/app/componentPackage/profile-setting-change/profile-setting-change.component.ts");
    /* harmony import */


    var _componentPackage_show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./componentPackage/show-profile/show-profile.component */
    "./src/app/componentPackage/show-profile/show-profile.component.ts");

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      suppressScrollX: true
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__["HashLocationStrategy"]
      }, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], _material_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _componentPackage_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _componentPackage_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _layout_full_full_component__WEBPACK_IMPORTED_MODULE_15__["FullComponent"], _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_16__["BlankComponent"], _componentPackage_add_adds_add_adds_component__WEBPACK_IMPORTED_MODULE_17__["AddAddsComponent"], _componentPackage_profile_setting_change_profile_setting_change_component__WEBPACK_IMPORTED_MODULE_18__["ProfileSettingChangeComponent"], _componentPackage_show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_19__["ShowProfileComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], _material_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _componentPackage_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _componentPackage_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _layout_full_full_component__WEBPACK_IMPORTED_MODULE_15__["FullComponent"], _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_16__["BlankComponent"], _componentPackage_add_adds_add_adds_component__WEBPACK_IMPORTED_MODULE_17__["AddAddsComponent"], _componentPackage_profile_setting_change_profile_setting_change_component__WEBPACK_IMPORTED_MODULE_18__["ProfileSettingChangeComponent"], _componentPackage_show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_19__["ShowProfileComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], _material_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]],
          providers: [{
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
          }, {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__["HashLocationStrategy"]
          }, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/commonmethod/common-method.ts":
  /*!***********************************************!*\
    !*** ./src/app/commonmethod/common-method.ts ***!
    \***********************************************/

  /*! exports provided: CommonMethods */

  /***/
  function srcAppCommonmethodCommonMethodTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonMethods", function () {
      return CommonMethods;
    });

    var CommonMethods =
    /*#__PURE__*/
    function () {
      function CommonMethods() {
        _classCallCheck(this, CommonMethods);
      }

      _createClass(CommonMethods, null, [{
        key: "showconsole",
        value: function showconsole(tag, message) {} // console.log(tag, message);

        /*
         *Show Error Dialog Message Common Method
         */

      }, {
        key: "showErrorDialog",
        value: function showErrorDialog(snackBar, message) {
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

      }, {
        key: "showSuccessDialog",
        value: function showSuccessDialog(snackBar, message) {
          snackBar.open(message, "", {
            duration: 3000,
            panelClass: ['sucess-snackbar'],
            verticalPosition: 'top',
            horizontalPosition: 'end'
          });
        }
      }]);

      return CommonMethods;
    }();
    /***/

  },

  /***/
  "./src/app/componentPackage/add-adds/add-adds.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/componentPackage/add-adds/add-adds.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AddAddsComponent */

  /***/
  function srcAppComponentPackageAddAddsAddAddsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAddsComponent", function () {
      return AddAddsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_modalPackages_advertisement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/modalPackages/advertisement */
    "./src/app/modalPackages/advertisement.ts");
    /* harmony import */


    var src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/commonmethod/common-method */
    "./src/app/commonmethod/common-method.ts");
    /* harmony import */


    var src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/utillpackage/my-routing-methods */
    "./src/app/utillpackage/my-routing-methods.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AddAddsComponent =
    /*#__PURE__*/
    function () {
      function AddAddsComponent(snackBar, router, adminServiceService) {
        _classCallCheck(this, AddAddsComponent);

        this.snackBar = snackBar;
        this.router = router;
        this.adminServiceService = adminServiceService;
      }

      _createClass(AddAddsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createAdvertisement",
        value: function createAdvertisement() {
          var _this = this;

          this.advertisementModel = new src_app_modalPackages_advertisement__WEBPACK_IMPORTED_MODULE_1__["AdvertisementModel"]();
          this.advertisementModel.name = this.title;
          this.advertisementModel.mainContent = this.mHeading + "%" + this.cHeading + "%" + this.body;
          this.advertisementModel.phone = this.contectNo;
          this.adminServiceService.createAdvertisement(this.advertisementModel).subscribe(function (response) {
            if (response.success) {
              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showSuccessDialog(_this.snackBar, response.message);
              src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__["MyRoutingMethods"].gotoAds(_this.router);
            } else {
              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(_this.snackBar, response.message);
            }
          });
        }
      }]);

      return AddAddsComponent;
    }();

    AddAddsComponent.ɵfac = function AddAddsComponent_Factory(t) {
      return new (t || AddAddsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_6__["AdminServiceService"]));
    };

    AddAddsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddAddsComponent,
      selectors: [["app-add-adds"]],
      decls: 26,
      vars: 5,
      consts: [["routerLink", "/advertisment", 1, "add-more"], [1, "mdi", "mdi-arrow-left"], [1, "form-outer"], [1, "form-element"], ["for", "title"], ["placeholder", "Title", "type", "text", "id", "title", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "mHeading"], ["type", "text", "id", "mHeading", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "cHeading"], ["type", "text", "id", "cHeading", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "body"], ["type", "text", "id", "body", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "contectNo"], ["type", "tel", "id", "contectNo", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "form-element", 2, "text-align", "center"], [1, "submit-btn", 3, "click"]],
      template: function AddAddsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAddsComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Main Heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAddsComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.mHeading = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sub Heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAddsComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.cHeading = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAddsComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.body = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAddsComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.contectNo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAddsComponent_Template_a_click_24_listener() {
            return ctx.createAdvertisement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      styles: [".form-outer[_ngcontent-%COMP%] {\r\n    padding: 20px 0;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    padding: 10px 15px;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\r\n    background: #e92330;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    padding: 15px 10px;\r\n    min-width: 300px;\r\n    display: inline-block;\r\n    color: #fff;\r\n    margin-top: 15px;\r\n    text-decoration: none;\r\n    transition: 0.3s all;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    cursor: pointer;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\r\n    background: #444;\r\n    transition: 0.3s all;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-moz-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-ms-input-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder {\r\n    color: #707070;\r\n}\r\n\r\n.add-more[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 60px;\r\n    width: 60px;\r\n    background: #E92330;\r\n    border-radius: 50%;\r\n    top: 87px;\r\n    right: 24px;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-more[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    color: #fff;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9hZGQtYWRkcy9hZGQtYWRkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUZBO0lBQ0ksY0FBYztBQUNsQjs7QUFGQTtJQUNJLGNBQWM7QUFDbEI7O0FBRkE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudFBhY2thZ2UvYWRkLWFkZHMvYWRkLWFkZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLW91dGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG5cclxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgLnN1Ym1pdC1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2U5MjMzMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IC5zdWJtaXQtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0NDQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuLmFkZC1tb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0U5MjMzMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRvcDogODdweDtcclxuICAgIHJpZ2h0OiAyNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWRkLW1vcmUgaSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddAddsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-adds',
          templateUrl: './add-adds.component.html',
          styleUrls: ['./add-adds.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_6__["AdminServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentPackage/dashboard/dashboard.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/componentPackage/dashboard/dashboard.component.ts ***!
    \*******************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentPackageDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_modalPackages_advertisement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/modalPackages/advertisement */
    "./src/app/modalPackages/advertisement.ts");
    /* harmony import */


    var src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/commonmethod/common-method */
    "./src/app/commonmethod/common-method.ts");
    /* harmony import */


    var src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/utillpackage/my-routing-methods */
    "./src/app/utillpackage/my-routing-methods.ts");
    /* harmony import */


    var src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/utillpackage/my-cookies */
    "./src/app/utillpackage/my-cookies.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function DashboardComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.clickOnshowAll();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show All Ads");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Advertisement Found");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return {
        "font-size": "9px"
      };
    };

    function DashboardComponent_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Store,Estate,Garage Sales");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "The Uber\xAE of Moving Stuff");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_7_div_1_Template_a_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ads_r11 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          return ctx_r12.AddModalFuntion(_r4, "updateAddvertisment", ads_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_7_div_1_Template_a_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ads_r11 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          return ctx_r14.deleteModalCall(_r6, ads_r11._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ads_r11 = ctx.$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ads_r11.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r10.createContent(ads_r11.mainContent)[0], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.createContent(ads_r11.mainContent)[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r10.createContent(ads_r11.mainContent)[2].length > 25 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.createContent(ads_r11.mainContent)[2]);
      }
    }

    function DashboardComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_7_div_1_Template, 27, 6, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.adsList);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "current": a0
      };
    };

    function DashboardComponent_div_8_a_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_8_a_3_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var page_r16 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.pageNumberClick(page_r16.pageNo);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, page_r16.status == true));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r16.pageNo);
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "disabled": a0
      };
    };

    function DashboardComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_8_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.previous();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_8_a_3_Template, 2, 4, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_8_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r3.previousButton))("disabled", ctx_r3.previousButton);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.paggination);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r3.nextButton))("disabled", ctx_r3.nextButton);
      }
    }

    function DashboardComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_11_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.JoinAndClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_11_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Main Heading");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_11_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.mHeading = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sub Heading");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_11_Template_input_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.cHeading = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Body");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_11_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.body = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contact Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_11_Template_input_ngModelChange_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.contectNo = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_11_Template_a_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.hitRequiredFunction(ctx_r29.methodToCall);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.modalHeading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.mHeading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.cHeading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.body);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.contectNo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.showbutton);
      }
    }

    function DashboardComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Are you sure, you want to Delete?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_13_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.JoinAndClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_13_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.deleteAdvertisement();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(snackBar, spinner, cookiesService, router, adminServiceService, modalService) {
        _classCallCheck(this, DashboardComponent);

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
        this.nextButton = false;
        this.previousButton = false;
        this.isLoadingPaggition = false;
        this.showTable = false;
        this.adsList = [];
        this.modalHeading = "";
        this.showbutton = "";
        this.previousButton = true;
        this.nextButton = false;
        this.pageNumber = 1;
        this.pageLimit = 6;
        this.paggination = [];
        this.lastPageNumber = 0;
        this.isLoadingPaggition = false;
        this.checkLoginMethod();
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**Check Login */

      }, {
        key: "checkLoginMethod",
        value: function checkLoginMethod() {
          var logincheck = src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_4__["MyCookies"].checkLoginStatus(this.cookiesService);

          if (logincheck) {
            this.getAdvertisment();
          } else {
            src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__["MyRoutingMethods"].gotoLogin(this.router);
          }
        }
        /**GEt AdverTisMEnt List */

      }, {
        key: "getAdvertisment",
        value: function getAdvertisment(searchTerm) {
          var _this2 = this;

          this.adsList = []; // if (searchTerm || searchTerm == '') {
          //   this.searchString = searchTerm;
          // }
          //  if(this.searchString.trim().length !=0)
          //  {
          //   this.isLoadingPaggition=false;
          //  }

          this.spinner.show();
          this.adminServiceService.getAdvertisement(this.searchString, this.pageNumber).subscribe(function (response) {
            if (response.success) {
              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showconsole(_this2.Tag, "array:- " + JSON.stringify(response.countDocument));
              _this2.adsList = response.data;
              _this2.showTable = true;

              if (_this2.adsList.length == 0) {
                _this2.showTable = false;
              }

              if (_this2.pageNumber == response.totalPages) {
                _this2.nextButton = true;
              } else {
                _this2.nextButton = false;
              }

              _this2.lastPageNumber = response.totalPages;

              if (_this2.isLoadingPaggition == false) {
                _this2.paggination = [];
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showconsole(_this2.Tag, "Function Is woking Once Time ");

                for (var i = 0; i < response.totalPages; i++) {
                  // CommonMethods.showconsole(this.Tag, "Paggition " + i)
                  var state = false;

                  if (i == 0) {
                    state = true;
                  }

                  _this2.paggination.push({
                    "pageNo": i + 1,
                    "status": state
                  });
                }

                _this2.isLoadingPaggition = true;
              }

              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showconsole(_this2.Tag, "Array :- " + JSON.stringify(_this2.paggination));

              _this2.spinner.hide();
            } else {
              src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_4__["MyCookies"].deletecookies(_this2.cookiesService);
              src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__["MyRoutingMethods"].gotoLogin(_this2.router);
            }

            setTimeout(function () {
              _this2.spinner.hide();
            }, 200);
          });
        }
      }, {
        key: "clickOnshowAll",
        value: function clickOnshowAll() {
          this.pageNumber = 1;
          this.searchString = "";
          src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showconsole(this.Tag, "isLoadingPaggition:- " + this.isLoadingPaggition);
          this.isLoadingPaggition = false;
          src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showconsole(this.Tag, "after isLoadingPaggition:- " + this.isLoadingPaggition);
          this.getAdvertisment("");
        }
      }, {
        key: "onKeypressSearch",
        value: function onKeypressSearch() {
          this.pageNumber = 1;
          this.isLoadingPaggition = false;
          src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showconsole(this.Tag, "after isLoadingPaggition:- Function IS working  " + this.isLoadingPaggition);
          this.getAdvertisment("");
        }
      }, {
        key: "createContent",
        value: function createContent(content) {
          var contentArray = content.split("%");
          return contentArray;
        }
        /**
          *
          * Open  Modal Function
          */

      }, {
        key: "openModal",
        value: function openModal(content, context) {
          var _this3 = this;

          this.modalReference = this.modalService.open(content, {
            centered: true
          });

          if (this.modalHeading.match("Update Advertisement")) {
            this.modalReference.result.then(function (result) {}, function (reson) {
              _this3.reset();
            });
          } //  this. modalReference.componentInstance.actionMessage = this.actionmessage;

        }
      }, {
        key: "deleteModal",
        value: function deleteModal(content) {
          this.modalReference = this.modalService.open(content, {
            centered: true
          }); //  this. modalReference.componentInstance.actionMessage = this.actionmessage;
        }
        /**
         *
         * close Modal Function
         */

      }, {
        key: "JoinAndClose",
        value: function JoinAndClose() {
          this.modalReference.close();
          this.reset();
        }
        /**CallIng Modal Function */

      }, {
        key: "AddModalFuntion",
        value: function AddModalFuntion(content, onclickButton, ad) {
          if (onclickButton == 'addAddvertisment') {
            this.modalHeading = "Add Advertisement";
            this.showbutton = "Add";
            this.methodToCall = 'createAdvertisement()';
          } else {
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

      }, {
        key: "createAdvertisement",
        value: function createAdvertisement() {
          var _this4 = this;

          this.spinner.show();
          var advertisementModel = new src_app_modalPackages_advertisement__WEBPACK_IMPORTED_MODULE_1__["AdvertisementModel"]();
          advertisementModel.name = this.title;
          advertisementModel.mainContent = this.mHeading + "%" + this.cHeading + "%" + this.body;
          advertisementModel.phone = this.contectNo;
          this.adminServiceService.createAdvertisement(advertisementModel).subscribe(function (response) {
            if (response.success) {
              _this4.JoinAndClose();

              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showSuccessDialog(_this4.snackBar, response.message);

              _this4.reset();

              setTimeout(function () {
                _this4.isLoadingPaggition = false;

                _this4.getAdvertisment();
              }, 100);
            } else {
              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(_this4.snackBar, response.message);
            }

            _this4.spinner.hide();
          });
        }
        /**
         * method to delete selected Ad
         */

      }, {
        key: "deleteAdvertisement",
        value: function deleteAdvertisement() {
          var _this5 = this;

          this.spinner.show();
          this.adminServiceService.deleteAdvertisement(this.currentSelectedAdId).subscribe(function (response) {
            _this5.JoinAndClose();

            if (response.success) {
              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showSuccessDialog(_this5.snackBar, response.message);
              _this5.isLoadingPaggition = false;

              _this5.getAdvertisment();
            } else {
              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(_this5.snackBar, response.message);
            }

            _this5.spinner.hide();
          });
        }
        /**
         * method to call delete modal
         * @param deletemodal delete modal content
         * @param deleteId selected ad id
         */

      }, {
        key: "deleteModalCall",
        value: function deleteModalCall(deletemodal, deleteId) {
          this.deleteModal(deletemodal);
          this.currentSelectedAdId = deleteId;
        }
        /**
         * method to reset all variables of add ad modal
         */

      }, {
        key: "reset",
        value: function reset() {
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

      }, {
        key: "setSelectedAd",
        value: function setSelectedAd(currentSelectedAdModel) {
          this.currentSelectedAdId = currentSelectedAdModel._id;
          this.title = currentSelectedAdModel.name;
          var mainContentArray = this.createContent(currentSelectedAdModel.mainContent);
          this.mHeading = mainContentArray[0];
          this.cHeading = mainContentArray[1];
          this.body = mainContentArray[2];
          this.contectNo = currentSelectedAdModel.phone;
        }
        /**
         * method to update current selected Ad
         */

      }, {
        key: "updateSelectedAd",
        value: function updateSelectedAd() {
          var _this6 = this;

          this.spinner.show();
          var advertisementModel = new src_app_modalPackages_advertisement__WEBPACK_IMPORTED_MODULE_1__["AdvertisementModel"]();
          advertisementModel.advertiseId = this.currentSelectedAdId;
          advertisementModel.name = this.title;
          advertisementModel.mainContent = this.mHeading + "%" + this.cHeading + "%" + this.body;
          advertisementModel.phone = this.contectNo;
          this.adminServiceService.updateAdvertisement(advertisementModel).subscribe(function (response) {
            if (response.success) {
              _this6.JoinAndClose();

              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showSuccessDialog(_this6.snackBar, response.message);

              _this6.reset();

              setTimeout(function () {
                _this6.getAdvertisment();
              }, 100);
            } else {
              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(_this6.snackBar, response.message);
            }

            _this6.spinner.hide();
          });
        }
        /**
         * method to call specific method
         * @param methodName method to call
         */

      }, {
        key: "hitRequiredFunction",
        value: function hitRequiredFunction(methodName) {
          if (methodName != '') {
            if (methodName.match('update')) {
              this.updateSelectedAd();
            } else {
              this.createAdvertisement();
            }
          }
        }
        /**
         *   Previous  Click Function
         */

      }, {
        key: "previous",
        value: function previous() {
          this.pageNumber--;
          this.pageNumberClick(this.pageNumber);
        }
        /**
         * End
         */

        /**
         *   next  Click Function
         */

      }, {
        key: "next",
        value: function next() {
          this.previousButton = false;
          this.pageNumber++;
          this.pageNumberClick(this.pageNumber);
        }
        /**
         * End
         */

        /**
         * Page Number Click
         */

      }, {
        key: "pageNumberClick",
        value: function pageNumberClick(currentPageNumber) {
          this.pageNumber = 0;
          src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showconsole(this.Tag, "Page Number :- " + currentPageNumber);

          for (var i = 0; i < this.paggination.length; i++) {
            if (this.paggination[i].pageNo == currentPageNumber) {
              this.paggination[i].status = true;
            } else {
              this.paggination[i].status = false;
            }
          }

          this.pageNumber = currentPageNumber;

          if (this.pageNumber == 1) {
            this.previousButton = true;
          } else {
            this.previousButton = false;
          }

          if (this.pageNumber == this.lastPageNumber) {
            this.nextButton = true;
          } else {
            this.nextButton = false;
          }

          this.getAdvertisment();
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_9__["AdminServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 15,
      vars: 5,
      consts: [[1, "header-left-outer"], ["class", "getAllAd-btn", 4, "ngIf"], [1, "search-box-outer"], ["name", "searchBar", "id", "searchBarforAds", "value", "", "placeholder", "Search..", "type", "text", "autocomplete", "off", 1, "search-box", 3, "ngModel", "ngModelChange", "keyup.enter", "keyup"], ["id", "search-box-icon", "type", "submit", 1, "search", "btn", "btn-link", "text-danger", 3, "click"], [1, "fa", "fa-search", "search-icon"], [4, "ngIf"], ["class", "card-wrapper", 4, "ngIf"], ["class", "pagination-wrapper", 4, "ngIf"], [1, "add-more", 3, "click"], [1, "mdi", "mdi-plus"], ["content", ""], ["deleteModal", ""], [1, "getAllAd-btn"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "card-wrapper"], ["class", " card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "topStatic"], [1, "Image"], ["src", "./assets/imgs/logoSmall3.png", "alt", "", 1, "imageLogo"], [1, "bodyCenter"], [1, "big-stuff"], [1, "title-1"], [1, "title-2"], [1, "title-3", 3, "ngStyle"], [1, "bottom"], [1, "imageBottom"], ["src", "./assets/imgs/contact.png", "alt", ""], [1, "bottom-title"], [1, "action-btn"], [1, "btns"], [1, "edit-btn", 3, "click"], [1, "mdi", "mdi-border-color"], [1, "delete-btn", 3, "click"], [1, "mdi", "mdi-delete"], [1, "pagination-wrapper"], [1, "paginate_btn", "previous", 3, "ngClass", "disabled", "click"], ["class", "paginate_btn ", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "paginate_btn", "next", 3, "ngClass", "disabled", "click"], [1, "paginate_btn", 3, "ngClass", "click"], [1, "modal-body", 2, "text-align", "center"], [1, "close-icon", 3, "click"], [1, "fa", "fa-times"], [1, "title-heading"], [1, "form-outer"], [1, "form-element"], ["for", "title"], ["placeholder", "Title", "type", "text", "id", "title", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "col-12"], ["for", "mHeading"], ["type", "text", "id", "mHeading", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "cHeading"], ["type", "text", "id", "cHeading", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "body"], ["type", "text", "id", "body", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "contectNo"], ["type", "tel", "id", "contectNo", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "form-element", "submit-btn", 2, "text-align", "center"], [1, "submit-btn", 3, "click"], [1, "modal-content"], [1, "modal-btns"], [1, "cancel-btn", 3, "click"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_1_Template, 3, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.searchString = $event;
          })("keyup.enter", function DashboardComponent_Template_input_keyup_enter_3_listener() {
            return ctx.onKeypressSearch();
          })("keyup", function DashboardComponent_Template_input_keyup_3_listener() {
            return ctx.onKeypressSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_4_listener() {
            return ctx.onKeypressSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_6_Template, 3, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_7_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_div_8_Template, 6, 9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            return ctx.AddModalFuntion(_r4, "addAddvertisment");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DashboardComponent_ng_template_11_Template, 32, 7, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DashboardComponent_ng_template_13_Template, 12, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchString != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchString);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showTable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adsList.length != 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]],
      styles: [".add-more[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    height: 60px;\r\n    width: 60px;\r\n    background: #E92330;\r\n    border-radius: 50%;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-more[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    color: #fff;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: flex-start;\r\n    \r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    width: 220px;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .imageBottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 270px;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    width: calc(33.3% - 10px);\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    margin-right: 10px;\r\n    margin-bottom: 10px;\r\n    transition: 0.3s all;\r\n    border-bottom-left-radius: 50px;\r\n    border-top-right-radius: 50px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    justify-content: space-between;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\r\n    transform: scale(1.02);\r\n    transition: 0.3s all;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    padding: 0;\r\n    font-style: italic;\r\n    background: #e92330;\r\n    margin-bottom: 0px;\r\n    padding: 10px;\r\n    color: #fff;\r\n    border-top-right-radius: 50px;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .card.card-2[_ngcontent-%COMP%], .card-wrapper[_ngcontent-%COMP%]   .card.card-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    border-top-right-radius: 50px;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: #70707050;\r\n    z-index: 0;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-flow: row wrap;\r\n    align-items: center;\r\n    visibility: hidden;\r\n    transition: 0.3s all;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    display: inline-block;\r\n    text-align: center;\r\n    padding: 10px;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    margin: 0 5px;\r\n    height: 50px;\r\n    width: 50px;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    font-size: 22px;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 1;\r\n    width: 80%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\r\n    background: #e92330;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\r\n    background: green;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .action-btn[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n    transition: 0.3s all;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .big-stuff[_ngcontent-%COMP%] {\r\n    color: #e92330;\r\n    font-size: 22px;\r\n    font-weight: 800;\r\n    letter-spacing: 2px;\r\n    margin-bottom: 10px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n    font-weight: 800;\r\n    padding: 6px 0;\r\n    margin-bottom: 5px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%] {\r\n    margin-bottom: 12px;\r\n    font-size: 20px;\r\n    font-weight: 800;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .title-3[_ngcontent-%COMP%] {\r\n    color: #e92330;\r\n    font-size: 22px;\r\n    font-style: italic;\r\n    font-weight: 800;\r\n    padding-top: 10px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .bottom-title[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    background: #444;\r\n    border-bottom-left-radius: 50px;\r\n}\r\n\r\n.cardButton[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 500px;\r\n    left: 0;\r\n    top: 180px;\r\n    text-align: center;\r\n    opacity: 0;\r\n    transition: opacity .35s ease;\r\n}\r\n\r\n.bodyCenter[_ngcontent-%COMP%] {\r\n    padding: 0 15px;\r\n}\r\n\r\n.cardButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    padding: 12px 48px;\r\n    text-align: center;\r\n    color: white;\r\n    border: solid 2px white;\r\n    z-index: 1;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover   .cardButton[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%] {\r\n    padding: 20px 0;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n    display: block;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\r\n    width: 48%;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element.submit-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    margin-bottom: 4px;\r\n    text-align: left;\r\n    display: block;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    padding: 6px 15px;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\r\n    background: #e92330;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    padding: 12px 10px;\r\n    min-width: 300px;\r\n    display: inline-block;\r\n    color: #fff;\r\n    margin-top: 15px;\r\n    text-decoration: none;\r\n    transition: 0.3s all;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    cursor: pointer;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\r\n    background: #444;\r\n    transition: 0.3s all;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-moz-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-ms-input-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder {\r\n    color: #707070;\r\n}\r\n\r\n.search-box-outer[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    padding: 0 40px 0px 5px;\r\n    transition: .3s;\r\n    width: 100%;\r\n    max-width: 300px;\r\n    background-color: #fff;\r\n    border: 1px solid #d7d7e3;\r\n    position: relative;\r\n    max-width: 300px;\r\n}\r\n\r\n.search-box-outer[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    display: block;\r\n    clear: both;\r\n}\r\n\r\n.search-box-outer[_ngcontent-%COMP%]   input.search-box[_ngcontent-%COMP%] {\r\n    background: none;\r\n    border: none;\r\n    color: #666;\r\n    border: none;\r\n    padding-left: 10px;\r\n    outline: none;\r\n    width: 100%;\r\n    height: 38px;\r\n    font-size: 15px\r\n}\r\n\r\n.search-box-outer[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\r\n    \r\n    width: 0;\r\n    height: 0;\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 50%;\r\n    cursor: pointer;\r\n    margin-top: -17.5px;\r\n    margin-left: -8px;\r\n    border: none;\r\n    background-size: contain;\r\n}\r\n\r\n.search-icon[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n}\r\n\r\n.getAllAd-btn[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-right: 15px;\r\n    \r\n}\r\n\r\n.header-left-outer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    position: relative;\r\n    top: -60px;\r\n    right: 0;\r\n    justify-content: flex-end;\r\n}\r\n\r\n\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 20px 0px;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .paginate_btn.current[_ngcontent-%COMP%] {\r\n    background: #e92330;\r\n    color: #fff;\r\n    border-color: #e92330;\r\n}\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .paginate_btn[_ngcontent-%COMP%]:hover {\r\n    background: #e92330;\r\n    color: #fff;\r\n}\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .paginate_btn[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    min-width: 35px;\r\n    line-height: 33px;\r\n    text-align: center;\r\n    margin-left: 0px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    color: #585050;\r\n    vertical-align: top;\r\n    font-size: 13px;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .paginate_btn.disabled[_ngcontent-%COMP%]:hover, .pagination-wrapper[_ngcontent-%COMP%]   .paginate_btn.disabled[_ngcontent-%COMP%] {\r\n    background: none;\r\n    color: #2f2f2f;\r\n    border-color: #ddd;\r\n}\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%], .pagination-wrapper[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    font-size: 0px;\r\n}\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:after {\r\n    transform: rotate(135deg);\r\n    left: 14px;\r\n}\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:after, .pagination-wrapper[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    border-top: 2px solid #2f2f2f;\r\n    border-left: 2px solid #2f2f2f;\r\n    width: 6px;\r\n    height: 6px;\r\n    top: 50%;\r\n    left: 12.5px;\r\n    margin-top: -4px;\r\n}\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:after {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .paginate_btn[_ngcontent-%COMP%]:hover:after {\r\n    border-color: #fff;\r\n}\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .paginate_btn.disabled[_ngcontent-%COMP%]:hover:after {\r\n    background: none;\r\n    color: #2f2f2f;\r\n    border-color: #2f2f2f;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1279px) {\r\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n        border-top-right-radius: 20px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n        border-bottom-left-radius: 20px;\r\n        border-top-right-radius: 20px;\r\n        margin-right: 10px;\r\n        margin-bottom: 10px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 180px;\r\n        padding: 15px 0;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .big-stuff[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n        letter-spacing: 1px;\r\n    }\r\n    .bodyCenter[_ngcontent-%COMP%] {\r\n        padding: 0 10px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%] {\r\n        font-size: 17px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .title-3[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n        margin-bottom: 8px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .imageBottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 230px;\r\n        max-width: 80%;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .bottom-title[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        border-bottom-left-radius: 20px;\r\n    }\r\n}\r\n\r\n@media (max-width: 991px) {\r\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%] {\r\n        margin-bottom: 8px;\r\n    }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n        width: calc(50% - 10px);\r\n    }\r\n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\r\n        min-width: auto;\r\n        padding: 10px 15px;\r\n        width: 100%;\r\n    }\r\n    .search-box-outer[_ngcontent-%COMP%] {\r\n        max-width: 200px;\r\n    }\r\n    .getAllAd-btn[_ngcontent-%COMP%] {\r\n        margin-right: 8px;\r\n        margin-top: 3px;\r\n    }\r\n    .getAllAd-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        margin-right: 0;\r\n    }\r\n    .form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\r\n        display: block\r\n    }\r\n    .form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    .search-box-outer[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        top: 0;\r\n        margin-bottom: 20px;\r\n    }\r\n    .header-left-outer[_ngcontent-%COMP%] {\r\n        top: 0;\r\n        justify-content: flex-start;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0FBQ3BDOztBQUdBLGFBQWE7O0FBRWI7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFN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SUFDUixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBR0EsT0FBTzs7QUFFUDtJQUNJO1FBQ0ksZUFBZTtRQUNmLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksK0JBQStCO1FBQy9CLDZCQUE2QjtRQUM3QixrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGVBQWU7UUFDZiwrQkFBK0I7SUFDbkM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGVBQWU7SUFDbkI7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZUFBZTtRQUNmLE1BQU07UUFDTixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLE1BQU07UUFDTiwyQkFBMkI7SUFDL0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudFBhY2thZ2UvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1tb3JlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0U5MjMzMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWRkLW1vcmUgaSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcblxyXG4vKiBjYXJkIGNzcyAqL1xyXG5cclxuLmNhcmQtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC8qIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAqL1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5pbWFnZUJvdHRvbSBpbWcge1xyXG4gICAgd2lkdGg6IDI3MHB4O1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5jYXJkIHtcclxuICAgIHdpZHRoOiBjYWxjKDMzLjMlIC0gMTBweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuY2FyZCBoMiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgYmFja2dyb3VuZDogI2U5MjMzMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5jYXJkLmNhcmQtMixcclxuLmNhcmQtd3JhcHBlciAuY2FyZC5jYXJkLTIgaDIge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmFjdGlvbi1idG46OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA1MDtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmFjdGlvbi1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuIGEge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmFjdGlvbi1idG4gYSBpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmFjdGlvbi1idG4gLmJ0bnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuIC5kZWxldGUtYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOTIzMzA7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmFjdGlvbi1idG4gLmVkaXQtYnRuIHtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5jYXJkOmhvdmVyIC5hY3Rpb24tYnRuIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuYmlnLXN0dWZmIHtcclxuICAgIGNvbG9yOiAjZTkyMzMwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAudGl0bGUtMSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC50aXRsZS0yIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAudGl0bGUtMyB7XHJcbiAgICBjb2xvcjogI2U5MjMzMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmJvdHRvbS10aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLmNhcmRCdXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMTgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMzVzIGVhc2U7XHJcbn1cclxuXHJcbi5ib2R5Q2VudGVyIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG5cclxuLmNhcmRCdXR0b24gYSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDQ4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIC5jYXJkQnV0dG9uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5mb3JtLW91dGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG5cclxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb3JtLW91dGVyIC5jb2wtMTIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5mb3JtLW91dGVyIC5jb2wtMTIgLmZvcm0tZWxlbWVudCB7XHJcbiAgICB3aWR0aDogNDglO1xyXG59XHJcblxyXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50LnN1Ym1pdC1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTVweDtcclxufVxyXG5cclxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCAuc3VibWl0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTkyMzMwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweCAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgLnN1Ym1pdC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzQ0NDtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveC1vdXRlciB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDQwcHggMHB4IDVweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkN2Q3ZTM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWJveC1vdXRlcjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94LW91dGVyIGlucHV0LnNlYXJjaC1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94LW91dGVyIC5zZWFyY2gge1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy9zZWFyY2gucG5nJykgbm8tcmVwZWF0OyAqL1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTE3LjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4uc2VhcmNoLWljb24ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4uZ2V0QWxsQWQtYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIC8qIHJpZ2h0OiAyNjVweDtcclxuICAgIHRvcDogLTM4cHg7ICovXHJcbn1cclxuXHJcbi5oZWFkZXItbGVmdC1vdXRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNjBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuXHJcbi8qcGFnaW5hdGlvbiovXHJcblxyXG4ucGFnaW5hdGlvbi13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLXdyYXBwZXIgLnBhZ2luYXRlX2J0bi5jdXJyZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNlOTIzMzA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2U5MjMzMDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24td3JhcHBlciAucGFnaW5hdGVfYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOTIzMzA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnBhZ2luYXRpb24td3JhcHBlciAucGFnaW5hdGVfYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1pbi13aWR0aDogMzVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjNTg1MDUwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLXdyYXBwZXIgLnBhZ2luYXRlX2J0bi5kaXNhYmxlZDpob3ZlcixcclxuLnBhZ2luYXRpb24td3JhcHBlciAucGFnaW5hdGVfYnRuLmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogIzJmMmYyZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24td3JhcHBlciAucHJldmlvdXMsXHJcbi5wYWdpbmF0aW9uLXdyYXBwZXIgLm5leHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAwcHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLXdyYXBwZXIgLm5leHQ6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgIGxlZnQ6IDE0cHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLXdyYXBwZXIgLnByZXZpb3VzOmFmdGVyLFxyXG4ucGFnaW5hdGlvbi13cmFwcGVyIC5uZXh0OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzJmMmYyZjtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzJmMmYyZjtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMTIuNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24td3JhcHBlciAucHJldmlvdXM6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24td3JhcHBlciAucGFnaW5hdGVfYnRuOmhvdmVyOmFmdGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnBhZ2luYXRpb24td3JhcHBlciAucGFnaW5hdGVfYnRuLmRpc2FibGVkOmhvdmVyOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogIzJmMmYyZjtcclxuICAgIGJvcmRlci1jb2xvcjogIzJmMmYyZjtcclxufVxyXG5cclxuXHJcbi8qZW5kcyovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgICAuY2FyZC13cmFwcGVyIC5jYXJkIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC13cmFwcGVyIC5jYXJkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtd3JhcHBlciBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICB9XHJcbiAgICAuY2FyZC13cmFwcGVyIC5iaWctc3R1ZmYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG4gICAgLmJvZHlDZW50ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxuICAgIC5jYXJkLXdyYXBwZXIgLnRpdGxlLTEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5jYXJkLXdyYXBwZXIgLnRpdGxlLTIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIH1cclxuICAgIC5jYXJkLXdyYXBwZXIgLnRpdGxlLTMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC13cmFwcGVyIC5pbWFnZUJvdHRvbSBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIC5jYXJkLXdyYXBwZXIgLmJvdHRvbS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLmNhcmQtd3JhcHBlciAuY2FyZCBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtd3JhcHBlciAudGl0bGUtMiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5jYXJkLXdyYXBwZXIgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCAuc3VibWl0LWJ0biB7XHJcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtYm94LW91dGVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLmdldEFsbEFkLWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgfVxyXG4gICAgLmdldEFsbEFkLWJ0biBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAuY2FyZC13cmFwcGVyIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1vdXRlciAuY29sLTEyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgfVxyXG4gICAgLmZvcm0tb3V0ZXIgLmNvbC0xMiAuZm9ybS1lbGVtZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtYm94LW91dGVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLWxlZnQtb3V0ZXIge1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_9__["AdminServiceService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentPackage/login/login.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/componentPackage/login/login.component.ts ***!
    \***********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentPackageLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_modalPackages_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/modalPackages/login */
    "./src/app/modalPackages/login.ts");
    /* harmony import */


    var src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/commonmethod/common-method */
    "./src/app/commonmethod/common-method.ts");
    /* harmony import */


    var src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/utillpackage/my-routing-methods */
    "./src/app/utillpackage/my-routing-methods.ts");
    /* harmony import */


    var src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/utillpackage/my-cookies */
    "./src/app/utillpackage/my-cookies.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function LoginComponent_ng_template_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_32_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.JoinAndClose();
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_32_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.forgetPassword(_r36.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(snackBar, router, adminServiceService, spinner, cookiesService, modalService) {
        _classCallCheck(this, LoginComponent);

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

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**Check Login */

      }, {
        key: "checkLoginMethod",
        value: function checkLoginMethod() {
          var logincheck = src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_4__["MyCookies"].checkLoginStatus(this.cookiesService);

          if (logincheck) {
            src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__["MyRoutingMethods"].gotoAds(this.router);
          } else {
            src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__["MyRoutingMethods"].gotoLogin(this.router);
          }
        }
        /**
         * show Password Icon Click Function
         */

      }, {
        key: "showPassword",
        value: function showPassword() {
          if (document.getElementById('password').type == 'password') {
            document.getElementById('password').type = 'text';
            document.getElementById('myiconconfirm').className = "fa fa-eye";
          } else {
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

      }, {
        key: "validation",
        value: function validation() {
          var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (this.loginModel.email.trim().length == 0) {
            src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackBar, "Enter email");
            return false;
          } else if (!EMAIL_REGEXP.test(this.loginModel.email.trim())) {
            src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackBar, "Email is invalid");
            return false;
          } else if (this.loginModel.password.trim().length == 0) {
            src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackBar, "Enter password");
            return false;
          } else {
            return true;
          }
        }
        /**End */

        /**
         * Login Api Call
         */

      }, {
        key: "callLoginApi",
        value: function callLoginApi() {
          var _this7 = this;

          if (this.validation()) {
            this.spinner.show();
            this.adminServiceService.adminLoginAPI(this.loginModel.email, this.loginModel.password).subscribe(function (response) {
              if (response.success) {
                _this7.spinner.hide(); // Calling Routing Function Goto TO Dashborad 


                src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__["MyRoutingMethods"].gotoAds(_this7.router);
              } else {
                _this7.spinner.hide();

                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(_this7.snackBar, response.message);
              }
            });
          }
        }
        /**End */

        /**
              *
              * Open  Modal Function
              */

      }, {
        key: "openModal",
        value: function openModal(content) {
          this.modalReference = this.modalService.open(content, {
            centered: true
          }); //  this. modalReference.componentInstance.actionMessage = this.actionmessage;
        }
        /**
         *
         * close Modal Function
         */

      }, {
        key: "JoinAndClose",
        value: function JoinAndClose() {
          this.modalReference.close();
        }
        /**CallIng Modal Function */

      }, {
        key: "CallModalForm",
        value: function CallModalForm(content) {
          this.openModal(content);
        }
        /**
         * method to send revocery mail on specific email
         * @param email email to send recovery link
         */

      }, {
        key: "forgetPassword",
        value: function forgetPassword(email) {
          var _this8 = this;

          this.spinner.show();
          this.adminServiceService.forgotPassword(email).subscribe(function (response) {
            _this8.spinner.hide();

            _this8.JoinAndClose();

            if (response.success) {
              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showSuccessDialog(_this8.snackBar, response.message);
            } else {
              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(_this8.snackBar, response.message);
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_7__["AdminServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 34,
      vars: 2,
      consts: [["id", "wrapper"], [1, "backlayer"], [1, "layerLeft", 2, "background-image", "url(./assets/imgs/mainBackGround.png)", "background-repeat", "no-repeat"], [1, "logo"], ["alt", "", "src", "./assets/imgs/mainLogo.png"], [1, "layerRight", 2, "background-image", "url(./assets/imgs/mainBackGround.png)", "background-repeat", "no-repeat"], [1, "panels"], [1, "innerpanel"], [1, "right"], [1, "formcontainer"], [1, "login100-form"], [1, "field"], ["type", "text", "name", "email", "id", "email", "placeholder", " ", "autocomplete", "off", "required", "", 3, "ngModel", "ngModelChange"], ["for", "email"], ["aria-hidden", "true", 1, "fieldIcon", "fa", "fa-user"], ["type", "password", "name", "password", "id", "password", "placeholder", " ", "required", "", 3, "ngModel", "ngModelChange"], ["for", "password"], ["aria-hidden", "true", 1, "fieldIcon", "fa", "fa-lock"], ["type", "submit", 1, "submit", "button", 3, "click"], [1, "field", "d-flex", "spcl-field"], ["id", "moveleft", "href", "javascript:void(0)", 1, "linkright", "linkslide", 3, "click"], ["content", ""], [1, "modal-body", 2, "text-align", "center"], [1, "close-icon", 3, "click"], [1, "fa", "fa-times"], [1, "title-heading"], [1, "form-element"], ["placeholder", "Enter Email", "type", "email", "autocomplete", "off"], ["inputEmail", ""], [1, "field", 2, "margin-bottom", "0"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.loginModel.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.loginModel.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_26_listener() {
            return ctx.callLoginApi();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

            var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

            return ctx.CallModalForm(_r34);
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginModel.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginModel.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]],
      styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n        font-size: 100%;\r\n        font-weight: normal;\r\n        text-transform: capitalize;\r\n        color: #555;\r\n        padding: 0 0 10px 0;\r\n    }\r\n    \r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 30px;\r\n    }\r\n    \r\n    h2[_ngcontent-%COMP%] {\r\n        font-size: 28px;\r\n    }\r\n    \r\n    h3[_ngcontent-%COMP%] {\r\n        font-size: 26px;\r\n    }\r\n    \r\n    h4[_ngcontent-%COMP%] {\r\n        font-size: 24px;\r\n    }\r\n    \r\n    h5[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n    }\r\n    \r\n    h6[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    .checkbox[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        position: relative;\r\n        vertical-align: middle;\r\n        padding: 0 0 0 25px;\r\n        height: 20px;\r\n    }\r\n    \r\n    .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n        top: 0;\r\n        left: 0;\r\n        margin: 0 !important;\r\n        z-index: 1;\r\n        cursor: pointer;\r\n        opacity: 0;\r\n        filter: alpha(opacity=0);\r\n    }\r\n    \r\n    .checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%], .checkbox-inline[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        margin-left: -20px;\r\n        margin-top: 4px \\9;\r\n    }\r\n    \r\n    .checkbox[_ngcontent-%COMP%]   .input-helper[_ngcontent-%COMP%]:before, .checkbox[_ngcontent-%COMP%]   .input-helper[_ngcontent-%COMP%]:after {\r\n        transition: all;\r\n        transition-duration: 250ms;\r\n        -webkit-backface-visibility: hidden;\r\n        backface-visibility: hidden;\r\n        position: absolute;\r\n        content: \"\";\r\n    }\r\n    \r\n    .checkbox[_ngcontent-%COMP%]   .input-helper[_ngcontent-%COMP%]:before {\r\n        left: 0;\r\n        border: 1px solid #ccc;\r\n    }\r\n    \r\n    .checkbox.disabled[_ngcontent-%COMP%] {\r\n        opacity: 0.6;\r\n        filter: alpha(opacity=60);\r\n    }\r\n    \r\n    .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n        width: 17px;\r\n        height: 17px;\r\n    }\r\n    \r\n    .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .input-helper[_ngcontent-%COMP%]:before {\r\n        transform: scale(1);\r\n    }\r\n    \r\n    .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .input-helper[_ngcontent-%COMP%]:after {\r\n        transform: scale(1) rotate(-50deg);\r\n        opacity: 1;\r\n        filter: alpha(opacity=100);\r\n    }\r\n    \r\n    .checkbox[_ngcontent-%COMP%]   .input-helper[_ngcontent-%COMP%]:before {\r\n        top: 0px;\r\n        width: 17px;\r\n        height: 17px;\r\n    }\r\n    \r\n    .checkbox[_ngcontent-%COMP%]   .input-helper[_ngcontent-%COMP%]:after {\r\n        opacity: 0;\r\n        filter: alpha(opacity=0);\r\n        transform: scale(0) rotate(80deg);\r\n        width: 22px;\r\n        height: 9px;\r\n        border-bottom: 2px solid #ff586b;\r\n        border-left: 2px solid #ff586b;\r\n        border-bottom-left-radius: 2px;\r\n        left: 2px;\r\n        top: -2px;\r\n    }\r\n    \r\n    \r\n    \r\n    .backlayer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n        \r\n        display: table;\r\n        position: relative;\r\n        z-index: 1;\r\n        top: 13px;\r\n        padding: 10px 26px;\r\n        float: right;\r\n        \r\n        \r\n        \r\n        \r\n        \r\n    }\r\n    \r\n    .backlayer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 150px;\r\n    }\r\n    \r\n    \r\n    \r\n    .backlayer[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n        position: absolute;\r\n        width: 100%;\r\n    }\r\n    \r\n    .backlayer[_ngcontent-%COMP%]   .layerLeft[_ngcontent-%COMP%] {\r\n        background-size: cover;\r\n        background-position: 50% 50%;\r\n        height: 100%;\r\n        position: absolute;\r\n        right: 0;\r\n        width: 45%;\r\n    }\r\n    \r\n    .backlayer[_ngcontent-%COMP%]   .layerLeft[_ngcontent-%COMP%]:before {\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n        bottom: 0;\r\n        right: 0;\r\n        content: \"\";\r\n        \r\n        background: rgba(0, 0, 0, 0.50);\r\n        background-size: cover;\r\n        background-attachment: fixed;\r\n    }\r\n    \r\n    .backlayer[_ngcontent-%COMP%]   .layerRight[_ngcontent-%COMP%] {\r\n        background-size: cover;\r\n        background-position: 50% 50%;\r\n        height: 100%;\r\n        left: 0;\r\n        position: absolute;\r\n        width: 55%;\r\n    }\r\n    \r\n    .backlayer[_ngcontent-%COMP%]   .layerRight[_ngcontent-%COMP%]:before {\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n        bottom: 0;\r\n        right: 0;\r\n        content: \"\";\r\n        \r\n        background: rgba(0, 0, 0, 0.50);\r\n        background-size: cover;\r\n        background-attachment: fixed;\r\n    }\r\n    \r\n    .innerpanel[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n        left: -100%;\r\n        position: relative;\r\n        width: 200%;\r\n    }\r\n    \r\n    .left[_ngcontent-%COMP%] {\r\n        background: #2c3034;\r\n        height: 100%;\r\n        left: 0;\r\n        position: absolute;\r\n        width: 50%;\r\n        background: #fff;\r\n        z-index: 1;\r\n    }\r\n    \r\n    .right[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n        position: absolute;\r\n        right: 0;\r\n        width: 45%;\r\n        background: #fff;\r\n        z-index: 1;\r\n    }\r\n    \r\n    .panels[_ngcontent-%COMP%] {\r\n        \r\n        height: 100%;\r\n        margin-left: 50%;\r\n        max-height: 100%;\r\n        overflow: hidden;\r\n        position: absolute;\r\n        width: 50%;\r\n    }\r\n    \r\n    .backlayer[_ngcontent-%COMP%]   .layerRight[_ngcontent-%COMP%]:after, .backlayer[_ngcontent-%COMP%]   .layerLeft[_ngcontent-%COMP%]:after {\r\n        background: url('pattern.png') repeat;\r\n        content: \"\";\r\n        bottom: 0;\r\n        left: 0;\r\n        position: absolute;\r\n        right: 0;\r\n        top: 0;\r\n        width: 100%;\r\n    }\r\n    \r\n    .linkright[_ngcontent-%COMP%] {\r\n        float: right;\r\n        text-decoration: none;\r\n        text-transform: uppercase;\r\n        color: #ff586b;\r\n    }\r\n    \r\n    .linkright[_ngcontent-%COMP%]:hover {\r\n        color: #ff586b;\r\n    }\r\n    \r\n    \r\n    \r\n    .formcontainer[_ngcontent-%COMP%] {\r\n        max-width: 500px;\r\n        \r\n        padding: 20px;\r\n        position: relative;\r\n        margin: 0 auto;\r\n        display: block;\r\n        top: 50%;\r\n        \r\n        transform: translate(0, -50%);\r\n    }\r\n    \r\n    .formcontainer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    \r\n    .fieldIcon[_ngcontent-%COMP%] {\r\n        width: -webkit-max-content;\r\n        width: -moz-max-content;\r\n        width: max-content;\r\n        position: absolute;\r\n        left: 2px;\r\n        bottom: 12px;\r\n        border: none;\r\n        color: #707070;\r\n        background: transparent;\r\n        font-size: 15px;\r\n        cursor: pointer;\r\n    }\r\n    \r\n    input[_ngcontent-%COMP%]:focus > .fieldIcon[_ngcontent-%COMP%] {\r\n        color: #ff586b !important;\r\n    }\r\n    \r\n    .spcl-field[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-flow: row wrap;\r\n        justify-content: space-between;\r\n    }\r\n    \r\n    .login100-form[_ngcontent-%COMP%]   .spcl-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n        float: none;\r\n        margin: 0;\r\n    }\r\n    \r\n    input[_ngcontent-%COMP%]:focus {\r\n        border-color: #ff586b;\r\n    }\r\n    \r\n    .fieldIcon.password[_ngcontent-%COMP%] {\r\n        right: 2px;\r\n        bottom: 10px;\r\n        left: unset;\r\n    }\r\n    \r\n    .fieldIcon[_ngcontent-%COMP%]:focus {\r\n        outline: unset;\r\n    }\r\n    \r\n    .linkright[_ngcontent-%COMP%] {\r\n        float: right;\r\n        text-decoration: none;\r\n        text-transform: uppercase;\r\n        color: #ff586b;\r\n    }\r\n    \r\n    .linkright[_ngcontent-%COMP%]:hover {\r\n        color: #ff586b;\r\n    }\r\n    \r\n    .login100-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n        text-transform: uppercase;\r\n    }\r\n    \r\n    .login100-form[_ngcontent-%COMP%]   .leftlabel[_ngcontent-%COMP%] {\r\n        float: left;\r\n        margin: 0 0 0 25px;\r\n    }\r\n    \r\n    \r\n    \r\n    .submit.button[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        border-radius: 2px;\r\n        display: block;\r\n        width: 100%;\r\n        padding: 10px 20px;\r\n        border: 0 none;\r\n        text-transform: uppercase;\r\n        position: relative;\r\n        overflow: hidden;\r\n        cursor: pointer;\r\n        vertical-align: middle;\r\n        border: none;\r\n        background: #ff586b;\r\n        color: #fff;\r\n        margin-top: 25px;\r\n    }\r\n    \r\n    .submit[_ngcontent-%COMP%]::before {\r\n        content: \"\";\r\n        width: 0;\r\n        height: 1px;\r\n        position: absolute;\r\n        transition: all 0.2s linear;\r\n        background: #fff;\r\n    }\r\n    \r\n    .submit[_ngcontent-%COMP%]::after {\r\n        content: \"\";\r\n        width: 0;\r\n        height: 1px;\r\n        position: absolute;\r\n        transition: all 0.2s linear;\r\n        background: #fff;\r\n    }\r\n    \r\n    .submit[_ngcontent-%COMP%]:hover {\r\n        background: #333;\r\n    }\r\n    \r\n    .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\r\n        content: \"\";\r\n        width: 1px;\r\n        height: 0;\r\n        position: absolute;\r\n        transition: all 0.2s linear;\r\n        background: #fff;\r\n    }\r\n    \r\n    .submit[_ngcontent-%COMP%]:hover::before, .submit[_ngcontent-%COMP%]:hover::after {\r\n        width: 100%;\r\n    }\r\n    \r\n    .submit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::before, .submit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::after {\r\n        height: 100%;\r\n    }\r\n    \r\n    .submit[_ngcontent-%COMP%]::before {\r\n        left: 50%;\r\n        top: 3px;\r\n        transition-duration: 0.4s;\r\n    }\r\n    \r\n    .submit[_ngcontent-%COMP%]::after {\r\n        left: 50%;\r\n        bottom: 3px;\r\n        transition-duration: 0.4s;\r\n    }\r\n    \r\n    .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\r\n        left: 3px;\r\n        top: 50%;\r\n        transition-duration: 0.4s;\r\n    }\r\n    \r\n    .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\r\n        right: 3px;\r\n        top: 50%;\r\n        transition-duration: 0.4s;\r\n    }\r\n    \r\n    .submit[_ngcontent-%COMP%]:hover::before, .submit[_ngcontent-%COMP%]:hover::after {\r\n        left: 3px;\r\n        width: calc(100% - 6px);\r\n    }\r\n    \r\n    .submit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::before, .submit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::after {\r\n        top: 3px;\r\n        height: calc(100% - 6px);\r\n    }\r\n    \r\n    .login100-form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\r\n        margin-top: 20px;\r\n    }\r\n    \r\n    .login100-form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        margin-bottom: 4px;\r\n        text-align: left;\r\n        display: block;\r\n        text-transform: none;\r\n    }\r\n    \r\n    .login100-form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        border: 1px solid #ccc;\r\n        border-radius: 4px;\r\n        padding: 8px 15px;\r\n    }\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    @media only screen and (max-width:990px) {\r\n        input[_ngcontent-%COMP%] {\r\n            background: none;\r\n        }\r\n        .backlayer[_ngcontent-%COMP%]   .layerLeft[_ngcontent-%COMP%] {\r\n            width: 100%;\r\n            height: 240px;\r\n        }\r\n        .backlayer[_ngcontent-%COMP%]   .layerRight[_ngcontent-%COMP%] {\r\n            display: none;\r\n        }\r\n        .panels[_ngcontent-%COMP%] {\r\n            margin-left: 0;\r\n            width: 100%;\r\n            height: 100%;\r\n            padding-top: 240px;\r\n            position: relative;\r\n            overflow: visible;\r\n            box-shadow: none;\r\n        }\r\n        .innerpanel[_ngcontent-%COMP%] {\r\n            height: 100%;\r\n            left: 0;\r\n            width: 100%;\r\n            position: relative;\r\n        }\r\n        .left[_ngcontent-%COMP%] {\r\n            height: 100%;\r\n            width: 100%;\r\n            position: absolute;\r\n            opacity: 0;\r\n            left: 0;\r\n            right: 0;\r\n            transform: translate3d(-300px, 0px, 0px);\r\n            \r\n            \r\n            transform: translate3d(-300px, 0px, 0px);\r\n            transition: all 300ms ease 0s;\r\n        }\r\n        body.active-left[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n            opacity: 1;\r\n            transform: translate3d(0px, 0px, 0px);\r\n            -ms-transform: translate3d(0px, 0px, 0px);\r\n            \r\n            -webkit-transform: translate3d(0px, 0px, 0px);\r\n            \r\n        }\r\n        body.active-left[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n            opacity: 0;\r\n            transform: translate3d(-300px, 0px, 0px);\r\n            \r\n            \r\n            transform: translate3d(-300px, 0px, 0px);\r\n            transition: all 300ms ease 0s;\r\n        }\r\n        .right[_ngcontent-%COMP%] {\r\n            height: 100%;\r\n            width: 100%;\r\n            position: absolute;\r\n            top: 0;\r\n            right: 0;\r\n            left: 0;\r\n            transform: translate3d(0, 0px, 0px);\r\n            \r\n            \r\n            transform: translate3d(0, 0px, 0px);\r\n            transition: all 300ms ease 0s;\r\n        }\r\n        .formcontainer[_ngcontent-%COMP%] {\r\n            top: 0;\r\n            \r\n            \r\n            transform: translate(0, 0);\r\n        }\r\n        .backlayer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n            display: table;\r\n            position: relative;\r\n            z-index: 1;\r\n            top: 50%;\r\n            left: 50%;\r\n            \r\n            \r\n            transform: translate(-50%, -50%);\r\n            float: unset;\r\n        }\r\n        .backlayer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n            width: 180px;\r\n        }\r\n        .formcontainer[_ngcontent-%COMP%] {\r\n            padding: 20px;\r\n        }\r\n        .field_control.fieldicon.user[_ngcontent-%COMP%]:before {\r\n            left: 0;\r\n        }\r\n        .field_control.fieldicon.key[_ngcontent-%COMP%]:before {\r\n            left: 0;\r\n        }\r\n        .field_control.fieldicon.mail[_ngcontent-%COMP%]:before {\r\n            left: 0;\r\n        }\r\n        .field_control.fieldicon.secure[_ngcontent-%COMP%]:before {\r\n            left: 0;\r\n        }\r\n        .field_control.fieldicon[_ngcontent-%COMP%]   .field_label[_ngcontent-%COMP%] {\r\n            left: 45px;\r\n        }\r\n        .field_control.fieldicon[_ngcontent-%COMP%] {\r\n            padding-left: 20px;\r\n            margin: 15px 0;\r\n        }\r\n        .circlebutton[_ngcontent-%COMP%] {\r\n            position: relative;\r\n            right: 0;\r\n            top: 0;\r\n            display: block;\r\n            overflow: hidden;\r\n            width: 100%;\r\n            border-radius: 3px;\r\n            height: 35px;\r\n            font-size: 14px;\r\n            text-transform: uppercase;\r\n            color: #fff;\r\n            line-height: 35px;\r\n        }\r\n        .circlebutton[_ngcontent-%COMP%]:before {\r\n            display: none;\r\n        }\r\n        .web_form[_ngcontent-%COMP%]   .leftlabel[_ngcontent-%COMP%] {\r\n            margin-left: 0px;\r\n        }\r\n        .web_form[_ngcontent-%COMP%] {\r\n            font-size: 11px;\r\n        }\r\n        .field_label[_ngcontent-%COMP%] {\r\n            top: 8px;\r\n        }\r\n        .field_control[_ngcontent-%COMP%] {\r\n            margin: 10px 0;\r\n        }\r\n        .circlebutton[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n            height: 35px;\r\n            line-height: 35px;\r\n            font-size: 14px;\r\n            color: #fff;\r\n            width: 100%;\r\n            display: block;\r\n            opacity: 1;\r\n            background: #f44336;\r\n        }\r\n        .circlebutton[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n            background: #f44336;\r\n        }\r\n        .left[_ngcontent-%COMP%]   .formcontainer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .left[_ngcontent-%COMP%]   .formcontainer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n            padding-left: 0;\r\n            text-align: center;\r\n        }\r\n        .left[_ngcontent-%COMP%]   .formcontainer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n            font-size: 18px;\r\n        }\r\n        .left[_ngcontent-%COMP%]   .formcontainer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n            font-size: 12px;\r\n        }\r\n        \r\n        .field_cover[_ngcontent-%COMP%]   .captchapic[_ngcontent-%COMP%] {\r\n            width: 100px;\r\n            right: 20px;\r\n        }\r\n        #moveright.linkslide[_ngcontent-%COMP%] {\r\n            display: block;\r\n            margin: 10px 0 0;\r\n            float: none;\r\n            text-align: center;\r\n        }\r\n        .errorlist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n            font-size: 10px;\r\n        }\r\n        .field_cover[_ngcontent-%COMP%]   .errorlist[_ngcontent-%COMP%] {\r\n            padding: 6px;\r\n        }\r\n        .field[_ngcontent-%COMP%] {\r\n            margin-bottom: 20px;\r\n        }\r\n        .formcontainer[_ngcontent-%COMP%] {\r\n            max-width: 100%;\r\n            background: #fff;\r\n            margin: 0;\r\n        }\r\n        .formcontainer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n            text-align: center;\r\n        }\r\n        .formcontainer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n            max-width: 550px;\r\n            margin: 0 auto;\r\n        }\r\n    }\r\n    \r\n    @media (max-width: 500px) {\r\n        form[_ngcontent-%COMP%] {\r\n            margin-top: 0;\r\n        }\r\n        .modal-body[_ngcontent-%COMP%] {\r\n            padding: 20px 15px;\r\n        }\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJJQUFJLGFBQWE7O0lBRWI7Ozs7OztRQU1JLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBQ0EsU0FBUzs7SUFDVCxhQUFhOztJQUViO1FBQ0kscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxNQUFNO1FBQ04sT0FBTztRQUNQLG9CQUFvQjtRQUNwQixVQUFVO1FBQ1YsZUFBZTtRQUNmLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7O0lBRUE7O1FBRUksa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixrQkFBa0I7SUFDdEI7O0lBRUE7O1FBSUksZUFBZTtRQUVmLDBCQUEwQjtRQUMxQixtQ0FBbUM7UUFFbkMsMkJBQTJCO1FBQzNCLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxPQUFPO1FBQ1Asc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBSUksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBSUksa0NBQWtDO1FBQ2xDLFVBQVU7UUFDViwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO1FBSXhCLGlDQUFpQztRQUNqQyxXQUFX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Q0k7WUFDSSxhQUFhO1FBQ2pCO1FBQ0E7WUFDSSxrQkFBa0I7UUFDdEI7SUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudFBhY2thZ2UvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAvKiBoZWFkaW5ncyAqL1xyXG4gICAgXHJcbiAgICBoMSxcclxuICAgIGgyLFxyXG4gICAgaDMsXHJcbiAgICBoNCxcclxuICAgIGg1LFxyXG4gICAgaDYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGg2IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAvKiBlbmRzICovXHJcbiAgICAvKiBjaGVja2JveCAqL1xyXG4gICAgXHJcbiAgICAuY2hlY2tib3gge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMCAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoZWNrYm94IGlucHV0IHtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcclxuICAgIC5jaGVja2JveC1pbmxpbmUgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweCBcXDk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGVja2JveCAuaW5wdXQtaGVscGVyOmJlZm9yZSxcclxuICAgIC5jaGVja2JveCAuaW5wdXQtaGVscGVyOmFmdGVyIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbDtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hlY2tib3ggLmlucHV0LWhlbHBlcjpiZWZvcmUge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoZWNrYm94LmRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTYwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoZWNrYm94IGlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTdweDtcclxuICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGVja2JveCBpbnB1dDpjaGVja2VkKy5pbnB1dC1oZWxwZXI6YmVmb3JlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCsuaW5wdXQtaGVscGVyOmFmdGVyIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKC01MGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKC01MGRlZyk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoLTUwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgtNTBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGVja2JveCAuaW5wdXQtaGVscGVyOmJlZm9yZSB7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hlY2tib3ggLmlucHV0LWhlbHBlcjphZnRlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg4MGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDgwZGVnKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg4MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoODBkZWcpO1xyXG4gICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgIGhlaWdodDogOXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmY1ODZiO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmNTg2YjtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XHJcbiAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgIHRvcDogLTJweDtcclxuICAgIH1cclxuICAgIC8qIGVuZHMgKi9cclxuICAgIFxyXG4gICAgLmJhY2tsYXllciAubG9nbyB7XHJcbiAgICAgICAgLyogZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlOyAqL1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHRvcDogMTNweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDI2cHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIC8qIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgKi9cclxuICAgICAgICAvKiBJRSA5ICovXHJcbiAgICAgICAgLyogLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgKi9cclxuICAgICAgICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICAgICAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgKi9cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJhY2tsYXllciAubG9nbyBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAvKiBmb3JtIHNlY3Rpb25zICovXHJcbiAgICBcclxuICAgIC5iYWNrbGF5ZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iYWNrbGF5ZXIgLmxheWVyTGVmdCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJhY2tsYXllciAubGF5ZXJMZWZ0OmJlZm9yZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIC8qYmFja2dyb3VuZDogcmdiYSgzMywxNTAsMjQzLDAuNyk7Ki9cclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTApO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJhY2tsYXllciAubGF5ZXJSaWdodCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmFja2xheWVyIC5sYXllclJpZ2h0OmJlZm9yZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIC8qYmFja2dyb3VuZDogcmdiYSgzMywxNTAsMjQzLDAuNyk7Ki9cclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTApO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlubmVycGFuZWwge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAtMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDIwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sZWZ0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMmMzMDM0O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGFuZWxzIHtcclxuICAgICAgICAvKiBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpOyAqL1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJhY2tsYXllciAubGF5ZXJSaWdodDphZnRlcixcclxuICAgIC5iYWNrbGF5ZXIgLmxheWVyTGVmdDphZnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcGF0dGVybi5wbmdcIikgcmVwZWF0O1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxpbmtyaWdodCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjZmY1ODZiO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubGlua3JpZ2h0OmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmNTg2YjtcclxuICAgIH1cclxuICAgIC8qZnJvbSBzZWN0aW9uIENzcyovXHJcbiAgICBcclxuICAgIC5mb3JtY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIC8qYm9yZGVyOiAxcHggc29saWQgI2RkZDsgKi9cclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICAgICAgICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvcm1jb250YWluZXIgaDYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZpZWxkSWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAycHg7XHJcbiAgICAgICAgYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dDpmb2N1cz4uZmllbGRJY29uIHtcclxuICAgICAgICBjb2xvcjogI2ZmNTg2YiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3BjbC1maWVsZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luMTAwLWZvcm0gLnNwY2wtZmllbGQgbGFiZWwge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmNTg2YjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZpZWxkSWNvbi5wYXNzd29yZCB7XHJcbiAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgbGVmdDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5maWVsZEljb246Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IHVuc2V0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubGlua3JpZ2h0IHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICNmZjU4NmI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5saW5rcmlnaHQ6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmY1ODZiO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9naW4xMDAtZm9ybSBsYWJlbCB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luMTAwLWZvcm0gLmxlZnRsYWJlbCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAyNXB4O1xyXG4gICAgfVxyXG4gICAgLyogbG9naW4gYnRuICovXHJcbiAgICBcclxuICAgIC5zdWJtaXQuYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICBib3JkZXI6IDAgbm9uZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY1ODZiO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdWJtaXQ6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdWJtaXQ6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN1Ym1pdDpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN1Ym1pdCBzcGFuOjpiZWZvcmUsXHJcbiAgICAuc3VibWl0IHNwYW46OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN1Ym1pdDpob3Zlcjo6YmVmb3JlLFxyXG4gICAgLnN1Ym1pdDpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3VibWl0OmhvdmVyIHNwYW46OmJlZm9yZSxcclxuICAgIC5zdWJtaXQ6aG92ZXIgc3Bhbjo6YWZ0ZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN1Ym1pdDo6YmVmb3JlIHtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN1Ym1pdDo6YWZ0ZXIge1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBib3R0b206IDNweDtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3VibWl0IHNwYW46OmJlZm9yZSB7XHJcbiAgICAgICAgbGVmdDogM3B4O1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdWJtaXQgc3Bhbjo6YWZ0ZXIge1xyXG4gICAgICAgIHJpZ2h0OiAzcHg7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN1Ym1pdDpob3Zlcjo6YmVmb3JlLFxyXG4gICAgLnN1Ym1pdDpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgIGxlZnQ6IDNweDtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNnB4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN1Ym1pdDpob3ZlciBzcGFuOjpiZWZvcmUsXHJcbiAgICAuc3VibWl0OmhvdmVyIHNwYW46OmFmdGVyIHtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDZweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbjEwMC1mb3JtIC5mb3JtLWVsZW1lbnQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbjEwMC1mb3JtIC5mb3JtLWVsZW1lbnQgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luMTAwLWZvcm0gLmZvcm0tZWxlbWVudCBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICB9XHJcbiAgICAvKipFbmQqL1xyXG4gICAgLyoqIG1lZGlhIHF1ZXJpZXMgKiovXHJcbiAgICBcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTBweCkge1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJhY2tsYXllciAubGF5ZXJMZWZ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYWNrbGF5ZXIgLmxheWVyUmlnaHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWxzIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyNDBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlubmVycGFuZWwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZWZ0IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAwcHgsIDBweCwgMHB4KTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwMHB4LCAwcHgsIDBweCk7XHJcbiAgICAgICAgICAgIC8qIElFIDkgKi9cclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMDBweCwgMHB4LCAwcHgpO1xyXG4gICAgICAgICAgICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAwcHgsIDBweCwgMHB4KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcclxuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5LmFjdGl2ZS1sZWZ0IC5sZWZ0IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XHJcbiAgICAgICAgICAgIC8qIElFIDkgKi9cclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xyXG4gICAgICAgICAgICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgYm9keS5hY3RpdmUtbGVmdCAucmlnaHQge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMDBweCwgMHB4LCAwcHgpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAwcHgsIDBweCwgMHB4KTtcclxuICAgICAgICAgICAgLyogSUUgOSAqL1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwMHB4LCAwcHgsIDBweCk7XHJcbiAgICAgICAgICAgIC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMDBweCwgMHB4LCAwcHgpO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xyXG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwcHgsIDBweCk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDBweCwgMHB4KTtcclxuICAgICAgICAgICAgLyogSUUgOSAqL1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMHB4LCAwcHgpO1xyXG4gICAgICAgICAgICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwcHgsIDBweCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm1jb250YWluZXIge1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICAgICAgLyogSUUgOSAqL1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgICAgICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYWNrbGF5ZXIgLmxvZ28ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIC8qIElFIDkgKi9cclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICBmbG9hdDogdW5zZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYWNrbGF5ZXIgLmxvZ28gaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWVsZF9jb250cm9sLmZpZWxkaWNvbi51c2VyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWVsZF9jb250cm9sLmZpZWxkaWNvbi5rZXk6YmVmb3JlIHtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpZWxkX2NvbnRyb2wuZmllbGRpY29uLm1haWw6YmVmb3JlIHtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpZWxkX2NvbnRyb2wuZmllbGRpY29uLnNlY3VyZTpiZWZvcmUge1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmllbGRfY29udHJvbC5maWVsZGljb24gLmZpZWxkX2xhYmVsIHtcclxuICAgICAgICAgICAgbGVmdDogNDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpZWxkX2NvbnRyb2wuZmllbGRpY29uIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNpcmNsZWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaXJjbGVidXR0b246YmVmb3JlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLndlYl9mb3JtIC5sZWZ0bGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAud2ViX2Zvcm0ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWVsZF9sYWJlbCB7XHJcbiAgICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmllbGRfY29udHJvbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2lyY2xlYnV0dG9uIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNDQzMzY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaXJjbGVidXR0b24gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNDQzMzY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZWZ0IC5mb3JtY29udGFpbmVyIGg2LFxyXG4gICAgICAgIC5sZWZ0IC5mb3JtY29udGFpbmVyIGg1IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZWZ0IC5mb3JtY29udGFpbmVyIGg1IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGVmdCAuZm9ybWNvbnRhaW5lciBoNiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyouZmllbGRfY292ZXIgLmNhcHRjaGFwaWMsIC5maWVsZF9jb3ZlciAucmVsb2FkbGlua3twb3NpdGlvbjogc3RhdGljOyBtYXJnaW46IDEwcHggMCAwO30qL1xyXG4gICAgICAgIC5maWVsZF9jb3ZlciAuY2FwdGNoYXBpYyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNtb3ZlcmlnaHQubGlua3NsaWRlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lcnJvcmxpc3QgbGkgYSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpZWxkX2NvdmVyIC5lcnJvcmxpc3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWVsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtY29udGFpbmVyIGg1IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybWNvbnRhaW5lciBmb3JtIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_7__["AdminServiceService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentPackage/profile-setting-change/profile-setting-change.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/componentPackage/profile-setting-change/profile-setting-change.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ProfileSettingChangeComponent */

  /***/
  function srcAppComponentPackageProfileSettingChangeProfileSettingChangeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileSettingChangeComponent", function () {
      return ProfileSettingChangeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/commonmethod/common-method */
    "./src/app/commonmethod/common-method.ts");
    /* harmony import */


    var src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/utillpackage/my-routing-methods */
    "./src/app/utillpackage/my-routing-methods.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ProfileSettingChangeComponent =
    /*#__PURE__*/
    function () {
      function ProfileSettingChangeComponent(snackBar, router, adminServiceService) {
        _classCallCheck(this, ProfileSettingChangeComponent);

        this.snackBar = snackBar;
        this.router = router;
        this.adminServiceService = adminServiceService;
      }

      _createClass(ProfileSettingChangeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateAdminDetails",
        value: function updateAdminDetails() {
          var _this9 = this;

          if (this.newPwd.toString() != '' && this.newPwd.toUpperCase().match(this.confirmPwd.toUpperCase())) {
            var adminDetails = {};
            adminDetails.oldPassword = this.oldPwd;
            adminDetails.newPassword = this.newPwd;
            this.adminServiceService.updateDetails(adminDetails).subscribe(function (response) {
              if (response.success) {
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showSuccessDialog(_this9.snackBar, response.message);
                src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_2__["MyRoutingMethods"].gotoAds(_this9.router);
              } else {
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(_this9.snackBar, response.message);
              }
            });
          } else {
            if (this.newPwd.toString() == '') {
              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, "Password field can't be empty.");
            } else {
              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, "Oops, that's not the same password as the first one");
            }
          }
        }
      }]);

      return ProfileSettingChangeComponent;
    }();

    ProfileSettingChangeComponent.ɵfac = function ProfileSettingChangeComponent_Factory(t) {
      return new (t || ProfileSettingChangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_5__["AdminServiceService"]));
    };

    ProfileSettingChangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileSettingChangeComponent,
      selectors: [["app-profile-setting-change"]],
      decls: 16,
      vars: 3,
      consts: [[1, "form-outer"], [1, "form-element"], ["for", "oldpassword"], ["placeholder", "Old Password", "type", "password", "id", "oldpassword", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "npassword"], ["placeholder", "New Password", "type", "password", "id", "npassword", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "cpassword"], ["placeholder", "Confirm Password", "type", "password", "id", "cpassword", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "form-element", 2, "text-align", "center"], [1, "submit-btn", 3, "click"]],
      template: function ProfileSettingChangeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Old Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileSettingChangeComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.oldPwd = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileSettingChangeComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.newPwd = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Confirm password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileSettingChangeComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.confirmPwd = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSettingChangeComponent_Template_a_click_14_listener() {
            return ctx.updateAdminDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oldPwd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newPwd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPwd);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: [".form-outer[_ngcontent-%COMP%] {\r\n    padding: 20px 0;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    padding: 10px 15px;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\r\n    background: #e92330;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    padding: 15px 10px;\r\n    min-width: 300px;\r\n    display: inline-block;\r\n    color: #fff;\r\n    margin-top: 15px;\r\n    text-decoration: none;\r\n    transition: 0.3s all;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\r\n    background: #444;\r\n    transition: 0.3s all;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-moz-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-ms-input-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder {\r\n    color: #707070;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9wcm9maWxlLXNldHRpbmctY2hhbmdlL3Byb2ZpbGUtc2V0dGluZy1jaGFuZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRkE7SUFDSSxjQUFjO0FBQ2xCOztBQUZBO0lBQ0ksY0FBYztBQUNsQjs7QUFGQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRQYWNrYWdlL3Byb2ZpbGUtc2V0dGluZy1jaGFuZ2UvcHJvZmlsZS1zZXR0aW5nLWNoYW5nZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tb3V0ZXIge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxufVxyXG5cclxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCAuc3VibWl0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTkyMzMwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgLnN1Ym1pdC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzQ0NDtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileSettingChangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-setting-change',
          templateUrl: './profile-setting-change.component.html',
          styleUrls: ['./profile-setting-change.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_5__["AdminServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentPackage/show-profile/show-profile.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/componentPackage/show-profile/show-profile.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ShowProfileComponent */

  /***/
  function srcAppComponentPackageShowProfileShowProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowProfileComponent", function () {
      return ShowProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/commonmethod/common-method */
    "./src/app/commonmethod/common-method.ts");
    /* harmony import */


    var src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/utillpackage/my-routing-methods */
    "./src/app/utillpackage/my-routing-methods.ts");
    /* harmony import */


    var src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/utillpackage/my-cookies */
    "./src/app/utillpackage/my-cookies.ts");
    /* harmony import */


    var src_app_utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/utillpackage/constant */
    "./src/app/utillpackage/constant.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ShowProfileComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowProfileComponent_ng_template_15_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.JoinAndClose();
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowProfileComponent_ng_template_15_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.oldPwd = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "New password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowProfileComponent_ng_template_15_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.newPwd = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Confirm password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowProfileComponent_ng_template_15_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.confirmPwd = $event;
        })("keyup.enter", function ShowProfileComponent_ng_template_15_Template_input_keyup_enter_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.updatePassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowProfileComponent_ng_template_15_Template_a_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.updatePassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r47.oldPwd);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r47.newPwd);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r47.confirmPwd);
      }
    }

    var ShowProfileComponent =
    /*#__PURE__*/
    function () {
      function ShowProfileComponent(modalService, snackBar, router, adminServiceService, cookiesService, spiner) {
        _classCallCheck(this, ShowProfileComponent);

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
        } else {
          this.imageurl = src_app_utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__["MyConstants"].serverURL + this.imageurl;
        }
      }

      _createClass(ShowProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**Check Login */

      }, {
        key: "checkLoginMethod",
        value: function checkLoginMethod() {
          var logincheck = src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_3__["MyCookies"].checkLoginStatus(this.cookiesService);

          if (logincheck) {
            this.email = src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_3__["MyCookies"].getEmaild(this.cookiesService); // this.email=MyCookies
          } else {
            src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_2__["MyRoutingMethods"].gotoLogin(this.router);
          }
        }
      }, {
        key: "onSelectFile",
        value: function onSelectFile(event) {
          var _this10 = this;

          if (event.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (innerEvent) {
              _this10.imageurl = innerEvent.target.result;
              _this10.selectedImageUrl = event.target.files[0];
              var adminDetails = new FormData();
              adminDetails.append('file', _this10.selectedImageUrl, _this10.selectedImageUrl.name);

              _this10.updateAdminDetails(adminDetails);
            };
          }
        }
        /**
              *
              * Open  Modal Function
              */

      }, {
        key: "openModal",
        value: function openModal(content) {
          var _this11 = this;

          this.modalReference = this.modalService.open(content, {
            centered: true
          });
          this.modalReference.result.then(function (result) {}, function (reson) {
            _this11.reset();
          }); //  this. modalReference.componentInstance.actionMessage = this.actionmessage;
        }
        /**
         *
         * close Modal Function
         */

      }, {
        key: "JoinAndClose",
        value: function JoinAndClose() {
          if (this.modalReference) {
            this.reset();
            this.modalReference.close();
          }
        }
      }, {
        key: "showProileModal",
        value: function showProileModal(content) {
          this.openModal(content);
        } // CHnage Proilfe 

      }, {
        key: "updatePassword",
        value: function updatePassword() {
          var _this12 = this;

          if (this.newPwd.toString() != '' && this.newPwd.toUpperCase() == this.confirmPwd.toUpperCase() && this.oldPwd != '' && this.newPwd.toUpperCase() != this.oldPwd.toUpperCase()) {
            this.spiner.show();
            var adminDetails = {};
            adminDetails.oldPassword = this.oldPwd;
            adminDetails.newPassword = this.newPwd;
            this.adminServiceService.updateDetails(adminDetails).subscribe(function (response) {
              _this12.JoinAndClose();

              if (response.success) {
                _this12.spiner.hide();

                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showSuccessDialog(_this12.snackBar, response.message);
                src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_3__["MyCookies"].deletecookies(_this12.cookiesService);
                src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_2__["MyRoutingMethods"].gotoLogin(_this12.router);
                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showSuccessDialog(_this12.snackBar, response.message + " please Login Again");
              } else {
                _this12.spiner.hide();

                src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(_this12.snackBar, response.message);
              }
            });
          } else {
            if (this.newPwd.toString() == '') {
              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, "Password field can't be empty.");
            } else if (this.newPwd.toUpperCase() == this.oldPwd.toUpperCase()) {
              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, "New Password can't be same as Old Password");
            } else {
              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, "Oops, New Password & Confirm Password are not same");
            }

            this.JoinAndClose();
          }
        }
        /**
         * method to update admin details
         * @param adminDetails updated admin details object
         */

      }, {
        key: "updateAdminDetails",
        value: function updateAdminDetails(adminDetails) {
          var _this13 = this;

          this.spiner.show();
          this.adminServiceService.updateDetails(adminDetails).subscribe(function (response) {
            _this13.spiner.hide();

            if (response.success) {
              _this13.adminServiceService.setCurrentProfilePic(_this13.cookiesService.get('profilePic'));

              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showSuccessDialog(_this13.snackBar, response.message);
            } else {
              src_app_commonmethod_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(_this13.snackBar, response.message);
            }
          });
        }
        /**
         * method to reset all variables of admindetail object
         */

      }, {
        key: "reset",
        value: function reset() {
          this.oldPwd = '';
          this.newPwd = '';
          this.confirmPwd = '';
        }
      }]);

      return ShowProfileComponent;
    }();

    ShowProfileComponent.ɵfac = function ShowProfileComponent_Factory(t) {
      return new (t || ShowProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_8__["AdminServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]));
    };

    ShowProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShowProfileComponent,
      selectors: [["app-show-profile"]],
      decls: 17,
      vars: 2,
      consts: [[1, "card", "profile-section"], [1, "card-body"], [1, "cabinet", "center-block"], ["id", "item-img-output", 1, "gambar", "img-responsive", "img-thumbnail", 3, "src"], [1, "fa", "fa-camera"], ["type", "file", "accept", "image/*", "name", "file_photo", 1, "item-img", "file", "center-block", 3, "change"], [1, "profile-name"], [3, "click"], ["content", ""], [1, "modal-body", 2, "text-align", "center"], [1, "close-icon", 3, "click"], [1, "fa", "fa-times"], [1, "title-heading"], [1, "form-outer"], [1, "form-element"], ["for", "oldpassword"], ["placeholder", "Old Password", "type", "password", "id", "oldpassword", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "npassword"], ["placeholder", "New Password", "type", "password", "id", "npassword", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "cpassword"], ["placeholder", "Confirm Password", "type", "password", "id", "cpassword", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "form-element", 2, "text-align", "center"], [1, "submit-btn", 3, "click"]],
      template: function ShowProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ShowProfileComponent_Template_input_change_7_listener($event) {
            return ctx.onSelectFile($event);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowProfileComponent_Template_a_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

            return ctx.showProileModal(_r46);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ShowProfileComponent_ng_template_15_Template, 22, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imageurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]],
      styles: ["label.cabinet[_ngcontent-%COMP%] {\r\n    display: block;\r\n    cursor: pointer;\r\n    position: relative;\r\n    width: 200px;\r\n    height: 200px;\r\n    background: #fff;\r\n    border-radius: 50%;\r\n    border: 1px solid #707070;\r\n    padding: 2px;\r\n    margin: auto;\r\n    z-index: 1;\r\n}\r\n\r\nlabel.cabinet[_ngcontent-%COMP%]   input.file[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    -moz-opacity: 0;\r\n    width: 100%;\r\n    top: 0;\r\n    height: 100%;\r\n    left: 0;\r\n    cursor: pointer;\r\n    padding: 0;\r\n}\r\n\r\n.floating-label[_ngcontent-%COMP%] {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-top: 19px;\r\n}\r\n\r\n.cabinet[_ngcontent-%COMP%]   .img-thumbnail[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 50%;\r\n}\r\n\r\n#upload-demo[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n    height: 250px;\r\n    padding-bottom: 25px;\r\n}\r\n\r\nfigure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    color: #fff;\r\n    text-shadow: 0 0 10px #000;\r\n    text-align: justify;\r\n}\r\n\r\nfigure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n}\r\n\r\n.profile-section[_ngcontent-%COMP%] {\r\n    border: none;\r\n}\r\n\r\n.profile-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.profile-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    padding-top: 5px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1.2px;\r\n}\r\n\r\n.profile-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    padding-top: 4px;\r\n}\r\n\r\n.profile-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    padding: 10px 15px;\r\n    background: #e92330;\r\n    min-width: 180px;\r\n    color: #fff;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%] {\r\n    padding: 20px 0;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n    display: block;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\r\n    width: 48%;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element.submit-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    margin-bottom: 4px;\r\n    text-align: left;\r\n    display: block;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    padding: 6px 15px;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\r\n    background: #e92330;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    padding: 12px 10px;\r\n    min-width: 300px;\r\n    display: inline-block;\r\n    color: #fff;\r\n    margin-top: 15px;\r\n    text-decoration: none;\r\n    transition: 0.3s all;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    cursor: pointer;\r\n}\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\r\n    background: #444;\r\n    transition: 0.3s all;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-moz-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-ms-input-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder {\r\n    color: #707070;\r\n}\r\n\r\n@media (max-width: 991px){\r\n    label.cabinet[_ngcontent-%COMP%]{height: 180px;width: 180px;}\r\n}\r\n\r\n@media (max-width: 767px){\r\n    label.cabinet[_ngcontent-%COMP%]{height: 150px;width: 150px;}\r\n    figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size: 20px;}\r\n    .profile-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size: 22px;letter-spacing: 1px;margin-bottom: 0px;}\r\n    .profile-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size: 18px;}\r\n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]{margin-bottom: 20px;}\r\n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{min-width: auto;padding: 10px 15px;width: 100%;}\r\n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]:last-child{margin-bottom: 0;}\r\n    .form-outer[_ngcontent-%COMP%]{padding-bottom: 0;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9zaG93LXByb2ZpbGUvc2hvdy1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2YsV0FBVztJQUNYLE1BQU07SUFDTixZQUFZO0lBQ1osT0FBTztJQUNQLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFGQTtJQUNJLGNBQWM7QUFDbEI7O0FBRkE7SUFDSSxjQUFjO0FBQ2xCOztBQUZBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWMsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUM3Qzs7QUFFQTtJQUNJLGNBQWMsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUN6QyxvQkFBb0IsZUFBZSxDQUFDO0lBQ3BDLGlCQUFpQixlQUFlLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUM7SUFDeEUsZ0JBQWdCLGVBQWUsQ0FBQztJQUNoQywwQkFBMEIsbUJBQW1CLENBQUM7SUFDOUMsc0NBQXNDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7SUFDckYscUNBQXFDLGdCQUFnQixDQUFDO0lBQ3RELFlBQVksaUJBQWlCLENBQUM7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRQYWNrYWdlL3Nob3ctcHJvZmlsZS9zaG93LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsLmNhYmluZXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5sYWJlbC5jYWJpbmV0IGlucHV0LmZpbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC1tb3otb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1sYWJlbCB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxOXB4O1xyXG59XHJcblxyXG4uY2FiaW5ldCAuaW1nLXRodW1ibmFpbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbiN1cGxvYWQtZGVtbyB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbmZpZ3VyZSBmaWdjYXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzAwMDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbmZpZ3VyZSBmaWdjYXB0aW9uIGkge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1zZWN0aW9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnByb2ZpbGUtbmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtbmFtZSBoMiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxufVxyXG5cclxuLnByb2ZpbGUtbmFtZSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLW5hbWUgYSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U5MjMzMDtcclxuICAgIG1pbi13aWR0aDogMTgwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm0tb3V0ZXIge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZvcm0tb3V0ZXIgLmNvbC0xMiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZvcm0tb3V0ZXIgLmNvbC0xMiAuZm9ybS1lbGVtZW50IHtcclxuICAgIHdpZHRoOiA0OCU7XHJcbn1cclxuXHJcbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQuc3VibWl0LWJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xyXG59XHJcblxyXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IC5zdWJtaXQtYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOTIzMzA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCAuc3VibWl0LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCl7XHJcbiAgICBsYWJlbC5jYWJpbmV0e2hlaWdodDogMTgwcHg7d2lkdGg6IDE4MHB4O31cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAgIGxhYmVsLmNhYmluZXR7aGVpZ2h0OiAxNTBweDt3aWR0aDogMTUwcHg7fVxyXG4gICAgZmlndXJlIGZpZ2NhcHRpb24gaXtmb250LXNpemU6IDIwcHg7fVxyXG4gICAgLnByb2ZpbGUtbmFtZSBoMntmb250LXNpemU6IDIycHg7bGV0dGVyLXNwYWNpbmc6IDFweDttYXJnaW4tYm90dG9tOiAwcHg7fVxyXG4gICAgLnByb2ZpbGUtbmFtZSBwe2ZvbnQtc2l6ZTogMThweDt9XHJcbiAgICAuZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50e21hcmdpbi1ib3R0b206IDIwcHg7fVxyXG4gICAgLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCAuc3VibWl0LWJ0bnttaW4td2lkdGg6IGF1dG87cGFkZGluZzogMTBweCAxNXB4O3dpZHRoOiAxMDAlO31cclxuICAgIC5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQ6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOiAwO31cclxuICAgIC5mb3JtLW91dGVye3BhZGRpbmctYm90dG9tOiAwO31cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-show-profile',
          templateUrl: './show-profile.component.html',
          styleUrls: ['./show-profile.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_8__["AdminServiceService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/blank/blank.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/layout/blank/blank.component.ts ***!
    \*************************************************/

  /*! exports provided: BlankComponent */

  /***/
  function srcAppLayoutBlankBlankComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlankComponent", function () {
      return BlankComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BlankComponent =
    /*#__PURE__*/
    function () {
      function BlankComponent() {
        _classCallCheck(this, BlankComponent);
      }

      _createClass(BlankComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlankComponent;
    }();

    BlankComponent.ɵfac = function BlankComponent_Factory(t) {
      return new (t || BlankComponent)();
    };

    BlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlankComponent,
      selectors: [["app-blank"]],
      decls: 1,
      vars: 0,
      template: function BlankComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ibGFuay9ibGFuay5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blank',
          templateUrl: './blank.component.html',
          styleUrls: ['./blank.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/full/full.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/layout/full/full.component.ts ***!
    \***********************************************/

  /*! exports provided: FullComponent */

  /***/
  function srcAppLayoutFullFullComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullComponent", function () {
      return FullComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/utillpackage/my-routing-methods */
    "./src/app/utillpackage/my-routing-methods.ts");
    /* harmony import */


    var src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/utillpackage/my-cookies */
    "./src/app/utillpackage/my-cookies.ts");
    /* harmony import */


    var src_app_utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/utillpackage/constant */
    "./src/app/utillpackage/constant.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_services_sidebar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/sidebar.service */
    "./src/app/services/sidebar.service.ts");
    /* harmony import */


    var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function FullComponent_li_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_li_42_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var i_r43 = ctx.index;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.gotoRouting(i_r43);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menuList_r42 = ctx.$implicit;

        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, menuList_r42.status == "active"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r41.setNgClass(menuList_r42.icon));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuList_r42.title);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "slide": a0
      };
    };

    var _c2 = function _c2(a0) {
      return {
        "mobile-slide": a0
      };
    };

    var FullComponent =
    /*#__PURE__*/
    function () {
      function FullComponent(router, cookiesService, navBarService, adminServiceService, ngzone) {
        var _this14 = this;

        _classCallCheck(this, FullComponent);

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
        this.user_Name = ""; // Set Menu List From Side Bar Service 

        this.menu = this.navBarService.getMenuList();
        this.router.events.subscribe(function (value) {
          if (value instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            _this14.checkAndSetValue();
          }
        });
        this.user_Name = "Admin";
      }

      _createClass(FullComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.adminServiceService.currentProfilePic.subscribe(function (profilePicUrl) {
            _this15.profilePic = profilePicUrl;

            if (profilePicUrl == '') {
              _this15.profilePic = _this15.cookiesService.get('profilePic');
            }

            if (!_this15.profilePic) {
              _this15.profilePic = "./assets/imgs/default-admin.jpg";
            } else {
              _this15.profilePic = src_app_utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__["MyConstants"].serverURL + _this15.profilePic;
            }
          });
        }
        /**
         *
         * Profile Dialog Show Image
         *
         */

      }, {
        key: "showProflieDown",
        value: function showProflieDown() {
          this.showprofile = !this.showprofile;
        }
        /**End */

        /**
        *
        * Menue Toggle Image
        *
        */

      }, {
        key: "menueToggle",
        value: function menueToggle() {
          if (this.showSideBar == false) {
            this.showSideBar = true;
          } else {
            this.showSideBar = false;
          }
        }
      }, {
        key: "toggleButton",
        value: function toggleButton() {
          this.mobileView = !this.mobileView;
        }
        /**
         *
         * Get Top HEading Function
         *
         */

      }, {
        key: "checkAndSetValue",
        value: function checkAndSetValue() {
          var _this16 = this;

          this.showprofile = false;
          this.ngzone.run(function () {
            _this16.topHeading = "";
            var currentUrl = _this16.router.url;
            var matched = false;

            _this16.menu.forEach(function (element, index) {
              element.status = "inactive";

              if (!matched) {
                if (currentUrl == element.url) {
                  matched = true; // this.toggleButton();

                  _this16.topHeading = element.title;
                  element.status = "active";
                }
              } else {
                element.status = "inactive";
              } // element.urlTitleList.forEach(pageInnerUrls => {
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

      }, {
        key: "gotoRouting",
        value: function gotoRouting(index) {
          this.toggleButton();
          this.router.navigate([this.menu[index].url]);
          this.topHeading = this.menu[index].title;
        } // gotoSubmenuPage(oterindex: number, innerindex: number) {
        //   this.router.navigate(['/' + this.menus[oterindex].innerOptions[innerindex].url])
        //   this.topHeading = this.menus[oterindex].innerOptions[innerindex].title
        // }

        /**
         * Logout Function
         */

      }, {
        key: "logout",
        value: function logout() {
          src_app_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_3__["MyCookies"].deletecookies(this.cookiesService);
          src_app_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_2__["MyRoutingMethods"].gotoLogin(this.router);
        }
        /**End */

        /**
         * Toggle Css CHnage
         */

      }, {
        key: "getCustomCss",
        value: function getCustomCss() {
          if (this.showSideBar == true) {
            return 'fa-toggle-off';
          } else {
            return 'fa-toggle-on';
          }
        }
        /**Ng Class Icon Set */

      }, {
        key: "setNgClass",
        value: function setNgClass(className) {
          return className;
        }
      }]);

      return FullComponent;
    }();

    FullComponent.ɵfac = function FullComponent_Factory(t) {
      return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_7__["AdminServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FullComponent,
      selectors: [["app-full"]],
      decls: 48,
      vars: 11,
      consts: [[3, "ngClass"], [1, "wrapper", 3, "ngClass"], [1, "top-bar"], [1, "left-section"], [1, "left-side-section"], [1, "toggle-btn", 3, "click"], [1, "logo-img"], ["src", "./assets/imgs/logo.png"], [1, "right-section"], [1, "profile-settings"], [1, "navdrop-box", 2, "display", "flex", "justify-content", "center"], [3, "src"], [2, "position", "relative", "top", "3px", "margin", "2px", "font-weight", "bold", "font-size", "16px"], [1, "fa", "fa-chevron-down", 2, "position", "relative", "top", "9px", "margin-left", "9px"], [1, "dropdown-menu"], ["routerLink", "/show/profile"], [1, "dropdown-menu-footer"], [3, "click"], [1, "side-bar"], [1, "backlayer-sidebar", 3, "click"], [1, "side-header"], ["href", "", 1, "logo-text"], ["src", "./assets/imgs/Logo_car_black_and_white.png"], [1, "logo-name"], [1, "toggle-switch", "fa", 3, "ngClass", "click"], [1, "sidebar-header"], [1, "fa", "fa-times"], [1, "nav-bar"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "main-container", "dashboard"], [1, "main-title"], [3, "ngClass", "click"], [1, "side-icon", 3, "ngClass"]],
      template: function FullComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_div_click_5_listener() {
            return ctx.toggleButton();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_24_listener() {
            return ctx.logout();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_div_click_27_listener() {
            return ctx.toggleButton();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_i_click_34_listener() {
            return ctx.menueToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_38_listener() {
            return ctx.toggleButton();
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    cursor: pointer;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: inherit;\r\n    outline: none;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    vertical-align: top;\r\n}\r\n\r\n.clear[_ngcontent-%COMP%] {\r\n    clear: both\r\n}\r\n\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    letter-spacing: 0;\r\n    cursor: default;\r\n    min-height: 100%;\r\n    font-size: 14px;\r\n    letter-spacing: 0.1px;\r\n    color: #79859a;\r\n    background: #E4E9F0;\r\n}\r\n\r\nbody.no-scroll[_ngcontent-%COMP%] {\r\n    overflow: hidden!important\r\n}\r\n\r\n.margin-top40[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n}\r\n\r\n\r\n\r\n.cellgrid[_ngcontent-%COMP%] {\r\n    margin: 0 -10px;\r\n}\r\n\r\n.cellgrid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n}\r\n\r\n.cellgrid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    padding: 10px 10px 20px 10px;\r\n}\r\n\r\n.cellgrid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    transition: 0.6s all;\r\n    position: relative;\r\n    padding: 25px;\r\n    border-radius: 5px;\r\n    background: #404041;\r\n}\r\n\r\n.cellgrid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   .card[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to right, #209287 0%, #36c1b8 100%);\r\n}\r\n\r\n\r\n\r\n.cellgrid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .org[_ngcontent-%COMP%] {\r\n    background: #F98866;\r\n}\r\n\r\n.cellgrid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%] {\r\n    background: #f07d85;\r\n}\r\n\r\n.cellgrid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .mini-icon[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: rgba(255, 255, 255, 0.3);\r\n    float: right;\r\n    position: absolute;\r\n    right: 0px;\r\n    bottom: 0px;\r\n}\r\n\r\n.cellgrid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .mini-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 100px;\r\n}\r\n\r\n.cellgrid[_ngcontent-%COMP%]   .text-white[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    color: #333;\r\n}\r\n\r\n.cellgrid[_ngcontent-%COMP%]   .text-white[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .cellgrid.user-page[_ngcontent-%COMP%]   .text-white[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    color: #333;\r\n}\r\n\r\n.cellgrid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    font-weight: 400;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.cellgrid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    text-transform: none;\r\n}\r\n\r\n.cellgrid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    padding: 0px 0 10px 0;\r\n}\r\n\r\n.cellgrid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    color: #fff;\r\n    font-weight: 400;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.cellgrid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    font-size: 0.6em;\r\n    font-weight: normal;\r\n}\r\n\r\n.flexbox[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 0 -10px;\r\n    min-width: 100%;\r\n}\r\n\r\n.flexbox[_ngcontent-%COMP%]   [class*=\"col-\"][_ngcontent-%COMP%] {\r\n    margin: 0 10px 20px 10px;\r\n}\r\n\r\n.flexbox[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\r\n    width: calc(33.33% - 20px);\r\n    text-align: center;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    padding: 20px 10px;\r\n}\r\n\r\n.flexbox[_ngcontent-%COMP%]   .received-payment[_ngcontent-%COMP%] {\r\n    border: 2px solid #1d8178;\r\n    order: 2;\r\n    color: #1d8178;\r\n}\r\n\r\n.flexbox[_ngcontent-%COMP%]   .col-8[_ngcontent-%COMP%] {\r\n    width: calc(66.66% - 20px);\r\n    order: 1;\r\n    background: #fff;\r\n    border-radius: 4px;\r\n}\r\n\r\n.transactions-table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.total-payment[_ngcontent-%COMP%]   .imgbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 150px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.total-payment[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    padding: 20px;\r\n}\r\n\r\n.total-payment[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    font-weight: 500;\r\n}\r\n\r\n.total-payment[_ngcontent-%COMP%]   .top-section[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n}\r\n\r\n.total-payment[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n}\r\n\r\n.total-payment[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 15px 0 15px 15px;\r\n}\r\n\r\n.total-payment[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding-left: 15px;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    padding-top: 75px;\r\n}\r\n\r\n.top-bar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 220px;\r\n    width: calc(100% - 220px);\r\n    top: 0;\r\n    z-index: 99;\r\n    padding: 15px 20px;\r\n    background: #f7f7ff;\r\n    box-shadow: 0 0 15px #70707010;\r\n    padding: 15px 20px;\r\n}\r\n\r\n.top-bar[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    display: block;\r\n    clear: both;\r\n}\r\n\r\n.left-section[_ngcontent-%COMP%] {\r\n    float: left;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.search-box-outer[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    border-radius: 30px;\r\n    float: left;\r\n    position: relative;\r\n    padding: 0 40px 0px 5px;\r\n    transition: .3s;\r\n    width: 300px;\r\n    background-color: #fff;\r\n    border: 1px solid #d7d7e3;\r\n    display: none;\r\n}\r\n\r\n.search-box-outer[_ngcontent-%COMP%]   input.search-box[_ngcontent-%COMP%] {\r\n    background: none;\r\n    border: none;\r\n    color: #666;\r\n    border: none;\r\n    padding-left: 10px;\r\n    outline: none;\r\n    width: 100%;\r\n    height: 38px;\r\n    font-size: 15px\r\n}\r\n\r\n.search-box-outer[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\r\n    background: url('search.png') no-repeat;\r\n    width: 29px;\r\n    height: 23px;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 50%;\r\n    cursor: pointer;\r\n    margin-top: -11.5px;\r\n    margin-left: -8px;\r\n    border: none;\r\n    background-size: contain;\r\n}\r\n\r\n.right-section[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 135px;\r\n}\r\n\r\n.toggle-btn[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    padding: 0 15px;\r\n    margin-top: 25px;\r\n    cursor: pointer;\r\n    float: left;\r\n}\r\n\r\n.toggle-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 3px;\r\n    border-radius: 4px;\r\n    margin-bottom: 6px;\r\n    background: #2d96f1;\r\n    display: block;\r\n    transition: 0.5s all;\r\n}\r\n\r\n.profile-settings[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 30px;\r\n    max-height: 30px;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    margin-right: 4px;\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n.profile-settings[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\r\n    transform: scaleY(1);\r\n    transition: 0.3s all;\r\n    display: unset;\r\n}\r\n\r\n.notification[_ngcontent-%COMP%]   .mdi-bell-ring[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    padding: 10px 5px;\r\n    color: #ff586b;\r\n}\r\n\r\n.notification[_ngcontent-%COMP%]   .mdi-bell-ring[_ngcontent-%COMP%]:before {\r\n    -webkit-animation: bells 0.2s linear infinite alternate;\r\n            animation: bells 0.2s linear infinite alternate;\r\n}\r\n\r\n@-webkit-keyframes bells {\r\n    0% {\r\n        transform-origin: center;\r\n        transform: rotate(4deg);\r\n    }\r\n    100% {\r\n        transform-origin: center;\r\n        transform: rotate(-4deg);\r\n    }\r\n}\r\n\r\n@keyframes bells {\r\n    0% {\r\n        transform-origin: center;\r\n        transform: rotate(4deg);\r\n    }\r\n    100% {\r\n        transform-origin: center;\r\n        transform: rotate(-4deg);\r\n    }\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 100%;\r\n    width: 180px;\r\n    max-width: 180px;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    right: 0;\r\n    left: unset;\r\n    text-align: center;\r\n    box-shadow: 0 0 25px rgba(0, 0, 0, 0.12);\r\n    cursor: default;\r\n    transform: scaleY(0);\r\n    transition: 0.3s all;\r\n    display: unset;\r\n    transform-origin: top;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    color: #2d96f1;\r\n    text-transform: uppercase;\r\n    padding: 10px;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    padding: 15px;\r\n    display: block;\r\n    transition: 0.3s all;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: #f1f1f1;\r\n    transition: 0.3s all;\r\n}\r\n\r\n.dropdown-menu-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    \r\n    padding: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.dropdown-menu.show[_ngcontent-%COMP%] {\r\n    transform: scaleY(1);\r\n    transition: 0.3s all;\r\n    display: unset;\r\n}\r\n\r\n\r\n\r\n.side-bar[_ngcontent-%COMP%]   .child-menu.active[_ngcontent-%COMP%]   .menu-wrap[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background: none;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%]   .menu-wrap[_ngcontent-%COMP%] {\r\n    display: none;\r\n    background: #ccc;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after {\r\n    content: \"\\F35D\";\r\n    font-family: \"Material Design Icons\";\r\n    position: absolute;\r\n    right: 6px;\r\n    top: 50%;\r\n    transform: translate(0, -50%);\r\n    font-size: 30px;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%] > .menu-wrap[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 15px 10px 15px 30px\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%] > .menu-wrap[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    left: 30px;\r\n    top: 0;\r\n    bottom: 0;\r\n    content: \"\";\r\n    background: #999;\r\n    width: 1px;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%]   .menu-wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 7px 10px 7px 35px;\r\n    font-size: 15px;\r\n    display: block;\r\n    color: #75787e;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%]   .menu-wrap[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #027bb2;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%]   .menu-wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%]   .menu-wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 15px;\r\n    height: 1px;\r\n    background: #999;\r\n    border-right: none;\r\n    content: \"\";\r\n    width: 20px;\r\n    transition: all 300ms ease 0s;\r\n}\r\n\r\n\r\n\r\n.broadcast-notification[_ngcontent-%COMP%] {\r\n    width: 350px;\r\n    max-width: 350px;\r\n}\r\n\r\n.broadcast-notification[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    color: #000\r\n}\r\n\r\n.broadcast-notification[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    border-bottom: 2px solid #2d96f1\r\n}\r\n\r\n.broadcast-notification[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #2d96f1;\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n    padding: 0 5px;\r\n}\r\n\r\n.broadcast-notification[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n}\r\n\r\n.broadcast-notification[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    display: block;\r\n}\r\n\r\n.broadcast-notification[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    font-size: 14px;\r\n    text-align: left;\r\n}\r\n\r\n.broadcast-notification[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #2d96f1;\r\n    padding-right: 10px;\r\n}\r\n\r\n.broadcast-notification[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    padding: 0 5px;\r\n    color: #2d96f1;\r\n    font-size: 12px;\r\n}\r\n\r\n.notification-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 12px;\r\n}\r\n\r\n.count-notification[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    background: #717071;\r\n    padding: 0;\r\n    font-size: 9px;\r\n    color: #fff;\r\n    border-radius: 50%;\r\n    top: -10px;\r\n    right: -10px;\r\n    width: 18px;\r\n    height: 18px;\r\n    padding-left: 4px;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 220px;\r\n    height: 100%;\r\n    box-shadow: 0 35px 25px rgba(0, 0, 0, 0.12);\r\n    \r\n    transition: 0.5s all;\r\n    color: #868686;\r\n    font-size: 15px;\r\n    background: url('sidebar-back.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    z-index: 999;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]::before {\r\n    position: absolute;\r\n    content: '';\r\n    height: 100%;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    z-index: -1;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .side-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 15px 10px;\r\n    align-items: center;\r\n}\r\n\r\n.side-header[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 60px;\r\n    margin-left: -5px;\r\n    vertical-align: bottom !important;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    margin-left: 10px;\r\n}\r\n\r\n.side-bar[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.nav-outer[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: calc(100vh - 90px);\r\n    overflow: auto;\r\n    z-index: 4;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    padding: 15px 10px;\r\n    transition: 0.3s all;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n    \r\n    background: rgba(200, 200, 200, 0.2);\r\n    transition: 0.3s all;\r\n    padding-left: 15px;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background: rgba(200, 200, 200, 0.2);\r\n    border-left: 2px solid #ff586b;\r\n    color: #fff;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 19px;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    padding-left: 13px;\r\n}\r\n\r\n.right-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n    clear: both;\r\n    content: '';\r\n}\r\n\r\n.right-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    position: relative;\r\n    margin-right: 20px;\r\n}\r\n\r\n.right-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%] {\r\n    left: 70px;\r\n    width: calc(100% - 70px);\r\n    transition: 0.5s all;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%] {\r\n    width: 70px;\r\n    transition: 0.5s all;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n    padding-left: 10px;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]:hover   .logo-text[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]:hover   .toggle-switch[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]:hover {\r\n    width: 220px;\r\n    transition: 0.5s all;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]:hover   .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    transition: 0.5s all;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: none;\r\n    transition: 0.5s all;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    width: 16px;\r\n    transition: 0.5s all;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\r\n    margin-left: 70px;\r\n    \r\n}\r\n\r\n\r\n\r\n.main-container[_ngcontent-%COMP%] {\r\n    margin-left: 220px;\r\n    padding: 25px;\r\n    min-height: calc(100vh - 75px);\r\n    \r\n}\r\n\r\nul.grid-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 25%;\r\n    padding: 0px 10px 20px 10px;\r\n}\r\n\r\nul.grid-2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 50%;\r\n    padding: 0px 10px 20px 10px;\r\n}\r\n\r\nul.grid[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\r\n    padding: 0px 0px 15px 0;\r\n}\r\n\r\n.main-title[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 100%;\r\n}\r\n\r\n.main-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: 28px;\r\n    text-transform: capitalize;\r\n    color: #000;\r\n}\r\n\r\n.whitebox[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    border-radius: 4px;\r\n}\r\n\r\n.top-section[_ngcontent-%COMP%] {\r\n    padding: 30px;\r\n    border-bottom: #ddd 1px solid;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 100%;\r\n    vertical-align: top;\r\n}\r\n\r\n.chart-section[_ngcontent-%COMP%] {\r\n    padding: 40px 40px 40px 0;\r\n}\r\n\r\n.top-section[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.filters[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.filters[_ngcontent-%COMP%]   .action-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    border: 1px solid #79859a;\r\n    border-radius: 30px;\r\n}\r\n\r\n.filters[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    background: #ddd;\r\n}\r\n\r\n.filters[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n\r\n.filters[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 12px;\r\n    border-radius: 2px;\r\n    display: block;\r\n    font-size: 14px;\r\n}\r\n\r\n.filters[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background: #1C7F76;\r\n    color: #fff;\r\n}\r\n\r\n.filter-section[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    background: #1c7f76;\r\n    padding: 9px 10px;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    border-radius: 3px;\r\n    margin-left: 15px;\r\n}\r\n\r\n.filter-section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n}\r\n\r\n.search-outer[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    float: left;\r\n    position: relative;\r\n    padding: 0 40px 0px 5px;\r\n    transition: .3s;\r\n    width: 400px;\r\n    background-color: #fff;\r\n    border: 1px solid #d7d7e3;\r\n    margin-right: 0px;\r\n}\r\n\r\n.search-outer[_ngcontent-%COMP%]   input.search-box[_ngcontent-%COMP%] {\r\n    background: none;\r\n    border: none;\r\n    color: #666;\r\n    border: none;\r\n    padding-left: 10px;\r\n    outline: none;\r\n    width: 100%;\r\n    height: 38px;\r\n    font-size: 15px\r\n}\r\n\r\n.search-outer[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\r\n    width: 29px;\r\n    height: 23px;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 50%;\r\n    cursor: pointer;\r\n    margin-top: -11.5px;\r\n    margin-left: -8px;\r\n    border: none\r\n}\r\n\r\n.left-side-section[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.sidebar-header[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n    .left-side-section[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n    .left-side-section[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 125px;\r\n    }\r\n    .left-side-section[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\r\n        margin-top: 0;\r\n        padding-left: 0;\r\n    }\r\n    .left-side-section[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        background: #e92330;\r\n    }\r\n    .main-container[_ngcontent-%COMP%] {\r\n        margin-left: 0;\r\n        padding: 25px 20px;\r\n    }\r\n    .top-bar[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        left: 0;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n    }\r\n    .top-bar[_ngcontent-%COMP%]::after {\r\n        display: none;\r\n    }\r\n    .profile-settings[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 40px;\r\n        margin-right: 8px;\r\n    }\r\n    \r\n    .side-bar[_ngcontent-%COMP%] {\r\n        width: 180px;\r\n        left: -100%;\r\n    }\r\n    .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 15px 0;\r\n        font-size: 14px;\r\n    }\r\n    .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        padding-left: 10px;\r\n    }\r\n    .side-bar[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    .side-header[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    .sidebar-header[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        width: 100%;\r\n    }\r\n    .side-bar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 120px;\r\n    }\r\n    .side-bar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n        color: #fff;\r\n        font-size: 20px;\r\n    }\r\n    .backlayer-sidebar[_ngcontent-%COMP%] {\r\n        content: '';\r\n        position: fixed;\r\n        top: 0;\r\n        height: 100%;\r\n        width: 100%;\r\n        left: 0;\r\n        background: rgba(0, 0, 0, 0.5);\r\n        z-index: -1;\r\n        left: -100%;\r\n    }\r\n    .mobile-slide[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%] {\r\n        left: 0;\r\n    }\r\n    .mobile-slide[_ngcontent-%COMP%]   .backlayer-sidebar[_ngcontent-%COMP%] {\r\n        left: 0;\r\n    }\r\n    .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n        padding-left: 0;\r\n    }\r\n    .nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        border-left: 2px solid transparent;\r\n    }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .main-title[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px;\r\n    }\r\n    .main-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 24px;\r\n    }\r\n    .top-bar[_ngcontent-%COMP%] {\r\n        padding: 10px 20px;\r\n    }\r\n    .dropdown-menu[_ngcontent-%COMP%] {\r\n        width: 150px;\r\n    }\r\n    .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 8px 10px;\r\n    }\r\n    .dropdown-menu-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Z1bGwvZnVsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0lBT0ksVUFBVTtJQUNWO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUdBLFlBQVk7O0FBRVo7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUdJLCtEQUErRDtBQUNuRTs7QUFHQSwrT0FBK087O0FBRS9PO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJB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QUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixtQkFBbUI7UUFDbkIsV0FBVztJQUNmO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsZUFBZTtRQUNmLE1BQU07UUFDTixZQUFZO1FBQ1osV0FBVztRQUNYLE9BQU87UUFDUCw4QkFBOEI7UUFDOUIsV0FBVztRQUNYLFdBQVc7SUFDZjtJQUNBO1FBQ0ksT0FBTztJQUNYO0lBQ0E7UUFDSSxPQUFPO0lBQ1g7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGtDQUFrQztJQUN0QztBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZnVsbC9mdWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCxcclxubGksXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwXHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmNsZWFyIHtcclxuICAgIGNsZWFyOiBib3RoXHJcbn1cclxuXHJcbmJvZHksXHJcbmh0bWwge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xyXG4gICAgY29sb3I6ICM3OTg1OWE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTRFOUYwO1xyXG59XHJcblxyXG5ib2R5Lm5vLXNjcm9sbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuIWltcG9ydGFudFxyXG59XHJcblxyXG4ubWFyZ2luLXRvcDQwIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcblxyXG4vKmRhc2hib2FyZCovXHJcblxyXG4uY2VsbGdyaWQge1xyXG4gICAgbWFyZ2luOiAwIC0xMHB4O1xyXG59XHJcblxyXG4uY2VsbGdyaWQgdWwge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbi5jZWxsZ3JpZCB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDIwcHggMTBweDtcclxufVxyXG5cclxuLmNlbGxncmlkIC5jYXJkIHtcclxuICAgIHRyYW5zaXRpb246IDAuNnMgYWxsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICM0MDQwNDE7XHJcbn1cclxuXHJcbi5jZWxsZ3JpZCB1bCBsaTpmaXJzdC1jaGlsZCAuY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMjA5Mjg3IDAlLCAjMzZjMWI4IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzIwOTI4NyAwJSwgIzM2YzFiOCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIwOTI4NyAwJSwgIzM2YzFiOCAxMDAlKTtcclxufVxyXG5cclxuXHJcbi8qLmNlbGxncmlkIHVsIGxpOmxhc3QtY2hpbGQgLmNhcmR7YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgICMzNmMxYjggIDAlLCAjMjA5Mjg3IDEwMCUpOyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAgIzM2YzFiOCAgMCUsIzIwOTI4NyAxMDAlKTtiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICAjMzZjMWI4ICAwJSwjMjA5Mjg3IDEwMCUpO30qL1xyXG5cclxuLmNlbGxncmlkIHVsIGxpIC5vcmcge1xyXG4gICAgYmFja2dyb3VuZDogI0Y5ODg2NjtcclxufVxyXG5cclxuLmNlbGxncmlkIHVsIGxpIC5waW5rIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMDdkODU7XHJcbn1cclxuXHJcbi5jZWxsZ3JpZCAuY2FyZCAubWluaS1pY29uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5jZWxsZ3JpZCAuY2FyZCAubWluaS1pY29uIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxufVxyXG5cclxuLmNlbGxncmlkIC50ZXh0LXdoaXRlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmNlbGxncmlkIC50ZXh0LXdoaXRlIGg0LFxyXG4uY2VsbGdyaWQudXNlci1wYWdlIC50ZXh0LXdoaXRlIGg2IHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uY2VsbGdyaWQgLmNhcmQgaDYge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5jZWxsZ3JpZCAuY2FyZCBoNiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLmNlbGxncmlkIC5jYXJkIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxufVxyXG5cclxuLmNlbGxncmlkIC5jYXJkIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2VsbGdyaWQgLmNhcmQgaDQgc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAwLjZlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5mbGV4Ym94IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAwIC0xMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmxleGJveCBbY2xhc3MqPVwiY29sLVwiXSB7XHJcbiAgICBtYXJnaW46IDAgMTBweCAyMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5mbGV4Ym94IC5jb2wtNCB7XHJcbiAgICB3aWR0aDogY2FsYygzMy4zMyUgLSAyMHB4KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5mbGV4Ym94IC5yZWNlaXZlZC1wYXltZW50IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxZDgxNzg7XHJcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAzO1xyXG4gICAgLW1zLWZsZXgtb3JkZXI6IDI7XHJcbiAgICBvcmRlcjogMjtcclxuICAgIGNvbG9yOiAjMWQ4MTc4O1xyXG59XHJcblxyXG4uZmxleGJveCAuY29sLTgge1xyXG4gICAgd2lkdGg6IGNhbGMoNjYuNjYlIC0gMjBweCk7XHJcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xyXG4gICAgLW1zLWZsZXgtb3JkZXI6IDE7XHJcbiAgICBvcmRlcjogMTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbnMtdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50b3RhbC1wYXltZW50IC5pbWdib3ggaW1nIHtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udG90YWwtcGF5bWVudCBoNCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4udG90YWwtcGF5bWVudCAudG90YWwge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnRvdGFsLXBheW1lbnQgLnRvcC1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnRvdGFsLXBheW1lbnQgLnRhYmxlLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4udG90YWwtcGF5bWVudCAudGFibGUtd3JhcHBlciB0YWJsZSB0ZCBhIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMCAxNXB4IDE1cHg7XHJcbn1cclxuXHJcbi50b3RhbC1wYXltZW50IC50YWJsZS13cmFwcGVyIHRoIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDc1cHg7XHJcbn1cclxuXHJcbi50b3AtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDIyMHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIyMHB4KTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4ICM3MDcwNzAxMDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxufVxyXG5cclxuLnRvcC1iYXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmxlZnQtc2VjdGlvbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94LW91dGVyIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDAgNDBweCAwcHggNXB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q3ZDdlMztcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94LW91dGVyIGlucHV0LnNlYXJjaC1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94LW91dGVyIC5zZWFyY2gge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy9zZWFyY2gucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDI5cHg7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTExLjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4ucmlnaHQtc2VjdGlvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubG9nbyBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMzVweDtcclxufVxyXG5cclxuLnRvZ2dsZS1idG4ge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnRvZ2dsZS1idG4gc3BhbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzJkOTZmMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbn1cclxuXHJcbi5wcm9maWxlLXNldHRpbmdzIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDMwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLXNldHRpbmdzOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbiAgICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiAubWRpLWJlbGwtcmluZyB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIGNvbG9yOiAjZmY1ODZiO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uIC5tZGktYmVsbC1yaW5nOmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IGJlbGxzIDAuMnMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBiZWxscyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDRkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDI1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbiAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgaDUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMyZDk2ZjE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgYSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LWZvb3RlciBhIHtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNkZGQ7ICovXHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudS5zaG93IHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbiAgICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuXHJcbi8qY2hpbGQgbWVudSovXHJcblxyXG4uc2lkZS1iYXIgLmNoaWxkLW1lbnUuYWN0aXZlIC5tZW51LXdyYXAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5uYXYtYmFyIC5jaGlsZC1tZW51IGxpIGEge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLnNpZGUtYmFyIC5jaGlsZC1tZW51IC5tZW51LXdyYXAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuXHJcbi5zaWRlLWJhciAuY2hpbGQtbWVudT5hOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxGMzVEXCI7XHJcbiAgICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBEZXNpZ24gSWNvbnNcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA2cHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uc2lkZS1iYXIgLmNoaWxkLW1lbnU+Lm1lbnUtd3JhcD51bCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCAzMHB4XHJcbn1cclxuXHJcbi5zaWRlLWJhciAuY2hpbGQtbWVudT4ubWVudS13cmFwPnVsOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQ6ICM5OTk7XHJcbiAgICB3aWR0aDogMXB4O1xyXG59XHJcblxyXG4uc2lkZS1iYXIgLmNoaWxkLW1lbnUgLm1lbnUtd3JhcCB1bCBsaSBhIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDdweCAxMHB4IDdweCAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzc1Nzg3ZTtcclxufVxyXG5cclxuLnNpZGUtYmFyIC5jaGlsZC1tZW51IC5tZW51LXdyYXAgLmFjdGl2ZSBhIHtcclxuICAgIGNvbG9yOiAjMDI3YmIyO1xyXG59XHJcblxyXG4uc2lkZS1iYXIgLmNoaWxkLW1lbnUgLm1lbnUtd3JhcCB1bCBsaSBhLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNpZGUtYmFyIC5jaGlsZC1tZW51IC5tZW51LXdyYXAgdWwgbGkgYTo6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICM5OTk7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcclxufVxyXG5cclxuXHJcbi8qNCBkZWMgMjAxOSAqL1xyXG5cclxuLmJyb2FkY2FzdC1ub3RpZmljYXRpb24ge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuLmJyb2FkY2FzdC1ub3RpZmljYXRpb24gaDUge1xyXG4gICAgY29sb3I6ICMwMDBcclxufVxyXG5cclxuLmJyb2FkY2FzdC1ub3RpZmljYXRpb24gLm5vdGlmaWNhdGlvbi1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyZDk2ZjFcclxufVxyXG5cclxuLmJyb2FkY2FzdC1ub3RpZmljYXRpb24gLm5vdGlmaWNhdGlvbi1oZWFkZXIgc3BhbiB7XHJcbiAgICBjb2xvcjogIzJkOTZmMTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG5cclxuLmJyb2FkY2FzdC1ub3RpZmljYXRpb24gLm5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5icm9hZGNhc3Qtbm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24tbWVzc2FnZSBsaSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5icm9hZGNhc3Qtbm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24tbWVzc2FnZSBsaSBhIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYnJvYWRjYXN0LW5vdGlmaWNhdGlvbiAubm90aWZpY2F0aW9uLW1lc3NhZ2UgbGkgYSBpIHtcclxuICAgIGNvbG9yOiAjMmQ5NmYxO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmJyb2FkY2FzdC1ub3RpZmljYXRpb24gLm5vdGlmaWNhdGlvbi1tZXNzYWdlIGxpIGEgc3BhbiB7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIGNvbG9yOiAjMmQ5NmYxO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWZvb3RlciBhIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4uY291bnQtbm90aWZpY2F0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICM3MTcwNzE7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG59XHJcblxyXG4uc2lkZS1iYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMzVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMmYzMDM4OyAqL1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICBjb2xvcjogIzg2ODY4NjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9zaWRlYmFyLWJhY2suanBnJykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLnNpZGUtYmFyOjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnNpZGUtYmFyIC5zaWRlLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNpZGUtaGVhZGVyIC50b2dnbGUtc3dpdGNoIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2lkZS1iYXIgLmxvZ28taW1nIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDYwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b20gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGUtYmFyIC5sb2dvLXRleHQgLmxvZ28tbmFtZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uc2lkZS1iYXIgLmxvZ28tdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdi1vdXRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5MHB4KTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgei1pbmRleDogNDtcclxufVxyXG5cclxuLm5hdi1iYXIgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5hdi1iYXIgbGkgYSBzcGFuIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5uYXYtYmFyIGxpOmhvdmVyIGEge1xyXG4gICAgLyogY29sb3I6IDsgKi9cclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ubmF2LWJhciBsaS5hY3RpdmUgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMik7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZjU4NmI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm5hdi1iYXIgbGkgYSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbn1cclxuXHJcbi5yaWdodC1zZWN0aW9uIHVsOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBjb250ZW50OiAnJztcclxufVxyXG5cclxuLnJpZ2h0LXNlY3Rpb24gdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1zZWN0aW9uIHVsIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2xpZGUgLnRvcC1iYXIge1xyXG4gICAgbGVmdDogNzBweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG59XHJcblxyXG4uc2xpZGUgLnRvZ2dsZS1zd2l0Y2gge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNsaWRlIC5zaWRlLWJhciB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG59XHJcblxyXG4uc2xpZGUgLm5hdi1iYXIgbGk6aG92ZXIgYSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zbGlkZSAuc2lkZS1iYXIgLmxvZ28tdGV4dCAubG9nby1uYW1lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zbGlkZSAuc2lkZS1iYXI6aG92ZXIgLmxvZ28tdGV4dCAubG9nby1uYW1lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnNsaWRlIC5zaWRlLWJhcjpob3ZlciAudG9nZ2xlLXN3aXRjaCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zbGlkZSAuc2lkZS1iYXI6aG92ZXIge1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbn1cclxuXHJcbi5zbGlkZSAuc2lkZS1iYXI6aG92ZXIgLm5hdi1iYXIgbGkgYSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG59XHJcblxyXG4uc2xpZGUgLm5hdi1iYXIgbGkgYSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxufVxyXG5cclxuLnNsaWRlIC50b2dnbGUtYnRuIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbn1cclxuXHJcbi5zbGlkZSAubWFpbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgICAvKiB0cmFuc2l0aW9uOiAwLjVzIGFsbDsgKi9cclxufVxyXG5cclxuXHJcbi8qbWFpbi1jb250YWluZXIqL1xyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMjBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XHJcbiAgICAvKiB0cmFuc2l0aW9uOiAwLjVzIGFsbDsgKi9cclxufVxyXG5cclxudWwuZ3JpZC00PmxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDIwcHggMTBweDtcclxufVxyXG5cclxudWwuZ3JpZC0yPmxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDIwcHggMTBweDtcclxufVxyXG5cclxudWwuZ3JpZD5saSB7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDE1cHggMDtcclxufVxyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW4tdGl0bGUgaDEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLndoaXRlYm94IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi50b3Atc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogI2RkZCAxcHggc29saWQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uY2hhcnQtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHggNDBweCAwO1xyXG59XHJcblxyXG4udG9wLXNlY3Rpb24gLnN1Yi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZmlsdGVycyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5maWx0ZXJzIC5hY3Rpb24td3JhcCBhIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3OTg1OWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4uZmlsdGVycyAuZHVyYXRpb24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbn1cclxuXHJcbi5maWx0ZXJzIC5kdXJhdGlvbiBsaSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmZpbHRlcnMgLmR1cmF0aW9uIGxpIGEge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZmlsdGVycyAuZHVyYXRpb24gbGkuYWN0aXZlIGEge1xyXG4gICAgYmFja2dyb3VuZDogIzFDN0Y3NjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZmlsdGVyLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJhY2tncm91bmQ6ICMxYzdmNzY7XHJcbiAgICBwYWRkaW5nOiA5cHggMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5maWx0ZXItc2VjdGlvbiBpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnNlYXJjaC1vdXRlciB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDAgNDBweCAwcHggNXB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q3ZDdlMztcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLW91dGVyIGlucHV0LnNlYXJjaC1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4XHJcbn1cclxuXHJcbi5zZWFyY2gtb3V0ZXIgLnNlYXJjaCB7XHJcbiAgICB3aWR0aDogMjlweDtcclxuICAgIGhlaWdodDogMjNweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTEuNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgICBib3JkZXI6IG5vbmVcclxufVxyXG5cclxuLmxlZnQtc2lkZS1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5sZWZ0LXNpZGUtc2VjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmxlZnQtc2lkZS1zZWN0aW9uIC5sb2dvLWltZyBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTI1cHg7XHJcbiAgICB9XHJcbiAgICAubGVmdC1zaWRlLXNlY3Rpb24gLnRvZ2dsZS1idG4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLmxlZnQtc2lkZS1zZWN0aW9uIC50b2dnbGUtYnRuIHNwYW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlOTIzMzA7XHJcbiAgICB9XHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHggMjBweDtcclxuICAgIH1cclxuICAgIC50b3AtYmFyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudG9wLWJhcjo6YWZ0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZS1zZXR0aW5ncyBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogNDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIH1cclxuICAgIC8qIHNpZGViYXIgKi9cclxuICAgIC5zaWRlLWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgfVxyXG4gICAgLm5hdi1iYXIgbGkgYSB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5uYXYtYmFyIGxpIGEgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIC5zaWRlLWJhciAubG9nby10ZXh0IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnNpZGUtaGVhZGVyIC50b2dnbGUtc3dpdGNoIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXItaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnNpZGUtYmFyIC5zaWRlYmFyLWhlYWRlciAubG9nby1pbWcgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGUtYmFyIC5zaWRlYmFyLWhlYWRlciBhIGkge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5iYWNrbGF5ZXItc2lkZWJhciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICB9XHJcbiAgICAubW9iaWxlLXNsaWRlIC5zaWRlLWJhciB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5tb2JpbGUtc2xpZGUgLmJhY2tsYXllci1zaWRlYmFyIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLm5hdi1iYXIgbGk6aG92ZXIgYSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLm5hdi1iYXIgbGkgYSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAubWFpbi10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5tYWluLXRpdGxlIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAudG9wLWJhciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuICAgIC5kcm9wZG93bi1tZW51IGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLW1lbnUtZm9vdGVyIGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-full',
          templateUrl: './full.component.html',
          styleUrls: ['./full.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
        }, {
          type: src_app_services_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["SidebarService"]
        }, {
          type: src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_7__["AdminServiceService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material/material.ts":
  /*!**************************************!*\
    !*** ./src/app/material/material.ts ***!
    \**************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"]], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"]],
        exports: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"]],
          exports: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"]],
          declarations: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modalPackages/advertisement.ts":
  /*!************************************************!*\
    !*** ./src/app/modalPackages/advertisement.ts ***!
    \************************************************/

  /*! exports provided: AdvertisementModel */

  /***/
  function srcAppModalPackagesAdvertisementTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdvertisementModel", function () {
      return AdvertisementModel;
    });

    var AdvertisementModel = function AdvertisementModel() {
      _classCallCheck(this, AdvertisementModel);
    };
    /***/

  },

  /***/
  "./src/app/modalPackages/cookies.ts":
  /*!******************************************!*\
    !*** ./src/app/modalPackages/cookies.ts ***!
    \******************************************/

  /*! exports provided: CookiesModel */

  /***/
  function srcAppModalPackagesCookiesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CookiesModel", function () {
      return CookiesModel;
    });

    var CookiesModel = function CookiesModel(user) {
      _classCallCheck(this, CookiesModel);

      this._id = user._id;
      this.email = user.email;
      this.token = user.token;
      this.profilePic = user.profilePic;
      this.contact = user.contact;
    };
    /***/

  },

  /***/
  "./src/app/modalPackages/login.ts":
  /*!****************************************!*\
    !*** ./src/app/modalPackages/login.ts ***!
    \****************************************/

  /*! exports provided: LoginModel */

  /***/
  function srcAppModalPackagesLoginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModel", function () {
      return LoginModel;
    });

    var LoginModel = function LoginModel(email, password) {
      _classCallCheck(this, LoginModel);

      this.email = email;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/modalPackages/sidenavBar.ts":
  /*!*********************************************!*\
    !*** ./src/app/modalPackages/sidenavBar.ts ***!
    \*********************************************/

  /*! exports provided: SideNavigationMain, SideNavigationUrlTitle */

  /***/
  function srcAppModalPackagesSidenavBarTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavigationMain", function () {
      return SideNavigationMain;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavigationUrlTitle", function () {
      return SideNavigationUrlTitle;
    });

    var SideNavigationMain = function SideNavigationMain(id, title, url, icon, status, type, urlTitleList, activeicon) {
      _classCallCheck(this, SideNavigationMain);

      this.id = id;
      this.title = title;
      this.url = url;
      this.icon = icon;
      this.status = status;
      this.type = type;
      this.urlTitleList = urlTitleList;
      this.activeicon = activeicon;
    };

    var SideNavigationUrlTitle = function SideNavigationUrlTitle(url, title) {
      _classCallCheck(this, SideNavigationUrlTitle);

      this.url = url;
      this.title = title;
    };
    /***/

  },

  /***/
  "./src/app/services/admin-service.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/admin-service.service.ts ***!
    \***************************************************/

  /*! exports provided: AdminServiceService */

  /***/
  function srcAppServicesAdminServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminServiceService", function () {
      return AdminServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utillpackage/my-cookies */
    "./src/app/utillpackage/my-cookies.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _utillpackage_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../utillpackage/constant */
    "./src/app/utillpackage/constant.ts");
    /* harmony import */


    var _modalPackages_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../modalPackages/cookies */
    "./src/app/modalPackages/cookies.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var AdminServiceService =
    /*#__PURE__*/
    function () {
      function AdminServiceService(http, cookiesServices) {
        _classCallCheck(this, AdminServiceService);

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

      _createClass(AdminServiceService, [{
        key: "setCurrentProfilePic",
        value: function setCurrentProfilePic(profilePicUrl) {
          this.profilePic.next(profilePicUrl);
        }
      }, {
        key: "getCurrentProfilePic",
        value: function getCurrentProfilePic() {
          return this.profilePic.asObservable();
        }
        /**
          * method to set token for header
          */

      }, {
        key: "setHeader",
        value: function setHeader() {
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

      }, {
        key: "adminLoginAPI",
        value: function adminLoginAPI(username, password) {
          var _this17 = this;

          var data = {};
          data.email = username;
          data.password = password;
          return this.http.post(this.loginUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            // login successful if there's a token in thedata response
            if (response.success && response.data.token) {
              _utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].saveLoginDataInCookies(_this17.cookiesServices, new _modalPackages_cookies__WEBPACK_IMPORTED_MODULE_6__["CookiesModel"](response.data));

              _this17.profilePic.next(_this17.cookiesServices.get('profilePic'));
            }

            return response;
          }));
        }
        /**
         * method to create new advertisement
         * @param adData AdvertisementModel
         */

      }, {
        key: "createAdvertisement",
        value: function createAdvertisement(adData) {
          //for setting token in headers
          this.setHeader();
          var httpOptions = {
            headers: this.header
          };
          return this.http.post(this.createAdvertisementUrl, adData, httpOptions);
        }
        /**
          * method to update advertisement
          * @param adData AdvertisementModel
        */

      }, {
        key: "updateAdvertisement",
        value: function updateAdvertisement(adData) {
          //for setting token in headers
          this.setHeader();
          var httpOptions = {
            headers: this.header
          };
          return this.http.patch(this.updateAdvertisementUrl, adData, httpOptions);
        }
        /**
          * mw=ethod to create new advertisement
          * @param advertiseId advertisement Id
         */

      }, {
        key: "deleteAdvertisement",
        value: function deleteAdvertisement(advertiseId) {
          //for setting token in headers
          this.setHeader();
          var httpOptions = {
            headers: this.header
          };
          var data = {};
          data.advertiseId = advertiseId;
          return this.http.patch(this.deleteAdvertisementUrl, data, httpOptions);
        }
        /**
          * mw=ethod to create new advertisement
          * @param searchString string to search in advertisements
        */

      }, {
        key: "getAdvertisement",
        value: function getAdvertisement(searchString, pageNo) {
          //for setting token in headers
          this.setHeader();
          var httpOptions = {
            headers: this.header
          };
          var searchurl = '';
          searchurl = this.getAdvertisementUrl + searchString + "&page=" + pageNo;
          return this.http.get(searchurl, httpOptions);
        }
        /**
          * method to update admin details
          * @param adminDetails admin details to update
         */

      }, {
        key: "updateDetails",
        value: function updateDetails(adminDetails) {
          var _this18 = this;

          //for setting token in headers
          this.setHeader();
          var httpOptions = {
            headers: this.header
          };
          return this.http.patch(this.updateAdminPwdUrl, adminDetails, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response.success && response.data.token) {
              _utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].saveLoginDataInCookies(_this18.cookiesServices, new _modalPackages_cookies__WEBPACK_IMPORTED_MODULE_6__["CookiesModel"](response.data));

              _this18.profilePic.next(_this18.cookiesServices.get('profilePic'));
            }

            return response;
          }));
        }
        /**
          * method for forgotpassword
          * @param email email id to send reset link
        */

      }, {
        key: "forgotPassword",
        value: function forgotPassword(email) {
          var data = {};
          data.email = email;
          return this.http.post(this.userForgotPasswordUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
          }));
        }
      }]);

      return AdminServiceService;
    }();

    AdminServiceService.ɵfac = function AdminServiceService_Factory(t) {
      return new (t || AdminServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]));
    };

    AdminServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminServiceService,
      factory: AdminServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/sidebar.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/sidebar.service.ts ***!
    \*********************************************/

  /*! exports provided: SidebarService */

  /***/
  function srcAppServicesSidebarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarService", function () {
      return SidebarService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modalPackages_sidenavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../modalPackages/sidenavBar */
    "./src/app/modalPackages/sidenavBar.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var SidebarService =
    /*#__PURE__*/
    function () {
      function SidebarService(ngzone, router, cookiesservice) {
        _classCallCheck(this, SidebarService);

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


      _createClass(SidebarService, [{
        key: "addSideOption",
        value: function addSideOption() {
          this.menus = [];
          var pageInnerUrls = [];
          this.menus.push(new _modalPackages_sidenavBar__WEBPACK_IMPORTED_MODULE_1__["SideNavigationMain"]("Advertisement", "All Advertisement", '/advertisement', "fa fa-puzzle-piece", "inactive", "header", pageInnerUrls, ""));
          this.menus.push(new _modalPackages_sidenavBar__WEBPACK_IMPORTED_MODULE_1__["SideNavigationMain"]("View Profile", "View Profile", '/show/profile', "fa fa-cog", "inactive", "header", [], ""));
        }
      }, {
        key: "getMenuList",
        value: function getMenuList() {
          this.addSideOption();
          return this.menus;
        }
      }]);

      return SidebarService;
    }();

    SidebarService.ɵfac = function SidebarService_Factory(t) {
      return new (t || SidebarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]));
    };

    SidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SidebarService,
      factory: SidebarService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utillpackage/constant.ts":
  /*!******************************************!*\
    !*** ./src/app/utillpackage/constant.ts ***!
    \******************************************/

  /*! exports provided: MyConstants */

  /***/
  function srcAppUtillpackageConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyConstants", function () {
      return MyConstants;
    });

    var MyConstants = function MyConstants() {
      _classCallCheck(this, MyConstants);
    }; // static BASEURL = "http://localhost:8081/api/";
    // static serverURL = "http://localhost:8081";


    MyConstants.BASEURL = "http://3.21.83.36:8081/api/";
    MyConstants.serverURL = "http://3.21.83.36:8081";
    /***/
  },

  /***/
  "./src/app/utillpackage/my-cookies.ts":
  /*!********************************************!*\
    !*** ./src/app/utillpackage/my-cookies.ts ***!
    \********************************************/

  /*! exports provided: MyCookies */

  /***/
  function srcAppUtillpackageMyCookiesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCookies", function () {
      return MyCookies;
    });

    var MyCookies =
    /*#__PURE__*/
    function () {
      function MyCookies() {
        _classCallCheck(this, MyCookies);
      }

      _createClass(MyCookies, null, [{
        key: "saveLoginDataInCookies",
        value: function saveLoginDataInCookies(cookieService, cookiesModel) {
          cookieService.set('_id', cookiesModel._id, this.getExpiryTime(), '');
          cookieService.set('email', cookiesModel.email, this.getExpiryTime(), '');
          cookieService.set('token', cookiesModel.token, this.getExpiryTime(), '');
          cookieService.set('profilePic', cookiesModel.profilePic, this.getExpiryTime(), '');
          cookieService.set('contact', cookiesModel.contact, this.getExpiryTime(), '');
        }
      }, {
        key: "checkLoginStatus",
        value: function checkLoginStatus(cookieService) {
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
              } else {
                return false;
              }
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      }, {
        key: "getId",
        value: function getId(cookieService) {
          return cookieService.get('_id');
        }
      }, {
        key: "getEmaild",
        value: function getEmaild(cookieService) {
          return cookieService.get('email');
        }
      }, {
        key: "getToken",
        value: function getToken(cookieService) {
          return cookieService.get('token');
        }
      }, {
        key: "getExpiryTime",
        value: function getExpiryTime() {
          var date = new Date();
          date.setDate(date.getDate() + 1);
          return date;
        }
      }, {
        key: "deletecookies",
        value: function deletecookies(cookieService) {
          cookieService.deleteAll();
        }
      }]);

      return MyCookies;
    }();
    /***/

  },

  /***/
  "./src/app/utillpackage/my-routing-methods.ts":
  /*!****************************************************!*\
    !*** ./src/app/utillpackage/my-routing-methods.ts ***!
    \****************************************************/

  /*! exports provided: MyRoutingMethods */

  /***/
  function srcAppUtillpackageMyRoutingMethodsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyRoutingMethods", function () {
      return MyRoutingMethods;
    });

    var MyRoutingMethods =
    /*#__PURE__*/
    function () {
      function MyRoutingMethods() {
        _classCallCheck(this, MyRoutingMethods);
      }

      _createClass(MyRoutingMethods, null, [{
        key: "gotoLogin",
        value: function gotoLogin(router) {
          router.navigate(['home']);
        }
      }, {
        key: "gotoAds",
        value: function gotoAds(router) {
          router.navigate(['advertisement']);
        }
      }]);

      return MyRoutingMethods;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! G:\Document\Avinash Kumar\Angular Project\Ofice Work\Latest Code\GetItHomeNow\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map