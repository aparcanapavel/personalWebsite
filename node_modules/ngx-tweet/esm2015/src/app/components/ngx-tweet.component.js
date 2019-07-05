/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NgxTweetService } from '../services/ngx-tweet.service';
export class NgxTweetComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXR3ZWV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10d2VldC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZ3gtdHdlZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBU2hFLE1BQU07Ozs7OztJQUtGLFlBQTZCLFdBQXVCLEVBQ3ZCLGtCQUNBO1FBRkEsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQjtRQUNoQix1QkFBa0IsR0FBbEIsa0JBQWtCO3NDQUpOLElBQUk7S0FLNUM7Ozs7SUFFTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Ozs7O0lBR3RCLGtCQUFrQjtRQUN0QixJQUFJLENBQUMsZ0JBQWdCO2FBQ2hCLFVBQVUsRUFBRTthQUNaLFNBQVMsQ0FBQyxDQUFDLFdBQWdCLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztZQUN4QyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3JGLENBQUMsQ0FBQzs7Ozs7SUFHSCxnQ0FBZ0M7UUFDcEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7WUFoQy9DLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLDBEQUEwRDtnQkFDcEUsTUFBTSxFQUFFLENBQUUsZ0RBQWdELENBQUU7Z0JBQzVELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNsRDs7OztZQWJHLFVBQVU7WUFLTCxlQUFlO1lBUHBCLGlCQUFpQjs7O3dCQWlCaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsXG4gICAgT25Jbml0LFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4VHdlZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbmd4LXR3ZWV0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC10d2VldCcsXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudCAqbmdJZj1cImlzVHdpdHRlclNjcmlwdExvYWRpbmdcIj48L25nLWNvbnRlbnQ+JyxcbiAgICBzdHlsZXM6IFsgJy50d2l0dGVyLXR3ZWV0IHsgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7IH0nIF0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hUd2VldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgcHVibGljIHR3ZWV0SWQ6IHN0cmluZztcblxuICAgIHB1YmxpYyBpc1R3aXR0ZXJTY3JpcHRMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfbmd4VHdlZXRTZXJ2aWNlOiBOZ3hUd2VldFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9sb2FkVHdpdHRlclNjcmlwdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xvYWRUd2l0dGVyU2NyaXB0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9uZ3hUd2VldFNlcnZpY2VcbiAgICAgICAgICAgIC5sb2FkU2NyaXB0KClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHR3aXR0ZXJEYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUd2l0dGVyU2NyaXB0TG9hZGluZ1N0YXRlKCk7XG4gICAgICAgICAgICAgICAgdHdpdHRlckRhdGEud2lkZ2V0cy5jcmVhdGVUd2VldCh0aGlzLnR3ZWV0SWQsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge30pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlVHdpdHRlclNjcmlwdExvYWRpbmdTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc1R3aXR0ZXJTY3JpcHRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG59XG4iXX0=