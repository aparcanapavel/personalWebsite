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

module.exports = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n@import url(\"//cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css\");\n@import url(\"https://use.fontawesome.com/releases/v5.0.9/css/all.css\");\n@import url(\"https://fonts.googleapis.com/css?family=Caveat\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml {\n  scroll-behavior: smooth;\n}\n#backgound\n{\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top:0px;\n  z-index: -1;\n  background-color: #485E70;\n}\n#nav-container{\n  background-color: #2F3E4A;\n}\n#inner-nav-container{\n  max-width: 960px;\n  margin: 0 auto;\n}\n#page-logo{\n  position: relative;\n  width: 70px;\n  height: 70px;\n  padding: 10px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding-top: 13px;\n}\n#page-logo:focus{\n  outline: none;\n}\n#main-menu > input,\n#main-menu > label\n{\n  display: none;\n  will-change: border-color, color, background-color;\n}\n#main-menu\n{\n  z-index: 1;\n  font-family: 'Heebo', sans-serif;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  position: relative;\n  top: 3px;\n}\n#pages\n{\n  position: relative;\n  font-family: sans-serif;\n  margin-right: 85px;\n  float: right;\n  margin-top: -26px;\n  z-index: 2;\n}\n#pages > a\n{\n  display: inline-block;\n  margin-right: 0px;\n  padding: 0 13px;\n  padding-left: 10px;\n  padding-bottom: 5px;\n  border-bottom: 3px solid transparent;\n  font-size: 15px;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  transition: border-bottom 0.5s;\n}\n#pages > a > i\n{\n  padding-right: 3px;\n  text-align: center;\n  font-size: 17px;\n}\n#pages > a:nth-of-type(3)\n{\n  margin-right: 0px;\n}\n#pages > a:hover\n{\n  text-decoration: none;\n  cursor: pointer;\n  color: #89B3D6;\n  border-bottom: 3px solid #89B3D6;\n  transition: 0.4s;\n}\n#pages > a.active\n{\n  text-decoration: none;\n  color: #89B3D6;\n  border-bottom: 3px solid #89B3D6;\n}\n#banners\n{\n  width: 100%;\n  position: relative;\n  left: 0px;\n  z-index: 0;\n  margin-top: -3px;\n  max-height: 550px;\n  overflow: hidden;\n  display: flex;\n  align-items: flex-end;\n}\n#banners > img\n{\n  width: 100%;\n  display: block;\n}\n#pageTitle\n{\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n  bottom: 40px;\n  padding-right: 20px;\n  padding-top: 20px;\n}\n#pageTitle > h3\n{\n  position: relative;\n  max-width: 960px;\n  margin: auto;\n  color: white;\n  text-align: right;\n}\n#backgroundTrans\n{\n  max-width: 960px;\n  margin: auto;\n  padding: 5px;\n  position: relative;\n  display: block;\n  background-image: linear-gradient(#002940 40%, #004266);\n}\n.welcome-header{\n  width: 100%;\n  position: relative;\n  padding: 150px 50px;\n  transition: opacity 0.3s;\n}\n.welcome-header h3,\n.welcome-header > p{\n  color: white;\n  width: auto;\n  text-align: center;\n  font-family: 'Questrial', sans-serif;\n}\n.welcome-header h3{\n  font-size: 65px;\n}\n.welcome-header > p {\n  font-size: 20px;\n  font-family: 'Heebo', sans-serif;\n}\n.to-projects{\n  color: white;\n  text-align: center;\n  border: 1px solid white;\n  max-width: 150px;\n  padding: 0px 20px;\n  font-family: 'Heebo', sans-serif;\n  border-radius: 10px;\n  position: relative;\n  margin: 0 auto;\n  bottom: -60px;\n  box-sizing: border-box;\n  transition: background-color 0.3s;\n  cursor: pointer;\n}\n@-webkit-keyframes borderBlink {\n50% { border-color: #89B3D6; }\n}\n@keyframes borderBlink {\n50% { border-color: #89B3D6; }\n}\n@-webkit-keyframes colorBlink {\n50% { color: #89B3D6; }\n}\n@keyframes colorBlink {\n50% { color: #89B3D6; }\n}\n.to-projects:hover{\n  color: black;\n  background-color: whitesmoke;\n}\n.to-projects i {\n  -webkit-animation: colorBlink 2.5s linear infinite;\n          animation: colorBlink 2.5s linear infinite;\n}\n#container2\n{\n  position: relative;\n  display: block;\n  width: 100%;\n  margin: 0 auto;\n  z-index: 1;\n  overflow: visible;\n}\n#footer\n{\n  position: relative;\n  width: 100%;\n  color: white;\n  z-index: 1;\n}\n#quickLinks\n{\n  width: 100%;\n  font-family: sans-serif;\n  text-align: center;\n}\n#footer > h3\n{\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-family: sans-serif;\n  position: relative;\n}\n#quickLinks > li\n{\n  width: 33%;\n  color: white;\n  list-style-type: none;\n  display: inline-block;\n  text-align: center;\n}\n#quickLinks > li > a\n{\n  width: 100%;\n  color: white;\n  text-decoration:none;\n  padding-left: 0px;\n  transition: color 0.3s;\n}\n#quickLinks > li > a:hover\n{\n  cursor: pointer;\n  color: #89B3D6;\n  transition: color 0.4s;\n}\n#signature\n{\n  text-align: right;\n  padding-right: 5px;\n  color: white;\n  font-family: sans-serif;\n  font-size: 13px;\n}\n#footer-background\n{\n  display: block;\n  position: absolute;\n  height: 120px;\n  background-color: rgba(0,0,0,0.2);\n  width: 100%;\n  left: 0px;\n  z-index: -1;\n}\n@media all and (max-width:999px)\n{\n  #container2\n  {\n    position: relative;\n    display: block;\n    width: 100%;\n    margin: 0 auto;\n    z-index: 1;\n    padding: 0 0px;\n    overflow: visible;\n  }\n}\n/* Mobile Switch! */\n@media all and (max-width:650px)\n{\n  #page-logo\n  {\n    margin: 0 auto;\n    width: auto;\n  }\n\n  .welcome-header{\n    width: 100%;\n    position: relative;\n    padding: 50px 50px;\n    height: 250px;\n  }\n\n  .welcome-header h3,\n  .welcome-header > p{\n    color: white;\n    width: auto;\n    text-align: center;\n    font-family: 'Questrial', sans-serif;\n  }\n\n  .welcome-header h3{\n    font-size: 45px;\n  }\n\n  .welcome-header > p {\n    font-size: 15px;\n    font-family: 'Heebo', sans-serif;\n  }\n\n  .to-projects{\n    color: white;\n    text-align: center;\n    border: 1px solid white;\n    max-width: 150px;\n    padding: 0px 20px;\n    font-family: 'Heebo', sans-serif;\n    border-radius: 10px;\n    position: relative;\n    margin: 0 auto;\n    bottom: -30px;\n    box-sizing: border-box;\n    transition: background-color 0.3s;\n    cursor: pointer;\n    font-size: 15px;\n  }\n\n  #quickContact{\n    position: relative;\n    z-index: 2;\n  }\n  #main-menu{\n    display: block;\n    position: relative;\n    top: 0px;\n    left: 0px;\n    background-color: blue;\n    z-index: 2;\n  }\n\n  #main-menu > label\n  {\n    display: block;\n    position: absolute;\n    top: 0px;\n    left: 5px;\n    margin-top: -55px;\n    font-size: 23px;\n    color: white;\n    padding: 8px;\n    border: 1px solid white;\n    border-radius: 5px;\n    z-index: 1;\n    cursor: pointer;\n    transition: border-color, color, background-color 0.4s;\n  }\n  #main-menu label.active\n  {\n    border-color: #89B3D6;\n    color: #89B3D6;\n    background-color: rgba(128, 128, 128, 0.62);\n  }\n  #pages\n  {\n    position: absolute;\n    background-color: black;\n    margin-right: 0px;\n    margin-top: 0px;\n    z-index: 2;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    transition: -webkit-transform 0.33s;\n    transition: transform 0.33s;\n    transition: transform 0.33s, -webkit-transform 0.33s;\n  }\n  #pages > a\n  {\n    display: block;\n    margin-right: 0px;\n    padding: 10px 13px;\n    padding-left: 10px;\n    border-bottom: 3px solid transparent;\n    font-size: 15px;\n    text-align: left;\n    text-decoration: none;\n    transition: border-bottom 0.5s;\n  }\n  #pages > a:nth-of-type(3)\n  {\n    padding-left: 13px;\n    border-bottom-right-radius: 3px;\n  }\n  #pages > a > i\n  {\n    padding-right: 3px;\n    text-align: center;\n    font-size: 17px;\n  }\n  #pages.active\n  {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    transition: -webkit-transform 0.4s;\n    transition: transform 0.4s;\n    transition: transform 0.4s, -webkit-transform 0.4s;\n  }\n  #pageTitle\n  {\n    bottom: 30px;\n    padding-right: 20px;\n    padding-top: 20px;\n  }\n  #pageTitle > h3\n  {\n    font-size: 25px;\n  }\n\n  #footer\n  {\n    position: relative;\n    width: 100%;\n    color: white;\n    z-index: 1;\n  }\n  #quickLinks\n  {\n    width: 100%;\n    font-family: sans-serif;\n    text-align: center;\n  }\n  #footer > h3\n  {\n    text-align: center;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    font-family: sans-serif;\n    position: relative;\n    font-size: 20px;\n  }\n\n  #quickLinks > li\n  {\n    width: 50%;\n    color: white;\n    list-style-type: none;\n    display: inline-block;\n    text-align: center;\n  }\n  #signature\n  {\n    text-align: right;\n    padding-right: 5px;\n    color: white;\n    font-family: sans-serif;\n    font-size: 10px;\n  }\n\n  #footer-background\n  {\n    display: block;\n    position: absolute;\n    height: 135px;\n    background-color: rgba(0,0,0,0.2);\n    width: 100%;\n    left: 0px;\n    z-index: -1;\n  }\n}\n@media all and (max-width:500px)\n{\n  #pageTitle\n  {\n    bottom: 20px;\n    padding-right: 20px;\n    padding-top: 20px;\n  }\n}\n@media all and (max-width:380px)\n{\n  #name,\n  #header p\n  {\n    display: inline-block;\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    margin-top: 30px;\n    left: 0px;\n  }\n  #name\n  {\n    font-size: 23px;\n  }\n  #header > p\n  {\n    margin-top: 60px;\n    font-size: 13px;\n  }\n  #pageTitle > h3\n  {\n    font-size: 23px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQXNFO0FBQ3RFLDJFQUEyRTtBQUMzRSxzRUFBc0U7QUFDdEUsNkRBQTZEO0FBQzdEO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBOztFQUVFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7OztFQUdFLGFBQWE7RUFDYixrREFBa0Q7QUFDcEQ7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjtBQUNBOztFQUVFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUFDaEM7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxxQkFB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InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIik7XG5AaW1wb3J0IHVybChcIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvdG9yYW1hLzQuNi40L2ZvdG9yYW1hLmNzc1wiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjAuOS9jc3MvYWxsLmNzc1wiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNhdmVhdFwiKTtcbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbiNiYWNrZ291bmRcbntcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6MHB4O1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NUU3MDtcbn1cblxuI25hdi1jb250YWluZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyRjNFNEE7XG59XG5cbiNpbm5lci1uYXYtY29udGFpbmVye1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuI3BhZ2UtbG9nb3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy10b3A6IDEzcHg7XG59XG5cbiNwYWdlLWxvZ286Zm9jdXN7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNtYWluLW1lbnUgPiBpbnB1dCxcbiNtYWluLW1lbnUgPiBsYWJlbFxue1xuICBkaXNwbGF5OiBub25lO1xuICB3aWxsLWNoYW5nZTogYm9yZGVyLWNvbG9yLCBjb2xvciwgYmFja2dyb3VuZC1jb2xvcjtcbn1cbiNtYWluLW1lbnVcbntcbiAgei1pbmRleDogMTtcbiAgZm9udC1mYW1pbHk6ICdIZWVibycsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG59XG4jcGFnZXNcbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXJpZ2h0OiA4NXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC0yNnB4O1xuICB6LWluZGV4OiAyO1xufVxuI3BhZ2VzID4gYVxue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBwYWRkaW5nOiAwIDEzcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC41cztcbn1cbiNwYWdlcyA+IGEgPiBpXG57XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4jcGFnZXMgPiBhOm50aC1vZi10eXBlKDMpXG57XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuI3BhZ2VzID4gYTpob3Zlclxue1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM4OUIzRDY7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjODlCM0Q2O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuI3BhZ2VzID4gYS5hY3RpdmVcbntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzg5QjNENjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM4OUIzRDY7XG59XG5cbiNiYW5uZXJzXG57XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbiAgbWF4LWhlaWdodDogNTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbiNiYW5uZXJzID4gaW1nXG57XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNwYWdlVGl0bGVcbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbiNwYWdlVGl0bGUgPiBoM1xue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI2JhY2tncm91bmRUcmFuc1xue1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMDI5NDAgNDAlLCAjMDA0MjY2KTtcbn1cblxuLndlbGNvbWUtaGVhZGVye1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNTBweCA1MHB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG59XG5cbi53ZWxjb21lLWhlYWRlciBoMyxcbi53ZWxjb21lLWhlYWRlciA+IHB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdRdWVzdHJpYWwnLCBzYW5zLXNlcmlmO1xufVxuXG4ud2VsY29tZS1oZWFkZXIgaDN7XG4gIGZvbnQtc2l6ZTogNjVweDtcbn1cblxuLndlbGNvbWUtaGVhZGVyID4gcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdIZWVibycsIHNhbnMtc2VyaWY7XG59XG5cbi50by1wcm9qZWN0c3tcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgZm9udC1mYW1pbHk6ICdIZWVibycsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvdHRvbTogLTYwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5Aa2V5ZnJhbWVzIGJvcmRlckJsaW5rIHtcbjUwJSB7IGJvcmRlci1jb2xvcjogIzg5QjNENjsgfVxufVxuXG5Aa2V5ZnJhbWVzIGNvbG9yQmxpbmsge1xuNTAlIHsgY29sb3I6ICM4OUIzRDY7IH1cbn1cblxuLnRvLXByb2plY3RzOmhvdmVye1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi50by1wcm9qZWN0cyBpIHtcbiAgYW5pbWF0aW9uOiBjb2xvckJsaW5rIDIuNXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5cblxuI2NvbnRhaW5lcjJcbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiAxO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuXG4jZm9vdGVyXG57XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTtcbn1cbiNxdWlja0xpbmtzXG57XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2Zvb3RlciA+IGgzXG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jcXVpY2tMaW5rcyA+IGxpXG57XG4gIHdpZHRoOiAzMyU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNxdWlja0xpbmtzID4gbGkgPiBhXG57XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbn1cbiNxdWlja0xpbmtzID4gbGkgPiBhOmhvdmVyXG57XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM4OUIzRDY7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XG59XG4jc2lnbmF0dXJlXG57XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuI2Zvb3Rlci1iYWNrZ3JvdW5kXG57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogLTE7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo5OTlweClcbntcbiAgI2NvbnRhaW5lcjJcbiAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB6LWluZGV4OiAxO1xuICAgIHBhZGRpbmc6IDAgMHB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuLyogTW9iaWxlIFN3aXRjaCEgKi9cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NjUwcHgpXG57XG4gICNwYWdlLWxvZ29cbiAge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgLndlbGNvbWUtaGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA1MHB4IDUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxuXG4gIC53ZWxjb21lLWhlYWRlciBoMyxcbiAgLndlbGNvbWUtaGVhZGVyID4gcHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnUXVlc3RyaWFsJywgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC53ZWxjb21lLWhlYWRlciBoM3tcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gIH1cblxuICAud2VsY29tZS1oZWFkZXIgPiBwIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdIZWVibycsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAudG8tcHJvamVjdHN7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvdHRvbTogLTMwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gICNxdWlja0NvbnRhY3R7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgI21haW4tbWVudXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gICNtYWluLW1lbnUgPiBsYWJlbFxuICB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAtNTVweDtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yLCBjb2xvciwgYmFja2dyb3VuZC1jb2xvciAwLjRzO1xuICB9XG4gICNtYWluLW1lbnUgbGFiZWwuYWN0aXZlXG4gIHtcbiAgICBib3JkZXItY29sb3I6ICM4OUIzRDY7XG4gICAgY29sb3I6ICM4OUIzRDY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjYyKTtcbiAgfVxuICAjcGFnZXNcbiAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zM3M7XG4gIH1cbiAgI3BhZ2VzID4gYVxuICB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZzogMTBweCAxM3B4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC41cztcbiAgfVxuICAjcGFnZXMgPiBhOm50aC1vZi10eXBlKDMpXG4gIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgfVxuICAjcGFnZXMgPiBhID4gaVxuICB7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cbiAgI3BhZ2VzLmFjdGl2ZVxuICB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcbiAgfVxuICAjcGFnZVRpdGxlXG4gIHtcbiAgICBib3R0b206IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuICAjcGFnZVRpdGxlID4gaDNcbiAge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gICNmb290ZXJcbiAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAjcXVpY2tMaW5rc1xuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICNmb290ZXIgPiBoM1xuICB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAjcXVpY2tMaW5rcyA+IGxpXG4gIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAjc2lnbmF0dXJlXG4gIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gICNmb290ZXItYmFja2dyb3VuZFxuICB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo1MDBweClcbntcbiAgI3BhZ2VUaXRsZVxuICB7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjM4MHB4KVxue1xuICAjbmFtZSxcbiAgI2hlYWRlciBwXG4gIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgfVxuICAjbmFtZVxuICB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICB9XG4gICNoZWFkZXIgPiBwXG4gIHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAjcGFnZVRpdGxlID4gaDNcbiAge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"backgound\"></div>\n\n<nav id=\"nav-container\">\n  <div id=\"inner-nav-container\">\n    <img routerLink=\"/\" id=\"page-logo\" src=\"../assets/newLogoWhite.png\" alt=\"\">\n    <div id=\"main-menu\">\n      <label id=\"nav\" class=\"fas fa-bars\" (click)=\"toggleMenu()\"></label>\n    \n      <div id=\"pages\">\n        <a id=\"pg2\" routerLink=\"/\"><i class=\"fas fa-laptop-code\"></i>Portfolio</a>\n        <a id=\"pg3\" routerLink=\"/contact\" (click)=\"contactClick()\"><i class=\"fas fa-address-book\"></i>Contact</a>\n      </div>\n    </div>\n  </div>  \n</nav>\n\n<div id=\"container2\">\n  <div [@routeAnimations]=\"prepareRoute(outlet)\" class=\"content\">\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n  </div>\n\n  <div id=\"footer-background\"></div>\n  <div id=\"footer\">\n    <h3>QUICK LINKS</h3>\n    <div id=\"quickLinks\">\n      <li>\n        <a routerLink=\"/\">Portfolio</a>\n      </li>\n      <li>\n        <a routerLink=\"/contact\">Contact</a>\n      </li>\n      <li>\n        <a href=\"assets/resume.pdf\" target=\"_blank\">Resume</a>\n      </li>\n      <li>\n        <a href=\"https://github.com/aparcanapavel\" target=\"_blank\">GitHub</a>\n      </li>\n      <li>\n        <a href=\"https://www.linkedin.com/in/pavel-aparcana/\" target=\"_blank\">LinkedIn</a>\n      </li>\n      <li>\n        <a href=\"https://angel.co/pavel-andrei-aparcana\">AngelList</a>\n      </li>\n    </div>\n    <div id=\"signature\">\n      <p>Developed by Pavel Aparcana</p>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    // swich for the banners. Must be 3x7(18in by 42in)
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.scrollToProjects = function () {
        var portfolio = document.querySelector('#portfolioContainer');
        if (portfolio) {
            portfolio.scrollIntoView({
                behavior: 'smooth'
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    AppComponent.prototype.toggleMenu = function () {
        $("#main-menu label, #pages").toggleClass("active");
    };
    AppComponent.prototype.homeClick = function () {
        this.removeActive();
        $("#pg1").addClass("active");
    };
    AppComponent.prototype.projectClick = function () {
        this.removeActive();
        $("#pg2").addClass("active");
    };
    AppComponent.prototype.portfolioClick = function () {
        this.removeActive();
        $("#pg2").addClass("active");
    };
    AppComponent.prototype.contactClick = function () {
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
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: '0',
                            height: '!'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(100)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: '1',
                            position: 'absolute',
                            height: '!'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(10)
                    ]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('routeAnimations', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('1=>2, 1=>4, 2=>4, 3=>4', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(100%)', opacity: '0' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0
                        })),
                        // animate the leave page away
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s cubic-bezier(.35,0,.25,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(-100%)', opacity: '0' })),
                            ]),
                            // and now reveal the enter
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s cubic-bezier(.35,0,.25,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)', opacity: '0' }))),
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "#blog-container-background{\n  width: 100%;\n  font-family: 'Heebo', sans-serif;\n}\n\n#blogContainer{\n  padding: 0 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  max-width: 960px;\n  margin: 0 auto;\n}\n\n.blogImage\n{\n  width: 60%;\n  position: relative;\n  display: block;\n  margin: auto;\n}\n\n.blogImage img\n{\n  width: 100%;\n}\n\nh3,\n#blogContainer p\n{\n  position: relative;\n  width: 100%;\n  text-align: center;\n  color: white;\n}\n\nh3\n{\n  margin-top: 10px;\n}\n\n#blogContainer p\n{\n  color: rgba(255, 255, 255, 0.6);\n}\n\n#blogContainer .blogEssay p\n{\n  color: rgba(255, 255, 255, 0.8);\n  text-align: left;\n}\n\n#blogContainer .blogEssay p span\n{\n  font-size: 30px;\n  color: white;\n  margin-bottom: 0px;\n  font-weight: bold;\n}\n\n.paragraphImage\n{\n  width: 30%;\n  margin: auto;\n}\n\n.paragraphImage img\n{\n  width: 100%;\n}\n\n#blogContainer .blogEssay .imageCap\n{\n  text-align: center;\n  color: rgba(255, 255, 255, 0.4);font-size: 11px;\n}\n\n.sectionBreak\n{\n  width: 20%;\n  background-color: white;\n}\n\n.sectionTitle\n{\n  color: rgba(255, 255, 255, 1);\n  padding-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBQ0E7O0VBRUUsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUNBOztFQUVFLFdBQVc7QUFDYjs7QUFDQTs7O0VBR0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFDQTs7RUFFRSwrQkFBK0I7QUFDakM7O0FBQ0E7O0VBRUUsK0JBQStCO0VBQy9CLGdCQUFnQjtBQUNsQjs7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBQ0E7O0VBRUUsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7O0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLCtCQUErQixDQUFDLGVBQWU7QUFDakQ7O0FBQ0E7O0VBRUUsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFDQTs7RUFFRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmxvZy1jb250YWluZXItYmFja2dyb3VuZHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiAnSGVlYm8nLCBzYW5zLXNlcmlmO1xufVxuXG4jYmxvZ0NvbnRhaW5lcntcbiAgcGFkZGluZzogMCAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmJsb2dJbWFnZVxue1xuICB3aWR0aDogNjAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG4uYmxvZ0ltYWdlIGltZ1xue1xuICB3aWR0aDogMTAwJTtcbn1cbmgzLFxuI2Jsb2dDb250YWluZXIgcFxue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmgzXG57XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4jYmxvZ0NvbnRhaW5lciBwXG57XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG4jYmxvZ0NvbnRhaW5lciAuYmxvZ0Vzc2F5IHBcbntcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNibG9nQ29udGFpbmVyIC5ibG9nRXNzYXkgcCBzcGFuXG57XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBhcmFncmFwaEltYWdlXG57XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5wYXJhZ3JhcGhJbWFnZSBpbWdcbntcbiAgd2lkdGg6IDEwMCU7XG59XG4jYmxvZ0NvbnRhaW5lciAuYmxvZ0Vzc2F5IC5pbWFnZUNhcFxue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7Zm9udC1zaXplOiAxMXB4O1xufVxuLnNlY3Rpb25CcmVha1xue1xuICB3aWR0aDogMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zZWN0aW9uVGl0bGVcbntcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"blog-container-background\">\n  <div id=\"blogContainer\">\n    <div class=\"blogImage\">\n      <img src=\"{{ blog.blogImage }}\" alt=\"\">\n    </div>\n    <h3>{{ blog.blogTitle }}</h3>\n    <p>{{ blog.blogDate }}</p>\n  \n    <div class=\"blogEssay\" *ngFor=\"let essay of blog.blogEssay\">\n      <hr class=\"sectionBreak\" *ngIf=\"essay.sectionBreak == 'true'\">\n      <div class=\"paragraphImage\" *ngIf=\"essay.paragraphImg != 'false'\">\n        <img src=\"{{ essay.paragraphImg }}\" alt=\"\">\n      </div>\n      <p class=\"imageCap\" *ngIf=\"essay.imageCaption != 'false'\">{{essay.imageCaption}}</p>\n      <h5 class=\"sectionTitle\" *ngIf=\"essay.sectionTitle != 'false'\"><i>{{essay.sectionTitle}}</i></h5>\n      <p><span *ngIf=\"essay.firstLetter != 'false'\">{{ essay.firstLetter }}</span>{{essay.blogParagraph}}</p>\n    </div>\n  </div>\n</section>\n"

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

module.exports = "#contactContainer{\n  padding: 0 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  max-width: 960px;\n  margin: 0 auto;\n  font-family: 'Heebo', sans-serif;\n}\n#myPicture\n{\n  width: 20%;\n  border-radius: 150px;\n  overflow: hidden;\n  border: 3px solid white;\n  margin: auto;\n}\n#myPicture img\n{\n  width: 100%;\n}\n#contactLinks\n{\n  display: block;\n  position: relative;\n  width: 100%;\n  text-align: center;\n}\n.quick-contact-link{\n  color: #89B3D6;\n  transition: color 0.3s;\n  text-decoration: none;\n}\n.quick-contact-link:hover{\n  color: rgb(170, 193, 212);\n}\n.quick-contact-link:active{\n  color: rgb(107, 142, 170)\n}\n#contactLinks span\n{\n  width: 50%;\n  display: inline-block;\n  color: white;\n}\n.horizontalLine\n{\n  width: 90%;\n  background-color: white;\n}\n#blog\n{\n  display: block;\n  position: relative;\n  width: 100%;\n  padding: 10px;\n  max-width: 960px;\n  margin: 0 auto;\n  font-family: 'Heebo', sans-serif;\n}\n#blog-background-cont{\n  width: 100%;\n  background-color: #607E96;\n}\n#blog h3\n{\n  color: white;\n  font-weight: 700;\n}\n.blogPost\n{\n  width: 33%;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  padding: 5px 10px;\n  vertical-align: top;\n}\n.blogImg\n{\n  z-index: 1;\n  /* height: 200px; */\n  border: 1px solid black;\n  position: relative;\n  overflow: hidden;\n  transition: border 0.4s;\n}\n.blogImg:hover\n{\n  border: 1px solid white;\n}\n.blogImg img\n{\n  width: 100%;\n  overflow: hidden;\n  z-index: 0;\n  display: block;\n}\n.blogImg p\n{\n  z-index: 0;\n  background: linear-gradient( transparent 1%, black);\n  position: absolute;\n  width: 100%;\n  margin: 0px;\n  margin-top: -23px;\n  color:white;\n  text-align: right;\n  padding-right: 3px;\n}\n.blogPost a\n{\n  color: white;\n  text-decoration: none;\n  text-align: center;\n}\n.blogPost a h5{\n  font-size: 19px;\n  padding: 1px;\n}\n.about-me-contact{\n  position: relative;\n  display: block;\n  color: white;\n  padding: 10px 50px;\n}\n.about-me-contact h4 {\n  text-align: center;\n  border-bottom: 1px solid whitesmoke;\n  padding: 10px;\n  width: 40%;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n.about-me-contact p {\n  padding: 0px 40px;\n}\n/* Mobile Switch! */\n@media all and (max-width:650px)\n{\n  #myPicture\n  {\n    min-width: 115px;\n  }\n}\n@media all and (max-width:550px)\n{\n  #contactLinks\n  {\n    padding-top: 10px;\n  }\n  #contactLinks span\n  {\n    width: 100%;\n    display: block;\n    color: white;\n  }\n  .blogPost\n  {\n    width: 50%;\n    display: inline-block;\n    padding: 5px 10px;\n  }\n\n  .about-me-contact{\n    position: relative;\n    display: block;\n    color: white;\n    padding: 10px 0px;\n  }\n\n  .about-me-contact p {\n    padding: 0px 10px;\n  }\n}\n@media all and (max-width: 380px)\n{\n  h3\n  {\n    font-size: 23px;\n  }\n  h5\n  {\n    font-size: 18px;\n  }\n  .blogPost\n  {\n    width: 90%;\n    display: block;\n    margin: auto;\n    padding: 5px 10px;\n  }\n  .about-me-contact h4 {\n    text-align: center;\n    border-bottom: 1px solid whitesmoke;\n    padding: 10px;\n    width: 60%;\n    margin: 0 auto;\n    margin-bottom: 20px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdDQUFnQztBQUNsQztBQUNBOztFQUVFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7QUFDQTs7RUFFRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFO0FBQ0Y7QUFFQTs7RUFFRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDtBQUNBOztFQUVFLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7QUFDQTs7RUFFRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QjtBQUNBOztFQUVFLHVCQUF1QjtBQUN6QjtBQUNBOztFQUVFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsbURBQW1EO0VBQ25ELGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLFVBQVU7RUFDVixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFRQSxtQkFBbUI7QUFDbkI7O0VBRUU7O0lBRUUsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFNQTs7RUFFRTs7SUFFRSxpQkFBaUI7RUFDbkI7RUFDQTs7SUFFRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7RUFDZDtFQUNBOztJQUVFLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFRQTs7RUFFRTs7SUFFRSxlQUFlO0VBQ2pCO0VBQ0E7O0lBRUUsZUFBZTtFQUNqQjtFQUNBOztJQUVFLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhY3RDb250YWluZXJ7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1mYW1pbHk6ICdIZWVibycsIHNhbnMtc2VyaWY7XG59XG4jbXlQaWN0dXJlXG57XG4gIHdpZHRoOiAyMCU7XG4gIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuI215UGljdHVyZSBpbWdcbntcbiAgd2lkdGg6IDEwMCU7XG59XG4jY29udGFjdExpbmtzXG57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5xdWljay1jb250YWN0LWxpbmt7XG4gIGNvbG9yOiAjODlCM0Q2O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5xdWljay1jb250YWN0LWxpbms6aG92ZXJ7XG4gIGNvbG9yOiByZ2IoMTcwLCAxOTMsIDIxMik7XG59XG5cbi5xdWljay1jb250YWN0LWxpbms6YWN0aXZle1xuICBjb2xvcjogcmdiKDEwNywgMTQyLCAxNzApXG59XG5cbiNjb250YWN0TGlua3Mgc3Bhblxue1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5ob3Jpem9udGFsTGluZVxue1xuICB3aWR0aDogOTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiNibG9nXG57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1mYW1pbHk6ICdIZWVibycsIHNhbnMtc2VyaWY7XG59XG5cbiNibG9nLWJhY2tncm91bmQtY29udHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdFOTY7XG59XG4jYmxvZyBoM1xue1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uYmxvZ1Bvc3RcbntcbiAgd2lkdGg6IDMzJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLmJsb2dJbWdcbntcbiAgei1pbmRleDogMTtcbiAgLyogaGVpZ2h0OiAyMDBweDsgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuNHM7XG59XG4uYmxvZ0ltZzpob3Zlclxue1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cbi5ibG9nSW1nIGltZ1xue1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYmxvZ0ltZyBwXG57XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggdHJhbnNwYXJlbnQgMSUsIGJsYWNrKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IC0yM3B4O1xuICBjb2xvcjp3aGl0ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5ibG9nUG9zdCBhXG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ibG9nUG9zdCBhIGg1e1xuICBmb250LXNpemU6IDE5cHg7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLmFib3V0LW1lLWNvbnRhY3R7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCA1MHB4O1xufVxuXG4uYWJvdXQtbWUtY29udGFjdCBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYWJvdXQtbWUtY29udGFjdCBwIHtcbiAgcGFkZGluZzogMHB4IDQwcHg7XG59XG5cblxuXG5cblxuXG5cbi8qIE1vYmlsZSBTd2l0Y2ghICovXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjY1MHB4KVxue1xuICAjbXlQaWN0dXJlXG4gIHtcbiAgICBtaW4td2lkdGg6IDExNXB4O1xuICB9XG59XG5cblxuXG5cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo1NTBweClcbntcbiAgI2NvbnRhY3RMaW5rc1xuICB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cbiAgI2NvbnRhY3RMaW5rcyBzcGFuXG4gIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmJsb2dQb3N0XG4gIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgfVxuXG4gIC5hYm91dC1tZS1jb250YWN0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gIH1cblxuICAuYWJvdXQtbWUtY29udGFjdCBwIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAzODBweClcbntcbiAgaDNcbiAge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgfVxuICBoNVxuICB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5ibG9nUG9zdFxuICB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gIH1cbiAgLmFib3V0LW1lLWNvbnRhY3QgaDQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contactContainer\">\n  <div id=\"myPicture\">\n    <img src=\"{{ contactData.contactImg }}\" alt=\"\">\n  </div>\n  <div id=\"contactLinks\">\n    <span>Email: <a class=\"quick-contact-link\" href=\"mailto:{{ contactData.email }}\">{{ contactData.email }}</a></span>\n    <span>Phone: <a class=\"quick-contact-link\" href=\"tel:{{ contactData.phoneNumber }}\">(862)902-3780</a></span>\n    <span>GitHub: <a class=\"quick-contact-link\" href=\"{{contactData.github}}\" target=\"_blank\">aparcanapavel</a></span>\n    <span>LinkedIn: <a class=\"quick-contact-link\" href=\"{{contactData.linkedin}}\" target=\"_blank\">pavel-aparcana</a></span>\n    <span>AngelList: <a class=\"quick-contact-link\" href=\"{{ contactData.angelList }}\" target=\"_blank\">PavelAparcana</a></span>\n    <span>Resume: <a class=\"quick-contact-link\" href=\"{{ contactData.resume }}\" target=\"_blank\">View</a></span>\n  </div>\n\n  <div class=\"about-me-contact\">\n    <h4>About me</h4>\n    <p>\n      My passion for software development first began when I took an Intro to Web Design class at Rutgers University. To be\n      fair, I have to thank my professor for he had an even bigger passion for Web Design. He encouraged us to mess around\n      with the html attributes and stylesheets, in which I was able to see how changing those properties changed the behavior\n      of the overall design, and I became hooked. This led me to decided to continue learning other technologies.\n    </p>\n    <p>  \n      Today, I have developed full stack projects with recent technologies like JavaScript, Ruby on Rails, React, HTML, CSS,\n      PostreSQL, and MongoDB. Learning these technologies was not easy, but that's what allowed me to want to continue. Every\n      bug I came across, I needed to find out why or else I would not be able to sleep that night.\n    </p>\n    <p>\n      Finally, I am also a human and I love handling DSLR cameras. Everything from taking high quality images and\n      producing videos, to editing the media I create, I enjoy it all. Patience is something I am thankful to have, and the\n      best part is that it applies to both my career and my hobby.\n    </p>\n  </div>\n</div>\n\n<section id=\"blog-background-cont\">\n  <div id=\"blog\">\n    <h3>Blog</h3>\n    <div class=\"blogPost\" *ngFor=\"let blog of blogs|reverse\">\n      <div class=\"blogImg\">\n        <a routerLink=\"/contact/blog/{{blog.blogId}}\"><img src=\"{{blog.blogImage}}\" alt=\"\"></a>\n        <p>{{blog.blogDate}}</p>\n      </div>\n      <a routerLink=\"/contact/blog/{{blog.blogId}}\">\n        <h5>{{ blog.blogTitle }}</h5>\n      </a>\n    </div>\n  </div>\n</section>\n"

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

module.exports = "#dcimContainer{\n  padding: 0 20px;\n  background-color: #607E96;\n  padding-top: 20px;\n  padding-bottom: 100px;\n  /* max-width: 960px; */\n  width: 100%;\n  margin: 0 auto;\n}\n#dcim\n{\n  display: block;\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  height: 690px;\n  padding: 0px 10px;\n  color:white;\n  margin: 0 auto;\n  box-sizing: border-box;\n  /* background-color: gray; */\n}\n#dcimIntro\n{\n  position: relative;\n  display: block;\n  width: 100%;\n}\n#start,\n#graph\n{\n  width: 50%;\n  display: inline-block;\n  vertical-align: middle;\n}\n#start > p\n{\n  padding: 0px 50px;\n}\n#graph > a > img\n{\n  width: 100%;\n}\n#subMenu\n{\n  width: 100%;\n  margin: auto;\n  position: absolute;\n  display: block;\n  text-align: center;\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n  bottom: 50px;\n  /* translate to -375%% after click */\n  -webkit-transform: translateY(0%);\n          transform: translateY(0%);\n  /* transition: transform 0.4s; */\n  /* transition-timing-function:  */\n  transition-timing-function: cubic-bezier(.5,.7,.8,1);\n  z-index: 10;\n}\n#subMenu > h1\n{\n  display: block;\n}\n#subMenu > .dot-box\n{\n  width: 100px;\n  height: 100px;\n  background-color: rgb(72,91,109);\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 50px;\n  border:1px solid black;\n  transition: background-color 0.22s;\n  overflow: hidden;\n  z-index: 0px;\n  padding: 10px;\n  color: white;\n  font-size: 13px;\n}\n#subMenu > .dot-box:nth-of-type(1)\n{\n  padding: 35px;\n  margin-right: 3px;\n}\n#subMenu > .dot-box:nth-of-type(2)\n{\n  padding-top: 25px;\n}\n#subMenu > .dot-box:nth-of-type(3)\n{\n  padding-top: 18px;\n  margin: 0px 3px;\n}\n#subMenu > .dot-box:nth-of-type(4)\n{\n  padding-top: 18px;\n}\n#subMenu > .dot-box:nth-of-type(5)\n{\n  margin-left:3px;\n}\n#subMenu > .dot-box:hover\n{\n  cursor: pointer;\n  text-decoration: none;\n  background-color: white;\n  color: black;\n  transition: background-color .4s;\n}\n@-webkit-keyframes borderBlinker {\n50% { border-color: white; }\n}\n@keyframes borderBlinker {\n50% { border-color: white; }\n}\n#subMenu > .dot-box.activeSub\n{\n  /* background-color: white; */\n  /* border-color: white; */\n  -webkit-animation: borderBlinker 2.33s linear infinite;\n          animation: borderBlinker 2.33s linear infinite;\n}\n@-webkit-keyframes blinkers {\n50% { color: white; }\n}\n@keyframes blinkers {\n50% { color: white; }\n}\n#subMenu.slideUpSub\n{\n  -webkit-transform: translateY(-375%);\n          transform: translateY(-375%);\n  transition-timing-function: cubic-bezier(.5,.7,.8,1);\n  /* transition: transform 0.5s; */\n}\n#dcimBrazil,\n#dcimJon,\n#dcimTrumpJr,\n#dcimPresident\n{\n  display: block;\n  padding-top: 140px;\n}\n#dcimBrazil > p:nth-of-type(1)\n{\n  padding: 0px 145px 10px 145px;\n  text-align: center;\n}\n#dcimBrazil > span\n{\n  width: 60%;\n  margin: auto;\n  display: block;\n}\n#dcimBrazil > span > img\n{\n  width: 100%;\n}\n#dcimBrazil > p:nth-of-type(2)\n{\n  font-size: 12px;\n  text-align: center;\n  color: black;\n}\n#dcimJon > p:nth-of-type(1)\n{\n  padding: 0px 145px 10px 145px;\n  text-align: center;\n}\n#dcimJon > span\n{\n  width: 60%;\n  margin: auto;\n  display: block;\n}\n#dcimJon > span > img\n{\n  width: 100%;\n}\n#dcimJon > p:nth-of-type(2)\n{\n  font-size: 12px;\n  text-align: center;\n  padding: 0px 30px;\n  color: black;\n}\n#dcimTrumpJr > p:nth-of-type(1)\n{\n  padding: 0px 45px 10px 45px;\n  text-align: left;\n  width: 50%;\n  display: inline-block;\n  vertical-align: middle;\n}\n#tweet\n{\n  width: 30%;\n  margin: auto;\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 15px;\n}\n#tweets\n{\n  display: inline-block;\n  width: 50%;\n  position: relative;\n  vertical-align: middle;\n}\n#tweets > p:nth-of-type(1)\n{\n  padding: 0px 45px;\n  text-align: left;\n  width: 100%;\n  display: block;\n  vertical-align: middle;\n}\n#tweet2\n{\n  width: 70%;\n  margin: auto;\n  display: block;\n  vertical-align: middle;\n}\n#graphs\n{\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  vertical-align: middle;\n  /*background-color: orange;*/\n}\n#graphs > .techCompanies,\n#graphs > .government\n{\n  display: block;\n  width: 70%;\n}\n#graphs > .techCompanies > a > img,\n#graphs > .government > a > img\n{\n  width: 95%;\n}\n#dcimBrazil,\n#dcimJon,\n#dcimTrumpJr,\n#dcimPresident\n{\n  opacity: 1;\n}\n@media all and (max-width:875px)\n{\n  #dcim\n  {\n    display: block;\n    position: relative;\n    width: 100%;\n    height: 690px;\n    padding: 0px 10px;\n    margin-bottom: 20px;\n    color:white;\n    /* background-color: gray; */\n  }\n  #tweets\n  {\n    display: inline-block;\n    width: 100%;\n    position: relative;\n    vertical-align: middle;\n  }\n  #tweets > p:nth-of-type(1)\n  {\n    padding: 0px 45px;\n    text-align: left;\n    width: 50%;\n    display: inline-block;\n    vertical-align: middle;\n  }\n  #tweet2\n  {\n    width: 50%;\n    margin: auto;\n    display:inline-block;\n    vertical-align: middle;\n  }\n  #graphs\n  {\n    display: block;\n    position: relative;\n    width: 100%;\n    vertical-align: middle;\n    padding: 0 5%;\n    /*background-color: orange;*/\n  }\n  #graphs > .techCompanies,\n  #graphs > .government\n  {\n    display: inline-block;\n    width: 50%;\n  }\n}\n@media all and (max-width:700px)\n{\n  #dcim\n  {\n    display: block;\n    position: relative;\n    margin-bottom: 0px;\n    height: 860px;\n    color:white;\n    /* background-color: gray; */\n  }\n  #start,\n  #graph\n  {\n    width: 100%;\n    display: block;\n    vertical-align: middle;\n  }\n  #start > p\n  {\n    padding: 0px 50px;\n  }\n  #graph > a > img\n  {\n    width: 100%;\n  }\n  #subMenu\n  {\n    width: 100%;\n    margin: auto;\n    position: absolute;\n    display: block;\n    text-align: center;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s;\n    bottom: 50px;\n    /* translate to -375%% after click */\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    /* transition: transform 0.4s; */\n    /* transition-timing-function:  */\n    transition-timing-function: cubic-bezier(.5,.7,.8,1);\n    z-index: 10;\n  }\n  #subMenu.slideUpSub\n  {\n    -webkit-transform: translateY(-500%);\n            transform: translateY(-500%);\n    transition-timing-function: cubic-bezier(.5,.7,.8,1);\n    /* transition: transform 0.5s; */\n  }\n}\n/* Mobile Switch! */\n@media all and (max-width:650px)\n{\n  #dcim\n  {\n    display: block;\n    position: relative;\n    margin-bottom: 25px;\n    height: 860px;\n    color:white;\n    /* background-color: gray; */\n  }\n  #dcimBrazil > p:nth-of-type(1),\n  #dcimJon > p:nth-of-type(1)\n  {\n    padding: 0px 25px 10px 45px;\n    text-align: left;\n  }\n  #dcimBrazil > span,\n  #dcimJon > span\n  {\n    width: 80%;\n    margin: auto;\n    display: block;\n  }\n  #dcimBrazil > span > img\n  {\n    width: 100%;\n  }\n  #dcimTrumpJr > p:nth-of-type(1)\n  {\n    padding: 0px 5px 5px 45px;\n    text-align: left;\n    width: 100%;\n    display: block;\n    vertical-align: middle;\n  }\n  #tweet\n  {\n    width: 60%;\n    margin: auto;\n    display: block;\n    vertical-align: middle;\n    border-radius: 15px;\n  }\n\n  #tweets\n  {\n    display: inline-block;\n    width: 100%;\n    position: relative;\n    vertical-align: middle;\n  }\n  #tweets > p:nth-of-type(1)\n  {\n    padding: 0px 45px 0 5px;\n    text-align: left;\n    width: 100%;\n    display: inline-block;\n    vertical-align: middle;\n  }\n  #tweet2\n  {\n    display:none;\n  }\n  #graphs\n  {\n    display: block;\n    position: relative;\n    width: 100%;\n    vertical-align: middle;\n    padding: 0 5%;\n    /*background-color: orange;*/\n  }\n  #graphs > .techCompanies,\n  #graphs > .government\n  {\n    display: block;\n    width: 70%;\n    margin: auto;\n  }\n  #subMenu\n  {\n    width: 100%;\n    margin: auto;\n    position: absolute;\n    display: block;\n    text-align: center;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s;\n    bottom: 50px;\n    /* translate to -375%% after click */\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    /* transition: transform 0.4s; */\n    /* transition-timing-function:  */\n    transition-timing-function: cubic-bezier(.5,.7,.8,1);\n    z-index: 10;\n  }\n  #subMenu > .dot-box\n  {\n    width: 50px;\n    height: 50px;\n    border-radius: 50px;\n    border:1px solid black;\n    transition: background-color 0.22s;\n    overflow: hidden;\n    z-index: 0px;\n    padding: 10px;\n    color: rgb(72,91,109);\n    text-decoration: none;\n  }\n  #subMenu > .dot-box:nth-of-type(1)\n  {\n    padding: 10px;\n    margin-right: 3px;\n  }\n  #subMenu.slideUpSub\n  {\n    -webkit-transform: translateY(-890%);\n            transform: translateY(-890%);\n    transition-timing-function: cubic-bezier(.5,.7,.8,1);\n    /* transition: transform 0.5s; */\n  }\n  #subMenu > .dot-box:hover\n  {\n    cursor: pointer;\n    text-decoration: none;\n    background-color: rgb(72,91,109);\n    color: rgb(72,91,109);\n  }\n  #subMenu > h4\n  {\n    font-size: 16px;\n  }\n}\n@media all and (max-width:650px)\n{\n  #dcim\n  {\n    display: block;\n    position: relative;\n    margin-bottom: 25px;\n    height: 900px;\n    color:white;\n    /* background-color: gray; */\n  }\n  #tweets > p:nth-of-type(1)\n  {\n    padding: 0px 5px 0 45px;\n    text-align: left;\n    width: 100%;\n    display: inline-block;\n    vertical-align: middle;\n  }\n  #tweet\n  {\n    width: 80%;\n    margin: auto;\n    display: block;\n    vertical-align: middle;\n    border-radius: 15px;\n  }\n  #subMenu.slideUpSub\n  {\n    -webkit-transform: translateY(-940%);\n            transform: translateY(-940%);\n    transition-timing-function: cubic-bezier(.5,.7,.8,1);\n    /* transition: transform 0.5s; */\n  }\n  #dcimJon > p:nth-of-type(2)\n  {\n    font-size: 12px;\n    text-align: center;\n    padding: 0px 30px;\n    color: black;\n    overflow-x:hidden;\n  }\n}\n@media all and (max-width:425px)\n{\n  #dcim\n  {\n    display: block;\n    position: relative;\n    margin-bottom: 180px;\n    height: 900px;\n    color:white;\n  }\n  #graphs > .techCompanies,\n  #graphs > .government\n  {\n    display: block;\n    width: 100%;\n    margin: auto;\n  }\n}\n@media all and (max-width:350px)\n{\n  #subMenu > h4\n  {\n    font-size: 14px;\n  }\n  #subMenu.slideUpSub\n  {\n    -webkit-transform: translateY(-980%);\n            transform: translateY(-980%);\n    transition-timing-function: cubic-bezier(.5,.7,.8,1);\n    /* transition: transform 0.5s; */\n  }\n  #dcimBrazil > p:nth-of-type(2)\n  {\n    font-size: 10px;\n    text-align: center;\n    color: black;\n  }\n  #dcimTrumpJr > p:nth-of-type(1)\n  {\n    padding: 0px 0px 0px 45px;\n    text-align: left;\n    font-size: 14px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGNpbS9kY2ltLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFDQTs7O0VBR0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtDQUEwQjtFQUExQiwwQkFBMEI7RUFBMUIsa0RBQTBCO0VBQzFCLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsaUNBQWlDO0VBQ2pDLG9EQUFvRDtFQUNwRCxXQUFXO0FBQ2I7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsaUJBQWlCO0FBQ25CO0FB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QUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsV0FBVztFQUNiO0VBQ0E7OztJQUdFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0Y7QUFRQTs7RUFFRTs7SUFFRSxlQUFlO0VBQ2pCO0VBQ0E7O0lBRUUsb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixvREFBb0Q7SUFDcEQsZ0NBQWdDO0VBQ2xDO0VBQ0E7O0lBRUUsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7RUFDQTs7SUFFRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RjaW0vZGNpbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RjaW1Db250YWluZXJ7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0U5NjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgLyogbWF4LXdpZHRoOiA5NjBweDsgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuI2RjaW1cbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIGhlaWdodDogNjkwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBjb2xvcjp3aGl0ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGdyYXk7ICovXG59XG4jZGNpbUludHJvXG57XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3N0YXJ0LFxuI2dyYXBoXG57XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiNzdGFydCA+IHBcbntcbiAgcGFkZGluZzogMHB4IDUwcHg7XG59XG4jZ3JhcGggPiBhID4gaW1nXG57XG4gIHdpZHRoOiAxMDAlO1xufVxuI3N1Yk1lbnVcbntcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgYm90dG9tOiA1MHB4O1xuICAvKiB0cmFuc2xhdGUgdG8gLTM3NSUlIGFmdGVyIGNsaWNrICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzOyAqL1xuICAvKiB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogICovXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjUsLjcsLjgsMSk7XG4gIHotaW5kZXg6IDEwO1xufVxuI3N1Yk1lbnUgPiBoMVxue1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNzdWJNZW51ID4gLmRvdC1ib3hcbntcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzIsOTEsMTA5KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yMnM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4jc3ViTWVudSA+IC5kb3QtYm94Om50aC1vZi10eXBlKDEpXG57XG4gIHBhZGRpbmc6IDM1cHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuI3N1Yk1lbnUgPiAuZG90LWJveDpudGgtb2YtdHlwZSgyKVxue1xuICBwYWRkaW5nLXRvcDogMjVweDtcbn1cbiNzdWJNZW51ID4gLmRvdC1ib3g6bnRoLW9mLXR5cGUoMylcbntcbiAgcGFkZGluZy10b3A6IDE4cHg7XG4gIG1hcmdpbjogMHB4IDNweDtcbn1cbiNzdWJNZW51ID4gLmRvdC1ib3g6bnRoLW9mLXR5cGUoNClcbntcbiAgcGFkZGluZy10b3A6IDE4cHg7XG59XG4jc3ViTWVudSA+IC5kb3QtYm94Om50aC1vZi10eXBlKDUpXG57XG4gIG1hcmdpbi1sZWZ0OjNweDtcbn1cblxuI3N1Yk1lbnUgPiAuZG90LWJveDpob3Zlclxue1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNHM7XG59XG5Aa2V5ZnJhbWVzIGJvcmRlckJsaW5rZXIge1xuNTAlIHsgYm9yZGVyLWNvbG9yOiB3aGl0ZTsgfVxufVxuXG4jc3ViTWVudSA+IC5kb3QtYm94LmFjdGl2ZVN1Ylxue1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cbiAgLyogYm9yZGVyLWNvbG9yOiB3aGl0ZTsgKi9cbiAgYW5pbWF0aW9uOiBib3JkZXJCbGlua2VyIDIuMzNzIGxpbmVhciBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgYmxpbmtlcnMge1xuNTAlIHsgY29sb3I6IHdoaXRlOyB9XG59XG4jc3ViTWVudS5zbGlkZVVwU3ViXG57XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzc1JSk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjUsLjcsLjgsMSk7XG4gIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzOyAqL1xufVxuI2RjaW1CcmF6aWwsXG4jZGNpbUpvbixcbiNkY2ltVHJ1bXBKcixcbiNkY2ltUHJlc2lkZW50XG57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMTQwcHg7XG59XG4jZGNpbUJyYXppbCA+IHA6bnRoLW9mLXR5cGUoMSlcbntcbiAgcGFkZGluZzogMHB4IDE0NXB4IDEwcHggMTQ1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNkY2ltQnJhemlsID4gc3Bhblxue1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuI2RjaW1CcmF6aWwgPiBzcGFuID4gaW1nXG57XG4gIHdpZHRoOiAxMDAlO1xufVxuI2RjaW1CcmF6aWwgPiBwOm50aC1vZi10eXBlKDIpXG57XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNkY2ltSm9uID4gcDpudGgtb2YtdHlwZSgxKVxue1xuICBwYWRkaW5nOiAwcHggMTQ1cHggMTBweCAxNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2RjaW1Kb24gPiBzcGFuXG57XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4jZGNpbUpvbiA+IHNwYW4gPiBpbWdcbntcbiAgd2lkdGg6IDEwMCU7XG59XG4jZGNpbUpvbiA+IHA6bnRoLW9mLXR5cGUoMilcbntcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNkY2ltVHJ1bXBKciA+IHA6bnRoLW9mLXR5cGUoMSlcbntcbiAgcGFkZGluZzogMHB4IDQ1cHggMTBweCA0NXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4jdHdlZXRcbntcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbiN0d2VldHNcbntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4jdHdlZXRzID4gcDpudGgtb2YtdHlwZSgxKVxue1xuICBwYWRkaW5nOiAwcHggNDVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuI3R3ZWV0Mlxue1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuI2dyYXBoc1xue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7Ki9cbn1cbiNncmFwaHMgPiAudGVjaENvbXBhbmllcyxcbiNncmFwaHMgPiAuZ292ZXJubWVudFxue1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDcwJTtcbn1cbiNncmFwaHMgPiAudGVjaENvbXBhbmllcyA+IGEgPiBpbWcsXG4jZ3JhcGhzID4gLmdvdmVybm1lbnQgPiBhID4gaW1nXG57XG4gIHdpZHRoOiA5NSU7XG59XG4jZGNpbUJyYXppbCxcbiNkY2ltSm9uLFxuI2RjaW1UcnVtcEpyLFxuI2RjaW1QcmVzaWRlbnRcbntcbiAgb3BhY2l0eTogMTtcbn1cblxuXG5cblxuXG5cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo4NzVweClcbntcbiAgI2RjaW1cbiAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDY5MHB4O1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgKi9cbiAgfVxuICAjdHdlZXRzXG4gIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgI3R3ZWV0cyA+IHA6bnRoLW9mLXR5cGUoMSlcbiAge1xuICAgIHBhZGRpbmc6IDBweCA0NXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAjdHdlZXQyXG4gIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gICNncmFwaHNcbiAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7Ki9cbiAgfVxuICAjZ3JhcGhzID4gLnRlY2hDb21wYW5pZXMsXG4gICNncmFwaHMgPiAuZ292ZXJubWVudFxuICB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjcwMHB4KVxue1xuICAjZGNpbVxuICB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBoZWlnaHQ6IDg2MHB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyYXk7ICovXG4gIH1cbiAgI3N0YXJ0LFxuICAjZ3JhcGhcbiAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgI3N0YXJ0ID4gcFxuICB7XG4gICAgcGFkZGluZzogMHB4IDUwcHg7XG4gIH1cbiAgI2dyYXBoID4gYSA+IGltZ1xuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI3N1Yk1lbnVcbiAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgIGJvdHRvbTogNTBweDtcbiAgICAvKiB0cmFuc2xhdGUgdG8gLTM3NSUlIGFmdGVyIGNsaWNrICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40czsgKi9cbiAgICAvKiB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogICovXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNSwuNywuOCwxKTtcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxuICAjc3ViTWVudS5zbGlkZVVwU3ViXG4gIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwMCUpO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjUsLjcsLjgsMSk7XG4gICAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7ICovXG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG4vKiBNb2JpbGUgU3dpdGNoISAqL1xuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo2NTBweClcbntcbiAgI2RjaW1cbiAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGhlaWdodDogODYwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgKi9cbiAgfVxuICAjZGNpbUJyYXppbCA+IHA6bnRoLW9mLXR5cGUoMSksXG4gICNkY2ltSm9uID4gcDpudGgtb2YtdHlwZSgxKVxuICB7XG4gICAgcGFkZGluZzogMHB4IDI1cHggMTBweCA0NXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgI2RjaW1CcmF6aWwgPiBzcGFuLFxuICAjZGNpbUpvbiA+IHNwYW5cbiAge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICNkY2ltQnJhemlsID4gc3BhbiA+IGltZ1xuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2RjaW1UcnVtcEpyID4gcDpudGgtb2YtdHlwZSgxKVxuICB7XG4gICAgcGFkZGluZzogMHB4IDVweCA1cHggNDVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgI3R3ZWV0XG4gIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICAjdHdlZXRzXG4gIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgI3R3ZWV0cyA+IHA6bnRoLW9mLXR5cGUoMSlcbiAge1xuICAgIHBhZGRpbmc6IDBweCA0NXB4IDAgNXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgI3R3ZWV0MlxuICB7XG4gICAgZGlzcGxheTpub25lO1xuICB9XG4gICNncmFwaHNcbiAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7Ki9cbiAgfVxuICAjZ3JhcGhzID4gLnRlY2hDb21wYW5pZXMsXG4gICNncmFwaHMgPiAuZ292ZXJubWVudFxuICB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgI3N1Yk1lbnVcbiAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgIGJvdHRvbTogNTBweDtcbiAgICAvKiB0cmFuc2xhdGUgdG8gLTM3NSUlIGFmdGVyIGNsaWNrICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40czsgKi9cbiAgICAvKiB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogICovXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNSwuNywuOCwxKTtcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxuICAjc3ViTWVudSA+IC5kb3QtYm94XG4gIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yMnM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogcmdiKDcyLDkxLDEwOSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gICNzdWJNZW51ID4gLmRvdC1ib3g6bnRoLW9mLXR5cGUoMSlcbiAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIH1cbiAgI3N1Yk1lbnUuc2xpZGVVcFN1YlxuICB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04OTAlKTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC41LC43LC44LDEpO1xuICAgIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzOyAqL1xuICB9XG4gICNzdWJNZW51ID4gLmRvdC1ib3g6aG92ZXJcbiAge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcyLDkxLDEwOSk7XG4gICAgY29sb3I6IHJnYig3Miw5MSwxMDkpO1xuICB9XG4gICNzdWJNZW51ID4gaDRcbiAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NjUwcHgpXG57XG4gICNkY2ltXG4gIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBoZWlnaHQ6IDkwMHB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyYXk7ICovXG4gIH1cbiAgI3R3ZWV0cyA+IHA6bnRoLW9mLXR5cGUoMSlcbiAge1xuICAgIHBhZGRpbmc6IDBweCA1cHggMCA0NXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgI3R3ZWV0XG4gIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cbiAgI3N1Yk1lbnUuc2xpZGVVcFN1YlxuICB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05NDAlKTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC41LC43LC44LDEpO1xuICAgIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzOyAqL1xuICB9XG4gICNkY2ltSm9uID4gcDpudGgtb2YtdHlwZSgyKVxuICB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo0MjVweClcbntcbiAgI2RjaW1cbiAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxODBweDtcbiAgICBoZWlnaHQ6IDkwMHB4O1xuICAgIGNvbG9yOndoaXRlO1xuICB9XG4gICNncmFwaHMgPiAudGVjaENvbXBhbmllcyxcbiAgI2dyYXBocyA+IC5nb3Zlcm5tZW50XG4gIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDozNTBweClcbntcbiAgI3N1Yk1lbnUgPiBoNFxuICB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICNzdWJNZW51LnNsaWRlVXBTdWJcbiAge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOTgwJSk7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNSwuNywuOCwxKTtcbiAgICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41czsgKi9cbiAgfVxuICAjZGNpbUJyYXppbCA+IHA6bnRoLW9mLXR5cGUoMilcbiAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gICNkY2ltVHJ1bXBKciA+IHA6bnRoLW9mLXR5cGUoMSlcbiAge1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDQ1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbiJdfQ== */"

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
        this._setHeaders.projectClick();
        // sets the title to projects
    }
    DcimComponent.prototype.ngOnInit = function () {
        this.dcimSwitch = "dcimIntro";
        $("#IntroDCIM").addClass("activeSub");
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
                    ])
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

module.exports = ".welcome-header{\n  width: 100%;\n  position: relative;\n  padding: 150px 50px;\n  transition: opacity 0.3s;\n}\n\n.welcome-header h3,\n.welcome-header > p{\n  color: white;\n  width: auto;\n  text-align: center;\n  font-family: 'Questrial', sans-serif;\n}\n\n.welcome-header h3{\n  font-size: 65px;\n}\n\n.welcome-header > p {\n  font-size: 20px;\n  font-family: 'Heebo', sans-serif;\n  margin: 0px;\n}\n\n.to-projects{\n  color: white;\n  text-align: center;\n  border: 1px solid white;\n  max-width: 150px;\n  padding: 0px 20px;\n  font-family: 'Heebo', sans-serif;\n  border-radius: 10px;\n  position: relative;\n  margin: 0 auto;\n  bottom: -60px;\n  box-sizing: border-box;\n  transition: background-color 0.3s;\n  cursor: pointer;\n}\n\n@-webkit-keyframes borderBlink {\n50% { border-color: #89B3D6; }\n}\n\n@keyframes borderBlink {\n50% { border-color: #89B3D6; }\n}\n\n@-webkit-keyframes colorBlink {\n50% { color: #89B3D6; }\n}\n\n@keyframes colorBlink {\n50% { color: #89B3D6; }\n}\n\n.to-projects:hover{\n  color: black;\n  background-color: whitesmoke;\n}\n\n.to-projects i {\n  -webkit-animation: colorBlink 2.5s linear infinite;\n          animation: colorBlink 2.5s linear infinite;\n}\n\n.to-projects p {\n  margin: 0px;\n  padding: 0px;\n}\n\n#quickContact\n{\n  display: block;\n  position: relative;\n  list-style: none;\n  font-size: 25px;\n  top: 5px;\n  margin: 0 auto;\n  z-index: 2;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0px;\n}\n\n#quickContact > li\n{\n  width: 40px;\n  height: 40px;\n  margin: 15px 20px;\n  background-color: white;\n  display: inline-block;\n  text-align: center;\n  border-radius: 5px;\n  transition: 0.2s;\n}\n\n#quickContact > li:hover\n{\n  background-color: #89B3D6;\n}\n\n#quickContact > li > a:hover\n{\n  color: white;\n  transition: color 0.3s;\n}\n\n#quickContact > li > a\n{\n  -webkit-text-decoration: white;\n          text-decoration: white;\n  color: black;\n  padding: 2px;\n  vertical-align: top;\n  font-size: 35px;\n}\n\n#quickContact > li:nth-of-type(2) > a\n{\n  font-size: 33px;\n  padding: 3px 2px;\n}\n\n#portfolioContainer,\n#skills-vol,\n#projects-comp{\n  width: 100%;\n  padding: 0px;\n}\n\n#projects-list,\n#XP{\n  padding: 10px 20px;\n  max-width: 960px;\n  margin: 0 auto;\n  font-family: 'Heebo', sans-serif;\n}\n\n#projects-comp{\n  background-color: #607E96;\n}\n\n.horizonalLine\n{\n  width: 90%;\n  background-color: white;\n}\n\n#projects-comp .section\n{\n  padding-top: 20px;\n  padding-bottom: 10px;\n  color: white;\n  display: block;\n  position: relative;\n}\n\n#projects-list{\n  position: relative;\n  display: block;\n}\n\n#projects{\n  position: relative;\n  display: inline-block;\n  width: 45%;\n  box-sizing: border-box;\n  border: 1px solid white;\n  padding: 5px;\n  margin: 2.5%;\n  box-sizing: border-box;\n  vertical-align: top;\n  border-radius: 5px;\n  background-color: rgba(137, 179, 214, 0.432);\n  height: 182px;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n#projects:focus{\n  outline: none;\n}\n\n#projects:hover{\n  -webkit-transform: translateY(-3%);\n          transform: translateY(-3%);\n  background-color:rgb(85, 122, 152);\n  border-color: rgb(189, 189, 189);\n}\n\n.image{\n  position: relative;\n  width: 20%;\n  display: inline-block;\n}\n\n.image img {\n  width: 100%;\n}\n\n#projects > h5{\n  width: 75%;\n  display: inline-block;\n  text-align: center;\n  font-weight: 700;\n}\n\n#projects .projectData p {\n  padding: 5px 20px;\n  text-align: center;\n}\n\n#dateArrow{\n  position: absolute;\n  width: 100%;\n  bottom: -15px;\n}\n\n#dateArrow p,\n#dateArrow a{\n  display: inline-block;\n  width: 50%;\n  font-size: 14px;\n}\n\n#dateArrow a{\n  text-align: right;\n  padding-right: 20px;\n}\n\n/* Hardcoded things */\n\n@-webkit-keyframes blinker {\n50% { color: white; }\n}\n\n@keyframes blinker {\n50% { color: white; }\n}\n\n#xp\n{\n  position: relative;\n  display: block;\n}\n\n#xpSwitch\n{\n  display: block;\n  margin: auto;\n  width: 100%;\n  text-align: center;\n}\n\n#xpSwitch a\n{\n  font-size: 18px;\n  color: rgba(255,255,255,0.9);\n  padding: 10px;\n}\n\n#xpSwitch a:nth-of-type(1)\n{\n  border-right: 1px solid white;\n}\n\n#xpSwitch a:hover\n{\n  color: #00A6FF;\n  transition: color 0.4s;\n  cursor: pointer;\n}\n\n#xpSwitch > a.active\n{\n  color: #89B3D6;\n  text-decoration: none;\n  -webkit-animation: blinker 2.5s linear infinite;\n          animation: blinker 2.5s linear infinite;\n}\n\n#skills-certs\n{\n  display: block;\n  position: relative;\n  width: 100%;\n  vertical-align: top;\n  color: white;\n}\n\n#skills-certs > h3,\n#volunteer > h3\n{\n  margin-bottom: 0px;\n}\n\n#skills-certs > .skillData\n{\n  display: block;\n  position: relative;\n}\n\n#skills-certs > .skillData .skill-list{\n  position: relative;\n  display: block;\n  list-style: none;\n  padding: 0px;\n}\n\n#skills-certs > .skillData .skill-list li {\n  position: relative;\n  display: inline-block;\n  width: 25%;\n  padding: 50px 0px;\n  box-sizing: border-box;\n}\n\n#skills-certs > .skillData .skill-list li > img{\n  display: block;\n  width: 100%;\n  padding: 0px 50px;\n}\n\n#skills-certs > .skillData .skill-list li > caption{\n  display: block;\n  color: white;\n  text-align: center;\n}\n\n#volunteer\n{\n  color: white;\n  display: block;\n  width: 100%;\n}\n\n#vol\n{\n  vertical-align: middle;\n  width: 330px;\n  display: inline-block;\n  position: relative;\n  min-height: 260px;\n}\n\n#volunteer .volunteering\n{\n  display: inline-block;\n  vertical-align: middle;\n  width: 50%;\n  position: relative;\n}\n\n#volunteer .volunteering ul\n{\n  padding-top: 10px;\n}\n\n#volunteer .volunteering ul li\n{\n  padding-right: 50px;\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.container-title{\n  font-weight: 700;\n}\n\n@media all and (max-width:800px)\n{\n  #skills-certs > .skillData .skill-list li {\n    width: 33%;\n  }\n\n  #skills-certs > .skillData .skill-list li:last-child{\n    align-items: center;\n    display: flow-root;\n    margin: 0 auto;\n  }\n  \n  #volunteer\n  {\n    color: white;\n    display: block;\n    width: 100%;\n    margin-bottom: 50px;\n    position: relative;\n  }\n  #vol\n  {\n    vertical-align: middle;\n    width: 360px;\n    margin: auto;\n    display: block;\n    position: relative;\n    min-height: 260px;\n  }\n  #volunteer .volunteering\n  {\n    display: block;\n    vertical-align: middle;\n    width: 100%;\n    position: relative;\n  }\n  #volunteer .volunteering ul li\n  {\n    padding-right: 50px;\n    padding-top: 5px;\n  }\n}\n\n/* Mobile Switch! */\n\n@media all and (max-width:650px)\n{\n  #projects{\n    display: block;\n    width: 100%;\n    margin: 20px 0px;\n  }\n  #vol\n  {\n    vertical-align: middle;\n    width: 60%;\n    margin: auto;\n    display: block;\n    position: relative;\n    min-height: 260px;\n  }\n  .welcome-header{\n    width: 100%;\n    position: relative;\n    padding: 10px 50px;\n    height: 250px;\n  }\n\n  .welcome-header h3,\n  .welcome-header > p{\n    color: white;\n    width: auto;\n    text-align: center;\n    font-family: 'Questrial', sans-serif;\n  }\n\n  .welcome-header h3{\n    font-size: 45px;\n  }\n\n  .welcome-header > p {\n    font-size: 15px;\n    font-family: 'Heebo', sans-serif;\n  }\n\n  .to-projects{\n    color: white;\n    text-align: center;\n    border: 1px solid white;\n    max-width: 150px;\n    padding: 0px 20px;\n    font-family: 'Heebo', sans-serif;\n    border-radius: 10px;\n    position: relative;\n    margin: 0 auto;\n    bottom: 0px;\n    /* left: 50%; */\n    box-sizing: border-box;\n    transition: background-color 0.3s;\n    cursor: pointer;\n    font-size: 15px;\n  }\n\n  #quickContact > li\n  {\n    width: 30px;\n    height: 30px;\n  }\n  #quickContact > li > a\n  {\n    font-size: 28px;\n  }\n  #quickContact > li:nth-of-type(2) > a\n  {\n    font-size: 25px;\n  }\n}\n\n@media all and (max-width:550px)\n{\n  #skills-certs > .skillData .skill-list li {\n    width: 50%;\n  }\n\n  #skills-certs > .skillData .skill-list li:last-child{\n    align-items: center;\n    display: inline-block;\n    margin: 0 auto;\n  }\n\n  #skills-certs > .skillData .skill-list li {\n    position: relative;\n    display: inline-block;\n    padding: 50px 0px;\n    box-sizing: border-box;\n  }\n\n  #skills-certs > .skillData .skill-list li > img{\n    display: block;\n    width: 100%;\n    padding: 0px 50px;\n  }\n\n  #vol\n  {\n    vertical-align: middle;\n    width: 90%;\n    margin: auto;\n    display: block;\n    position: relative;\n    min-height: 330px;\n  }\n}\n\n@media all and (max-width:380px)\n{\n  h3\n  {\n    font-size: 23px;\n  }\n  .projectData h5\n  {\n    font-size: 17px;\n    padding-right: 8px; \n  }\n  .projectData p\n  {\n    font-size: 15px;\n  }\n  #dateArrow p\n  {\n    font-size: 14px;\n    padding-top: 5px;\n  }\n  #skills-certs > .skillData .skill-list li {\n    position: relative;\n    display: inline-block;\n    padding: 40px 0px;\n    box-sizing: border-box;\n  }\n\n  #skills-certs > .skillData .skill-list li > img{\n    display: block;\n    width: 100%;\n    padding: 0px 40px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7O0FBRUE7QUFDQSxNQUFNLHFCQUFxQixFQUFFO0FBQzdCOztBQUZBO0FBQ0EsTUFBTSxxQkFBcUIsRUFBRTtBQUM3Qjs7QUFFQTtBQUNBLE1BQU0sY0FBYyxFQUFFO0FBQ3RCOztBQUZBO0FBQ0EsTUFBTSxjQUFjLEVBQUU7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0RBQTBDO1VBQTFDLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFFBQVE7RUFDUixjQUFjO0VBQ2QsVUFBVTtFQUNWLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixr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QjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7O0lBRUUsZUFBZTtFQUNqQjtFQUNBOztJQUVFLGVBQWU7RUFDakI7QUFDRjs7QUFTQTs7RUFFRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBU0E7O0VBRUU7O0lBRUUsZUFBZTtFQUNqQjtFQUNBOztJQUVFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTs7SUFFRSxlQUFlO0VBQ2pCO0VBQ0E7O0lBRUUsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWhlYWRlcntcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTUwcHggNTBweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xufVxuXG4ud2VsY29tZS1oZWFkZXIgaDMsXG4ud2VsY29tZS1oZWFkZXIgPiBwe1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUXVlc3RyaWFsJywgc2Fucy1zZXJpZjtcbn1cblxuLndlbGNvbWUtaGVhZGVyIGgze1xuICBmb250LXNpemU6IDY1cHg7XG59XG5cbi53ZWxjb21lLWhlYWRlciA+IHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnSGVlYm8nLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDBweDtcbn1cblxuLnRvLXByb2plY3Rze1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBmb250LWZhbWlseTogJ0hlZWJvJywgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm90dG9tOiAtNjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgYm9yZGVyQmxpbmsge1xuNTAlIHsgYm9yZGVyLWNvbG9yOiAjODlCM0Q2OyB9XG59XG5cbkBrZXlmcmFtZXMgY29sb3JCbGluayB7XG41MCUgeyBjb2xvcjogIzg5QjNENjsgfVxufVxuXG4udG8tcHJvamVjdHM6aG92ZXJ7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnRvLXByb2plY3RzIGkge1xuICBhbmltYXRpb246IGNvbG9yQmxpbmsgMi41cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi50by1wcm9qZWN0cyBwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuI3F1aWNrQ29udGFjdFxue1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRvcDogNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAwcHg7XG59XG4jcXVpY2tDb250YWN0ID4gbGlcbntcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAxNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuI3F1aWNrQ29udGFjdCA+IGxpOmhvdmVyXG57XG4gIGJhY2tncm91bmQtY29sb3I6ICM4OUIzRDY7XG59XG4jcXVpY2tDb250YWN0ID4gbGkgPiBhOmhvdmVyXG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbn1cbiNxdWlja0NvbnRhY3QgPiBsaSA+IGFcbntcbiAgdGV4dC1kZWNvcmF0aW9uOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAycHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cbiNxdWlja0NvbnRhY3QgPiBsaTpudGgtb2YtdHlwZSgyKSA+IGFcbntcbiAgZm9udC1zaXplOiAzM3B4O1xuICBwYWRkaW5nOiAzcHggMnB4O1xufVxuXG4jcG9ydGZvbGlvQ29udGFpbmVyLFxuI3NraWxscy12b2wsXG4jcHJvamVjdHMtY29tcHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuI3Byb2plY3RzLWxpc3QsXG4jWFB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtZmFtaWx5OiAnSGVlYm8nLCBzYW5zLXNlcmlmO1xufVxuXG4jcHJvamVjdHMtY29tcHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0U5Njtcbn1cblxuLmhvcml6b25hbExpbmVcbntcbiAgd2lkdGg6IDkwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4jcHJvamVjdHMtY29tcCAuc2VjdGlvblxue1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3Byb2plY3RzLWxpc3R7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNwcm9qZWN0c3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0NSU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMi41JTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNywgMTc5LCAyMTQsIDAuNDMyKTtcbiAgaGVpZ2h0OiAxODJweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcHJvamVjdHM6Zm9jdXN7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNwcm9qZWN0czpob3ZlcntcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zJSk7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDg1LCAxMjIsIDE1Mik7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE4OSwgMTg5LCAxODkpO1xufVxuXG4uaW1hZ2V7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNwcm9qZWN0cyA+IGg1e1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI3Byb2plY3RzIC5wcm9qZWN0RGF0YSBwIHtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2RhdGVBcnJvd3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAtMTVweDtcbn1cblxuI2RhdGVBcnJvdyBwLFxuI2RhdGVBcnJvdyBhe1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI2RhdGVBcnJvdyBhe1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLyogSGFyZGNvZGVkIHRoaW5ncyAqL1xuQGtleWZyYW1lcyBibGlua2VyIHtcbjUwJSB7IGNvbG9yOiB3aGl0ZTsgfVxufVxuXG4jeHBcbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiN4cFN3aXRjaFxue1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3hwU3dpdGNoIGFcbntcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuI3hwU3dpdGNoIGE6bnRoLW9mLXR5cGUoMSlcbntcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XG59XG4jeHBTd2l0Y2ggYTpob3Zlclxue1xuICBjb2xvcjogIzAwQTZGRjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC40cztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3hwU3dpdGNoID4gYS5hY3RpdmVcbntcbiAgY29sb3I6ICM4OUIzRDY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYW5pbWF0aW9uOiBibGlua2VyIDIuNXMgbGluZWFyIGluZmluaXRlO1xufVxuI3NraWxscy1jZXJ0c1xue1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgY29sb3I6IHdoaXRlO1xufVxuI3NraWxscy1jZXJ0cyA+IGgzLFxuI3ZvbHVudGVlciA+IGgzXG57XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbiNza2lsbHMtY2VydHMgPiAuc2tpbGxEYXRhXG57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNza2lsbHMtY2VydHMgPiAuc2tpbGxEYXRhIC5za2lsbC1saXN0e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbiNza2lsbHMtY2VydHMgPiAuc2tpbGxEYXRhIC5za2lsbC1saXN0IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNSU7XG4gIHBhZGRpbmc6IDUwcHggMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jc2tpbGxzLWNlcnRzID4gLnNraWxsRGF0YSAuc2tpbGwtbGlzdCBsaSA+IGltZ3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggNTBweDtcbn1cblxuI3NraWxscy1jZXJ0cyA+IC5za2lsbERhdGEgLnNraWxsLWxpc3QgbGkgPiBjYXB0aW9ue1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN2b2x1bnRlZXJcbntcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4jdm9sXG57XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAzMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDI2MHB4O1xufVxuI3ZvbHVudGVlciAudm9sdW50ZWVyaW5nXG57XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI3ZvbHVudGVlciAudm9sdW50ZWVyaW5nIHVsXG57XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuI3ZvbHVudGVlciAudm9sdW50ZWVyaW5nIHVsIGxpXG57XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG59XG5cbi5jb250YWluZXItdGl0bGV7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cblxuXG5cblxuXG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ODAwcHgpXG57XG4gICNza2lsbHMtY2VydHMgPiAuc2tpbGxEYXRhIC5za2lsbC1saXN0IGxpIHtcbiAgICB3aWR0aDogMzMlO1xuICB9XG5cbiAgI3NraWxscy1jZXJ0cyA+IC5za2lsbERhdGEgLnNraWxsLWxpc3QgbGk6bGFzdC1jaGlsZHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsb3ctcm9vdDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgI3ZvbHVudGVlclxuICB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gICN2b2xcbiAge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDM2MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMjYwcHg7XG4gIH1cbiAgI3ZvbHVudGVlciAudm9sdW50ZWVyaW5nXG4gIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAjdm9sdW50ZWVyIC52b2x1bnRlZXJpbmcgdWwgbGlcbiAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxufVxuXG5cblxuXG5cblxuXG4vKiBNb2JpbGUgU3dpdGNoISAqL1xuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo2NTBweClcbntcbiAgI3Byb2plY3Rze1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gIH1cbiAgI3ZvbFxuICB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMjYwcHg7XG4gIH1cbiAgLndlbGNvbWUtaGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxuXG4gIC53ZWxjb21lLWhlYWRlciBoMyxcbiAgLndlbGNvbWUtaGVhZGVyID4gcHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnUXVlc3RyaWFsJywgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC53ZWxjb21lLWhlYWRlciBoM3tcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gIH1cblxuICAud2VsY29tZS1oZWFkZXIgPiBwIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdIZWVibycsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAudG8tcHJvamVjdHN7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIC8qIGxlZnQ6IDUwJTsgKi9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5cbiAgI3F1aWNrQ29udGFjdCA+IGxpXG4gIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbiAgI3F1aWNrQ29udGFjdCA+IGxpID4gYVxuICB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG4gICNxdWlja0NvbnRhY3QgPiBsaTpudGgtb2YtdHlwZSgyKSA+IGFcbiAge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NTUwcHgpXG57XG4gICNza2lsbHMtY2VydHMgPiAuc2tpbGxEYXRhIC5za2lsbC1saXN0IGxpIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgI3NraWxscy1jZXJ0cyA+IC5za2lsbERhdGEgLnNraWxsLWxpc3QgbGk6bGFzdC1jaGlsZHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gICNza2lsbHMtY2VydHMgPiAuc2tpbGxEYXRhIC5za2lsbC1saXN0IGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAjc2tpbGxzLWNlcnRzID4gLnNraWxsRGF0YSAuc2tpbGwtbGlzdCBsaSA+IGltZ3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcbiAgfVxuXG4gICN2b2xcbiAge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDMzMHB4O1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDozODBweClcbntcbiAgaDNcbiAge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgfVxuICAucHJvamVjdERhdGEgaDVcbiAge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7IFxuICB9XG4gIC5wcm9qZWN0RGF0YSBwXG4gIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgI2RhdGVBcnJvdyBwXG4gIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuICAjc2tpbGxzLWNlcnRzID4gLnNraWxsRGF0YSAuc2tpbGwtbGlzdCBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgI3NraWxscy1jZXJ0cyA+IC5za2lsbERhdGEgLnNraWxsLWxpc3QgbGkgPiBpbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4IDQwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"banners\" [ngSwitch]=\"banners\">\n  <section class=\"welcome-header\" *ngSwitchCase=\"'portfolioBanner'\" [@bannerSwitch]>\n    <h3>Hello</h3>\n    <p>I am Pavel A. Aparcana</p>\n    <p>a Software Engineer</p>\n\n    <ul id=\"quickContact\">\n      <li tooltip=\"LinkedIn\" placement=\"bottom\">\n        <a href=\"https://www.linkedin.com/in/pavel-aparcana\" class=\"fab fa-linkedin\" target=\"_blank\"\n          title=\"LinkedIn\"></a>\n      </li>\n      <li tooltip=\"Resume\" placement=\"bottom\">\n        <a href=\"assets/resume.pdf\" class=\"fas fa-file-alt\" target=\"_blank\" rel=\"noopener noreferrer\"\n          title=\"Resume\"></a>\n      </li>\n      <li tooltip=\"GitHub\" placement=\"bottom\">\n        <a href=\"https://github.com/aparcanapavel\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"fab fa-github\"\n          title=\"GitHub\"></a>\n      </li>\n    </ul>\n\n    <div class=\"to-projects\" (click)=\"scrollToProjects()\">\n      <p>Projects</p>\n      <i class=\"fas fa-chevron-down\"></i>\n    </div>\n  </section>\n\n  <section class=\"welcome-header\" *ngSwitchCase=\"'projectBanner'\" [@bannerSwitch]>\n    <p>Pavel A. Aparcana</p>\n    <p>Software Engineer</p>\n\n    <ul id=\"quickContact\">\n      <li tooltip=\"LinkedIn\" placement=\"bottom\">\n        <a href=\"https://www.linkedin.com/in/pavel-aparcana\" class=\"fab fa-linkedin\" target=\"_blank\"\n          title=\"LinkedIn\"></a>\n      </li>\n      <li tooltip=\"Resume\" placement=\"bottom\">\n        <a href=\"assets/resume.pdf\" class=\"fas fa-file-alt\" target=\"_blank\" rel=\"noopener noreferrer\"\n          title=\"Resume\"></a>\n      </li>\n      <li tooltip=\"GitHub\" placement=\"bottom\">\n        <a href=\"https://github.com/aparcanapavel\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"fab fa-github\"\n          title=\"GitHub\"></a>\n      </li>\n    </ul>\n\n    <div class=\"to-projects\" routerLink=\"/\">\n      <p>Projects</p>\n      <i class=\"fas fa-long-arrow-alt-left\"></i>\n    </div>\n  </section>\n\n</div>\n\n<div id=\"portfolioContainer\">\n \n  <section id=\"projects-comp\">\n\n    <div class=\"section\" id=\"projects-list\">\n      <h3 class=\"container-title\">Projects</h3>\n  \n      <div id=\"projects\" *ngFor=\"let project of projects | reverse\" routerLink=\"/portfolio/{{project.projID}}\" (click)=\"projectClicked()\">\n        <div class=\"image\">\n          <img src=\"{{ project.projIcon }}\" alt=\"\">\n        </div>\n        <h5>{{ project.projTitle }}</h5>\n        <div class=\"projectData\">\n            <p> {{ project.projSummary }}</p>\n        </div>\n        <div id=\"dateArrow\">\n          <p> {{ project.projDate }}</p>\n          <a class=\"fas fa-chevron-right\"></a>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section id=\"skills-vol\">\n    <div id=\"XP\" [ngSwitch]=\"xp\">\n      <div id=\"xpSwitch\">\n        <a id=\"skillsIcon\" class=\"fas fa-list-ul\" (click)=\"setXP('skills', $event)\" tooltip=\"Technical Skills\" placement=\"left\"></a>\n        <a id=\"volIcon\" class=\"fas fa-hands-helping\" (click)=\"setXP('volunteer', $event)\" tooltip=\"Volunteer Work\" placement=\"right\"></a>\n      </div>\n  \n      <div id=\"skills-certs\" *ngSwitchCase=\"'skills'\" [@xpSwitch]>\n        <h3 class=\"container-title\">Technical Skills</h3>\n        <div class=\"skillData\">\n          <ul class=\"skill-list\">\n            <li>\n              <img src=\"../../assets/portfolio/skills/javascript.svg\" alt=\"JavaScript\">\n              <caption>JavaScript</caption>\n            </li>\n            <li>\n              <img src=\"../../assets/portfolio/skills/graphql.svg\" alt=\"GraphQL\">\n              <caption>GraphQL</caption>\n            </li>\n            <li>\n              <img src=\"../../assets/portfolio/skills/apollo.png\" alt=\"Apollo Client\">\n              <caption>Apollo Client</caption>\n            </li>\n            <li>\n              <img src=\"../../assets/portfolio/skills/mongo.svg\" alt=\"MongoDB\">\n              <caption>MongoDB</caption>\n            </li>\n            <li>\n              <img src=\"../../assets/portfolio/skills/react.svg\" alt=\"ReactJS\">\n              <caption>ReactJS</caption>\n            </li>\n            <li>\n              <img src=\"../../assets/portfolio/skills/postgres.png\" alt=\"PostgreSQL\">\n              <caption>PostgreSQL</caption>\n            </li>\n            <li>\n              <img src=\"../../assets/portfolio/skills/rails.svg\" alt=\"Ruby on Rails\">\n              <caption>Ruby on Rails</caption>\n            </li>\n            <li>\n              <img src=\"../../assets/portfolio/skills/node.svg\" alt=\"Node\">\n              <caption>Node.js</caption>\n            </li>\n            <li>\n              <img src=\"../../assets/portfolio/skills/jquery.svg\" alt=\"jQuery\">\n              <caption>jQuery</caption>\n            </li>\n            <li>\n              <img src=\"../../assets/portfolio/skills/html.svg\" alt=\"HTML5\">\n              <caption>HTML5</caption>\n            </li>\n            <li>\n              <img src=\"../../assets/portfolio/skills/css.svg\" alt=\"CSS3\">\n              <caption>CSS3</caption>\n            </li>\n            <li>\n              <img src=\"../../assets//portfolio/skills/git.svg\" alt=\"\">\n              <caption>Git</caption>\n            </li>\n            <li class=\"last-row\">\n              <img src=\"../../assets/portfolio/skills/aws.svg\" alt=\"AWS\">\n              <caption>Amazon Web Services</caption>\n            </li>\n            <li class=\"last-row\">\n              <img src=\"../../assets/portfolio/skills/angular.svg\" alt=\"Angular\">\n              <caption>Angular 7</caption>\n            </li>\n            <li class=\"last-row\">\n              <img src=\"../../assets/portfolio/skills/p5js.svg\" alt=\"p5.js\">\n              <caption>p5.js</caption>\n            </li>\n            <li class=\"last-row\">\n              <img src=\"../../assets/portfolio/skills/sass-1.svg\" alt=\"p5.js\">\n              <caption>Sass</caption>\n            </li>\n          </ul>\n        </div>\n  \n      </div>\n  \n      <div class=\"volunteer\" id=\"volunteer\" *ngSwitchCase=\"'volunteer'\" [@xpSwitch]>\n        <h3 class=\"container-title\">Volunteer Work</h3>\n          <div class=\"volunteering\">\n            <ul>\n              <li>Raised $1,500 for the Juvinile Diabetes Research Foundation October 2015 - Present</li>\n              <li>Helped Raise $912,143.47 for Rutgers Dance Marathon Spring 2016 and 2018</li>\n              <li>5 hours of Community Service per college semester</li>\n            </ul>\n  \n          </div>\n          <carousel id=\"vol\">\n            <slide class=\"slidePic\">\n              <img src=\"assets/portfolio/experience/jrdf2015.png\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n            </slide>\n            <slide class=\"slidePic\">\n              <img src=\"assets/portfolio/experience/ftk2016.png\" alt=\"second slide\" style=\"display: block; width: 100%;\">\n            </slide>\n            <slide class=\"slidePic\">\n              <img src=\"assets/portfolio/experience/ftk2018.png\" alt=\"third slide\" style=\"display: block; width: 100%;\">\n            </slide>\n          </carousel>\n  \n      </div>\n  \n    </div>\n  </section>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(_setHeaders, _portfolioDataService, router) {
        this._setHeaders = _setHeaders;
        this._portfolioDataService = _portfolioDataService;
        this.router = router;
        this.projects = [];
        // switch for the skills and volunteer
        this.xp = "";
        this.banners = "";
        // set page Title and page banner to Portfolio
        this._setHeaders.portfolioClick();
        this.banners = "portfolioBanner";
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
    PortfolioComponent.prototype.scrollToProjects = function () {
        this._setHeaders.scrollToProjects();
    };
    PortfolioComponent.prototype.projectClicked = function () {
        this.banners = "projectBanner";
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
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('bannerSwitch', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            opacity: '0',
                            height: '!'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(100)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            opacity: '1',
                            position: 'absolute',
                            height: '!'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(10)
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], src_app_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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

module.exports = ".welcome-header{\n  width: 100%;\n  position: relative;\n  padding: 150px 50px;\n  transition: opacity 0.3s;\n  /* opacity: 1; */\n}\n\n.welcome-header h3,\n.welcome-header > p{\n  color: white;\n  width: auto;\n  text-align: center;\n  font-family: 'Questrial', sans-serif;\n}\n\n.welcome-header h3{\n  font-size: 65px;\n}\n\n.welcome-header > p {\n  font-size: 20px;\n  font-family: 'Heebo', sans-serif;\n  margin: 0px;\n}\n\n.to-projects{\n  color: white;\n  text-align: center;\n  border: 1px solid white;\n  max-width: 150px;\n  padding: 0px 20px;\n  font-family: 'Heebo', sans-serif;\n  border-radius: 10px;\n  position: relative;\n  margin: 0 auto;\n  bottom: -60px;\n  /* left: 50%; */\n  box-sizing: border-box;\n  transition: background-color 0.3s;\n  cursor: pointer;\n  /* animation: borderBlink 2.5s linear infinite; */\n}\n\n@-webkit-keyframes borderBlink {\n50% { border-color: #89B3D6; }\n}\n\n@keyframes borderBlink {\n50% { border-color: #89B3D6; }\n}\n\n@-webkit-keyframes colorBlink {\n50% { color: #89B3D6; }\n}\n\n@keyframes colorBlink {\n50% { color: #89B3D6; }\n}\n\n.to-projects:hover{\n  color: black;\n  background-color: whitesmoke;\n}\n\n.to-projects i {\n  -webkit-animation: colorBlink 2.5s linear infinite;\n          animation: colorBlink 2.5s linear infinite;\n}\n\n.to-projects p {\n  margin: 0px;\n  padding: 0px;\n}\n\n.to-projects:focus{\n  outline: none;\n}\n\n#quickContact\n{\n  display: block;\n  position: relative;\n  list-style: none;\n  font-size: 25px;\n  top: 5px;\n  margin: 0 auto;\n  z-index: 2;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0px;\n}\n\n#quickContact > li\n{\n  width: 40px;\n  height: 40px;\n  /* margin-bottom: 5px; */\n  margin: 15px 20px;\n  background-color: white;\n  display: inline-block;\n  text-align: center;\n  border-radius: 5px;\n  transition: 0.2s;\n}\n\n#quickContact > li:hover\n{\n  background-color: #89B3D6;\n}\n\n#quickContact > li > a:hover\n{\n  color: white;\n  transition: color 0.3s;\n}\n\n#quickContact > li > a\n{\n  -webkit-text-decoration: white;\n          text-decoration: white;\n  color: black;\n  padding: 2px;\n  vertical-align: top;\n  font-size: 35px;\n}\n\n#quickContact > li:nth-of-type(2) > a\n{\n  font-size: 33px;\n  padding: 3px 2px;\n}\n\n#project-background-container{\n  background-color: #607E96;\n}\n\n#projectContainer\n{\n  /* border-left: 1px solid rgba(255,255,255,0.4);\n  border-right: 1px solid rgba(255,255,255,0.4); */\n  padding: 0 20px;\n  /* background-color: #004266; */\n  padding-top: 20px;\n  padding-bottom: 20px;\n  max-width: 960px;\n  margin: 0 auto;\n  display: block;\n  position: relative;\n}\n\n#projectContainer h3\n{\n  color: rgba(255,255,255,1);\n  margin-bottom: 20px;\n}\n\n.projectIcon,\n.projectEssay\n{\n  vertical-align: top;\n  margin-left: 30px;\n}\n\n.projectIcon\n{\n  width: 65px;\n  overflow: hidden;\n  float: left;\n  margin-right: 15px;\n}\n\n.projectIcon a img\n{\n  width: 100%;\n}\n\n.projectEssay\n{\n  color: rgba(255,255,255,.9);\n  padding-right: 25px;\n  position: relative;\n  display: block;\n}\n\n.projectEssay .git\n{\n  margin-top: -15px;\n}\n\n.projectEssay .git a\n{\n  padding: 8px;\n  font-size: 20px;\n  text-decoration: none;\n}\n\n.projectEssay .git a:hover\n{\n  cursor: pointer;\n}\n\n.carousel-caption\n{\n  color: white;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 7px;\n}\n\n#projectSlideshow\n{\n  width: 60%;\n  margin: auto;\n}\n\n#anchor-link{\n  color: #2F3E4A;\n}\n\n/* Mobile Switch! */\n\n@media all and (max-width:650px)\n{\n  .projectEssay\n  {\n    padding-right: 15px;\n  }\n  .carousel-caption h5\n  {\n    font-size: 15px;\n  }\n  #projectSlideshow\n  {\n    width: 100%;\n    margin: auto;\n  }\n  h3\n  {\n    font-size: 25px;\n  }\n\n  .welcome-header{\n    width: 100%;\n    position: relative;\n    padding: 50px 50px;\n    height: 250px;\n  }\n\n  .welcome-header h3,\n  .welcome-header > p{\n    color: white;\n    width: auto;\n    text-align: center;\n    font-family: 'Questrial', sans-serif;\n  }\n\n  .welcome-header h3{\n    font-size: 45px;\n  }\n\n  .welcome-header > p {\n    font-size: 15px;\n    font-family: 'Heebo', sans-serif;\n  }\n\n  .to-projects{\n    color: white;\n    text-align: center;\n    border: 1px solid white;\n    max-width: 150px;\n    padding: 0px 20px;\n    font-family: 'Heebo', sans-serif;\n    border-radius: 10px;\n    position: relative;\n    margin: 0 auto;\n    bottom: -30px;\n    /* left: 50%; */\n    box-sizing: border-box;\n    transition: background-color 0.3s;\n    cursor: pointer;\n    font-size: 15px;\n  }\n\n  #quickContact > li\n  {\n    width: 30px;\n    height: 30px;\n  }\n  #quickContact > li > a\n  {\n    font-size: 28px;\n  }\n  #quickContact > li:nth-of-type(2) > a\n  {\n    font-size: 25px;\n  }\n}\n\n@media all and (max-width: 380px)\n{\n  h3\n  {\n    font-size: 23px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsaURBQWlEO0FBQ25EOztBQUVBO0FBQ0EsTUFBTSxxQkFBcUIsRUFBRTtBQUM3Qjs7QUFGQTtBQUNBLE1BQU0scUJBQXFCLEVBQUU7QUFDN0I7O0FBRUE7QUFDQSxNQUFNLGNBQWMsRUFBRTtBQUN0Qjs7QUFGQTtBQUNBLE1BQU0sY0FBYyxFQUFFO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtEQUEwQztVQUExQywwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixRQUFRO0VBQ1IsY0FBYztFQUNkLFVBQVU7RUFDViwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBQ0E7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBQ0E7O0VBRUUseUJBQXlCO0FBQzNCOztBQUNBOztFQUVFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBQ0E7O0VBRUUsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUNBOztFQUVFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUU7a0RBQ2dEO0VBQ2hELGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBQ0E7O0VBRUUsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQjs7QUFDQTs7O0VBR0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBQ0E7O0VBRUUsV0FBVztBQUNiOztBQUNBOztFQUVFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBQ0E7O0VBRUUsaUJBQWlCO0FBQ25COztBQUNBOztFQUVFLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUNBOztFQUVFLGVBQWU7QUFDakI7O0FBQ0E7O0VBRUUsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBQ0E7O0VBRUUsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBVUEsbUJBQW1COztBQUNuQjs7RUFFRTs7SUFFRSxtQkFBbUI7RUFDckI7RUFDQTs7SUFFRSxlQUFlO0VBQ2pCO0VBQ0E7O0lBRUUsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBOztJQUVFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7O0VBRUE7O0lBRUUsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7O0lBRUUsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBOztJQUVFLGVBQWU7RUFDakI7RUFDQTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBTUE7O0VBRUU7O0lBRUUsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1oZWFkZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE1MHB4IDUwcHg7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbiAgLyogb3BhY2l0eTogMTsgKi9cbn1cblxuLndlbGNvbWUtaGVhZGVyIGgzLFxuLndlbGNvbWUtaGVhZGVyID4gcHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ1F1ZXN0cmlhbCcsIHNhbnMtc2VyaWY7XG59XG5cbi53ZWxjb21lLWhlYWRlciBoM3tcbiAgZm9udC1zaXplOiA2NXB4O1xufVxuXG4ud2VsY29tZS1oZWFkZXIgPiBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ0hlZWJvJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi50by1wcm9qZWN0c3tcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgZm9udC1mYW1pbHk6ICdIZWVibycsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvdHRvbTogLTYwcHg7XG4gIC8qIGxlZnQ6IDUwJTsgKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIGFuaW1hdGlvbjogYm9yZGVyQmxpbmsgMi41cyBsaW5lYXIgaW5maW5pdGU7ICovXG59XG5cbkBrZXlmcmFtZXMgYm9yZGVyQmxpbmsge1xuNTAlIHsgYm9yZGVyLWNvbG9yOiAjODlCM0Q2OyB9XG59XG5cbkBrZXlmcmFtZXMgY29sb3JCbGluayB7XG41MCUgeyBjb2xvcjogIzg5QjNENjsgfVxufVxuXG4udG8tcHJvamVjdHM6aG92ZXJ7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnRvLXByb2plY3RzIGkge1xuICBhbmltYXRpb246IGNvbG9yQmxpbmsgMi41cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi50by1wcm9qZWN0cyBwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnRvLXByb2plY3RzOmZvY3Vze1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jcXVpY2tDb250YWN0XG57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdG9wOiA1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDBweDtcbn1cbiNxdWlja0NvbnRhY3QgPiBsaVxue1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAvKiBtYXJnaW4tYm90dG9tOiA1cHg7ICovXG4gIG1hcmdpbjogMTVweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbiNxdWlja0NvbnRhY3QgPiBsaTpob3Zlclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODlCM0Q2O1xufVxuI3F1aWNrQ29udGFjdCA+IGxpID4gYTpob3Zlclxue1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG59XG4jcXVpY2tDb250YWN0ID4gbGkgPiBhXG57XG4gIHRleHQtZGVjb3JhdGlvbjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBmb250LXNpemU6IDM1cHg7XG59XG4jcXVpY2tDb250YWN0ID4gbGk6bnRoLW9mLXR5cGUoMikgPiBhXG57XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgcGFkZGluZzogM3B4IDJweDtcbn1cblxuI3Byb2plY3QtYmFja2dyb3VuZC1jb250YWluZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdFOTY7XG59XG5cbiNwcm9qZWN0Q29udGFpbmVyXG57XG4gIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7ICovXG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwNDI2NjsgKi9cbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNwcm9qZWN0Q29udGFpbmVyIGgzXG57XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnByb2plY3RJY29uLFxuLnByb2plY3RFc3NheVxue1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cbi5wcm9qZWN0SWNvblxue1xuICB3aWR0aDogNjVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5wcm9qZWN0SWNvbiBhIGltZ1xue1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9qZWN0RXNzYXlcbntcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjkpO1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnByb2plY3RFc3NheSAuZ2l0XG57XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuLnByb2plY3RFc3NheSAuZ2l0IGFcbntcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5wcm9qZWN0RXNzYXkgLmdpdCBhOmhvdmVyXG57XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJvdXNlbC1jYXB0aW9uXG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4jcHJvamVjdFNsaWRlc2hvd1xue1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IGF1dG87XG59XG4jYW5jaG9yLWxpbmt7XG4gIGNvbG9yOiAjMkYzRTRBO1xufVxuXG5cblxuXG5cblxuXG5cblxuLyogTW9iaWxlIFN3aXRjaCEgKi9cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NjUwcHgpXG57XG4gIC5wcm9qZWN0RXNzYXlcbiAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cbiAgLmNhcm91c2VsLWNhcHRpb24gaDVcbiAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAjcHJvamVjdFNsaWRlc2hvd1xuICB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIGgzXG4gIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuICAud2VsY29tZS1oZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDUwcHggNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG5cbiAgLndlbGNvbWUtaGVhZGVyIGgzLFxuICAud2VsY29tZS1oZWFkZXIgPiBwe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdRdWVzdHJpYWwnLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgLndlbGNvbWUtaGVhZGVyIGgze1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgfVxuXG4gIC53ZWxjb21lLWhlYWRlciA+IHAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogJ0hlZWJvJywgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC50by1wcm9qZWN0c3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdIZWVibycsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm90dG9tOiAtMzBweDtcbiAgICAvKiBsZWZ0OiA1MCU7ICovXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gICNxdWlja0NvbnRhY3QgPiBsaVxuICB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gICNxdWlja0NvbnRhY3QgPiBsaSA+IGFcbiAge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuICAjcXVpY2tDb250YWN0ID4gbGk6bnRoLW9mLXR5cGUoMikgPiBhXG4gIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbn1cblxuXG5cblxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAzODBweClcbntcbiAgaDNcbiAge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"welcome-header\">\n  <p>Pavel A. Aparcana</p>\n  <p>Software Engineer</p>\n\n  <ul id=\"quickContact\">\n    <li tooltip=\"LinkedIn\" placement=\"bottom\">\n      <a href=\"https://www.linkedin.com/in/pavel-aparcana\" class=\"fab fa-linkedin\" target=\"_blank\" title=\"LinkedIn\"></a>\n    </li>\n    <li tooltip=\"Resume\" placement=\"bottom\">\n      <a href=\"assets/resume.pdf\" class=\"fas fa-file-alt\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Resume\"></a>\n    </li>\n    <li tooltip=\"GitHub\" placement=\"bottom\">\n      <a href=\"https://github.com/aparcanapavel\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"fab fa-github\"\n        title=\"GitHub\"></a>\n    </li>\n  </ul>\n\n  <div class=\"to-projects\" routerLink=\"/\">\n    <p>Projects</p>\n    <i class=\"fas fa-long-arrow-alt-left\"></i>\n  </div>\n</section>\n\n<section id=\"project-background-container\">\n  <div id=\"projectContainer\">\n  \n    <h3>{{ fullProject.projTitle }}</h3>\n  \n    <div class=\"projectIcon\">\n      <a href=\"{{fullProject.projURL}}\" routerLink=\"/{{fullProject.routeURL}}\" target=\"_blank\"><img src=\"{{ fullProject.projIcon }}\" alt=\"\"></a>\n    </div>\n    <div class=\"projectEssay\">\n      <p *ngFor=\"let essay of fullProject.projEssay\">{{essay.projParagraph}}\n      </p>\n      <p class=\"url\"><a href=\"{{fullProject.projURL}}\" routerLink=\"/{{fullProject.routeURL}}\" target=\"_blank\" id=\"anchor-link\">Click here</a> to view the project</p>\n      <p *ngIf=\"fullProject.gitURL != 'false'\" class=\"git\">Source code: <a class=\"fab fa-github\" href=\"{{fullProject.gitURL}}\" target=\"_blank\" id=\"anchor-link\"></a></p>\n    </div>\n  \n    <div id=\"projectSlideshow\">\n      <carousel [noPause]=\"false\">\n        <slide *ngFor=\"let slide of fullProject.slideShow\">\n          <img src=\"{{ slide.slide }}\" alt=\"image slide\" style=\"display: block; width: 100%;\">\n          <div class=\"carousel-caption\">\n            <h5>{{ slide.imgTitle }}</h5>\n          </div>\n        </slide>\n      </carousel>\n    </div>\n  \n  </div>\n</section>\n"

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
        this.noPause = false;
        this.fullProject = [];
        // sets the header to the portfolio background
        this._setHeaders.projectClick();
        // sets the title to projects
    }
    ProjectComponent.prototype.ngOnInit = function () {
        // takes a snapshot from the URL
        var id = +this.route.snapshot.paramMap.get('id');
        this.getProjectById(id);
    };
    ProjectComponent.prototype.scrollToProjects = function () {
        this._setHeaders.scrollToProjects();
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