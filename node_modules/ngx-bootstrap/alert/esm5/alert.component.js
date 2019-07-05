/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertConfig } from './alert.config';
import { OnChange } from 'ngx-bootstrap/utils';
var AlertComponent = /** @class */ (function () {
    function AlertComponent(_config, changeDetection) {
        var _this = this;
        this.changeDetection = changeDetection;
        /**
         * Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /**
         * If set, displays an inline "Close" button
         */
        this.dismissible = false;
        /**
         * Is alert visible
         */
        this.isOpen = true;
        /**
         * This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new EventEmitter();
        /**
         * This event fires when alert closed, $event is an instance of Alert component
         */
        this.onClosed = new EventEmitter();
        this.classes = '';
        this.dismissibleChange = new EventEmitter();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';
            _this.changeDetection.markForCheck();
        });
    }
    /**
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(function () { return _this.close(); }, parseInt((/** @type {?} */ (this.dismissOnTimeout)), 10));
        }
    };
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    AlertComponent.prototype.close = 
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'alert,bs-alert',
                    template: "<ng-template [ngIf]=\"isOpen\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: AlertConfig },
        { type: ChangeDetectorRef }
    ]; };
    AlertComponent.propDecorators = {
        type: [{ type: Input }],
        dismissible: [{ type: Input }],
        dismissOnTimeout: [{ type: Input }],
        isOpen: [{ type: Input }],
        onClose: [{ type: Output }],
        onClosed: [{ type: Output }]
    };
    tslib_1.__decorate([
        OnChange(),
        tslib_1.__metadata("design:type", Object)
    ], AlertComponent.prototype, "dismissible", void 0);
    return AlertComponent;
}());
export { AlertComponent };
if (false) {
    /**
     * Alert type.
     * Provides one of four bootstrap supported contextual classes:
     * `success`, `info`, `warning` and `danger`
     * @type {?}
     */
    AlertComponent.prototype.type;
    /**
     * If set, displays an inline "Close" button
     * @type {?}
     */
    AlertComponent.prototype.dismissible;
    /**
     * Number in milliseconds, after which alert will be closed
     * @type {?}
     */
    AlertComponent.prototype.dismissOnTimeout;
    /**
     * Is alert visible
     * @type {?}
     */
    AlertComponent.prototype.isOpen;
    /**
     * This event fires immediately after close instance method is called,
     * $event is an instance of Alert component.
     * @type {?}
     */
    AlertComponent.prototype.onClose;
    /**
     * This event fires when alert closed, $event is an instance of Alert component
     * @type {?}
     */
    AlertComponent.prototype.onClosed;
    /** @type {?} */
    AlertComponent.prototype.classes;
    /** @type {?} */
    AlertComponent.prototype.dismissibleChange;
    /**
     * @type {?}
     * @private
     */
    AlertComponent.prototype.changeDetection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9hbGVydC8iLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRS9DO0lBOEJFLHdCQUFZLE9BQW9CLEVBQVUsZUFBa0M7UUFBNUUsaUJBTUM7UUFOeUMsb0JBQWUsR0FBZixlQUFlLENBQW1COzs7Ozs7UUFwQm5FLFNBQUksR0FBRyxTQUFTLENBQUM7Ozs7UUFFRCxnQkFBVyxHQUFHLEtBQUssQ0FBQzs7OztRQUtwQyxXQUFNLEdBQUcsSUFBSSxDQUFDOzs7OztRQUtiLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQzs7OztRQUU3QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFHeEQsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFHOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFDLFdBQW9CO1lBQ3BELEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUMzRCxLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsd0VBQXdFO1lBQ3hFLFVBQVUsQ0FDUixjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBRSxFQUFaLENBQVksRUFDbEIsUUFBUSxDQUFDLG1CQUFBLElBQUksQ0FBQyxnQkFBZ0IsRUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUM5QyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsNkVBQTZFO0lBQzdFLGdEQUFnRDtJQUNoRDs7T0FFRzs7Ozs7OztJQUNILDhCQUFLOzs7Ozs7O0lBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2dCQTlERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsK2JBQXFDO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBUFEsV0FBVztnQkFQbEIsaUJBQWlCOzs7dUJBb0JoQixLQUFLOzhCQUVTLEtBQUs7bUNBRW5CLEtBQUs7eUJBR0wsS0FBSzswQkFLTCxNQUFNOzJCQUVOLE1BQU07O0lBWmtCO1FBQXhCLFFBQVEsRUFBRTs7dURBQWtDO0lBbUQvQyxxQkFBQztDQUFBLEFBL0RELElBK0RDO1NBMURZLGNBQWM7Ozs7Ozs7O0lBS3pCLDhCQUEwQjs7Ozs7SUFFMUIscUNBQTZDOzs7OztJQUU3QywwQ0FBMkM7Ozs7O0lBRzNDLGdDQUF1Qjs7Ozs7O0lBS3ZCLGlDQUF1RDs7Ozs7SUFFdkQsa0NBQXdEOztJQUd4RCxpQ0FBYTs7SUFDYiwyQ0FBZ0Q7Ozs7O0lBRWQseUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRDb25maWcgfSBmcm9tICcuL2FsZXJ0LmNvbmZpZyc7XG5pbXBvcnQgeyBPbkNoYW5nZSB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbGVydCxicy1hbGVydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqIEFsZXJ0IHR5cGUuXG4gICAqIFByb3ZpZGVzIG9uZSBvZiBmb3VyIGJvb3RzdHJhcCBzdXBwb3J0ZWQgY29udGV4dHVhbCBjbGFzc2VzOlxuICAgKiBgc3VjY2Vzc2AsIGBpbmZvYCwgYHdhcm5pbmdgIGFuZCBgZGFuZ2VyYFxuICAgKi9cbiAgQElucHV0KCkgdHlwZSA9ICd3YXJuaW5nJztcbiAgLyoqIElmIHNldCwgZGlzcGxheXMgYW4gaW5saW5lIFwiQ2xvc2VcIiBidXR0b24gKi9cbiAgQE9uQ2hhbmdlKCkgICBASW5wdXQoKSAgIGRpc21pc3NpYmxlID0gZmFsc2U7XG4gIC8qKiBOdW1iZXIgaW4gbWlsbGlzZWNvbmRzLCBhZnRlciB3aGljaCBhbGVydCB3aWxsIGJlIGNsb3NlZCAqL1xuICBASW5wdXQoKSBkaXNtaXNzT25UaW1lb3V0OiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgLyoqIElzIGFsZXJ0IHZpc2libGUgKi9cbiAgQElucHV0KCkgaXNPcGVuID0gdHJ1ZTtcblxuICAvKiogVGhpcyBldmVudCBmaXJlcyBpbW1lZGlhdGVseSBhZnRlciBjbG9zZSBpbnN0YW5jZSBtZXRob2QgaXMgY2FsbGVkLFxuICAgKiAkZXZlbnQgaXMgYW4gaW5zdGFuY2Ugb2YgQWxlcnQgY29tcG9uZW50LlxuICAgKi9cbiAgQE91dHB1dCgpIG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPEFsZXJ0Q29tcG9uZW50PigpO1xuICAvKiogVGhpcyBldmVudCBmaXJlcyB3aGVuIGFsZXJ0IGNsb3NlZCwgJGV2ZW50IGlzIGFuIGluc3RhbmNlIG9mIEFsZXJ0IGNvbXBvbmVudCAqL1xuICBAT3V0cHV0KCkgb25DbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFsZXJ0Q29tcG9uZW50PigpO1xuXG5cbiAgY2xhc3NlcyA9ICcnO1xuICBkaXNtaXNzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcihfY29uZmlnOiBBbGVydENvbmZpZywgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBfY29uZmlnKTtcbiAgICB0aGlzLmRpc21pc3NpYmxlQ2hhbmdlLnN1YnNjcmliZSgoZGlzbWlzc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuY2xhc3NlcyA9IHRoaXMuZGlzbWlzc2libGUgPyAnYWxlcnQtZGlzbWlzc2libGUnIDogJyc7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc21pc3NPblRpbWVvdXQpIHtcbiAgICAgIC8vIGlmIGRpc21pc3NPblRpbWVvdXQgdXNlZCBhcyBhdHRyIHdpdGhvdXQgYmluZGluZywgaXQgd2lsbCBiZSBhIHN0cmluZ1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gdGhpcy5jbG9zZSgpLFxuICAgICAgICBwYXJzZUludCh0aGlzLmRpc21pc3NPblRpbWVvdXQgYXMgc3RyaW5nLCAxMClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gdG9kbzogYW5pbWF0aW9uIGAgSWYgdGhlIC5mYWRlIGFuZCAuaW4gY2xhc3NlcyBhcmUgcHJlc2VudCBvbiB0aGUgZWxlbWVudCxcbiAgLy8gdGhlIGFsZXJ0IHdpbGwgZmFkZSBvdXQgYmVmb3JlIGl0IGlzIHJlbW92ZWRgXG4gIC8qKlxuICAgKiBDbG9zZXMgYW4gYWxlcnQgYnkgcmVtb3ZpbmcgaXQgZnJvbSB0aGUgRE9NLlxuICAgKi9cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub25DbG9zZS5lbWl0KHRoaXMpO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5vbkNsb3NlZC5lbWl0KHRoaXMpO1xuICB9XG59XG4iXX0=