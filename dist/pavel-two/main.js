(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _dcim_dcim_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dcim/dcim.component */ "./src/app/dcim/dcim.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");








var routes = [
    // { path: '', component: HomeComponent, data: { depth: '1'} },
    { path: '', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"], data: { depth: '2' } },
    { path: 'portfolio/:id', component: _project_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"], data: { depth: '3' } },
    { path: 'portfolio/3/dcimcapstone', component: _dcim_dcim_component__WEBPACK_IMPORTED_MODULE_5__["DcimComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], data: { depth: '4' } },
    { path: 'contact/blog/:id', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"], data: { depth: '5' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n@import url(\"//cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css\");\n@import url(\"https://use.fontawesome.com/releases/v5.0.9/css/all.css\");\n@import url(\"https://fonts.googleapis.com/css?family=Caveat\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n#backgound\n{\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top:0px;\n  z-index: -1;\n  /* background-color: rgba(0, 42, 64, 0.9); */\n  /* background-color: #002A40; */\n  background-color: #002940;\n}\n#container\n{\n  width: 100%;\n  margin: 0 auto;\n  max-width: 960px;\n  min-width: 275px;\n  /*line below controls the background color if greater than 1080px, center it*/\n  margin: 0px auto;\n  overflow-x: hidden;\n  z-index: 1;\n}\n.header-background\n{\n  width: 100%;\n  display: block;\n  position: absolute;\n  /* added extra 8px because the margin pushes it down 8px */\n  height: 120px;\n  background-color: #004266;\n  left: 0px;\n  z-index: 0;\n  margin-top: -8px;\n}\n#header\n{\n  width: 100%;\n  display: block;\n  position: relative;\n  height: 110px;\n  font-family: sans-serif;\n  margin-left: 0px;\n  z-index: 1;\n}\n#name\n{\n  display: inline-block;\n  position: absolute;\n  margin-top: 30px;\n  left: 15px;\n  color: white;\n  z-index: 0;\n}\n#header > p\n{\n  display: block;\n  position: absolute;\n  text-transform: uppercase;\n  font-family: sans-serif;\n  margin-top: 65px;\n  left: 17px;\n  z-index: 0;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 15px;\n}\n#quickContact\n{\n  display: inline-block;\n  position: absolute;\n  list-style: none;\n  font-size: 25px;\n  top: 5px;\n  right: 15px;\n  z-index: 2;\n}\n#quickContact > li\n{\n  width: 30px;\n  height: 30px;\n  margin-bottom: 5px;\n  background-color: white;\n  text-align: center;\n  border-radius: 5px;\n  transition: background-color 0.2s;\n}\n#quickContact > li:hover\n{\n  background-color: #007FBF;\n  transition: background-color 0.3s;\n}\n#quickContact > li > a:hover\n{\n  color: white;\n  transition: color 0.3s;\n}\n#quickContact > li > a\n{\n  -webkit-text-decoration: white;\n          text-decoration: white;\n  color: black;\n  padding: 4px 4px;\n  vertical-align: top;\n}\n#quickContact > li:nth-of-type(2) > a\n{\n  font-size: 23px;\n}\n#main-menu > input,\n#main-menu > label\n{\n  display: none;\n}\n#main-menu\n{\n  z-index: 1;\n}\n#pages\n{\n  position: relative;\n  /* background-color: blue; */\n  font-family: sans-serif;\n  margin-right: 85px;\n  float: right;\n  margin-top: -26px;\n  z-index: 2;\n}\n#pages > a\n{\n  display: inline-block;\n  margin-right: 0px;\n  padding: 0 13px;\n  padding-left: 10px;\n  padding-bottom: 5px;\n  border-bottom: 3px solid transparent;\n  font-size: 15px;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  transition: border-bottom 0.5s;\n}\n#pages > a > i\n{\n  padding-right: 3px;\n  text-align: center;\n  font-size: 17px;\n}\n#pages > a:nth-of-type(3)\n{\n  margin-right: 0px;\n}\n#pages > a:hover\n{\n  text-decoration: none;\n  cursor: pointer;\n  color: #00A6FF;\n  border-bottom: 3px solid #00A6FF;\n  transition: 0.4s;\n}\n#pages > a.active\n{\n  text-decoration: none;\n  color: #00A6FF;\n  border-bottom: 3px solid #00A6FF;\n}\n#banners\n{\n  width: 100%;\n  position: relative;\n  left: 0px;\n  z-index: 0;\n  margin-top: -3px;\n  max-height: 550px;\n  overflow: hidden;\n  display: flex;\n  align-items: flex-end;\n}\n#banners > img\n{\n  width: 100%;\n  display: block;\n}\n#pageTitle\n{\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n  bottom: 40px;\n  padding-right: 20px;\n  padding-top: 20px;\n}\n#pageTitle > h3\n{\n  position: relative;\n  max-width: 960px;\n  margin: auto;\n  color: white;\n  text-align: right;\n}\n#backgroundTrans\n{\n  max-width: 960px;\n  margin: auto;\n  padding: 5px;\n  position: relative;\n  display: block;\n  background-image: linear-gradient(#002940 40%, #004266);\n}\n#container2\n{\n  position: relative;\n  display: block;\n  width: 100%;\n  margin: 0 auto;\n  /* max-width: 960px; */\n  /* min-width: 275px; */\n  z-index: 1;\n  padding: 0 15px;\n\n  overflow: visible;\n}\n#footer\n{\n  position: relative;\n  /* bottom: 4px; */\n  width: 100%;\n  color: white;\n  z-index: 1;\n}\n#quickLinks\n{\n  width: 100%;\n  /* height: 40px; */\n  font-family: sans-serif;\n  text-align: center;\n  /* background-color:  rgb(72,91,109); */\n}\n#footer > h3\n{\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-family: sans-serif;\n  position: relative;\n  /* left:35%; */\n}\n#quickLinks > li\n{\n  width: 33%;\n  color: white;\n  list-style-type: none;\n  display: inline-block;\n  text-align: center;\n}\n#quickLinks > li > a\n{\n  width: 100%;\n  color: white;\n  text-decoration:none;\n  /* text-align: center; */\n  padding-left: 0px;\n  transition: color 0.3s;\n}\n#quickLinks > li > a:hover\n{\n  cursor: pointer;\n  color: #0085CC;\n  transition: color 0.4s;\n}\n#signature\n{\n  /* background-color: rgb(72,91,109); */\n  text-align: right;\n  padding-right: 5px;\n  color: white;\n  font-family: sans-serif;\n  font-size: 13px;\n}\n#footer-background\n{\n  display: block;\n  position: absolute;\n  height: 120px;\n  background-color: rgba(0,0,0,0.2);\n  width: 100%;\n  left: 0px;\n  z-index: -1;\n}\n@media all and (max-width:999px)\n{\n  #container2\n  {\n    position: relative;\n    display: block;\n    width: 100%;\n    margin: 0 auto;\n    /* max-width: 960px; */\n    /* min-width: 275px; */\n    z-index: 1;\n    padding: 0 0px;\n    overflow: visible;\n  }\n}\n/* Mobile Switch! */\n@media all and (max-width:650px)\n{\n  #container2\n  {\n    position: relative;\n    display: block;\n    width: 100%;\n    margin: 0 auto;\n    /* max-width: 960px; */\n    /* min-width: 275px; */\n    z-index: 1;\n    padding: 0 0px;\n    overflow: visible;\n  }\n  #name,\n  #header p\n  {\n    display: inline-block;\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    margin-top: 30px;\n    left: 0px;\n  }\n  #name\n  {\n    font-size: 25px;\n  }\n  #header > p\n  {\n    margin-top: 65px;\n    font-size: 14px;\n  }\n  #quickContact\n  {\n    right: 10px;\n    z-index: 2;\n  }\n  #main-menu > input\n  {\n    display: none;\n  }\n  #main-menu > label\n  {\n    display: block;\n    position: absolute;\n    top: 0px;\n    margin-top: 32px;\n    font-size: 30px;\n    color: white;\n    padding: 8px;\n    border: 1px solid white;\n    border-radius: 5px;\n    z-index: 1;\n    transition: 0.4s;\n  }\n  #main-menu label.active\n  {\n    border-color: #00A6FF;\n    color: #00A6FF;\n    cursor: pointer;\n    background-color: white;\n  }\n  #pages\n  {\n    position: absolute;\n    background-color: black;\n    margin-right: 0px;\n    float: none;\n    margin-top: -3px;\n    z-index: 2;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    transition: -webkit-transform 0.33s;\n    transition: transform 0.33s;\n    transition: transform 0.33s, -webkit-transform 0.33s;\n  }\n  #pages > a\n  {\n    display: block;\n    margin-right: 0px;\n    padding: 10px 13px;\n    padding-left: 10px;\n    border-bottom: 3px solid transparent;\n    font-size: 15px;\n    text-align: left;\n    text-decoration: none;\n    transition: border-bottom 0.5s;\n  }\n  #pages > a:nth-of-type(3)\n  {\n    padding-left: 13px;\n    border-bottom-right-radius: 3px;\n  }\n  #pages > a > i\n  {\n    padding-right: 3px;\n    text-align: center;\n    font-size: 17px;\n  }\n  #pages.active\n  {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    transition: -webkit-transform 0.4s;\n    transition: transform 0.4s;\n    transition: transform 0.4s, -webkit-transform 0.4s;\n  }\n  #pageTitle\n  {\n    bottom: 30px;\n    padding-right: 20px;\n    padding-top: 20px;\n  }\n  #pageTitle > h3\n  {\n    font-size: 25px;\n  }\n\n  #footer\n  {\n    position: relative;\n    /* bottom: 4px; */\n    width: 100%;\n    color: white;\n    z-index: 1;\n  }\n  #quickLinks\n  {\n    width: 100%;\n    /* height: 40px; */\n    font-family: sans-serif;\n    text-align: center;\n    /* background-color:  rgb(72,91,109); */\n  }\n  #footer > h3\n  {\n    text-align: center;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    font-family: sans-serif;\n    position: relative;\n    font-size: 20px;\n    /* left:35%; */\n  }\n\n  #quickLinks > li\n  {\n    width: 50%;\n    color: white;\n    list-style-type: none;\n    display: inline-block;\n    text-align: center;\n  }\n  #signature\n  {\n    /* background-color: rgb(72,91,109); */\n    text-align: right;\n    padding-right: 5px;\n    color: white;\n    font-family: sans-serif;\n    font-size: 10px;\n  }\n\n  #footer-background\n  {\n    display: block;\n    position: absolute;\n    height: 135px;\n    background-color: rgba(0,0,0,0.2);\n    width: 100%;\n    left: 0px;\n    z-index: -1;\n  }\n}\n@media all and (max-width:500px)\n{\n  #pageTitle\n  {\n    bottom: 20px;\n    padding-right: 20px;\n    padding-top: 20px;\n  }\n}\n@media all and (max-width:380px)\n{\n  #name,\n  #header p\n  {\n    display: inline-block;\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    margin-top: 30px;\n    left: 0px;\n  }\n  #name\n  {\n    font-size: 23px;\n  }\n  #header > p\n  {\n    margin-top: 60px;\n    font-size: 13px;\n  }\n  #pageTitle > h3\n  {\n    font-size: 23px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQXNFO0FBQ3RFLDJFQUEyRTtBQUMzRSxzRUFBc0U7QUFDdEUsNkRBQTZEO0FBQzdEO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1AsV0FBVztFQUNYLDRDQUE0QztFQUM1QywrQkFBK0I7RUFDL0IseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDZFQUE2RTtFQUM3RSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBOztFQUVFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDBEQUEwRDtFQUMxRCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBQ0E7O0VBRUUscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTs7RUFFRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsUUFBUTtFQUNSLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtC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RSxlQUFlO0VBQ2pCO0VBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7RUFDQTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiKTtcbkBpbXBvcnQgdXJsKFwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm90b3JhbWEvNC42LjQvZm90b3JhbWEuY3NzXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMC45L2Nzcy9hbGwuY3NzXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q2F2ZWF0XCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiNiYWNrZ291bmRcbntcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6MHB4O1xuICB6LWluZGV4OiAtMTtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA0MiwgNjQsIDAuOSk7ICovXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDJBNDA7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI5NDA7XG59XG4jY29udGFpbmVyXG57XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWluLXdpZHRoOiAyNzVweDtcbiAgLypsaW5lIGJlbG93IGNvbnRyb2xzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGlmIGdyZWF0ZXIgdGhhbiAxMDgwcHgsIGNlbnRlciBpdCovXG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbn1cbi5oZWFkZXItYmFja2dyb3VuZFxue1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogYWRkZWQgZXh0cmEgOHB4IGJlY2F1c2UgdGhlIG1hcmdpbiBwdXNoZXMgaXQgZG93biA4cHggKi9cbiAgaGVpZ2h0OiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDI2NjtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAwO1xuICBtYXJnaW4tdG9wOiAtOHB4O1xufVxuI2hlYWRlclxue1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4jbmFtZVxue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbGVmdDogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAwO1xufVxuI2hlYWRlciA+IHBcbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDY1cHg7XG4gIGxlZnQ6IDE3cHg7XG4gIHotaW5kZXg6IDA7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbiNxdWlja0NvbnRhY3RcbntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICB6LWluZGV4OiAyO1xufVxuI3F1aWNrQ29udGFjdCA+IGxpXG57XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG4jcXVpY2tDb250YWN0ID4gbGk6aG92ZXJcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0ZCRjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxuI3F1aWNrQ29udGFjdCA+IGxpID4gYTpob3Zlclxue1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG59XG4jcXVpY2tDb250YWN0ID4gbGkgPiBhXG57XG4gIHRleHQtZGVjb3JhdGlvbjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogNHB4IDRweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbiNxdWlja0NvbnRhY3QgPiBsaTpudGgtb2YtdHlwZSgyKSA+IGFcbntcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuI21haW4tbWVudSA+IGlucHV0LFxuI21haW4tbWVudSA+IGxhYmVsXG57XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jbWFpbi1tZW51XG57XG4gIHotaW5kZXg6IDE7XG59XG4jcGFnZXNcbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXJpZ2h0OiA4NXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC0yNnB4O1xuICB6LWluZGV4OiAyO1xufVxuI3BhZ2VzID4gYVxue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBwYWRkaW5nOiAwIDEzcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC41cztcbn1cbiNwYWdlcyA+IGEgPiBpXG57XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4jcGFnZXMgPiBhOm50aC1vZi10eXBlKDMpXG57XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuI3BhZ2VzID4gYTpob3Zlclxue1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMwMEE2RkY7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDBBNkZGO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuI3BhZ2VzID4gYS5hY3RpdmVcbntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwQTZGRjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMEE2RkY7XG59XG5cbiNiYW5uZXJzXG57XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbiAgbWF4LWhlaWdodDogNTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbiNiYW5uZXJzID4gaW1nXG57XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNwYWdlVGl0bGVcbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbiNwYWdlVGl0bGUgPiBoM1xue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI2JhY2tncm91bmRUcmFuc1xue1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMDI5NDAgNDAlLCAjMDA0MjY2KTtcbn1cbiNjb250YWluZXIyXG57XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLyogbWF4LXdpZHRoOiA5NjBweDsgKi9cbiAgLyogbWluLXdpZHRoOiAyNzVweDsgKi9cbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMCAxNXB4O1xuXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG5cbiNmb290ZXJcbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBib3R0b206IDRweDsgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTtcbn1cbiNxdWlja0xpbmtzXG57XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBoZWlnaHQ6IDQwcHg7ICovXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICByZ2IoNzIsOTEsMTA5KTsgKi9cbn1cbiNmb290ZXIgPiBoM1xue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogbGVmdDozNSU7ICovXG59XG5cbiNxdWlja0xpbmtzID4gbGlcbntcbiAgd2lkdGg6IDMzJTtcbiAgY29sb3I6IHdoaXRlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3F1aWNrTGlua3MgPiBsaSA+IGFcbntcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG59XG4jcXVpY2tMaW5rcyA+IGxpID4gYTpob3Zlclxue1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMDA4NUNDO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xufVxuI3NpZ25hdHVyZVxue1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzIsOTEsMTA5KTsgKi9cbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4jZm9vdGVyLWJhY2tncm91bmRcbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAtMTtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjk5OXB4KVxue1xuICAjY29udGFpbmVyMlxuICB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC8qIG1heC13aWR0aDogOTYwcHg7ICovXG4gICAgLyogbWluLXdpZHRoOiAyNzVweDsgKi9cbiAgICB6LWluZGV4OiAxO1xuICAgIHBhZGRpbmc6IDAgMHB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuLyogTW9iaWxlIFN3aXRjaCEgKi9cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NjUwcHgpXG57XG4gICNjb250YWluZXIyXG4gIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLyogbWF4LXdpZHRoOiA5NjBweDsgKi9cbiAgICAvKiBtaW4td2lkdGg6IDI3NXB4OyAqL1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZzogMCAwcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgI25hbWUsXG4gICNoZWFkZXIgcFxuICB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbiAgI25hbWVcbiAge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuICAjaGVhZGVyID4gcFxuICB7XG4gICAgbWFyZ2luLXRvcDogNjVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgI3F1aWNrQ29udGFjdFxuICB7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICAjbWFpbi1tZW51ID4gaW5wdXRcbiAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI21haW4tbWVudSA+IGxhYmVsXG4gIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICB9XG4gICNtYWluLW1lbnUgbGFiZWwuYWN0aXZlXG4gIHtcbiAgICBib3JkZXItY29sb3I6ICMwMEE2RkY7XG4gICAgY29sb3I6ICMwMEE2RkY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gICNwYWdlc1xuICB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zM3M7XG4gIH1cbiAgI3BhZ2VzID4gYVxuICB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZzogMTBweCAxM3B4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC41cztcbiAgfVxuICAjcGFnZXMgPiBhOm50aC1vZi10eXBlKDMpXG4gIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgfVxuICAjcGFnZXMgPiBhID4gaVxuICB7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cbiAgI3BhZ2VzLmFjdGl2ZVxuICB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcbiAgfVxuICAjcGFnZVRpdGxlXG4gIHtcbiAgICBib3R0b206IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuICAjcGFnZVRpdGxlID4gaDNcbiAge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gICNmb290ZXJcbiAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBib3R0b206IDRweDsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAjcXVpY2tMaW5rc1xuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogaGVpZ2h0OiA0MHB4OyAqL1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDcyLDkxLDEwOSk7ICovXG4gIH1cbiAgI2Zvb3RlciA+IGgzXG4gIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAvKiBsZWZ0OjM1JTsgKi9cbiAgfVxuXG4gICNxdWlja0xpbmtzID4gbGlcbiAge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICNzaWduYXR1cmVcbiAge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig3Miw5MSwxMDkpOyAqL1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgI2Zvb3Rlci1iYWNrZ3JvdW5kXG4gIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMHB4O1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjUwMHB4KVxue1xuICAjcGFnZVRpdGxlXG4gIHtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6MzgwcHgpXG57XG4gICNuYW1lLFxuICAjaGVhZGVyIHBcbiAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbGVmdDogMHB4O1xuICB9XG4gICNuYW1lXG4gIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gIH1cbiAgI2hlYWRlciA+IHBcbiAge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gICNwYWdlVGl0bGUgPiBoM1xuICB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"backgound\"></div>\n<div id=\"container\">\n  <!-- <div class=\"page-background\"></div> -->\n  <div class=\"header-background\"></div>\n  <div id=\"header\">\n    <h2 id=\"name\">Pavel A. Aparcana</h2>\n    <p>Software Engineer</p>\n    <!-- quick contact are the linked in, resume, contact me page. -->\n    <ul id=\"quickContact\">\n      <li>\n        <a href=\"https://www.linkedin.com/in/pavel-aparcana\" class=\"fab fa-linkedin\" target=\"_blank\" title=\"LinkedIn\" ></a>\n      </li>\n      <li>\n        <a href=\"assets/resume.pdf\" class=\"fas fa-file-alt\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Resume\"></a>\n      </li>\n      <li>\n        <a href=\"https://github.com/aparcanapavel\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"fab fa-github\" title=\"GitHub\"></a>\n      </li>\n    </ul>\n  </div>\n\n\n  <div id=\"main-menu\">\n    <input type=\"checkbox\" id=\"nav\" style=\"display: none;\">\n    <label for=\"nav\" class=\"material-icons\" (click)=\"toggleMenu()\">dehaze</label>\n\n     <div id=\"pages\">\n        <!-- <a id=\"pg1\" routerLink=\"/\"><i class=\"fas fa-home\"></i>Home</a> -->\n        <a id=\"pg2\" routerLink=\"/\"><i class=\"fas fa-laptop-code\"></i>Portfolio</a>\n        <a id=\"pg3\" routerLink=\"/contact\"(click)=\"contactClick()\"><i class=\"fas fa-address-book\"></i>Contact</a>\n    </div>\n  </div>\n</div>\n\n<!-- Banners fade in/out based on current page -->\n<div id=\"banners\" [ngSwitch]=\"banners\">\n  <div id=\"pageTitle\"><h3>{{ pageTitle }}</h3></div>\n  <img src=\"assets/pageImg/CroppedHike.jpg\" *ngSwitchCase=\"'homeBanner'\" [@bannerSwitch]>\n  <img src=\"assets/pageImg/CroppedSunset.jpg\" *ngSwitchCase=\"'portfolioBanner'\" [@bannerSwitch]>\n  <img src=\"assets/pageImg/CroppedSnowRoad.jpg\" *ngSwitchCase=\"'contactBanner'\" [@bannerSwitch]>\n</div>\n\n<div id=\"backgroundTrans\"></div>\n<div id=\"container2\">\n  <div [@routeAnimations]=\"prepareRoute(outlet)\" class=\"content\">\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n  </div>\n  <!-- <app-home></app-home> -->\n  <!-- <router-outlet></router-outlet> -->\n  <!-- <app-portfolio></app-portfolio> -->\n  <div id=\"footer-background\"></div>\n  <div id=\"footer\">\n    <h3>QUICK LINKS</h3>\n    <div id=\"quickLinks\">\n      <li>\n        <a routerLink=\"/\">Home</a>\n      </li>\n      <li>\n        <a routerLink=\"/\">Portfolio</a>\n      </li>\n      <li>\n        <a routerLink=\"/contact\">Contact</a>\n      </li>\n      <li>\n        <a href=\"https://github.com/aparcanapavel\" target=\"_blank\">GitHub</a>\n      </li>\n      <li>\n        <a href=\"https://www.linkedin.com/in/pavel-aparcana/\" target=\"_blank\">LinkedIn</a>\n      </li>\n      <li>\n        <a href=\"images/resume.pdf\" target=\"_blank\">Resume</a>\n      </li>\n    </div>\n    <div id=\"signature\">\n      <p>Developed by Pavel Aparcana</p>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageTitle = "";
        // swich for the banners. Must be 3x7(18in by 42in)
        this.banners = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.banners= "homeBanner";
        // this.pageTitle = "Home";
    };
    AppComponent.prototype.toggleMenu = function () {
        $("#main-menu label, #pages").toggleClass("active");
    };
    AppComponent.prototype.homeClick = function () {
        // console.log("home CLicked!");
        this.banners = "homeBanner";
        this.pageTitle = "Home";
        this.removeActive();
        $("#pg1").addClass("active");
    };
    AppComponent.prototype.portfolioClick = function () {
        // console.log("portfolio CLicked!");
        this.banners = "portfolioBanner";
        this.pageTitle = "Portfolio";
        this.removeActive();
        $("#pg2").addClass("active");
    };
    AppComponent.prototype.contactClick = function () {
        // console.log("contact CLicked!");
        this.banners = "contactBanner";
        this.pageTitle = "Contact";
        this.removeActive();
        $("#pg3").addClass("active");
    };
    AppComponent.prototype.setActive = function (target) {
        $("#" + target).addClass("active");
    };
    AppComponent.prototype.removeActive = function () {
        $("#main-menu label, #pages").removeClass("active");
        $("#pg1 ,#pg2 ,#pg3").removeClass("active");
    };
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet.activatedRouteData['depth'];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('bannerSwitch', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '0' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(350)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(100)
                    ]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('routeAnimations', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('1=>2, 1=>4, 2=>4, 3=>4', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0
                        })),
                        // animate the leave page away
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s cubic-bezier(.35,0,.25,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(-100%)' })),
                            ]),
                            // and now reveal the enter
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s cubic-bezier(.35,0,.25,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)' }))),
                        ]),
                    ]),
                    // fade transitions
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('2=>3, 4=>5', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '0' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0
                        })),
                        // animate the leave page away
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '0' })),
                            ]),
                            // and now reveal the enter
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '0' }))),
                        ]),
                    ]),
                    // going back
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('5=>2, 5=>1,4=>3, 4=>2, 4 =>1 ,3=>1, 2=>1', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(-100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0
                        })),
                        // animate the leave page away
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s cubic-bezier(.35,0,.25,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(100%)' })),
                            ]),
                            // and now reveal the enter
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s cubic-bezier(.35,0,.25,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)' }))),
                        ]),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('3=>2, 5=>4', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '0' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0
                        })),
                        // animate the leave page away
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '0' })),
                            ]),
                            // and now reveal the enter
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: '0' }))),
                        ]),
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_tweet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-tweet */ "./node_modules/ngx-tweet/fesm5/ngx-tweet.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _reverse_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reverse.pipe */ "./src/app/reverse.pipe.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _dcim_dcim_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dcim/dcim.component */ "./src/app/dcim/dcim.component.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _reverse_pipe__WEBPACK_IMPORTED_MODULE_10__["ReversePipe"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_12__["ProjectComponent"],
                _dcim_dcim_component__WEBPACK_IMPORTED_MODULE_13__["DcimComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_16__["BlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_tweet__WEBPACK_IMPORTED_MODULE_4__["NgxTweetModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#blogContainer\n{\n  border-left: 1px solid rgba(255,255,255,0.4);\n  border-right: 1px solid rgba(255,255,255,0.4);\n  padding: 0 20px;\n  background-color: #004266;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  max-width: 960px;\n  margin: 0 auto;\n}\n.blogImage\n{\n  width: 60%;\n  position: relative;\n  display: block;\n  margin: auto;\n}\n.blogImage img\n{\n  width: 100%;\n}\nh3,\n#blogContainer p\n{\n  position: relative;\n  width: 100%;\n  text-align: center;\n  color: white;\n}\nh3\n{\n  margin-top: 10px;\n}\n#blogContainer p\n{\n  color: rgba(255, 255, 255, 0.6);\n}\n#blogContainer .blogEssay p\n{\n  color: rgba(255, 255, 255, 0.8);\n  text-align: left;\n}\n#blogContainer .blogEssay p span\n{\n  font-size: 30px;\n  color: white;\n  margin-bottom: 0px;\n  font-weight: bold;\n}\n.paragraphImage\n{\n  width: 30%;\n  margin: auto;\n}\n.paragraphImage img\n{\n  width: 100%;\n}\n#blogContainer .blogEssay .imageCap\n{\n  text-align: center;\n  color: rgba(255, 255, 255, 0.4);font-size: 11px;\n}\n.sectionBreak\n{\n  width: 20%;\n  background-color: white;\n}\n.sectionTitle\n{\n  color: rgba(255, 255, 255, 1);\n  padding-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsNENBQTRDO0VBQzVDLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7QUFDQTs7O0VBR0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsK0JBQStCO0FBQ2pDO0FBQ0E7O0VBRUUsK0JBQStCO0VBQy9CLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsK0JBQStCLENBQUMsZUFBZTtBQUNqRDtBQUNBOztFQUVFLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7QUFDQTs7RUFFRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmxvZ0NvbnRhaW5lclxue1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQyNjY7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uYmxvZ0ltYWdlXG57XG4gIHdpZHRoOiA2MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5ibG9nSW1hZ2UgaW1nXG57XG4gIHdpZHRoOiAxMDAlO1xufVxuaDMsXG4jYmxvZ0NvbnRhaW5lciBwXG57XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuaDNcbntcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiNibG9nQ29udGFpbmVyIHBcbntcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbiNibG9nQ29udGFpbmVyIC5ibG9nRXNzYXkgcFxue1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuI2Jsb2dDb250YWluZXIgLmJsb2dFc3NheSBwIHNwYW5cbntcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucGFyYWdyYXBoSW1hZ2VcbntcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnBhcmFncmFwaEltYWdlIGltZ1xue1xuICB3aWR0aDogMTAwJTtcbn1cbiNibG9nQ29udGFpbmVyIC5ibG9nRXNzYXkgLmltYWdlQ2FwXG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtmb250LXNpemU6IDExcHg7XG59XG4uc2VjdGlvbkJyZWFrXG57XG4gIHdpZHRoOiAyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnNlY3Rpb25UaXRsZVxue1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"blogContainer\">\n  <div class=\"blogImage\">\n    <img src=\"{{ blog.blogImage }}\" alt=\"\">\n  </div>\n  <h3>{{ blog.blogTitle }}</h3>\n  <p>{{ blog.blogDate }}</p>\n\n  <div class=\"blogEssay\" *ngFor=\"let essay of blog.blogEssay\">\n    <hr class=\"sectionBreak\" *ngIf=\"essay.sectionBreak == 'true'\">\n    <div class=\"paragraphImage\" *ngIf=\"essay.paragraphImg != 'false'\">\n      <img src=\"{{ essay.paragraphImg }}\" alt=\"\">\n    </div>\n    <p class=\"imageCap\" *ngIf=\"essay.imageCaption != 'false'\">{{essay.imageCaption}}</p>\n    <h5 class=\"sectionTitle\" *ngIf=\"essay.sectionTitle != 'false'\"><i>{{essay.sectionTitle}}</i></h5>\n    <p><span *ngIf=\"essay.firstLetter != 'false'\">{{ essay.firstLetter }}</span>{{essay.blogParagraph}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");





var BlogComponent = /** @class */ (function () {
    function BlogComponent(route, _setHeaders, _contactDataService) {
        this.route = route;
        this._setHeaders = _setHeaders;
        this._contactDataService = _contactDataService;
        this.blog = [];
        this.sectionBreak = "";
        // sets the header to the portfolio background
        this._setHeaders.contactClick();
        // sets the title to projects
        this._setHeaders.pageTitle = "Blog";
    }
    BlogComponent.prototype.ngOnInit = function () {
        // takes a snapshot from the URL
        var id = +this.route.snapshot.paramMap.get('id');
        // console.log(id);
        this.getBlogById(id);
    };
    BlogComponent.prototype.getBlogById = function (id) {
        var _this = this;
        // grab the data from the JSON
        this._contactDataService.getContactData()
            .subscribe(function (data) {
            // sends the data and the Id to be computed on SetOptionsData
            _this.SetOptionsData(data, id);
        });
    };
    BlogComponent.prototype.SetOptionsData = function (data, id) {
        var article = data['blogs'];
        this.blog = article[id - 1];
        // var section = this.blog.sectionBreak;
        // console.log(section);
        // this.sectionBreak = section;
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], src_app_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
        this._homeURL = 'assets/data/home.json';
        this._portfolioURL = 'assets/data/portfolio.json';
        this._contactURL = "assets/data/contact.json";
    }
    ConfigService.prototype.getHomeData = function () {
        return this.http.get(this._homeURL);
    };
    ConfigService.prototype.getPortfolioData = function () {
        return this.http.get(this._portfolioURL);
    };
    ConfigService.prototype.getContactData = function () {
        return this.http.get(this._contactURL);
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contactContainer\n{\n  border-left: 1px solid rgba(255,255,255,0.4);\n  border-right: 1px solid rgba(255,255,255,0.4);\n  padding: 0 20px;\n  background-color: #004266;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  max-width: 960px;\n  margin: 0 auto;\n}\n#myPicture\n{\n  width: 20%;\n  border-radius: 150px;\n  overflow: hidden;\n  border: 3px solid white;\n  margin: auto;\n}\n#myPicture img\n{\n  width: 100%;\n}\n#contactLinks\n{\n  display: block;\n  position: relative;\n  width: 100%;\n  text-align: center;\n}\n#contactLinks span\n{\n  width: 50%;\n  display: inline-block;\n  color: white;\n}\n.horizontalLine\n{\n  width: 90%;\n  background-color: white;\n}\n#blog\n{\n  display: block;\n  position: relative;\n  width: 100%;\n  padding: 10px;\n}\n#blog h3\n{\n  color: white;\n}\n.blogPost\n{\n  width: 33%;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  padding: 5px 10px;\n  vertical-align: top;\n}\n.blogImg\n{\n  z-index: 1;\n  /* height: 200px; */\n  border: 1px solid black;\n  position: relative;\n  overflow: hidden;\n  transition: border 0.4s;\n}\n.blogImg:hover\n{\n  border: 1px solid white;\n}\n.blogImg img\n{\n  width: 100%;\n  overflow: hidden;\n  z-index: 0;\n  display: block;\n}\n.blogImg p\n{\n  z-index: 0;\n  background: linear-gradient( transparent 1%, black);\n  position: absolute;\n  width: 100%;\n  margin: 0px;\n  margin-top: -23px;\n  color:white;\n  text-align: right;\n  padding-right: 3px;\n}\n.blogPost a h5\n{\n  color: white;\n  text-decoration: none;\n  text-align: center;\n}\n.about-me-contact{\n  position: relative;\n  display: block;\n  color: white;\n  padding: 10px 50px;\n}\n.about-me-contact h4 {\n  text-align: center;\n  border-bottom: 1px solid whitesmoke;\n  padding: 10px;\n  width: 40%;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n.about-me-contact p {\n  padding: 0px 40px;\n}\n/* Mobile Switch! */\n@media all and (max-width:650px)\n{\n  #myPicture\n  {\n    min-width: 115px;\n  }\n}\n@media all and (max-width:550px)\n{\n  #contactLinks\n  {\n    padding-top: 10px;\n  }\n  #contactLinks span\n  {\n    width: 100%;\n    display: block;\n    color: white;\n  }\n  .blogPost\n  {\n    width: 50%;\n    display: inline-block;\n    padding: 5px 10px;\n  }\n\n  .about-me-contact{\n    position: relative;\n    display: block;\n    color: white;\n    padding: 10px 0px;\n  }\n\n  .about-me-contact p {\n    padding: 0px 10px;\n  }\n}\n@media all and (max-width: 380px)\n{\n  h3\n  {\n    font-size: 23px;\n  }\n  h5\n  {\n    font-size: 18px;\n  }\n  .blogPost\n  {\n    width: 90%;\n    display: block;\n    margin: auto;\n    padding: 5px 10px;\n  }\n  .about-me-contact h4 {\n    text-align: center;\n    border-bottom: 1px solid whitesmoke;\n    padding: 10px;\n    width: 60%;\n    margin: 0 auto;\n    margin-bottom: 20px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsNENBQTRDO0VBQzVDLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsV0FBVztBQUNiO0FBQ0E7O0VBRUUsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCO0FBQ0E7O0VBRUUsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QjtBQUNBOztFQUVFLHVCQUF1QjtBQUN6QjtBQUNBOztFQUVFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsbURBQW1EO0VBQ25ELGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLFVBQVU7RUFDVixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFRQSxtQkFBbUI7QUFDbkI7O0VBRUU7O0lBRUUsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFNQTs7RUFFRTs7SUFFRSxpQkFBaUI7RUFDbkI7RUFDQTs7SUFFRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7RUFDZDtFQUNBOztJQUVFLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFRQTs7RUFFRTs7SUFFRSxlQUFlO0VBQ2pCO0VBQ0E7O0lBRUUsZUFBZTtFQUNqQjtFQUNBOztJQUVFLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhY3RDb250YWluZXJcbntcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0MjY2O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuI215UGljdHVyZVxue1xuICB3aWR0aDogMjAlO1xuICBib3JkZXItcmFkaXVzOiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIG1hcmdpbjogYXV0bztcbn1cbiNteVBpY3R1cmUgaW1nXG57XG4gIHdpZHRoOiAxMDAlO1xufVxuI2NvbnRhY3RMaW5rc1xue1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2NvbnRhY3RMaW5rcyBzcGFuXG57XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmhvcml6b250YWxMaW5lXG57XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuI2Jsb2dcbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4jYmxvZyBoM1xue1xuICBjb2xvcjogd2hpdGU7XG59XG4uYmxvZ1Bvc3RcbntcbiAgd2lkdGg6IDMzJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLmJsb2dJbWdcbntcbiAgei1pbmRleDogMTtcbiAgLyogaGVpZ2h0OiAyMDBweDsgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuNHM7XG59XG4uYmxvZ0ltZzpob3Zlclxue1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cbi5ibG9nSW1nIGltZ1xue1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYmxvZ0ltZyBwXG57XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggdHJhbnNwYXJlbnQgMSUsIGJsYWNrKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IC0yM3B4O1xuICBjb2xvcjp3aGl0ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5ibG9nUG9zdCBhIGg1XG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hYm91dC1tZS1jb250YWN0e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggNTBweDtcbn1cblxuLmFib3V0LW1lLWNvbnRhY3QgaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmFib3V0LW1lLWNvbnRhY3QgcCB7XG4gIHBhZGRpbmc6IDBweCA0MHB4O1xufVxuXG5cblxuXG5cblxuXG4vKiBNb2JpbGUgU3dpdGNoISAqL1xuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo2NTBweClcbntcbiAgI215UGljdHVyZVxuICB7XG4gICAgbWluLXdpZHRoOiAxMTVweDtcbiAgfVxufVxuXG5cblxuXG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NTUwcHgpXG57XG4gICNjb250YWN0TGlua3NcbiAge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG4gICNjb250YWN0TGlua3Mgc3BhblxuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5ibG9nUG9zdFxuICB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gIH1cblxuICAuYWJvdXQtbWUtY29udGFjdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICB9XG5cbiAgLmFib3V0LW1lLWNvbnRhY3QgcCB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMzgwcHgpXG57XG4gIGgzXG4gIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gIH1cbiAgaDVcbiAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuYmxvZ1Bvc3RcbiAge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICB9XG4gIC5hYm91dC1tZS1jb250YWN0IGg0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contactContainer\">\n  <div id=\"myPicture\">\n    <img src=\"{{ contactData.contactImg }}\" alt=\"\">\n  </div>\n  <div id=\"contactLinks\">\n    <span>Email: <a href=\"mailto:{{ contactData.email }}\">{{ contactData.email }}</a></span>\n    <span>Phone: <a href=\"tel:{{ contactData.phoneNumber }}\">(862)902-3780</a></span>\n    <span>GitHub: <a href=\"{{contactData.github}}\" target=\"_blank\">aparcanapavel</a></span>\n    <span>LinkedIn <a href=\"{{contactData.linkedin}}\" target=\"_blank\">pavel-aparcana</a></span>\n    <!-- <span>Twitter: <a href=\"{{ contactData.twitter }}\" target=\"_blank\">PavelAparcana</a></span>\n    <span>YouTube: <a href=\"{{ contactData.YouTube }}\" target=\"_blank\">paction</a></span> -->\n  </div>\n\n  <div class=\"about-me-contact\">\n    <h4>About me</h4>\n    <p>\n      My passion for software development first began when I took an intro to Web Design class at Rutgers University. To be\n      fair, I have to thank my professor for he had an even bigger passion for Web Design. He encouraged us to mess around\n      with the html attributes and stylesheets, in which I was able to see how changing those properties changed the behavior\n      of the overall design, and I became hooked. This led me to decided to continue learning other technologies.\n    </p>\n    <p>  \n      Today, I have developed full stack projects with recent technologies like JavaScript, Ruby on Rails, React, HTML, CSS,\n      PostreSQL, and MongoDB. Learning these technologies was not easy, but that's what allowed me to want to continue. Every\n      bug I came across, I needed to find out why or else I would not be able to sleep that night.\n    </p>\n    <p>\n      Finally, I am also a human and I also love handling DSLR cameras. Everything from taking high quality images and\n      producing videos, to editing the media I create, I enjoy it all. Patience is something I am thankful to have, and the\n      best part is that it applies to both my career and my hobby.\n    </p>\n  </div>\n\n  <hr class=\"horizontalLine\">\n  <div id=\"blog\">\n    <h3>Blog</h3>\n    <div class=\"blogPost\" *ngFor=\"let blog of blogs|reverse\">\n      <div class=\"blogImg\">\n        <a routerLink=\"/contact/blog/{{blog.blogId}}\"><img src=\"{{blog.blogImage}}\" alt=\"\"></a>\n        <p>{{blog.blogDate}}</p>\n      </div>\n      <a routerLink=\"/contact/blog/{{blog.blogId}}\"><h5>{{ blog.blogTitle }}</h5></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");




var ContactComponent = /** @class */ (function () {
    function ContactComponent(_setHeaders, _contactDataService) {
        this._setHeaders = _setHeaders;
        this._contactDataService = _contactDataService;
        this.contactData = [];
        this.blogs = [];
        this._setHeaders.contactClick();
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contactDataService.getContactData()
            .subscribe(function (data) {
            _this.SetPortTitles(data);
        });
    };
    ContactComponent.prototype.SetPortTitles = function (data) {
        // set portfolio data to portTitles
        this.contactData = data.contact[0];
        // console.log(this.cinemaData);
        this.blogs = data['blogs'];
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], src_app_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/dcim/dcim.component.css":
/*!*****************************************!*\
  !*** ./src/app/dcim/dcim.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dcimContainer\n{\n  border-left: 1px solid rgba(255,255,255,0.4);\n  border-right: 1px solid rgba(255,255,255,0.4);\n  padding: 0 20px;\n  background-color: #004266;\n  padding-top: 20px;\n  padding-bottom: 100px;\n  max-width: 960px;\n  margin: 0 auto;\n}\n#dcim\n{\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 690px;\n  padding: 0px 10px;\n  color:white;\n  /* background-color: gray; */\n}\n#dcimIntro\n{\n  position: relative;\n  display: block;\n  width: 100%;\n}\n#start,\n#graph\n{\n  width: 50%;\n  display: inline-block;\n  vertical-align: middle;\n}\n#start > p\n{\n  padding: 0px 50px;\n}\n#graph > a > img\n{\n  width: 100%;\n}\n#subMenu\n{\n  width: 100%;\n  margin: auto;\n  position: absolute;\n  display: block;\n  text-align: center;\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n  bottom: 50px;\n  /* translate to -375%% after click */\n  -webkit-transform: translateY(0%);\n          transform: translateY(0%);\n  /* transition: transform 0.4s; */\n  /* transition-timing-function:  */\n  transition-timing-function: cubic-bezier(.5,.7,.8,1);\n  z-index: 10;\n}\n#subMenu > h1\n{\n  display: block;\n}\n#subMenu > .dot-box\n{\n  width: 100px;\n  height: 100px;\n  background-color: rgb(72,91,109);\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 50px;\n  border:1px solid black;\n  transition: background-color 0.22s;\n  overflow: hidden;\n  z-index: 0px;\n  padding: 10px;\n  color: white;\n  font-size: 13px;\n}\n#subMenu > .dot-box:nth-of-type(1)\n{\n  padding: 35px;\n  margin-right: 3px;\n}\n#subMenu > .dot-box:nth-of-type(2)\n{\n  padding-top: 25px;\n}\n#subMenu > .dot-box:nth-of-type(3)\n{\n  padding-top: 18px;\n  margin: 0px 3px;\n}\n#subMenu > .dot-box:nth-of-type(4)\n{\n  padding-top: 18px;\n}\n#subMenu > .dot-box:nth-of-type(5)\n{\n  margin-left:3px;\n}\n#subMenu > .dot-box:hover\n{\n  cursor: pointer;\n  text-decoration: none;\n  background-color: white;\n  color: black;\n  transition: background-color .4s;\n}\n@-webkit-keyframes borderBlinker {\n50% { border-color: white; }\n}\n@keyframes borderBlinker {\n50% { border-color: white; }\n}\n#subMenu > .dot-box.activeSub\n{\n  /* background-color: white; */\n  /* border-color: white; */\n  -webkit-animation: borderBlinker 2.33s linear infinite;\n          animation: borderBlinker 2.33s linear infinite;\n}\n@-webkit-keyframes blinkers {\n50% { color: white; }\n}\n@keyframes blinkers {\n50% { color: white; }\n}\n#subMenu.slideUpSub\n{\n  -webkit-transform: translateY(-375%);\n          transform: translateY(-375%);\n  transition-timing-function: cubic-bezier(.5,.7,.8,1);\n  /* transition: transform 0.5s; */\n}\n#dcimBrazil,\n#dcimJon,\n#dcimTrumpJr,\n#dcimPresident\n{\n  display: block;\n  padding-top: 140px;\n}\n#dcimBrazil > p:nth-of-type(1)\n{\n  padding: 0px 145px 10px 145px;\n  text-align: center;\n}\n#dcimBrazil > span\n{\n  width: 60%;\n  margin: auto;\n  display: block;\n}\n#dcimBrazil > span > img\n{\n  width: 100%;\n}\n#dcimBrazil > p:nth-of-type(2)\n{\n  font-size: 12px;\n  text-align: center;\n  color: black;\n}\n#dcimJon > p:nth-of-type(1)\n{\n  padding: 0px 145px 10px 145px;\n  text-align: center;\n}\n#dcimJon > span\n{\n  width: 60%;\n  margin: auto;\n  display: block;\n}\n#dcimJon > span > img\n{\n  width: 100%;\n}\n#dcimJon > p:nth-of-type(2)\n{\n  font-size: 12px;\n  text-align: center;\n  padding: 0px 30px;\n  color: black;\n}\n#dcimTrumpJr > p:nth-of-type(1)\n{\n  padding: 0px 45px 10px 45px;\n  text-align: left;\n  width: 50%;\n  display: inline-block;\n  vertical-align: middle;\n}\n#tweet\n{\n  width: 30%;\n  margin: auto;\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 15px;\n}\n#tweets\n{\n  display: inline-block;\n  width: 50%;\n  position: relative;\n  vertical-align: middle;\n}\n#tweets > p:nth-of-type(1)\n{\n  padding: 0px 45px;\n  text-align: left;\n  width: 100%;\n  display: block;\n  vertical-align: middle;\n}\n#tweet2\n{\n  width: 70%;\n  margin: auto;\n  display: block;\n  vertical-align: middle;\n}\n#graphs\n{\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  vertical-align: middle;\n  /*background-color: orange;*/\n}\n#graphs > .techCompanies,\n#graphs > .government\n{\n  display: block;\n  width: 70%;\n}\n#graphs > .techCompanies > a > img,\n#graphs > .government > a > img\n{\n  width: 95%;\n}\n#dcimBrazil,\n#dcimJon,\n#dcimTrumpJr,\n#dcimPresident\n{\n  opacity: 1;\n}\n@media all and (max-width:875px)\n{\n  #dcim\n  {\n    display: block;\n    position: relative;\n    width: 100%;\n    height: 690px;\n    padding: 0px 10px;\n    margin-bottom: 20px;\n    color:white;\n    /* background-color: gray; */\n  }\n  #tweets\n  {\n    display: inline-block;\n    width: 100%;\n    position: relative;\n    vertical-align: middle;\n  }\n  #tweets > p:nth-of-type(1)\n  {\n    padding: 0px 45px;\n    text-align: left;\n    width: 50%;\n    display: inline-block;\n    vertical-align: middle;\n  }\n  #tweet2\n  {\n    width: 50%;\n    margin: auto;\n    display:inline-block;\n    vertical-align: middle;\n  }\n  #graphs\n  {\n    display: block;\n    position: relative;\n    width: 100%;\n    vertical-align: middle;\n    padding: 0 5%;\n    /*background-color: orange;*/\n  }\n  #graphs > .techCompanies,\n  #graphs > .government\n  {\n    display: inline-block;\n    width: 50%;\n  }\n}\n@media all and (max-width:700px)\n{\n  #dcim\n  {\n    display: block;\n    position: relative;\n    margin-bottom: 0px;\n    height: 860px;\n    color:white;\n    /* background-color: gray; */\n  }\n  #start,\n  #graph\n  {\n    width: 100%;\n    display: block;\n    vertical-align: middle;\n  }\n  #start > p\n  {\n    padding: 0px 50px;\n  }\n  #graph > a > img\n  {\n    width: 100%;\n  }\n  #subMenu\n  {\n    width: 100%;\n    margin: auto;\n    position: absolute;\n    display: block;\n    text-align: center;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s;\n    bottom: 50px;\n    /* translate to -375%% after click */\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    /* transition: transform 0.4s; */\n    /* transition-timing-function:  */\n    transition-timing-function: cubic-bezier(.5,.7,.8,1);\n    z-index: 10;\n  }\n  #subMenu.slideUpSub\n  {\n    -webkit-transform: translateY(-500%);\n            transform: translateY(-500%);\n    transition-timing-function: cubic-bezier(.5,.7,.8,1);\n    /* transition: transform 0.5s; */\n  }\n}\n/* Mobile Switch! */\n@media all and (max-width:650px)\n{\n  #dcim\n  {\n    display: block;\n    position: relative;\n    margin-bottom: 25px;\n    height: 860px;\n    color:white;\n    /* background-color: gray; */\n  }\n  #dcimBrazil > p:nth-of-type(1),\n  #dcimJon > p:nth-of-type(1)\n  {\n    padding: 0px 25px 10px 45px;\n    text-align: left;\n  }\n  #dcimBrazil > span,\n  #dcimJon > span\n  {\n    width: 80%;\n    margin: auto;\n    display: block;\n  }\n  #dcimBrazil > span > img\n  {\n    width: 100%;\n  }\n  #dcimTrumpJr > p:nth-of-type(1)\n  {\n    padding: 0px 5px 5px 45px;\n    text-align: left;\n    width: 100%;\n    display: block;\n    vertical-align: middle;\n  }\n  #tweet\n  {\n    width: 60%;\n    margin: auto;\n    display: block;\n    vertical-align: middle;\n    border-radius: 15px;\n  }\n\n  #tweets\n  {\n    display: inline-block;\n    width: 100%;\n    position: relative;\n    vertical-align: middle;\n  }\n  #tweets > p:nth-of-type(1)\n  {\n    padding: 0px 45px 0 5px;\n    text-align: left;\n    width: 100%;\n    display: inline-block;\n    vertical-align: middle;\n  }\n  #tweet2\n  {\n    display:none;\n  }\n  #graphs\n  {\n    display: block;\n    position: relative;\n    width: 100%;\n    vertical-align: middle;\n    padding: 0 5%;\n    /*background-color: orange;*/\n  }\n  #graphs > .techCompanies,\n  #graphs > .government\n  {\n    display: block;\n    width: 70%;\n    margin: auto;\n  }\n  #subMenu\n  {\n    width: 100%;\n    margin: auto;\n    position: absolute;\n    display: block;\n    text-align: center;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s;\n    bottom: 50px;\n    /* translate to -375%% after click */\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    /* transition: transform 0.4s; */\n    /* transition-timing-function:  */\n    transition-timing-function: cubic-bezier(.5,.7,.8,1);\n    z-index: 10;\n  }\n  #subMenu > .dot-box\n  {\n    width: 50px;\n    height: 50px;\n    border-radius: 50px;\n    border:1px solid black;\n    transition: background-color 0.22s;\n    overflow: hidden;\n    z-index: 0px;\n    padding: 10px;\n    color: rgb(72,91,109);\n    text-decoration: none;\n  }\n  #subMenu > .dot-box:nth-of-type(1)\n  {\n    padding: 10px;\n    margin-right: 3px;\n  }\n  #subMenu.slideUpSub\n  {\n    -webkit-transform: translateY(-890%);\n            transform: translateY(-890%);\n    transition-timing-function: cubic-bezier(.5,.7,.8,1);\n    /* transition: transform 0.5s; */\n  }\n  #subMenu > .dot-box:hover\n  {\n    cursor: pointer;\n    text-decoration: none;\n    background-color: rgb(72,91,109);\n    color: rgb(72,91,109);\n  }\n  #subMenu > h4\n  {\n    font-size: 16px;\n  }\n}\n@media all and (max-width:650px)\n{\n  #dcim\n  {\n    display: block;\n    position: relative;\n    margin-bottom: 25px;\n    height: 900px;\n    color:white;\n    /* background-color: gray; */\n  }\n  #tweets > p:nth-of-type(1)\n  {\n    padding: 0px 5px 0 45px;\n    text-align: left;\n    width: 100%;\n    display: inline-block;\n    vertical-align: middle;\n  }\n  #tweet\n  {\n    width: 80%;\n    margin: auto;\n    display: block;\n    vertical-align: middle;\n    border-radius: 15px;\n  }\n  #subMenu.slideUpSub\n  {\n    -webkit-transform: translateY(-940%);\n            transform: translateY(-940%);\n    transition-timing-function: cubic-bezier(.5,.7,.8,1);\n    /* transition: transform 0.5s; */\n  }\n  #dcimJon > p:nth-of-type(2)\n  {\n    font-size: 12px;\n    text-align: center;\n    padding: 0px 30px;\n    color: black;\n    overflow-x:hidden;\n  }\n}\n@media all and (max-width:425px)\n{\n  #dcim\n  {\n    display: block;\n    position: relative;\n    margin-bottom: 180px;\n    height: 900px;\n    color:white;\n  }\n  #graphs > .techCompanies,\n  #graphs > .government\n  {\n    display: block;\n    width: 100%;\n    margin: auto;\n  }\n}\n@media all and (max-width:350px)\n{\n  #subMenu > h4\n  {\n    font-size: 14px;\n  }\n  #subMenu.slideUpSub\n  {\n    -webkit-transform: translateY(-980%);\n            transform: translateY(-980%);\n    transition-timing-function: cubic-bezier(.5,.7,.8,1);\n    /* transition: transform 0.5s; */\n  }\n  #dcimBrazil > p:nth-of-type(2)\n  {\n    font-size: 10px;\n    text-align: center;\n    color: black;\n  }\n  #dcimTrumpJr > p:nth-of-type(1)\n  {\n    padding: 0px 0px 0px 45px;\n    text-align: left;\n    font-size: 14px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGNpbS9kY2ltLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsNENBQTRDO0VBQzVDLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUNBOzs7RUFHRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4QjtBQUNBOztFQUVFLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLFdBQVc7QUFDYjtBQUNBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUExQixrREFBMEI7RUFDMUIsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsb0RBQW9EO0VBQ3BELFdBQVc7QUFDYjtBQUNBOztFQUVFLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBOztFQUVFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxpQkFBaUI7RUFD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bEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixXQUFXO0VBQ2I7RUFDQTs7O0lBR0UsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRjtBQVFBOztFQUVFOztJQUVFLGVBQWU7RUFDakI7RUFDQTs7SUFFRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLG9EQUFvRDtJQUNwRCxnQ0FBZ0M7RUFDbEM7RUFDQTs7SUFFRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtFQUNBOztJQUVFLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGNpbS9kY2ltLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGNpbUNvbnRhaW5lclxue1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQyNjY7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuI2RjaW1cbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjkwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBjb2xvcjp3aGl0ZTtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgKi9cbn1cbiNkY2ltSW50cm9cbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4jc3RhcnQsXG4jZ3JhcGhcbntcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuI3N0YXJ0ID4gcFxue1xuICBwYWRkaW5nOiAwcHggNTBweDtcbn1cbiNncmFwaCA+IGEgPiBpbWdcbntcbiAgd2lkdGg6IDEwMCU7XG59XG4jc3ViTWVudVxue1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICBib3R0b206IDUwcHg7XG4gIC8qIHRyYW5zbGF0ZSB0byAtMzc1JSUgYWZ0ZXIgY2xpY2sgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7ICovXG4gIC8qIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAgKi9cbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNSwuNywuOCwxKTtcbiAgei1pbmRleDogMTA7XG59XG4jc3ViTWVudSA+IGgxXG57XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuI3N1Yk1lbnUgPiAuZG90LWJveFxue1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3Miw5MSwxMDkpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjIycztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiNzdWJNZW51ID4gLmRvdC1ib3g6bnRoLW9mLXR5cGUoMSlcbntcbiAgcGFkZGluZzogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG4jc3ViTWVudSA+IC5kb3QtYm94Om50aC1vZi10eXBlKDIpXG57XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuI3N1Yk1lbnUgPiAuZG90LWJveDpudGgtb2YtdHlwZSgzKVxue1xuICBwYWRkaW5nLXRvcDogMThweDtcbiAgbWFyZ2luOiAwcHggM3B4O1xufVxuI3N1Yk1lbnUgPiAuZG90LWJveDpudGgtb2YtdHlwZSg0KVxue1xuICBwYWRkaW5nLXRvcDogMThweDtcbn1cbiNzdWJNZW51ID4gLmRvdC1ib3g6bnRoLW9mLXR5cGUoNSlcbntcbiAgbWFyZ2luLWxlZnQ6M3B4O1xufVxuXG4jc3ViTWVudSA+IC5kb3QtYm94OmhvdmVyXG57XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC40cztcbn1cbkBrZXlmcmFtZXMgYm9yZGVyQmxpbmtlciB7XG41MCUgeyBib3JkZXItY29sb3I6IHdoaXRlOyB9XG59XG5cbiNzdWJNZW51ID4gLmRvdC1ib3guYWN0aXZlU3ViXG57XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xuICAvKiBib3JkZXItY29sb3I6IHdoaXRlOyAqL1xuICBhbmltYXRpb246IGJvcmRlckJsaW5rZXIgMi4zM3MgbGluZWFyIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBibGlua2VycyB7XG41MCUgeyBjb2xvcjogd2hpdGU7IH1cbn1cbiNzdWJNZW51LnNsaWRlVXBTdWJcbntcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zNzUlKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNSwuNywuOCwxKTtcbiAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7ICovXG59XG4jZGNpbUJyYXppbCxcbiNkY2ltSm9uLFxuI2RjaW1UcnVtcEpyLFxuI2RjaW1QcmVzaWRlbnRcbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAxNDBweDtcbn1cbiNkY2ltQnJhemlsID4gcDpudGgtb2YtdHlwZSgxKVxue1xuICBwYWRkaW5nOiAwcHggMTQ1cHggMTBweCAxNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2RjaW1CcmF6aWwgPiBzcGFuXG57XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4jZGNpbUJyYXppbCA+IHNwYW4gPiBpbWdcbntcbiAgd2lkdGg6IDEwMCU7XG59XG4jZGNpbUJyYXppbCA+IHA6bnRoLW9mLXR5cGUoMilcbntcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI2RjaW1Kb24gPiBwOm50aC1vZi10eXBlKDEpXG57XG4gIHBhZGRpbmc6IDBweCAxNDVweCAxMHB4IDE0NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jZGNpbUpvbiA+IHNwYW5cbntcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNkY2ltSm9uID4gc3BhbiA+IGltZ1xue1xuICB3aWR0aDogMTAwJTtcbn1cbiNkY2ltSm9uID4gcDpudGgtb2YtdHlwZSgyKVxue1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI2RjaW1UcnVtcEpyID4gcDpudGgtb2YtdHlwZSgxKVxue1xuICBwYWRkaW5nOiAwcHggNDVweCAxMHB4IDQ1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiN0d2VldFxue1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuI3R3ZWV0c1xue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiN0d2VldHMgPiBwOm50aC1vZi10eXBlKDEpXG57XG4gIHBhZGRpbmc6IDBweCA0NXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4jdHdlZXQyXG57XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4jZ3JhcGhzXG57XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAvKmJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsqL1xufVxuI2dyYXBocyA+IC50ZWNoQ29tcGFuaWVzLFxuI2dyYXBocyA+IC5nb3Zlcm5tZW50XG57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNzAlO1xufVxuI2dyYXBocyA+IC50ZWNoQ29tcGFuaWVzID4gYSA+IGltZyxcbiNncmFwaHMgPiAuZ292ZXJubWVudCA+IGEgPiBpbWdcbntcbiAgd2lkdGg6IDk1JTtcbn1cbiNkY2ltQnJhemlsLFxuI2RjaW1Kb24sXG4jZGNpbVRydW1wSnIsXG4jZGNpbVByZXNpZGVudFxue1xuICBvcGFjaXR5OiAxO1xufVxuXG5cblxuXG5cblxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjg3NXB4KVxue1xuICAjZGNpbVxuICB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjkwcHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyAqL1xuICB9XG4gICN0d2VldHNcbiAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAjdHdlZXRzID4gcDpudGgtb2YtdHlwZSgxKVxuICB7XG4gICAgcGFkZGluZzogMHB4IDQ1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gICN0d2VldDJcbiAge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgI2dyYXBoc1xuICB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogMCA1JTtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsqL1xuICB9XG4gICNncmFwaHMgPiAudGVjaENvbXBhbmllcyxcbiAgI2dyYXBocyA+IC5nb3Zlcm5tZW50XG4gIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NzAwcHgpXG57XG4gICNkY2ltXG4gIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGhlaWdodDogODYwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgKi9cbiAgfVxuICAjc3RhcnQsXG4gICNncmFwaFxuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAjc3RhcnQgPiBwXG4gIHtcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcbiAgfVxuICAjZ3JhcGggPiBhID4gaW1nXG4gIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjc3ViTWVudVxuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gICAgYm90dG9tOiA1MHB4O1xuICAgIC8qIHRyYW5zbGF0ZSB0byAtMzc1JSUgYWZ0ZXIgY2xpY2sgKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzOyAqL1xuICAgIC8qIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAgKi9cbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC41LC43LC44LDEpO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG4gICNzdWJNZW51LnNsaWRlVXBTdWJcbiAge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwJSk7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNSwuNywuOCwxKTtcbiAgICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41czsgKi9cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbi8qIE1vYmlsZSBTd2l0Y2ghICovXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjY1MHB4KVxue1xuICAjZGNpbVxuICB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgaGVpZ2h0OiA4NjBweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyAqL1xuICB9XG4gICNkY2ltQnJhemlsID4gcDpudGgtb2YtdHlwZSgxKSxcbiAgI2RjaW1Kb24gPiBwOm50aC1vZi10eXBlKDEpXG4gIHtcbiAgICBwYWRkaW5nOiAwcHggMjVweCAxMHB4IDQ1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAjZGNpbUJyYXppbCA+IHNwYW4sXG4gICNkY2ltSm9uID4gc3BhblxuICB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgI2RjaW1CcmF6aWwgPiBzcGFuID4gaW1nXG4gIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjZGNpbVRydW1wSnIgPiBwOm50aC1vZi10eXBlKDEpXG4gIHtcbiAgICBwYWRkaW5nOiAwcHggNXB4IDVweCA0NXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAjdHdlZXRcbiAge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuXG4gICN0d2VldHNcbiAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAjdHdlZXRzID4gcDpudGgtb2YtdHlwZSgxKVxuICB7XG4gICAgcGFkZGluZzogMHB4IDQ1cHggMCA1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAjdHdlZXQyXG4gIHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gIH1cbiAgI2dyYXBoc1xuICB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogMCA1JTtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsqL1xuICB9XG4gICNncmFwaHMgPiAudGVjaENvbXBhbmllcyxcbiAgI2dyYXBocyA+IC5nb3Zlcm5tZW50XG4gIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAjc3ViTWVudVxuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gICAgYm90dG9tOiA1MHB4O1xuICAgIC8qIHRyYW5zbGF0ZSB0byAtMzc1JSUgYWZ0ZXIgY2xpY2sgKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzOyAqL1xuICAgIC8qIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAgKi9cbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC41LC43LC44LDEpO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG4gICNzdWJNZW51ID4gLmRvdC1ib3hcbiAge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjIycztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiByZ2IoNzIsOTEsMTA5KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgI3N1Yk1lbnUgPiAuZG90LWJveDpudGgtb2YtdHlwZSgxKVxuICB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgfVxuICAjc3ViTWVudS5zbGlkZVVwU3ViXG4gIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTg5MCUpO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjUsLjcsLjgsMSk7XG4gICAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7ICovXG4gIH1cbiAgI3N1Yk1lbnUgPiAuZG90LWJveDpob3ZlclxuICB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzIsOTEsMTA5KTtcbiAgICBjb2xvcjogcmdiKDcyLDkxLDEwOSk7XG4gIH1cbiAgI3N1Yk1lbnUgPiBoNFxuICB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo2NTBweClcbntcbiAgI2RjaW1cbiAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGhlaWdodDogOTAwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgKi9cbiAgfVxuICAjdHdlZXRzID4gcDpudGgtb2YtdHlwZSgxKVxuICB7XG4gICAgcGFkZGluZzogMHB4IDVweCAwIDQ1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAjdHdlZXRcbiAge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuICAjc3ViTWVudS5zbGlkZVVwU3ViXG4gIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTk0MCUpO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjUsLjcsLjgsMSk7XG4gICAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7ICovXG4gIH1cbiAgI2RjaW1Kb24gPiBwOm50aC1vZi10eXBlKDIpXG4gIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjQyNXB4KVxue1xuICAjZGNpbVxuICB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDE4MHB4O1xuICAgIGhlaWdodDogOTAwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gIH1cbiAgI2dyYXBocyA+IC50ZWNoQ29tcGFuaWVzLFxuICAjZ3JhcGhzID4gLmdvdmVybm1lbnRcbiAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjM1MHB4KVxue1xuICAjc3ViTWVudSA+IGg0XG4gIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgI3N1Yk1lbnUuc2xpZGVVcFN1YlxuICB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05ODAlKTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC41LC43LC44LDEpO1xuICAgIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzOyAqL1xuICB9XG4gICNkY2ltQnJhemlsID4gcDpudGgtb2YtdHlwZSgyKVxuICB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgI2RjaW1UcnVtcEpyID4gcDpudGgtb2YtdHlwZSgxKVxuICB7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggNDVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/dcim/dcim.component.html":
/*!******************************************!*\
  !*** ./src/app/dcim/dcim.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dcimContainer\">\n  <div id=\"dcim\" [ngSwitch]=\"dcimSwitch\">\n    <div id=\"dcimIntro\" *ngSwitchCase=\"'dcimIntro'\" [@DCIMSwitch]>\n      <h3 class=\"section-title\" style=\"color:white;\">The Rise of \"Fake News\"</h3>\n      <div id=\"start\" >\n        <h4>When did it start?</h4>\n        <p>According to Columbia University Professor Andie Tucker, fake news is deeply rooted in American Journalism. in 1690, the first North American news paper got shut down after printing a fabricated story <a href=\"https://www.npr.org/2018/06/25/623231337/fake-news-an-origin-story\" target=\"_blank\">(Vendantam S., Cohen R., & Boyle T., 2018)</a></p>\n      </div>\n      <div id=\"graph\">\n        <h4>Is it a threat to Democracy in the US?</h4>\n        <a href=\"https://www.statista.com/statistics/802357/perception-fake-news-threat-to-democracy-us/\" target=\"_blank\">\n          <img src=\"assets/portfolio/projects/fakeNews/democracyThreat.png\">\n        </a>\n      </div>\n    </div>\n\n    <div id=\"subMenu\">\n      <h4>The latest on fake news(November 2018)</h4>\n      <a class=\"dot-box\" id=\"IntroDCIM\" (click)=\"activateSwitch('dcimIntro', $event)\" name=\"dcimIntro\" title=\"Intro\">\n        Intro\n      </a>\n      <a class=\"dot-box\" id=\"BrazilDCIM\" (click)=\"activateSwitch('dcimBrazil', $event)\" name=\"dcimBrazil\" title=\"Brazil's Elections\">\n        Brazil's Elections\n      </a>\n      <a class=\"dot-box\" id=\"JonDCIM\" (click)=\"activateSwitch('dcimJon', $event)\" name=\"dcimJon\" title=\"Jon Favreau's Tweet\">\n        Jon Favreau's Tweet\n      </a>\n      <a class=\"dot-box\" id=\"TrumpJrDCIM\" (click)=\"activateSwitch('dcimTrumpJr', $event)\" name=\"dcimTrumpJr\" title=\"Donald Trump Jr.'s Tweet\">\n        Donald Trump Jr.'s Tweet\n      </a>\n      <a class=\"dot-box\" id=\"PresidentDCIM\" (click)=\"activateSwitch('dcimPresident', $event)\" name=\"dcimPresident\" title=\"President Donald Trump's Reaction\">\n        President Donald Trump's Reaction\n      </a>\n    </div>\n\n    <div id=\"dcimBrazil\" *ngSwitchCase=\"'dcimBrazil'\" [@DCIMSwitch]>\n      <h4>Brazil's Elections</h4>\n      <p>From August 16 to October 7, the New York Times, the Federal University of Minas Gerais, the University of Sao Paulo and the fact-checking platform Agencia Lupa, collected and analyzed posts in 347 groups that are open to the public and focused on Brazilian politics. 50 political images were selected and examined that were widely shared out of the 100,000. Only 8% of the 50 most widely shared images were considered truthful <a href=\"https://www.nytimes.com/2018/10/17/opinion/brazil-election-fake-news-whatsapp.html\" target=\"_blank\">(The New York Times, 2018).</a></p>\n      <span><img src=\"assets/portfolio/projects/fakeNews/brazilVote.jpg\"></span>\n      <p>Image retreived from https://www.nytimes.com/2018/10/17/opinion/brazil-election-fake-news-whatsapp.html</p>\n    </div>\n\n    <div id=\"dcimJon\" *ngSwitchCase=\"'dcimJon'\" [@DCIMSwitch]>\n      <h4>Jon Favreau's tweet</h4>\n      <p>On May 27, 2018, Jon Favreau, a former Obama speechwriter, tweeted an image of two detainees lying on mats on the ground in a holding cell from an Arizona Republic story in 2014. This image was then widely shared by many public figures stating how Trump's administration was treating the children that were being deported. He then deleted the tweet and stated how the image was from 2014 and how today, in 2018, the government is creating unaccompanied minors <a href=\"https://www.forbes.com/sites/kalevleetaru/2018/06/15/could-google-image-search-help-fight-fake-news-on-social-media/#6f4ad52c4537\" target=\"_blank\">(Forbes, 2018).</a></p>\n      <span><img src=\"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F663032224%2F960x0.jpg%3Ffit%3Dscale\"></span>\n      <p>Image retrieved from https://www.forbes.com/sites/kalevleetaru/2018/06/15/could-google-image-search-help-fight-fake-news-on-social-media/#724d63574537</p>\n    </div>\n\n    <div id=\"dcimTrumpJr\" *ngSwitchCase=\"'dcimTrumpJr'\" [@DCIMSwitch]>\n      <h4>Donald Trump Jr's Tweet</h4>\n      <p>On September 16, 2018, Donald Trump Jr. tweeted a picture of Anderson Cooper, CNN's anchor, in what appears that Cooper is kneeling to make a flood from hurricane Florence seem worse than it was to make the President look bad. Cooper then went on live television to explain the details of the picture, which in fact was from 10 years ago, during hurricane Ike. While the waters seem to reach Cooper's waist, the water level reaches his crew member's knee, but that was because the crew member was on higher ground, while he was staying out of the way of rescue vehicles <a href=\"https://www.cnn.com/2018/09/18/politics/anderson-cooper-vs-donald-trump-jr-cnntv/index.html?utm_medium=social&utm_source=twCNN&utm_content=2018-09-18T10:08:10\" target=\"_blank\">(Vera A., 2018)</a>.</p>\n      <ngx-tweet tweetId=\"1041310008623943680\" id=\"tweet\"></ngx-tweet>\n    </div>\n\n    <div id=\"dcimPresident\" *ngSwitchCase=\"'dcimPresident'\" [@DCIMSwitch]>\n      <h4>Donald Trump's Statement</h4>\n      <div id=\"tweets\">\n        <p>In a <a href=\"https://www.cnn.com/2018/10/25/politics/trump-blames-media-for-anger-after-attacks/index.html\" target=\"_blank\">tweet</a> from President Trump on October 25, 2018, he stated, \"A very big part of the Anger we see today in our society is caused by the purposely false and inaccurate reporting of the Mainstream Media that I refer to as Fake News. It has gotten so bad and hateful that it is beyond description. Mainstream Media must clean up its act, FAST!\" But how does the US population feel about tech companies restricting fake news online? (Statista, 2018)</p>\n        <ngx-tweet tweetId=\"1055418269270716418\" id=\"tweet2\"></ngx-tweet>\n      </div>\n      <div id=\"graphs\">\n        <div class=\"techCompanies\">\n          <a href=\"https://www.statista.com/statistics/829260/tech-company-intervention-fake-news/\" target=\"_blank\">\n            <img src=\"assets/portfolio/projects/fakeNews/techCompanies.png\">\n          </a>\n        </div>\n        <div class=\"government\">\n          <a href=\"https://www.statista.com/statistics/829242/government-intervention-fake-news/\" target=\"_blank\">\n            <img src=\"assets/portfolio/projects/fakeNews/govIntervention.png\">\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dcim/dcim.component.ts":
/*!****************************************!*\
  !*** ./src/app/dcim/dcim.component.ts ***!
  \****************************************/
/*! exports provided: DcimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DcimComponent", function() { return DcimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var DcimComponent = /** @class */ (function () {
    function DcimComponent(_setHeaders) {
        this._setHeaders = _setHeaders;
        this.dcimSwitch = "";
        // sets the header to the portfolio background
        this._setHeaders.portfolioClick();
        // sets the title to projects
        this._setHeaders.pageTitle = "DCIM Presentation";
    }
    DcimComponent.prototype.ngOnInit = function () {
        this.dcimSwitch = "dcimIntro";
        $("#IntroDCIM").addClass("activeSub");
        // $("#subMenu").addClass("slideUpSub");
    };
    DcimComponent.prototype.activateSwitch = function (x, e) {
        // x is the switch name
        this.dcimSwitch = x;
        // e is the event
        var target = e.target || e.srcElement || e.currentTarget;
        var targetID = target.id;
        // console.log(targetID);
        $("#IntroDCIM, #BrazilDCIM, #JonDCIM, #TrumpJrDCIM, #PresidentDCIM").removeClass("activeSub");
        $("#" + targetID).addClass("activeSub");
        if (targetID === "IntroDCIM") {
            $("#subMenu").removeClass("slideUpSub");
        }
        else
            $("#subMenu").addClass("slideUpSub");
    };
    DcimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dcim',
            template: __webpack_require__(/*! ./dcim.component.html */ "./src/app/dcim/dcim.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('DCIMSwitch', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: '0' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(550)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(0)
                    ]),
                ])
            ],
            styles: [__webpack_require__(/*! ./dcim.component.css */ "./src/app/dcim/dcim.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], DcimComponent);
    return DcimComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes blinker {\n50% { color: white; }\n}\n\n@keyframes blinker {\n50% { color: white; }\n}\n\n#homeContainer\n{\n  border-left: 1px solid rgba(255,255,255,0.4);\n  border-right: 1px solid rgba(255,255,255,0.4);\n  padding: 0 20px;\n  background-color: #004266;\n  /* margin-top: -20px; */\n  /* height: 100%; */\n  padding-bottom: 20px;\n  max-width: 960px;\n  margin: 0 auto;\n}\n\n#aboutMe\n{\n  color: white;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n#aboutMe > p\n{\n  width: 60%;\n  text-align: center;\n  margin: auto;\n}\n\n.horizonalLine\n{\n  width: 90%;\n  background-color: white;\n}\n\n#interests\n{\n  padding-top: 10px;\n  display: block;\n  position: relative;\n  padding-bottom: 10px;\n}\n\n#interests > h3\n{\n  color: white;\n}\n\n#hobbiesSelector\n{\n  position: relative;\n  display: block;\n  width: 100%;\n  text-align:center;\n}\n\n#hobbiesSelector > a\n{\n  padding:5px 20px;\n  border-right: 1px solid white;\n  vertical-align: middle;\n  text-align: center;\n  color: rgba(255,255,255,0.5);\n  transition: color 0.33s;\n  /* z-index: 2; */\n  font-size: 20px;\n}\n\n#hobbiesSelector > a:nth-of-type(3)\n{\n  border-right: 1px solid transparent;\n}\n\n#hobbiesSelector > a:hover\n{\n  color: #00A6FF;\n  cursor: pointer;\n  transition: color 0.4s;\n  text-decoration: none;\n}\n\n#hobbiesSelector > a.active\n{\n  color: #0085CC;\n  text-decoration: none;\n  -webkit-animation: blinker 2.5s linear infinite;\n          animation: blinker 2.5s linear infinite;\n}\n\n#hiking,\n#photography,\n#cinematography\n{\n  padding: 15px;\n}\n\n#hiking\n{\n  padding-top: 40px;\n  padding-bottom: 90px;\n}\n\n#hikingImg,\n#hikeParagraph\n{\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n#hikingImg\n{\n  width: 25%;\n  /* box-shadow: -0px 0px 30px -9px rgba(255,255,255,0.5); */\n  float: left;\n  margin-right: 20px;\n  min-width: 160px;\n  min-height: 250px;\n}\n\n#hikingImg img\n{\n  width: 100%;\n}\n\n#hikeParagraph\n{\n  width: 100%;\n  padding: 10px 30px;\n  padding-left: 5px;\n  color: white;\n}\n\n#photoPara,\n#photoshow\n{\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n\n#photography\n{\n  padding-top: 40px;\n  padding-bottom: 90px;\n}\n\n#photoshow\n{\n  width: 50%;\n  float: right;\n  margin-left: 10px;\n  min-height: 240px;\n}\n\n#photoPara\n{\n  width: 100%;\n  color: white;\n  padding: 10px 30px;\n  padding-left: 0px;\n}\n\n#cinematography\n{\n  padding-top: 40px;\n  padding-bottom: 120px;\n}\n\n#cinemaPara\n{\n  display: block;\n  position: relative;\n}\n\n#cinemaPara\n{\n  color: white;\n  width: 100%;\n  clear: both;\n  padding-right: 20px;\n}\n\n#cinemaPara iframe\n{\n  width: 40%;\n  float: left;\n  margin-right: 10px;\n}\n\n#hiking,\n#photography,\n#cinematography\n{\n  max-height: 390px;\n  overflow-y: hidden;\n}\n\n/* mobile switch */\n\n@media all and (max-width:650px)\n{\n  #aboutMe > p\n  {\n    width: 80%;\n    text-align: center;\n    margin: auto;\n  }\n  #hiking,\n  #photography,\n  #cinematography\n  {\n    max-height: 490px;\n    overflow-y: visible;\n  }\n}\n\n@media all and (max-width:500px)\n{\n  #aboutMe > p\n  {\n    width: 90%;\n    text-align: center;\n    margin: auto;\n  }\n  #hiking,\n  #photography,\n  #cinematography\n  {\n    padding: 15px;\n  }\n  #hiking\n  {\n    padding-top: 40px;\n    padding-bottom: 90px;\n  }\n  #hikingImg,\n  #hikeParagraph\n  {\n    position: relative;\n    display: block;\n    vertical-align: middle;\n  }\n  #hikingImg\n  {\n    width: 25%;\n    float: left;\n    margin-right: 20px;\n    min-width: 160px;\n    min-height: 70px;\n  }\n  #hikingImg img\n  {\n    width: 100%;\n  }\n  #hikeParagraph\n  {\n    width: 100%;\n    padding: 10px 30px;\n    padding-left: 5px;\n    color: white;\n  }\n  #photoPara,\n  #photoshow\n  {\n    display: block;\n    position: relative;\n    vertical-align: middle;\n  }\n  #photoshow\n  {\n    width: 90%;\n    float: none;\n    margin-left: 0px;\n    margin: auto;\n  }\n  #photoPara\n  {\n    width: 100%;\n    color: white;\n    padding: 10px 0px;\n    padding-left: 0px;\n  }\n  #cinematography\n  {\n    padding-top: 40px;\n  }\n  #cinemaPara\n  {\n    display: block;\n    position: relative;\n    color: white;\n    width: 100%;\n    clear: both;\n    padding-right: 10px;\n  }\n  #cinemaPara iframe\n  {\n    display: block;\n    width: 70%;\n    float: none;\n    margin-right: 0px;\n    margin: auto;\n    height: 158px;\n  }\n  #hiking,\n  #photography,\n  #cinematography\n  {\n    max-height: 590px;\n    overflow-y: visible;\n  }\n}\n\n@media all and (max-width:400px)\n{\n  #hiking\n  {\n    padding-top: 40px;\n    padding-bottom: 90px;\n  }\n  #hikingImg,\n  #hikeParagraph\n  {\n    position: relative;\n    display: block;\n    vertical-align: middle;\n  }\n  #hikingImg\n  {\n    width: 180px;\n    /* box-shadow: -0px 0px 30px -9px rgba(255,255,255,0.5); */\n    float: none;\n    margin-right: 0px;\n    margin: auto;\n  }\n  #hikingImg img\n  {\n    width: 100%;\n  }\n  #hikeParagraph\n  {\n    width: 100%;\n    padding: 10px 0px 10px 30px;\n    padding-left: 5px;\n    color: white;\n    min-height: 620px;\n  }\n  #photoPara,\n  #photoshow\n  {\n    display: block;\n    position: relative;\n    vertical-align: middle;\n  }\n  #photoshow\n  {\n    width: 90%;\n    float: none;\n    margin-left: 0px;\n    margin: auto;\n  }\n  #photoPara\n  {\n    width: 100%;\n    color: white;\n    padding: 10px 0px;\n    padding-left: 0px;\n  }\n  #cinematography\n  {\n    padding-top: 40px;\n    padding-bottom: 120px;\n  }\n  #cinemaPara\n  {\n    display: block;\n    position: relative;\n  }\n  #cinemaPara\n  {\n    color: white;\n    width: 100%;\n    clear: both;\n    padding-right: 0px;\n  }\n  #cinemaPara iframe\n  {\n    display: block;\n    width: 70%;\n    float: none;\n    margin-right: 0px;\n    margin: auto;\n    height: 150px;\n  }\n  #hiking,\n  #photography,\n  #cinematography\n  {\n    max-height: 690px;\n    overflow-y: visible;\n  }\n}\n\n@media all and (max-width:380px)\n{\n  h3\n  {\n    font-size: 23px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNLFlBQVksRUFBRTtBQUNwQjs7QUFGQTtBQUNBLE1BQU0sWUFBWSxFQUFFO0FBQ3BCOztBQUVBOztFQUVFLDRDQUE0QztFQUM1Qyw2Q0FBNkM7RUFDN0MsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFDQTs7RUFFRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUNBOztFQUVFLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUNBOztFQUVFLG1DQUFtQztBQUNyQzs7QUFDQTs7RUFFRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUsY0FBYztFQUNkLHFCQUFxQjtFQUNyQiwrQ0FBdUM7VUFBdkMsdUNBQXVDO0FBQ3pDOztBQUNBOzs7O0VBSUUsYUFBYTtBQUNmOztBQUNBOztFQUVFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBQ0E7OztFQUdFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsc0JB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OztJQUVFLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7RUFDQTs7SUFFRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0VBQ0E7O0lBRUUsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0VBQ0E7O0lBRUUsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFDQTs7OztJQUlFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7QUFDRjs7QUFRQTs7RUFFRTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgYmxpbmtlciB7XG41MCUgeyBjb2xvcjogd2hpdGU7IH1cbn1cblxuI2hvbWVDb250YWluZXJcbntcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0MjY2O1xuICAvKiBtYXJnaW4tdG9wOiAtMjBweDsgKi9cbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4jYWJvdXRNZVxue1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuI2Fib3V0TWUgPiBwXG57XG4gIHdpZHRoOiA2MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmhvcml6b25hbExpbmVcbntcbiAgd2lkdGg6IDkwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbiNpbnRlcmVzdHNcbntcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuI2ludGVyZXN0cyA+IGgzXG57XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNob2JiaWVzU2VsZWN0b3JcbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuI2hvYmJpZXNTZWxlY3RvciA+IGFcbntcbiAgcGFkZGluZzo1cHggMjBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zM3M7XG4gIC8qIHotaW5kZXg6IDI7ICovXG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiNob2JiaWVzU2VsZWN0b3IgPiBhOm50aC1vZi10eXBlKDMpXG57XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuI2hvYmJpZXNTZWxlY3RvciA+IGE6aG92ZXJcbntcbiAgY29sb3I6ICMwMEE2RkY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC40cztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI2hvYmJpZXNTZWxlY3RvciA+IGEuYWN0aXZlXG57XG4gIGNvbG9yOiAjMDA4NUNDO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGFuaW1hdGlvbjogYmxpbmtlciAyLjVzIGxpbmVhciBpbmZpbml0ZTtcbn1cbiNoaWtpbmcsXG4jcGhvdG9ncmFwaHksXG4jY2luZW1hdG9ncmFwaHlcbntcbiAgcGFkZGluZzogMTVweDtcbn1cbiNoaWtpbmdcbntcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA5MHB4O1xufVxuI2hpa2luZ0ltZyxcbiNoaWtlUGFyYWdyYXBoXG57XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuI2hpa2luZ0ltZ1xue1xuICB3aWR0aDogMjUlO1xuICAvKiBib3gtc2hhZG93OiAtMHB4IDBweCAzMHB4IC05cHggcmdiYSgyNTUsMjU1LDI1NSwwLjUpOyAqL1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbn1cbiNoaWtpbmdJbWcgaW1nXG57XG4gIHdpZHRoOiAxMDAlO1xufVxuI2hpa2VQYXJhZ3JhcGhcbntcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNwaG90b1BhcmEsXG4jcGhvdG9zaG93XG57XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuI3Bob3RvZ3JhcGh5XG57XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOTBweDtcbn1cbiNwaG90b3Nob3dcbntcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWluLWhlaWdodDogMjQwcHg7XG59XG4jcGhvdG9QYXJhXG57XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4jY2luZW1hdG9ncmFwaHlcbntcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMjBweDtcbn1cbiNjaW5lbWFQYXJhXG57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jY2luZW1hUGFyYVxue1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBjbGVhcjogYm90aDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbiNjaW5lbWFQYXJhIGlmcmFtZVxue1xuICB3aWR0aDogNDAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuI2hpa2luZyxcbiNwaG90b2dyYXBoeSxcbiNjaW5lbWF0b2dyYXBoeVxue1xuICBtYXgtaGVpZ2h0OiAzOTBweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG4vKiBtb2JpbGUgc3dpdGNoICovXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjY1MHB4KVxue1xuICAjYWJvdXRNZSA+IHBcbiAge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAjaGlraW5nLFxuICAjcGhvdG9ncmFwaHksXG4gICNjaW5lbWF0b2dyYXBoeVxuICB7XG4gICAgbWF4LWhlaWdodDogNDkwcHg7XG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgfVxufVxuXG5cblxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjUwMHB4KVxue1xuICAjYWJvdXRNZSA+IHBcbiAge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAjaGlraW5nLFxuICAjcGhvdG9ncmFwaHksXG4gICNjaW5lbWF0b2dyYXBoeVxuICB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAjaGlraW5nXG4gIHtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOTBweDtcbiAgfVxuICAjaGlraW5nSW1nLFxuICAjaGlrZVBhcmFncmFwaFxuICB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgI2hpa2luZ0ltZ1xuICB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xuICB9XG4gICNoaWtpbmdJbWcgaW1nXG4gIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjaGlrZVBhcmFncmFwaFxuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAjcGhvdG9QYXJhLFxuICAjcGhvdG9zaG93XG4gIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAjcGhvdG9zaG93XG4gIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gICNwaG90b1BhcmFcbiAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxuICAjY2luZW1hdG9ncmFwaHlcbiAge1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICB9XG4gICNjaW5lbWFQYXJhXG4gIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbiAgI2NpbmVtYVBhcmEgaWZyYW1lXG4gIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNzAlO1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDE1OHB4O1xuICB9XG4gICNoaWtpbmcsXG4gICNwaG90b2dyYXBoeSxcbiAgI2NpbmVtYXRvZ3JhcGh5XG4gIHtcbiAgICBtYXgtaGVpZ2h0OiA1OTBweDtcbiAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NDAwcHgpXG57XG4gICNoaWtpbmdcbiAge1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA5MHB4O1xuICB9XG4gICNoaWtpbmdJbWcsXG4gICNoaWtlUGFyYWdyYXBoXG4gIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAjaGlraW5nSW1nXG4gIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgLyogYm94LXNoYWRvdzogLTBweCAwcHggMzBweCAtOXB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTsgKi9cbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgI2hpa2luZ0ltZyBpbWdcbiAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNoaWtlUGFyYWdyYXBoXG4gIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1pbi1oZWlnaHQ6IDYyMHB4O1xuICB9XG4gICNwaG90b1BhcmEsXG4gICNwaG90b3Nob3dcbiAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gICNwaG90b3Nob3dcbiAge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgI3Bob3RvUGFyYVxuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICB9XG4gICNjaW5lbWF0b2dyYXBoeVxuICB7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEyMHB4O1xuICB9XG4gICNjaW5lbWFQYXJhXG4gIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgI2NpbmVtYVBhcmFcbiAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgI2NpbmVtYVBhcmEgaWZyYW1lXG4gIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNzAlO1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG4gICNoaWtpbmcsXG4gICNwaG90b2dyYXBoeSxcbiAgI2NpbmVtYXRvZ3JhcGh5XG4gIHtcbiAgICBtYXgtaGVpZ2h0OiA2OTBweDtcbiAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6MzgwcHgpXG57XG4gIGgzXG4gIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"homeContainer\">\n  <div id=\"aboutMe\">\n      <h3>About Me</h3>\n      <p>{{ aboutMe.aboutMe }}</p>\n  </div>\n\n  <hr class=\"horizonalLine\">\n\n  <div id=\"interests\" [ngSwitch]=\"myInterests\">\n    <h3>Hobbies</h3>\n    <div id=\"hobbiesSelector\">\n      <a id=\"hikeIcon\" (click)=\"setHobby('hiking', $event)\" class=\"fas fa-hiking\" title=\"Hiking\" tooltip=\"Hiking\" placement=\"left\"></a>\n      <a id=\"photoIcon\" (click)=\"setHobby('photography', $event)\" class=\"fas fa-camera\" title=\"Photography\" tooltip=\"Photography\" placement=\"top\"></a>\n      <a id=\"videoIcon\" (click)=\"setHobby('cinematography', $event)\" class=\"fas fa-video\" title=\"Cinematography\" tooltip=\"Cinematography\" placement=\"right\"></a>\n    </div>\n\n    <div id=\"hiking\" *ngSwitchCase=\"'hiking'\" [@hobbySwitch]>\n      <!-- <span id=\"hikingImg\">\n        <img src=\"{{ hikingData.hikeImg }}\">\n      </span> -->\n      <div id=\"hikeParagraph\">\n        <p><span id=\"hikingImg\">\n          <img src=\"{{ hikingData.hikeImg }}\">\n        </span> {{ hikingData.hikeParagraph }}</p>\n      </div>\n    </div>\n\n    <div id=\"photography\" *ngSwitchCase=\"'photography'\" [@hobbySwitch]>\n      <div id=\"photoPara\">\n        <p> <carousel id=\"photoshow\">\n          <slide *ngFor=\"let photo of photoData.photoImgs\">\n            <img src=\"{{photo.photoImage}}\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n          </slide>\n        </carousel> {{photoData.photoParagraph}}</p>\n      </div>\n    </div>\n\n    <div id=\"cinematography\" *ngSwitchCase=\"'cinematography'\" [@hobbySwitch]>\n      <div id=\"cinemaPara\">\n        <!-- width=\"560\" height=\"315\" -->\n        <p>  <iframe height=\"215\" src=\"https://www.youtube-nocookie.com/embed/BEqlTJfaDEo\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> {{ cinemaData.cinemaParagraph }} <a href=\"{{cinemaData.channelURL}}\" target=\"_blank\">here</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(_setHeaders, _homeDataService) {
        this._setHeaders = _setHeaders;
        this._homeDataService = _homeDataService;
        this.myInterests = "";
        this.aboutMe = [];
        this.hikingData = [];
        this.photoData = [];
        this.cinemaData = [];
        // set page title and page banner to Home
        this._setHeaders.homeClick();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set my interest switch to something by default
        // retrieves the data from the json
        this._homeDataService.getHomeData()
            .subscribe(function (data) {
            _this.hikingData = data['hike'];
            _this.SetPortTitles(data);
        });
        // set interests active tab
        this.myInterests = "photography";
        $("#photoIcon").addClass("active");
        // sets active to current page-- home --
        var elemID = "pg1";
        this._setHeaders.removeActive();
        this._setHeaders.setActive(elemID);
    };
    HomeComponent.prototype.SetPortTitles = function (data) {
        // set portfolio data to portTitles
        this.aboutMe = data;
        this.hikingData = data.hike[0];
        this.photoData = data.photography[0];
        this.cinemaData = data.cinematography[0];
        // console.log(this.cinemaData);
    };
    HomeComponent.prototype.setHobby = function (interest, e) {
        this.myInterests = interest;
        var target = e.target || e.srcElement || e.currentTarget;
        var targetID = target.id;
        // console.log(targetID);
        $("#hikeIcon, #photoIcon, #videoIcon").removeClass("active");
        $("#" + targetID).addClass("active");
        // this.setActiveHobby(targetID);
    };
    HomeComponent.prototype.setActiveHobby = function (target) {
        $("#" + target).addClass("active");
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('hobbySwitch', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '!', opacity: '0' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(350)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(0)
                    ]),
                ])
            ],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], src_app_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#portfolioContainer\n{\n  border-left: 1px solid rgba(255,255,255,0.4);\n  border-right: 1px solid rgba(255,255,255,0.4);\n  padding: 0 20px;\n  background-color: #004266;\n  /* margin-top: -20px; */\n  /* height: 100%; */\n  padding-bottom: 20px;\n  max-width: 960px;\n  margin: 0 auto;\n}\n.horizonalLine\n{\n  width: 90%;\n  background-color: white;\n}\n.section\n{\n  padding-top: 20px;\n  padding-bottom: 10px;\n  color: white;\n  display: block;\n  position: relative;\n}\n#projects\n{\n  border-top: 1px solid white;\n  /* border-left: 1px solid white; */\n  /* border-right: 1px solid white; */\n  margin-left: 20px;\n  position: relative;\n  display: block;\n}\n#projects:hover\n{\n  cursor: pointer;\n  background-image: linear-gradient(to right,#004266 1%,#002940 90% ,#004266);\n  transition: background-image 0.4s;\n}\n.image,\n.projectData,\n#dateArrow\n{\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: 10px;\n  position: relative;\n}\n.image\n{\n  width: 65px;\n  height: 65px;\n  overflow: hidden;\n  padding-left: 5px;\n}\n.image > img\n{\n  width: 100%;\n  /* height: 100%; */\n  margin: auto;\n}\n.projectData\n{\n  padding-left: 10px;\n  width: 70%;\n}\n.projectData p\n{\n  color: rgba(255, 255, 255, 0.8);\n}\n#dateArrow\n{\n  float: right;\n  vertical-align: top;\n  text-align: right;\n  padding-right: 10px;\n  margin-top: 5px;\n}\n#dateArrow a\n{\n  color: rgba(255,255,255,0.2);\n  transition: color 0.3s;\n}\n#projects:hover #dateArrow a\n{\n  color: rgba(255,255,255,1);\n}\n#projectLine\n{\n  background-color: white;\n  margin-left: 20px;\n  margin-top: 0px;\n}\n/* Hardcoded things */\n@-webkit-keyframes blinker {\n50% { color: white; }\n}\n@keyframes blinker {\n50% { color: white; }\n}\n#xp\n{\n  position: relative;\n  display: block;\n}\n#xpSwitch\n{\n  display: block;\n  margin: auto;\n  width: 100%;\n  text-align: center;\n}\n#xpSwitch a\n{\n  font-size: 18px;\n  color: rgba(255,255,255,0.9);\n  padding: 10px;\n}\n#xpSwitch a:nth-of-type(1)\n{\n  border-right: 1px solid white;\n}\n#xpSwitch a:hover\n{\n  color: #00A6FF;\n  transition: color 0.4s;\n  cursor: pointer;\n}\n#xpSwitch > a.active\n{\n  color: #00A6FF;\n  text-decoration: none;\n  -webkit-animation: blinker 2.5s linear infinite;\n          animation: blinker 2.5s linear infinite;\n}\n#skills-certs\n{\n  display: block;\n  position: relative;\n  /* background-color: red; */\n  width: 100%;\n  font-family: sans-serif;\n  vertical-align: top;\n  color: white;\n}\n#skills-certs > h3,\n#volunteer > h3\n{\n  margin-bottom: 0px;\n}\n#skills-certs > .skillData\n{\n  width: 50%;\n  margin-left: -4px;\n  margin-top: 15px;\n  display: inline-block;\n  vertical-align: middle;\n  /* font-size: 16px; */\n  color: rgba(255, 255, 255, 0.9);\n}\n#skills-certs > .skillData:nth-of-type(1) > ul > li\n{\n  padding-bottom: 10px;\n}\n#skills-certs > .skillData:nth-of-type(2)\n{\n  text-align: center;\n}\n#skills-certs > .skillData:nth-of-type(2) > span\n{\n  font-size: 70px;\n  margin-right: 20%;\n}\n#volunteer\n{\n  color: white;\n  display: block;\n  width: 100%;\n}\n#vol\n{\n  vertical-align: middle;\n  width: 330px;\n  /* margin-left: 80px;\n  margin-right: 20px; */\n  display: inline-block;\n  position: relative;\n  min-height: 260px;\n}\n#volunteer .volunteering\n{\n  display: inline-block;\n  vertical-align: middle;\n  width: 50%;\n  position: relative;\n}\n#volunteer .volunteering ul\n{\n  /* padding-bottom: 100px; */\n  padding-top: 10px;\n}\n#volunteer .volunteering ul li\n{\n  padding-right: 50px;\n  color: rgba(255, 255, 255, 0.9);\n}\n/* Professional Experience */\n#pro-xp\n{\n  display: block;\n  position: relative;\n  width: 100%;\n  font-family: sans-serif;\n  color: white;\n}\n#rutgers > .location,\n#harrison > .location\n{\n  font-size: 18px;\n  font-weight: 900;\n}\n#rutgers > .position,\n#harrison > .position\n{\n  font-size: 18px;\n  list-style-type: none;\n  color: white;\n}\n#rutgers > .description,\n#harrison > .description\n{\n  list-style-type: circle;\n  margin-left: 17px;\n  color: rgba(255,255,255,0.7);\n}\n#rutgers > .description:nth-of-type(5),\n#rutgers > .description:nth-of-type(9),\n#harrison > .description:nth-of-type(6),\n#harrison > .description:nth-of-type(10),\n#harrison > .description:nth-of-type(13)\n{\n  padding-bottom: 10px;\n}\n#pro-xp > .proPic\n{\n  width: 90%;\n  margin: auto;\n}\n#pro-xp > .proPic > img\n{\n  box-shadow: 0 0 20px rgba(0,0,0,0.4);\n  width: 100%;\n}\n@media all and (max-width:800px)\n{\n  #skills-certs > .skillData\n  {\n    width: 100%;\n    margin-left: 0px;\n    margin-top: 15px;\n    display: block;\n    vertical-align: middle;\n    /* font-size: 16px; */\n  }\n  #skills-certs > .skillData:nth-of-type(1) > ul > li\n  {\n    padding-bottom: 10px;\n  }\n  #skills-certs > .skillData:nth-of-type(2)\n  {\n    text-align: center;\n    width: 30%;\n    margin: auto;\n  }\n  #skills-certs > .skillData:nth-of-type(2) > span\n  {\n    font-size: 70px;\n    margin:3% 5%;\n  }\n  #volunteer\n  {\n    color: white;\n    display: block;\n    width: 100%;\n    margin-bottom: 50px;\n    position: relative;\n  }\n  #vol\n  {\n    vertical-align: middle;\n    width: 360px;\n    margin: auto;\n    display: block;\n    position: relative;\n    min-height: 260px;\n  }\n  #volunteer .volunteering\n  {\n    display: block;\n    vertical-align: middle;\n    width: 100%;\n    position: relative;\n  }\n  #volunteer .volunteering ul li\n  {\n    padding-right: 50px;\n    padding-top: 5px;\n  }\n}\n/* Mobile Switch! */\n@media all and (max-width:650px)\n{\n  .image\n  {\n    width: 55px;\n    height: 55px;\n    overflow: hidden;\n    padding-left: 5px;\n  }\n  .projectData\n  {\n    padding-left: 10px;\n    width: 50%;\n  }\n  #dateArrow\n  {\n    float: none;\n    position: absolute;\n    vertical-align: top;\n    text-align: right;\n    right: 0px;\n    padding-right: 10px;\n    margin-top: 0px;\n    padding-top: 5px;\n    height: 100%;\n  }\n\n  #dateArrow a\n  {\n    position: absolute;\n    bottom: 0px;\n    right: 10px;\n    padding-bottom: 15px;\n  }\n  #skills-certs > .skillData:nth-of-type(2)\n  {\n    text-align: center;\n    width: 50%;\n    margin: auto;\n  }\n  #skills-certs > .skillData:nth-of-type(2) > span\n  {\n    font-size: 70px;\n    margin:12% 5%;\n  }\n  #vol\n  {\n    vertical-align: middle;\n    width: 60%;\n    margin: auto;\n    display: block;\n    position: relative;\n    min-height: 260px;\n  }\n}\n@media all and (max-width:550px)\n{\n  #vol\n  {\n    vertical-align: middle;\n    width: 90%;\n    margin: auto;\n    display: block;\n    position: relative;\n    min-height: 330px;\n  }\n}\n@media all and (max-width:380px)\n{\n  h3\n  {\n    font-size: 23px;\n  }\n  .projectData h5\n  {\n    font-size: 17px;\n    padding-right: 8px; \n  }\n  .projectData p\n  {\n    font-size: 15px;\n  }\n  #dateArrow p\n  {\n    font-size: 14px;\n    padding-top: 5px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLDRDQUE0QztFQUM1Qyw2Q0FBNkM7RUFDN0MsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBOztFQUVFLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7QUFDQTs7RUFFRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLDJFQUEyRTtFQUMzRSxpQ0FBaUM7QUFDbkM7QUFDQTs7OztFQUlFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBOztFQUVFLCtCQUErQjtBQUNqQztBQUNBOztFQUVFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBRUE7O0VBRUUsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4QjtBQUNBOztFQUVFLDBCQUEwQjtBQUM1QjtBQUNBOztFQUVFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLE1BQU0sWUFBWSxFQUFFO0FBQ3BC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QjtJQUNoQixZQUFZO0VBQ2Q7O0VBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsb0JBQW9CO0VBQ3RCO0VBQ0E7O0lBRUUsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0VBQ2Q7RUFDQTs7SUFFRSxlQUFlO0lBQ2YsYUFBYTtFQUNmO0VBQ0E7O0lBRUUsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDRjtBQVNBOztFQUVFOztJQUVFLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFTQTs7RUFFRTs7SUFFRSxlQUFlO0VBQ2pCO0VBQ0E7O0lBRUUsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtFQUNBOztJQUVFLGVBQWU7RUFDakI7RUFDQTs7SUFFRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcG9ydGZvbGlvQ29udGFpbmVyXG57XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDI2NjtcbiAgLyogbWFyZ2luLXRvcDogLTIwcHg7ICovXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmhvcml6b25hbExpbmVcbntcbiAgd2lkdGg6IDkwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc2VjdGlvblxue1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNwcm9qZWN0c1xue1xuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7ICovXG4gIC8qIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlOyAqL1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNwcm9qZWN0czpob3Zlclxue1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMDA0MjY2IDElLCMwMDI5NDAgOTAlICwjMDA0MjY2KTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjRzO1xufVxuLmltYWdlLFxuLnByb2plY3REYXRhLFxuI2RhdGVBcnJvd1xue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbWFnZVxue1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5pbWFnZSA+IGltZ1xue1xuICB3aWR0aDogMTAwJTtcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICBtYXJnaW46IGF1dG87XG59XG4ucHJvamVjdERhdGFcbntcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB3aWR0aDogNzAlO1xufVxuLnByb2plY3REYXRhIHBcbntcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cbiNkYXRlQXJyb3dcbntcbiAgZmxvYXQ6IHJpZ2h0O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4jZGF0ZUFycm93IGFcbntcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbn1cbiNwcm9qZWN0czpob3ZlciAjZGF0ZUFycm93IGFcbntcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG59XG4jcHJvamVjdExpbmVcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4vKiBIYXJkY29kZWQgdGhpbmdzICovXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xuNTAlIHsgY29sb3I6IHdoaXRlOyB9XG59XG5cbiN4cFxue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuI3hwU3dpdGNoXG57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jeHBTd2l0Y2ggYVxue1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4jeHBTd2l0Y2ggYTpudGgtb2YtdHlwZSgxKVxue1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTtcbn1cbiN4cFN3aXRjaCBhOmhvdmVyXG57XG4gIGNvbG9yOiAjMDBBNkZGO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jeHBTd2l0Y2ggPiBhLmFjdGl2ZVxue1xuICBjb2xvcjogIzAwQTZGRjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBhbmltYXRpb246IGJsaW5rZXIgMi41cyBsaW5lYXIgaW5maW5pdGU7XG59XG4jc2tpbGxzLWNlcnRzXG57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBjb2xvcjogd2hpdGU7XG59XG4jc2tpbGxzLWNlcnRzID4gaDMsXG4jdm9sdW50ZWVyID4gaDNcbntcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuI3NraWxscy1jZXJ0cyA+IC5za2lsbERhdGFcbntcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLyogZm9udC1zaXplOiAxNnB4OyAqL1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufVxuI3NraWxscy1jZXJ0cyA+IC5za2lsbERhdGE6bnRoLW9mLXR5cGUoMSkgPiB1bCA+IGxpXG57XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuI3NraWxscy1jZXJ0cyA+IC5za2lsbERhdGE6bnRoLW9mLXR5cGUoMilcbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3NraWxscy1jZXJ0cyA+IC5za2lsbERhdGE6bnRoLW9mLXR5cGUoMikgPiBzcGFuXG57XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG59XG4jdm9sdW50ZWVyXG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3ZvbFxue1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMzMwcHg7XG4gIC8qIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7ICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAyNjBweDtcbn1cbiN2b2x1bnRlZXIgLnZvbHVudGVlcmluZ1xue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiN2b2x1bnRlZXIgLnZvbHVudGVlcmluZyB1bFxue1xuICAvKiBwYWRkaW5nLWJvdHRvbTogMTAwcHg7ICovXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuI3ZvbHVudGVlciAudm9sdW50ZWVyaW5nIHVsIGxpXG57XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG59XG4vKiBQcm9mZXNzaW9uYWwgRXhwZXJpZW5jZSAqL1xuI3Byby14cFxue1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNydXRnZXJzID4gLmxvY2F0aW9uLFxuI2hhcnJpc29uID4gLmxvY2F0aW9uXG57XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbiNydXRnZXJzID4gLnBvc2l0aW9uLFxuI2hhcnJpc29uID4gLnBvc2l0aW9uXG57XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG4jcnV0Z2VycyA+IC5kZXNjcmlwdGlvbixcbiNoYXJyaXNvbiA+IC5kZXNjcmlwdGlvblxue1xuICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XG59XG4jcnV0Z2VycyA+IC5kZXNjcmlwdGlvbjpudGgtb2YtdHlwZSg1KSxcbiNydXRnZXJzID4gLmRlc2NyaXB0aW9uOm50aC1vZi10eXBlKDkpLFxuI2hhcnJpc29uID4gLmRlc2NyaXB0aW9uOm50aC1vZi10eXBlKDYpLFxuI2hhcnJpc29uID4gLmRlc2NyaXB0aW9uOm50aC1vZi10eXBlKDEwKSxcbiNoYXJyaXNvbiA+IC5kZXNjcmlwdGlvbjpudGgtb2YtdHlwZSgxMylcbntcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4jcHJvLXhwID4gLnByb1BpY1xue1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG59XG4jcHJvLXhwID4gLnByb1BpYyA+IGltZ1xue1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsMCwwLDAuNCk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cblxuXG5cblxuXG5cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo4MDBweClcbntcbiAgI3NraWxscy1jZXJ0cyA+IC5za2lsbERhdGFcbiAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC8qIGZvbnQtc2l6ZTogMTZweDsgKi9cbiAgfVxuICAjc2tpbGxzLWNlcnRzID4gLnNraWxsRGF0YTpudGgtb2YtdHlwZSgxKSA+IHVsID4gbGlcbiAge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gICNza2lsbHMtY2VydHMgPiAuc2tpbGxEYXRhOm50aC1vZi10eXBlKDIpXG4gIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgI3NraWxscy1jZXJ0cyA+IC5za2lsbERhdGE6bnRoLW9mLXR5cGUoMikgPiBzcGFuXG4gIHtcbiAgICBmb250LXNpemU6IDcwcHg7XG4gICAgbWFyZ2luOjMlIDUlO1xuICB9XG4gICN2b2x1bnRlZXJcbiAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAjdm9sXG4gIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAzNjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDI2MHB4O1xuICB9XG4gICN2b2x1bnRlZXIgLnZvbHVudGVlcmluZ1xuICB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgI3ZvbHVudGVlciAudm9sdW50ZWVyaW5nIHVsIGxpXG4gIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLyogTW9iaWxlIFN3aXRjaCEgKi9cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NjUwcHgpXG57XG4gIC5pbWFnZVxuICB7XG4gICAgd2lkdGg6IDU1cHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbiAgLnByb2plY3REYXRhXG4gIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAjZGF0ZUFycm93XG4gIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICByaWdodDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgI2RhdGVBcnJvdyBhXG4gIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIH1cbiAgI3NraWxscy1jZXJ0cyA+IC5za2lsbERhdGE6bnRoLW9mLXR5cGUoMilcbiAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAjc2tpbGxzLWNlcnRzID4gLnNraWxsRGF0YTpudGgtb2YtdHlwZSgyKSA+IHNwYW5cbiAge1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICBtYXJnaW46MTIlIDUlO1xuICB9XG4gICN2b2xcbiAge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDI2MHB4O1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo1NTBweClcbntcbiAgI3ZvbFxuICB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMzMwcHg7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjM4MHB4KVxue1xuICBoM1xuICB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICB9XG4gIC5wcm9qZWN0RGF0YSBoNVxuICB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDsgXG4gIH1cbiAgLnByb2plY3REYXRhIHBcbiAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAjZGF0ZUFycm93IHBcbiAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"portfolioContainer\">\n  <div class=\"section\">\n    <h3>Projects</h3>\n\n    <div id=\"projects\" *ngFor=\"let project of projects | reverse\" routerLink=\"/portfolio/{{project.projID}}\">\n      <div class=\"image\">\n        <img src=\"{{ project.projIcon }}\" alt=\"\">\n      </div>\n      <div class=\"projectData\">\n          <h5>{{ project.projTitle }}</h5>\n          <p> {{ project.projSummary }}</p>\n      </div>\n      <div id=\"dateArrow\">\n        <p> {{ project.projDate }}</p>\n        <a class=\"fas fa-chevron-right\"></a>\n      </div>\n    </div>\n    <hr id=\"projectLine\">\n  </div>\n\n  <div id=\"XP\" [ngSwitch]=\"xp\">\n    <div id=\"xpSwitch\">\n      <a id=\"skillsIcon\" class=\"fas fa-list-ul\" (click)=\"setXP('skills', $event)\" tooltip=\"Skills and Certificates\" placement=\"left\"></a>\n      <a id=\"volIcon\" class=\"fas fa-hands-helping\" (click)=\"setXP('volunteer', $event)\" tooltip=\"Volunteer Work\" placement=\"right\"></a>\n    </div>\n\n    <div id=\"skills-certs\" *ngSwitchCase=\"'skills'\" [@xpSwitch]>\n      <h3>Technical Skills</h3>\n      <div class=\"skillData\">\n        <ul>\n          <li>JavaScript</li>\n          <li>GraphQL/Apollo</li>\n          <li>MongoDB</li>\n          <li>React.js</li>\n          <li>PostgreSQL</li>\n          <li>Ruby on Rails</li>\n          <li>Node.js</li>\n          <li>jQuery</li>\n          <li>HTML5</li>\n          <li>CSS3</li>\n          <li>Amazon Web Services</li>\n          <li>Angular 7</li>\n          <li>p5.js</li>\n        </ul>\n      </div>\n      <div class=\"skillData\">\n        <span class=\"fab fa-html5\"></span>\n        <span class=\"fab fa-css3-alt\"></span>\n        <span class=\"fab fa-js-square\"></span>\n        <span class=\"fab fa-angular\"></span>\n        <span class=\"fab fa-aws\"></span>\n        <span class=\"fab fa-node-js\"></span>\n        <span class=\"fab fa-react\"></span>\n      </div>\n    </div>\n\n    <div class=\"volunteer\" id=\"volunteer\" *ngSwitchCase=\"'volunteer'\" [@xpSwitch]>\n      <h3>Volunteer Work</h3>\n        <div class=\"volunteering\">\n          <ul>\n            <li>Raised $1,500 for the Juvinile Diabetes Research Foundation October 2015 - Present</li>\n            <li>Helped Raise $912,143.47 for Rutgers Dance Marathon Spring 2016 and 2018</li>\n            <li>5 hours of Community Service per college semester</li>\n          </ul>\n\n        </div>\n        <carousel id=\"vol\">\n          <slide class=\"slidePic\">\n            <img src=\"assets/portfolio/experience/jrdf2015.png\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n          </slide>\n          <slide class=\"slidePic\">\n            <img src=\"assets/portfolio/experience/ftk2016.png\" alt=\"second slide\" style=\"display: block; width: 100%;\">\n          </slide>\n          <slide class=\"slidePic\">\n            <img src=\"assets/portfolio/experience/ftk2018.png\" alt=\"third slide\" style=\"display: block; width: 100%;\">\n          </slide>\n        </carousel>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");





