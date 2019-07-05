import { DOCUMENT, CommonModule } from '@angular/common';
import { Inject, Injectable, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxTweetComponent = /** @class */ (function () {
    function NgxTweetComponent(_elementRef, _ngxTweetService, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._ngxTweetService = _ngxTweetService;
        this._changeDetectorRef = _changeDetectorRef;
        this.isTwitterScriptLoading = true;
    }
    /**
     * @return {?}
     */
    NgxTweetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._loadTwitterScript();
    };
    /**
     * @return {?}
     */
    NgxTweetComponent.prototype._loadTwitterScript = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._ngxTweetService
            .loadScript()
            .subscribe(function (twitterData) {
            _this._updateTwitterScriptLoadingState();
            twitterData.widgets.createTweet(_this.tweetId, _this._elementRef.nativeElement, {});
        });
    };
    /**
     * @return {?}
     */
    NgxTweetComponent.prototype._updateTwitterScriptLoadingState = /**
     * @return {?}
     */
    function () {
        this.isTwitterScriptLoading = false;
        this._changeDetectorRef.detectChanges();
    };
    NgxTweetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-tweet',
                    template: '<ng-content *ngIf="isTwitterScriptLoading"></ng-content>',
                    styles: ['.twitter-tweet { transform: none !important; }'],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    NgxTweetComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgxTweetService, },
        { type: ChangeDetectorRef, },
    ]; };
    NgxTweetComponent.propDecorators = {
        "tweetId": [{ type: Input },],
    };
    return NgxTweetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxTweetModule = /** @class */ (function () {
    function NgxTweetModule() {
    }
    NgxTweetModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NgxTweetComponent
                    ],
                    imports: [CommonModule],
                    exports: [NgxTweetComponent],
                    providers: [NgxTweetService]
                },] },
    ];
    return NgxTweetModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NgxTweetModule, NgxTweetComponent as ɵa, NgxTweetService as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR3ZWV0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtdHdlZXQvc3JjL2FwcC9zZXJ2aWNlcy9uZ3gtdHdlZXQuc2VydmljZS50cyIsIm5nOi8vbmd4LXR3ZWV0L3NyYy9hcHAvY29tcG9uZW50cy9uZ3gtdHdlZXQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtdHdlZXQvc3JjL2FwcC9uZ3gtdHdlZXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neFR3ZWV0U2VydmljZSB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IFRXSVRURVJfT0JKRUNUID0gJ3R3dHRyJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IFRXSVRURVJfU0NSSVBUX0lEID0gJ3R3aXR0ZXItd2pzJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IFRXSVRURVJfV0lER0VUX1VSTCA9ICdodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanMnO1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSByZWFkb25seSBfZG9jdW1lbnQ6IGFueSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkU2NyaXB0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2NyaXB0TG9hZCgpO1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXdbIHRoaXMuVFdJVFRFUl9PQkpFQ1QgXS5yZWFkeSh0aGlzLl9vblR3aXR0ZXJTY3JpcHRMb2FkZWRGYWN0b3J5KG9ic2VydmVyKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3N0YXJ0U2NyaXB0TG9hZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdHdpdHRlckRhdGEgPSB0aGlzLl9kb2N1bWVudC5kZWZhdWx0Vmlld1sgdGhpcy5UV0lUVEVSX09CSkVDVCBdIHx8IHt9O1xuXG4gICAgICAgIGlmICh0aGlzLl90d2l0dGVyU2NyaXB0QWxyZWFkeUV4aXN0cygpKSB7XG4gICAgICAgICAgICB0aGlzLl9kb2N1bWVudC5kZWZhdWx0Vmlld1sgdGhpcy5UV0lUVEVSX09CSkVDVCBdID0gdHdpdHRlckRhdGE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hcHBlbmRUd2l0dGVyU2NyaXB0VG9ET00oKTtcblxuICAgICAgICB0d2l0dGVyRGF0YS5fZSA9IFtdO1xuXG4gICAgICAgIHR3aXR0ZXJEYXRhLnJlYWR5ID0gKGNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgdHdpdHRlckRhdGEuX2UucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXdbIHRoaXMuVFdJVFRFUl9PQkpFQ1QgXSA9IHR3aXR0ZXJEYXRhO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3R3aXR0ZXJTY3JpcHRBbHJlYWR5RXhpc3RzKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB0d2l0dGVyU2NyaXB0ID0gdGhpcy5fZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5UV0lUVEVSX1NDUklQVF9JRCk7XG4gICAgICAgIHJldHVybiAodHdpdHRlclNjcmlwdCAhPT0gbnVsbCB8fCB0eXBlb2YgdHdpdHRlclNjcmlwdCAhPT0gJ29iamVjdCcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FwcGVuZFR3aXR0ZXJTY3JpcHRUb0RPTSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZmlyc3RKU1NjcmlwdCA9IHRoaXMuX2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVsgMCBdO1xuICAgICAgICBjb25zdCBqcyA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBqcy5pZCA9IHRoaXMuVFdJVFRFUl9TQ1JJUFRfSUQ7XG4gICAgICAgIGpzLnNyYyA9IHRoaXMuVFdJVFRFUl9XSURHRVRfVVJMO1xuICAgICAgICBmaXJzdEpTU2NyaXB0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmaXJzdEpTU2NyaXB0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblR3aXR0ZXJTY3JpcHRMb2FkZWRGYWN0b3J5KG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KTogRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gKHR3aXR0ZXJEYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQodHdpdHRlckRhdGEpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE9uSW5pdCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFR3ZWV0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL25neC10d2VldC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtdHdlZXQnLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQgKm5nSWY9XCJpc1R3aXR0ZXJTY3JpcHRMb2FkaW5nXCI+PC9uZy1jb250ZW50PicsXG4gICAgc3R5bGVzOiBbICcudHdpdHRlci10d2VldCB7IHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50OyB9JyBdLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTmd4VHdlZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0d2VldElkOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgaXNUd2l0dGVyU2NyaXB0TG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX25neFR3ZWV0U2VydmljZTogTmd4VHdlZXRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9hZFR3aXR0ZXJTY3JpcHQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2FkVHdpdHRlclNjcmlwdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbmd4VHdlZXRTZXJ2aWNlXG4gICAgICAgICAgICAubG9hZFNjcmlwdCgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCh0d2l0dGVyRGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVHdpdHRlclNjcmlwdExvYWRpbmdTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHR3aXR0ZXJEYXRhLndpZGdldHMuY3JlYXRlVHdlZXQodGhpcy50d2VldElkLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHt9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZVR3aXR0ZXJTY3JpcHRMb2FkaW5nU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNUd2l0dGVyU2NyaXB0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hUd2VldENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uZ3gtdHdlZXQuY29tcG9uZW50JztcbmltcG9ydCB7IE5neFR3ZWV0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbmd4LXR3ZWV0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZ3hUd2VldENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUgXSxcbiAgICBleHBvcnRzOiBbIE5neFR3ZWV0Q29tcG9uZW50IF0sXG4gICAgcHJvdmlkZXJzOiBbIE5neFR3ZWV0U2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFR3ZWV0TW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0lBV0kseUJBQStDO1FBQUEsY0FBUyxHQUFULFNBQVM7OEJBSnRCLE9BQU87aUNBQ0osYUFBYTtrQ0FDWix5Q0FBeUM7S0FHOUU7Ozs7SUFFTSxvQ0FBVTs7Ozs7UUFDYixPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUF1QjtZQUM3QyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBRSxLQUFJLENBQUMsY0FBYyxD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