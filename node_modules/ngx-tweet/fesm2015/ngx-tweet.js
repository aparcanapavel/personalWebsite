import { DOCUMENT, CommonModule } from '@angular/common';
import { Inject, Injectable, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxTweetService {
    /**
     * @param {?} _document
     */
    constructor(_document) {
        this._document = _document;
        this.TWITTER_OBJECT = 'twttr';
        this.TWITTER_SCRIPT_ID = 'twitter-wjs';
        this.TWITTER_WIDGET_URL = 'https://platform.twitter.com/widgets.js';
    }
    /**
     * @return {?}
     */
    loadScript() {
        return Observable.create((observer) => {
            this._startScriptLoad();
            this._document.defaultView[this.TWITTER_OBJECT].ready(this._onTwitterScriptLoadedFactory(observer));
        });
    }
    /**
     * @return {?}
     */
    _startScriptLoad() {
        const /** @type {?} */ twitterData = this._document.defaultView[this.TWITTER_OBJECT] || {};
        if (this._twitterScriptAlreadyExists()) {
            this._document.defaultView[this.TWITTER_OBJECT] = twitterData;
            return;
        }
        this._appendTwitterScriptToDOM();
        twitterData._e = [];
        twitterData.ready = (callback) => {
            twitterData._e.push(callback);
        };
        this._document.defaultView[this.TWITTER_OBJECT] = twitterData;
    }
    /**
     * @return {?}
     */
    _twitterScriptAlreadyExists() {
        const /** @type {?} */ twitterScript = this._document.getElementById(this.TWITTER_SCRIPT_ID);
        return (twitterScript !== null || typeof twitterScript !== 'object');
    }
    /**
     * @return {?}
     */
    _appendTwitterScriptToDOM() {
        const /** @type {?} */ firstJSScript = this._document.getElementsByTagName('script')[0];
        const /** @type {?} */ js = this._document.createElement('script');
        js.id = this.TWITTER_SCRIPT_ID;
        js.src = this.TWITTER_WIDGET_URL;
        firstJSScript.parentNode.insertBefore(js, firstJSScript);
    }
    /**
     * @param {?} observer
     * @return {?}
     */
    _onTwitterScriptLoadedFactory(observer) {
        return (twitterData) => {
            observer.next(twitterData);
            observer.complete();
        };
    }
}
NgxTweetService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NgxTweetService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxTweetComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _ngxTweetService
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, _ngxTweetService, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._ngxTweetService = _ngxTweetService;
        this._changeDetectorRef = _changeDetectorRef;
        this.isTwitterScriptLoading = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._loadTwitterScript();
    }
    /**
     * @return {?}
     */
    _loadTwitterScript() {
        this._ngxTweetService
            .loadScript()
            .subscribe((twitterData) => {
            this._updateTwitterScriptLoadingState();
            twitterData.widgets.createTweet(this.tweetId, this._elementRef.nativeElement, {});
        });
    }
    /**
     * @return {?}
     */
    _updateTwitterScriptLoadingState() {
        this.isTwitterScriptLoading = false;
        this._changeDetectorRef.detectChanges();
    }
}
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
NgxTweetComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: NgxTweetService, },
    { type: ChangeDetectorRef, },
];
NgxTweetComponent.propDecorators = {
    "tweetId": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxTweetModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NgxTweetModule, NgxTweetComponent as ɵa, NgxTweetService as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR3ZWV0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtdHdlZXQvc3JjL2FwcC9zZXJ2aWNlcy9uZ3gtdHdlZXQuc2VydmljZS50cyIsIm5nOi8vbmd4LXR3ZWV0L3NyYy9hcHAvY29tcG9uZW50cy9uZ3gtdHdlZXQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtdHdlZXQvc3JjL2FwcC9uZ3gtdHdlZXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neFR3ZWV0U2VydmljZSB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IFRXSVRURVJfT0JKRUNUID0gJ3R3dHRyJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IFRXSVRURVJfU0NSSVBUX0lEID0gJ3R3aXR0ZXItd2pzJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IFRXSVRURVJfV0lER0VUX1VSTCA9ICdodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanMnO1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSByZWFkb25seSBfZG9jdW1lbnQ6IGFueSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkU2NyaXB0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2NyaXB0TG9hZCgpO1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXdbIHRoaXMuVFdJVFRFUl9PQkpFQ1QgXS5yZWFkeSh0aGlzLl9vblR3aXR0ZXJTY3JpcHRMb2FkZWRGYWN0b3J5KG9ic2VydmVyKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3N0YXJ0U2NyaXB0TG9hZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdHdpdHRlckRhdGEgPSB0aGlzLl9kb2N1bWVudC5kZWZhdWx0Vmlld1sgdGhpcy5UV0lUVEVSX09CSkVDVCBdIHx8IHt9O1xuXG4gICAgICAgIGlmICh0aGlzLl90d2l0dGVyU2NyaXB0QWxyZWFkeUV4aXN0cygpKSB7XG4gICAgICAgICAgICB0aGlzLl9kb2N1bWVudC5kZWZhdWx0Vmlld1sgdGhpcy5UV0lUVEVSX09CSkVDVCBdID0gdHdpdHRlckRhdGE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hcHBlbmRUd2l0dGVyU2NyaXB0VG9ET00oKTtcblxuICAgICAgICB0d2l0dGVyRGF0YS5fZSA9IFtdO1xuXG4gICAgICAgIHR3aXR0ZXJEYXRhLnJlYWR5ID0gKGNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgdHdpdHRlckRhdGEuX2UucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXdbIHRoaXMuVFdJVFRFUl9PQkpFQ1QgXSA9IHR3aXR0ZXJEYXRhO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3R3aXR0ZXJTY3JpcHRBbHJlYWR5RXhpc3RzKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB0d2l0dGVyU2NyaXB0ID0gdGhpcy5fZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5UV0lUVEVSX1NDUklQVF9JRCk7XG4gICAgICAgIHJldHVybiAodHdpdHRlclNjcmlwdCAhPT0gbnVsbCB8fCB0eXBlb2YgdHdpdHRlclNjcmlwdCAhPT0gJ29iamVjdCcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FwcGVuZFR3aXR0ZXJTY3JpcHRUb0RPTSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZmlyc3RKU1NjcmlwdCA9IHRoaXMuX2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVsgMCBdO1xuICAgICAgICBjb25zdCBqcyA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBqcy5pZCA9IHRoaXMuVFdJVFRFUl9TQ1JJUFRfSUQ7XG4gICAgICAgIGpzLnNyYyA9IHRoaXMuVFdJVFRFUl9XSURHRVRfVVJMO1xuICAgICAgICBmaXJzdEpTU2NyaXB0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmaXJzdEpTU2NyaXB0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblR3aXR0ZXJTY3JpcHRMb2FkZWRGYWN0b3J5KG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KTogRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gKHR3aXR0ZXJEYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQodHdpdHRlckRhdGEpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE9uSW5pdCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFR3ZWV0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL25neC10d2VldC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtdHdlZXQnLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQgKm5nSWY9XCJpc1R3aXR0ZXJTY3JpcHRMb2FkaW5nXCI+PC9uZy1jb250ZW50PicsXG4gICAgc3R5bGVzOiBbICcudHdpdHRlci10d2VldCB7IHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50OyB9JyBdLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTmd4VHdlZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0d2VldElkOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgaXNUd2l0dGVyU2NyaXB0TG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX25neFR3ZWV0U2VydmljZTogTmd4VHdlZXRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9hZFR3aXR0ZXJTY3JpcHQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2FkVHdpdHRlclNjcmlwdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbmd4VHdlZXRTZXJ2aWNlXG4gICAgICAgICAgICAubG9hZFNjcmlwdCgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCh0d2l0dGVyRGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlVHdpdHRlclNjcmlwdExvYWRpbmdTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHR3aXR0ZXJEYXRhLndpZGdldHMuY3JlYXRlVHdlZXQodGhpcy50d2VldElkLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHt9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZVR3aXR0ZXJTY3JpcHRMb2FkaW5nU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNUd2l0dGVyU2NyaXB0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hUd2VldENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uZ3gtdHdlZXQuY29tcG9uZW50JztcbmltcG9ydCB7IE5neFR3ZWV0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbmd4LXR3ZWV0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZ3hUd2VldENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUgXSxcbiAgICBleHBvcnRzOiBbIE5neFR3ZWV0Q29tcG9uZW50IF0sXG4gICAgcHJvdmlkZXJzOiBbIE5neFR3ZWV0U2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFR3ZWV0TW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0lBV0ksWUFBK0M7UUFBQSxjQUFTLEdBQVQsU0FBUzs4QkFKdEIsT0FBTztpQ0FDSixhQUFhO2tDQUNaLHlDQUF5QztLQUc5RTs7OztJQUVNLFVBQVU7UUFDYixPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUF1QjtZQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsY0FBYyxDQUFF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