var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(_setHeaders, _portfolioDataService) {
        this._setHeaders = _setHeaders;
        this._portfolioDataService = _portfolioDataService;
        this.projects = [];
        // switch for the skills and volunteer
        this.xp = "";
        // set page Title and page banner to Portfolio
        this._setHeaders.portfolioClick();
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._portfolioDataService.getPortfolioData()
            .subscribe(function (data) {
            _this.SetPortTitles(data);
        });
        this.xp = "skills";
        $("#skillsIcon").addClass("active");
    };
    PortfolioComponent.prototype.SetPortTitles = function (data) {
        // set portfolio data to portTitles
        this.projects = data['projects'];
        // console.log(this.cinemaData);
    };
    PortfolioComponent.prototype.setXP = function (xp, e) {
        this.xp = xp;
        var target = e.target || e.srcElement || e.currentTarget;
        var targetID = target.id;
        // console.log(targetID);
        $("#skillsIcon, #volIcon").removeClass("active");
        $("#" + targetID).addClass("active");
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('xpSwitch', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '!', opacity: '0' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(350)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(0)
                    ]),
                ])
            ],
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], src_app_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#projectContainer\n{\n  border-left: 1px solid rgba(255,255,255,0.4);\n  border-right: 1px solid rgba(255,255,255,0.4);\n  padding: 0 20px;\n  background-color: #004266;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  max-width: 960px;\n  margin: 0 auto;\n  display: block;\n  position: relative;\n}\n#projectContainer h3\n{\n  color: rgba(255,255,255,1);\n  margin-bottom: 20px;\n}\n.projectIcon,\n.projectEssay\n{\n  vertical-align: top;\n  margin-left: 30px;\n}\n.projectIcon\n{\n  width: 65px;\n  overflow: hidden;\n  float: left;\n  margin-right: 15px;\n}\n.projectIcon a img\n{\n  width: 100%;\n}\n.projectEssay\n{\n  color: rgba(255,255,255,.9);\n  padding-right: 25px;\n  position: relative;\n  display: block;\n}\n.projectEssay .git\n{\n  margin-top: -15px;\n}\n.projectEssay .git a\n{\n  padding: 8px;\n  font-size: 20px;\n  text-decoration: none;\n}\n.projectEssay .git a:hover\n{\n  cursor: pointer;\n}\n.carousel-caption\n{\n  color: white;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 7px;\n}\n#projectSlideshow\n{\n  width: 60%;\n  margin: auto;\n}\n/* Mobile Switch! */\n@media all and (max-width:650px)\n{\n  .projectEssay\n  {\n    padding-right: 15px;\n  }\n  .carousel-caption h5\n  {\n    font-size: 15px;\n  }\n  #projectSlideshow\n  {\n    width: 100%;\n    margin: auto;\n  }\n  h3\n  {\n    font-size: 25px;\n  }\n}\n@media all and (max-width: 380px)\n{\n  h3\n  {\n    font-size: 23px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsNENBQTRDO0VBQzVDLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQjtBQUNBOzs7RUFHRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsV0FBVztBQUNiO0FBQ0E7O0VBRUUsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBOztFQUVFLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsZUFBZTtBQUNqQjtBQUNBOztFQUVFLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQVVBLG1CQUFtQjtBQUNuQjs7RUFFRTs7SUFFRSxtQkFBbUI7RUFDckI7RUFDQTs7SUFFRSxlQUFlO0VBQ2pCO0VBQ0E7O0lBRUUsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBOztJQUVFLGVBQWU7RUFDakI7QUFDRjtBQU1BOztFQUVFOztJQUVFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2plY3RDb250YWluZXJcbntcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0MjY2O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI3Byb2plY3RDb250YWluZXIgaDNcbntcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucHJvamVjdEljb24sXG4ucHJvamVjdEVzc2F5XG57XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuLnByb2plY3RJY29uXG57XG4gIHdpZHRoOiA2NXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLnByb2plY3RJY29uIGEgaW1nXG57XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByb2plY3RFc3NheVxue1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOSk7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucHJvamVjdEVzc2F5IC5naXRcbntcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG4ucHJvamVjdEVzc2F5IC5naXQgYVxue1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnByb2plY3RFc3NheSAuZ2l0IGE6aG92ZXJcbntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcm91c2VsLWNhcHRpb25cbntcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbiNwcm9qZWN0U2xpZGVzaG93XG57XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuXG5cblxuXG5cblxuXG5cbi8qIE1vYmlsZSBTd2l0Y2ghICovXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjY1MHB4KVxue1xuICAucHJvamVjdEVzc2F5XG4gIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG4gIC5jYXJvdXNlbC1jYXB0aW9uIGg1XG4gIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgI3Byb2plY3RTbGlkZXNob3dcbiAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICBoM1xuICB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG59XG5cblxuXG5cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMzgwcHgpXG57XG4gIGgzXG4gIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"projectContainer\">\n\n  <h3>{{ fullProject.projTitle }}</h3>\n\n  <div class=\"projectIcon\">\n    <a href=\"{{fullProject.projURL}}\" routerLink=\"/{{fullProject.routeURL}}\" target=\"_blank\"><img src=\"{{ fullProject.projIcon }}\" alt=\"\"></a>\n  </div>\n  <div class=\"projectEssay\">\n    <p *ngFor=\"let essay of fullProject.projEssay\">{{essay.projParagraph}}\n    </p>\n    <p class=\"url\"><a href=\"{{fullProject.projURL}}\" routerLink=\"/{{fullProject.routeURL}}\" target=\"_blank\">Click here</a> to view the project</p>\n    <p *ngIf=\"fullProject.gitURL != 'false'\" class=\"git\">Source code: <a class=\"fab fa-github\" href=\"{{fullProject.gitURL}}\" target=\"_blank\"></a></p>\n  </div>\n\n  <div id=\"projectSlideshow\">\n    <carousel [noPause]=\"false\">\n      <slide *ngFor=\"let slide of fullProject.slideShow\">\n        <img src=\"{{ slide.slide }}\" alt=\"image slide\" style=\"display: block; width: 100%;\">\n        <div class=\"carousel-caption\">\n          <h5>{{ slide.imgTitle }}</h5>\n        </div>\n      </slide>\n    </carousel>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");





