(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ngx-tweet', ['exports', '@angular/common', '@angular/core', 'rxjs'], factory) :
    (factory((global['ngx-tweet'] = {}),global.ng.common,global.ng.core,global.rxjs));
}(this, (function (exports,common,core,rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxTweetService = (function () {
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
                return rxjs.Observable.create(function (observer) {
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        NgxTweetService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] },] },
            ];
        };
        return NgxTweetService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxTweetComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'ngx-tweet',
                        template: '<ng-content *ngIf="isTwitterScriptLoading"></ng-content>',
                        styles: ['.twitter-tweet { transform: none !important; }'],
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        /** @nocollapse */
        NgxTweetComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: NgxTweetService, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        NgxTweetComponent.propDecorators = {
            "tweetId": [{ type: core.Input },],
        };
        return NgxTweetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxTweetModule = (function () {
        function NgxTweetModule() {
        }
        NgxTweetModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            NgxTweetComponent
                        ],
                        imports: [common.CommonModule],
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

    exports.NgxTweetModule = NgxTweetModule;
    exports.ɵa = NgxTweetComponent;
    exports.ɵb = NgxTweetService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR3ZWV0LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXR3ZWV0L3NyYy9hcHAvc2VydmljZXMvbmd4LXR3ZWV0LnNlcnZpY2UudHMiLCJuZzovL25neC10d2VldC9zcmMvYXBwL2NvbXBvbmVudHMvbmd4LXR3ZWV0LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXR3ZWV0L3NyYy9hcHAvbmd4LXR3ZWV0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hUd2VldFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBUV0lUVEVSX09CSkVDVCA9ICd0d3R0cic7XG4gICAgcHJpdmF0ZSByZWFkb25seSBUV0lUVEVSX1NDUklQVF9JRCA9ICd0d2l0dGVyLXdqcyc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBUV0lUVEVSX1dJREdFVF9VUkwgPSAnaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzJztcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgcmVhZG9ubHkgX2RvY3VtZW50OiBhbnkpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFNjcmlwdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zdGFydFNjcmlwdExvYWQoKTtcbiAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50LmRlZmF1bHRWaWV3WyB0aGlzLlRXSVRURVJfT0JKRUNUIF0ucmVhZHkodGhpcy5fb25Ud2l0dGVyU2NyaXB0TG9hZGVkRmFjdG9yeShvYnNlcnZlcikpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdGFydFNjcmlwdExvYWQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHR3aXR0ZXJEYXRhID0gdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXdbIHRoaXMuVFdJVFRFUl9PQkpFQ1QgXSB8fCB7fTtcblxuICAgICAgICBpZiAodGhpcy5fdHdpdHRlclNjcmlwdEFscmVhZHlFeGlzdHMoKSkge1xuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXdbIHRoaXMuVFdJVFRFUl9PQkpFQ1QgXSA9IHR3aXR0ZXJEYXRhO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYXBwZW5kVHdpdHRlclNjcmlwdFRvRE9NKCk7XG5cbiAgICAgICAgdHdpdHRlckRhdGEuX2UgPSBbXTtcblxuICAgICAgICB0d2l0dGVyRGF0YS5yZWFkeSA9IChjYWxsYmFjazogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHR3aXR0ZXJEYXRhLl9lLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2RvY3VtZW50LmRlZmF1bHRWaWV3WyB0aGlzLlRXSVRURVJfT0JKRUNUIF0gPSB0d2l0dGVyRGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90d2l0dGVyU2NyaXB0QWxyZWFkeUV4aXN0cygpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdHdpdHRlclNjcmlwdCA9IHRoaXMuX2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuVFdJVFRFUl9TQ1JJUFRfSUQpO1xuICAgICAgICByZXR1cm4gKHR3aXR0ZXJTY3JpcHQgIT09IG51bGwgfHwgdHlwZW9mIHR3aXR0ZXJTY3JpcHQgIT09ICdvYmplY3QnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hcHBlbmRUd2l0dGVyU2NyaXB0VG9ET00oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZpcnN0SlNTY3JpcHQgPSB0aGlzLl9kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbIDAgXTtcbiAgICAgICAgY29uc3QganMgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAganMuaWQgPSB0aGlzLlRXSVRURVJfU0NSSVBUX0lEO1xuICAgICAgICBqcy5zcmMgPSB0aGlzLlRXSVRURVJfV0lER0VUX1VSTDtcbiAgICAgICAgZmlyc3RKU1NjcmlwdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgZmlyc3RKU1NjcmlwdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25Ud2l0dGVyU2NyaXB0TG9hZGVkRmFjdG9yeShvYnNlcnZlcjogT2JzZXJ2ZXI8YW55Pik6IEZ1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuICh0d2l0dGVyRGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHR3aXR0ZXJEYXRhKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkluaXQsXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hUd2VldFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9uZ3gtdHdlZXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LXR3ZWV0JyxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50ICpuZ0lmPVwiaXNUd2l0dGVyU2NyaXB0TG9hZGluZ1wiPjwvbmctY29udGVudD4nLFxuICAgIHN0eWxlczogWyAnLnR3aXR0ZXItdHdlZXQgeyB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDsgfScgXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE5neFR3ZWV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBwdWJsaWMgdHdlZXRJZDogc3RyaW5nO1xuXG4gICAgcHVibGljIGlzVHdpdHRlclNjcmlwdExvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9uZ3hUd2VldFNlcnZpY2U6IE5neFR3ZWV0U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2xvYWRUd2l0dGVyU2NyaXB0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbG9hZFR3aXR0ZXJTY3JpcHQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX25neFR3ZWV0U2VydmljZVxuICAgICAgICAgICAgLmxvYWRTY3JpcHQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgodHdpdHRlckRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVR3aXR0ZXJTY3JpcHRMb2FkaW5nU3RhdGUoKTtcbiAgICAgICAgICAgICAgICB0d2l0dGVyRGF0YS53aWRnZXRzLmNyZWF0ZVR3ZWV0KHRoaXMudHdlZXRJZCwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7fSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVUd2l0dGVyU2NyaXB0TG9hZGluZ1N0YXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzVHdpdHRlclNjcmlwdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4VHdlZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmd4LXR3ZWV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hUd2VldFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL25neC10d2VldC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTmd4VHdlZXRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlIF0sXG4gICAgZXhwb3J0czogWyBOZ3hUd2VldENvbXBvbmVudCBdLFxuICAgIHByb3ZpZGVyczogWyBOZ3hUd2VldFNlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hUd2VldE1vZHVsZSB7XG59XG4iXSwibmFtZXMiOlsiT2JzZXJ2YWJsZSIsIkluamVjdGFibGUiLCJJbmplY3QiLCJET0NVTUVOVCIsIkNvbXBvbmVudCIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFbGVtZW50UmVmIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFXSSx5QkFBK0M7WUFBQSxjQUFTLEdBQVQsU0FBUztrQ0FKdEIsT0FB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