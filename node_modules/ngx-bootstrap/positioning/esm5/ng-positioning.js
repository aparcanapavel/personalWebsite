/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getReferenceOffsets, setAllStyles } from './utils';
import { arrow, flip, preventOverflow, shift, initData } from './modifiers';
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.position = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    function (hostElement, targetElement, round) {
        if (round === void 0) { round = true; }
        return this.offset(hostElement, targetElement, false);
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.offset = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    function (hostElement, targetElement, round) {
        if (round === void 0) { round = true; }
        return getReferenceOffsets(targetElement, hostElement);
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} appendToBody
     * @param {?=} options
     * @return {?}
     */
    Positioning.prototype.positionElements = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} appendToBody
     * @param {?=} options
     * @return {?}
     */
    function (hostElement, targetElement, position, appendToBody, options) {
        /** @type {?} */
        var chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce(function (modifiedData, modifier) { return modifier(modifiedData); }, initData(targetElement, hostElement, position, options));
    };
    return Positioning;
}());
export { Positioning };
/** @type {?} */
var positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @param {?=} options
 * @param {?=} renderer
 * @return {?}
 */
export function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
    /** @type {?} */
    var data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    setAllStyles(data, renderer);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9zaXRpb25pbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibmctcG9zaXRpb25pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFNUQsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJNUU7SUFBQTtJQXVCQSxDQUFDOzs7Ozs7O0lBdEJDLDhCQUFROzs7Ozs7SUFBUixVQUFTLFdBQXdCLEVBQUUsYUFBMEIsRUFBRSxLQUFZO1FBQVosc0JBQUEsRUFBQSxZQUFZO1FBQ3pFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7SUFFRCw0QkFBTTs7Ozs7O0lBQU4sVUFBTyxXQUF3QixFQUFFLGFBQTBCLEVBQUUsS0FBWTtRQUFaLHNCQUFBLEVBQUEsWUFBWTtRQUN2RSxPQUFPLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7Ozs7SUFFRCxzQ0FBZ0I7Ozs7Ozs7O0lBQWhCLFVBQ0UsV0FBd0IsRUFDeEIsYUFBMEIsRUFDMUIsUUFBZ0IsRUFDaEIsWUFBc0IsRUFDdEIsT0FBaUI7O1lBRVgsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxLQUFLLENBQUM7UUFFOUQsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQzVCLFVBQUMsWUFBWSxFQUFFLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBdEIsQ0FBc0IsRUFDbEQsUUFBUSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUN4RCxDQUFDO0lBQ0osQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQzs7O0lBRUssZUFBZSxHQUFHLElBQUksV0FBVyxFQUFFOzs7Ozs7Ozs7O0FBRXpDLE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsV0FBd0IsRUFDeEIsYUFBMEIsRUFDMUIsU0FBaUIsRUFDakIsWUFBc0IsRUFDdEIsT0FBaUIsRUFDakIsUUFBb0I7O1FBR2QsSUFBSSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FDM0MsV0FBVyxFQUNYLGFBQWEsRUFDYixTQUFTLEVBQ1QsWUFBWSxFQUNaLE9BQU8sQ0FDUjtJQUVELFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNvcHlyaWdodCBWYWxvciBTb2Z0d2FyZVxuICogQGNvcHlyaWdodCBGZWRlcmljbyBaaXZvbG8gYW5kIGNvbnRyaWJ1dG9yc1xuICovXG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZ2V0UmVmZXJlbmNlT2Zmc2V0cywgc2V0QWxsU3R5bGVzIH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCB7IGFycm93LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIHNoaWZ0LCBpbml0RGF0YSB9IGZyb20gJy4vbW9kaWZpZXJzJztcbmltcG9ydCB7IERhdGEsIE9mZnNldHMsIE9wdGlvbnMgfSBmcm9tICcuL21vZGVscyc7XG5cblxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uaW5nIHtcbiAgcG9zaXRpb24oaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCwgcm91bmQgPSB0cnVlKTogT2Zmc2V0cyB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0KGhvc3RFbGVtZW50LCB0YXJnZXRFbGVtZW50LCBmYWxzZSk7XG4gIH1cblxuICBvZmZzZXQoaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCwgcm91bmQgPSB0cnVlKTogT2Zmc2V0cyB7XG4gICAgcmV0dXJuIGdldFJlZmVyZW5jZU9mZnNldHModGFyZ2V0RWxlbWVudCwgaG9zdEVsZW1lbnQpO1xuICB9XG5cbiAgcG9zaXRpb25FbGVtZW50cyhcbiAgICBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcG9zaXRpb246IHN0cmluZyxcbiAgICBhcHBlbmRUb0JvZHk/OiBib29sZWFuLFxuICAgIG9wdGlvbnM/OiBPcHRpb25zXG4gICk6IERhdGEge1xuICAgIGNvbnN0IGNoYWluT2ZNb2RpZmllcnMgPSBbZmxpcCwgc2hpZnQsIHByZXZlbnRPdmVyZmxvdywgYXJyb3ddO1xuXG4gICAgcmV0dXJuIGNoYWluT2ZNb2RpZmllcnMucmVkdWNlKFxuICAgICAgKG1vZGlmaWVkRGF0YSwgbW9kaWZpZXIpID0+IG1vZGlmaWVyKG1vZGlmaWVkRGF0YSksXG4gICAgICBpbml0RGF0YSh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCwgcG9zaXRpb24sIG9wdGlvbnMpXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBwb3NpdGlvblNlcnZpY2UgPSBuZXcgUG9zaXRpb25pbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uRWxlbWVudHMoXG4gIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHBsYWNlbWVudDogc3RyaW5nLFxuICBhcHBlbmRUb0JvZHk/OiBib29sZWFuLFxuICBvcHRpb25zPzogT3B0aW9ucyxcbiAgcmVuZGVyZXI/OiBSZW5kZXJlcjJcbik6IHZvaWQge1xuXG4gIGNvbnN0IGRhdGEgPSBwb3NpdGlvblNlcnZpY2UucG9zaXRpb25FbGVtZW50cyhcbiAgICBob3N0RWxlbWVudCxcbiAgICB0YXJnZXRFbGVtZW50LFxuICAgIHBsYWNlbWVudCxcbiAgICBhcHBlbmRUb0JvZHksXG4gICAgb3B0aW9uc1xuICApO1xuXG4gIHNldEFsbFN0eWxlcyhkYXRhLCByZW5kZXJlcik7XG59XG4iXX0=