/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
var NgxTweetService = /** @class */ (function () {
    function NgxTweetService(_document) {
        this._document = _document;
        this.TWITTER_OBJECT = 'twttr';
        this.TWITTER_SCRIPT_ID = 'twitter-wjs';
        this.TWITTER_WIDGET_URL = 'https://platform.twitter.com/widgets.js';
    }
    /**
     * @return {?}
     */
    NgxTweetService.prototype.loadScript = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this._startScriptLoad();
            _this._document.defaultView[_this.TWITTER_OBJECT].ready(_this._onTwitterScriptLoadedFactory(observer));
        });
    };
    /**
     * @return {?}
     */
    NgxTweetService.prototype._startScriptLoad = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ twitterData = this._document.defaultView[this.TWITTER_OBJECT] || {};
        if (this._twitterScriptAlreadyExists()) {
            this._document.defaultView[this.TWITTER_OBJECT] = twitterData;
            return;
        }
        this._appendTwitterScriptToDOM();
        twitterData._e = [];
        twitterData.ready = function (callback) {
            twitterData._e.push(callback);
        };
        this._document.defaultView[this.TWITTER_OBJECT] = twitterData;
    };
    /**
     * @return {?}
     */
    NgxTweetService.prototype._twitterScriptAlreadyExists = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ twitterScript = this._document.getElementById(this.TWITTER_SCRIPT_ID);
        return (twitterScript !== null || typeof twitterScript !== 'object');
    };
    /**
     * @return {?}
     */
    NgxTweetService.prototype._appendTwitterScriptToDOM = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ firstJSScript = this._document.getElementsByTagName('script')[0];
        var /** @type {?} */ js = this._document.createElement('script');
        js.id = this.TWITTER_SCRIPT_ID;
        js.src = this.TWITTER_WIDGET_URL;
        firstJSScript.parentNode.insertBefore(js, firstJSScript);
    };
    /**
     * @param {?} observer
     * @return {?}
     */
    NgxTweetService.prototype._onTwitterScriptLoadedFactory = /**
     * @param {?} observer
     * @return {?}
     */
    function (observer) {
        return function (twitterData) {
            observer.next(twitterData);
            observer.complete();
        };
    };
    NgxTweetService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NgxTweetService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
    ]; };
    return NgxTweetService;
}());
export { NgxTweetService };
function NgxTweetService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NgxTweetService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NgxTweetService.ctorParameters;
    /** @type {?} */
    NgxTweetService.prototype.TWITTER_OBJECT;
    /** @type {?} */
    NgxTweetService.prototype.TWITTER_SCRIPT_ID;
    /** @type {?} */
    NgxTweetService.prototype.TWITTER_WIDGET_URL;
    /** @type {?} */
    NgxTweetService.prototype._document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR3ZWV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdHdlZXQvIiwic291cmNlcyI6WyJzcmMvYXBwL3NlcnZpY2VzL25neC10d2VldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7SUFTeEMseUJBQStDO1FBQUEsY0FBUyxHQUFULFNBQVM7OEJBSnRCLE9BQU87aUNBQ0osYUFBYTtrQ0FDWix5Q0FBeUM7S0FHOUU7Ozs7SUFFTSxvQ0FBVTs7Ozs7UUFDYixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQXVCO1lBQzdDLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFFLEtBQUksQ0FBQyxjQUFjLENBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLDZCQUE2QixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDekcsQ0FBQyxDQUFDOzs7OztJQUdDLDBDQUFnQjs7OztRQUNwQixxQkFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBRSxJQUFJLEVBQUUsQ0FBQztRQUU1RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBRSxHQUFHLFdBQVcsQ0FBQztZQUNoRSxNQUFNLENBQUM7U0FDVjtRQUVELElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBRWpDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRXBCLFdBQVcsQ0FBQyxLQUFLLEdBQUcsVUFBQyxRQUFrQjtZQUNuQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBRSxHQUFHLFdBQVcsQ0FBQzs7Ozs7SUFHNUQscURBQTJCOzs7O1FBQy9CLHFCQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM1RSxNQUFNLENBQUMsQ0FBQyxhQUFhLEtBQUssSUFBSSxJQUFJLE9BQU8sYUFBYSxLQUFLLFFBQVEsQ0FBQyxDQUFDOzs7OztJQUdqRSxtREFBeUI7Ozs7UUFDN0IscUJBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDekUscUJBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQy9CLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ2pDLGFBQWEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQzs7Ozs7O0lBR3JELHVEQUE2Qjs7OztjQUFDLFFBQXVCO1FBQ3pELE1BQU0sQ0FBQyxVQUFDLFdBQWdCO1lBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDM0IsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3ZCLENBQUM7OztnQkFyRFQsVUFBVTs7OztnREFPTSxNQUFNLFNBQUMsUUFBUTs7MEJBWGhDOztTQUthLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hUd2VldFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBUV0lUVEVSX09CSkVDVCA9ICd0d3R0cic7XG4gICAgcHJpdmF0ZSByZWFkb25seSBUV0lUVEVSX1NDUklQVF9JRCA9ICd0d2l0dGVyLXdqcyc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBUV0lUVEVSX1dJREdFVF9VUkwgPSAnaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzJztcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgcmVhZG9ubHkgX2RvY3VtZW50OiBhbnkpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFNjcmlwdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zdGFydFNjcmlwdExvYWQoKTtcbiAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50LmRlZmF1bHRWaWV3WyB0aGlzLlRXSVRURVJfT0JKRUNUIF0ucmVhZHkodGhpcy5fb25Ud2l0dGVyU2NyaXB0TG9hZGVkRmFjdG9yeShvYnNlcnZlcikpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdGFydFNjcmlwdExvYWQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHR3aXR0ZXJEYXRhID0gdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXdbIHRoaXMuVFdJVFRFUl9PQkpFQ1QgXSB8fCB7fTtcblxuICAgICAgICBpZiAodGhpcy5fdHdpdHRlclNjcmlwdEFscmVhZHlFeGlzdHMoKSkge1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXdbIHRoaXMuVFdJVFRFUl9PQkpFQ1QgXSA9IHR3aXR0ZXJEYXRhO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYXBwZW5kVHdpdHRlclNjcmlwdFRvRE9NKCk7XG5cbiAgICAgICAgdHdpdHRlckRhdGEuX2UgPSBbXTtcblxuICAgICAgICB0d2l0dGVyRGF0YS5yZWFkeSA9IChjYWxsYmFjazogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHR3aXR0ZXJEYXRhLl9lLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2RvY3VtZW50LmRlZmF1bHRWaWV3WyB0aGlzLlRXSVRURVJfT0JKRUNUIF0gPSB0d2l0dGVyRGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90d2l0dGVyU2NyaXB0QWxyZWFkeUV4aXN0cygpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdHdpdHRlclNjcmlwdCA9IHRoaXMuX2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuVFdJVFRFUl9TQ1JJUFRfSUQpO1xuICAgICAgICByZXR1cm4gKHR3aXR0ZXJTY3JpcHQgIT09IG51bGwgfHwgdHlwZW9mIHR3aXR0ZXJTY3JpcHQgIT09ICdvYmplY3QnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hcHBlbmRUd2l0dGVyU2NyaXB0VG9ET00oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZpcnN0SlNTY3JpcHQgPSB0aGlzLl9kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbIDAgXTtcbiAgICAgICAgY29uc3QganMgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAganMuaWQgPSB0aGlzLlRXSVRURVJfU0NSSVBUX0lEO1xuICAgICAgICBqcy5zcmMgPSB0aGlzLlRXSVRURVJfV0lER0VUX1VSTDtcbiAgICAgICAgZmlyc3RKU1NjcmlwdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgZmlyc3RKU1NjcmlwdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25Ud2l0dGVyU2NyaXB0TG9hZGVkRmFjdG9yeShvYnNlcnZlcjogT2JzZXJ2ZXI8YW55Pik6IEZ1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuICh0d2l0dGVyRGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHR3aXR0ZXJEYXRhKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH07XG4gICAgfVxufVxuIl19