/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NgxTweetService } from '../services/ngx-tweet.service';
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
export { NgxTweetComponent };
function NgxTweetComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NgxTweetComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NgxTweetComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    NgxTweetComponent.propDecorators;
    /** @type {?} */
    NgxTweetComponent.prototype.tweetId;
    /** @type {?} */
    NgxTweetComponent.prototype.isTwitterScriptLoading;
    /** @type {?} */
    NgxTweetComponent.prototype._elementRef;
    /** @type {?} */
    NgxTweetComponent.prototype._ngxTweetService;
    /** @type {?} */
    NgxTweetComponent.prototype._changeDetectorRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR3ZWV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10d2VldC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZ3gtdHdlZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDOztJQWM1RCwyQkFBNkIsV0FBdUIsRUFDdkIsa0JBQ0E7UUFGQSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCO1FBQ2hCLHVCQUFrQixHQUFsQixrQkFBa0I7c0NBSk4sSUFBSTtLQUs1Qzs7OztJQUVNLG9DQUFROzs7O1FBQ1gsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Ozs7O0lBR3RCLDhDQUFrQjs7Ozs7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQjthQUNoQixVQUFVLEVBQUU7YUFDWixTQUFTLENBQUMsVUFBQyxXQUFnQjtZQUN4QixLQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztZQUN4QyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3JGLENBQUMsQ0FBQzs7Ozs7SUFHSCw0REFBZ0M7Ozs7UUFDcEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7OztnQkFoQy9DLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLDBEQUEwRDtvQkFDcEUsTUFBTSxFQUFFLENBQUUsZ0RBQWdELENBQUU7b0JBQzVELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDbEQ7Ozs7Z0JBYkcsVUFBVTtnQkFLTCxlQUFlO2dCQVBwQixpQkFBaUI7Ozs0QkFpQmhCLEtBQUs7OzRCQW5CVjs7U0FrQmEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkluaXQsXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hUd2VldFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9uZ3gtdHdlZXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LXR3ZWV0JyxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50ICpuZ0lmPVwiaXNUd2l0dGVyU2NyaXB0TG9hZGluZ1wiPjwvbmctY29udGVudD4nLFxuICAgIHN0eWxlczogWyAnLnR3aXR0ZXItdHdlZXQgeyB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDsgfScgXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE5neFR3ZWV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBwdWJsaWMgdHdlZXRJZDogc3RyaW5nO1xuXG4gICAgcHVibGljIGlzVHdpdHRlclNjcmlwdExvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9uZ3hUd2VldFNlcnZpY2U6IE5neFR3ZWV0U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2xvYWRUd2l0dGVyU2NyaXB0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbG9hZFR3aXR0ZXJTY3JpcHQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX25neFR3ZWV0U2VydmljZVxuICAgICAgICAgICAgLmxvYWRTY3JpcHQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgodHdpdHRlckRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVR3aXR0ZXJTY3JpcHRMb2FkaW5nU3RhdGUoKTtcbiAgICAgICAgICAgICAgICB0d2l0dGVyRGF0YS53aWRnZXRzLmNyZWF0ZVR3ZWV0KHRoaXMudHdlZXRJZCwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7fSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVUd2l0dGVyU2NyaXB0TG9hZGluZ1N0YXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzVHdpdHRlclNjcmlwdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbn1cbiJdfQ==