var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(route, _setHeaders, _projectDataService) {
        this.route = route;
        this._setHeaders = _setHeaders;
        this._projectDataService = _projectDataService;
        // interval for the slideshow
        // myInterval = 5000;
        this.noPause = false;
        this.fullProject = [];
        // sets the header to the portfolio background
        this._setHeaders.portfolioClick();
        // sets the title to projects
        this._setHeaders.pageTitle = "Project";
    }
    ProjectComponent.prototype.ngOnInit = function () {
        // takes a snapshot from the URL
        var id = +this.route.snapshot.paramMap.get('id');
        // console.log(id);
        this.getProjectById(id);
    };
    ProjectComponent.prototype.getProjectById = function (id) {
        var _this = this;
        // grab the data from the JSON
        this._projectDataService.getPortfolioData()
            .subscribe(function (data) {
            // sends the data and the Id to be computed on SetOptionsData
            _this.SetOptionsData(data, id);
        });
    };
    ProjectComponent.prototype.SetOptionsData = function (data, id) {
        // gets the blog objects and computes it accordingly to the array number.
        var project = data['projects'];
        this.fullProject = project[id - 1];
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], src_app_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/reverse.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/reverse.pipe.ts ***!
  \*********************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value, args) {
        return value.slice().reverse();
    };
    ReversePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pavs/pavel-two/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map