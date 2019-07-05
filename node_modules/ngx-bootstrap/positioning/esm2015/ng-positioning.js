/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getReferenceOffsets, setAllStyles } from './utils';
import { arrow, flip, preventOverflow, shift, initData } from './modifiers';
export class Positioning {
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    position(hostElement, targetElement, round = true) {
        return this.offset(hostElement, targetElement, false);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    offset(hostElement, targetElement, round = true) {
        return getReferenceOffsets(targetElement, hostElement);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} appendToBody
     * @param {?=} options
     * @return {?}
     */
    positionElements(hostElement, targetElement, position, appendToBody, options) {
        /** @type {?} */
        const chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce((modifiedData, modifier) => modifier(modifiedData), initData(targetElement, hostElement, position, options));
    }
}
/** @type {?} */
const positionService = new Positioning();
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
    const data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    setAllStyles(data, renderer);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9zaXRpb25pbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibmctcG9zaXRpb25pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFNUQsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJNUUsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7SUFDdEIsUUFBUSxDQUFDLFdBQXdCLEVBQUUsYUFBMEIsRUFBRSxLQUFLLEdBQUcsSUFBSTtRQUN6RSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQXdCLEVBQUUsYUFBMEIsRUFBRSxLQUFLLEdBQUcsSUFBSTtRQUN2RSxPQUFPLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7Ozs7SUFFRCxnQkFBZ0IsQ0FDZCxXQUF3QixFQUN4QixhQUEwQixFQUMxQixRQUFnQixFQUNoQixZQUFzQixFQUN0QixPQUFpQjs7Y0FFWCxnQkFBZ0IsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQztRQUU5RCxPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FDNUIsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQ2xELFFBQVEsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FDeEQsQ0FBQztJQUNKLENBQUM7Q0FDRjs7TUFFSyxlQUFlLEdBQUcsSUFBSSxXQUFXLEVBQUU7Ozs7Ozs7Ozs7QUFFekMsTUFBTSxVQUFVLGdCQUFnQixDQUM5QixXQUF3QixFQUN4QixhQUEwQixFQUMxQixTQUFpQixFQUNqQixZQUFzQixFQUN0QixPQUFpQixFQUNqQixRQUFvQjs7VUFHZCxJQUFJLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUMzQyxXQUFXLEVBQ1gsYUFBYSxFQUNiLFNBQVMsRUFDVCxZQUFZLEVBQ1osT0FBTyxDQUNSO0lBRUQsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY29weXJpZ2h0IFZhbG9yIFNvZnR3YXJlXG4gKiBAY29weXJpZ2h0IEZlZGVyaWNvIFppdm9sbyBhbmQgY29udHJpYnV0b3JzXG4gKi9cbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBnZXRSZWZlcmVuY2VPZmZzZXRzLCBzZXRBbGxTdHlsZXMgfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgYXJyb3csIGZsaXAsIHByZXZlbnRPdmVyZmxvdywgc2hpZnQsIGluaXREYXRhIH0gZnJvbSAnLi9tb2RpZmllcnMnO1xuaW1wb3J0IHsgRGF0YSwgT2Zmc2V0cywgT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcblxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb25pbmcge1xuICBwb3NpdGlvbihob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCByb3VuZCA9IHRydWUpOiBPZmZzZXRzIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXQoaG9zdEVsZW1lbnQsIHRhcmdldEVsZW1lbnQsIGZhbHNlKTtcbiAgfVxuXG4gIG9mZnNldChob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCByb3VuZCA9IHRydWUpOiBPZmZzZXRzIHtcbiAgICByZXR1cm4gZ2V0UmVmZXJlbmNlT2Zmc2V0cyh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCk7XG4gIH1cblxuICBwb3NpdGlvbkVsZW1lbnRzKFxuICAgIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBwb3NpdGlvbjogc3RyaW5nLFxuICAgIGFwcGVuZFRvQm9keT86IGJvb2xlYW4sXG4gICAgb3B0aW9ucz86IE9wdGlvbnNcbiAgKTogRGF0YSB7XG4gICAgY29uc3QgY2hhaW5PZk1vZGlmaWVycyA9IFtmbGlwLCBzaGlmdCwgcHJldmVudE92ZXJmbG93LCBhcnJvd107XG5cbiAgICByZXR1cm4gY2hhaW5PZk1vZGlmaWVycy5yZWR1Y2UoXG4gICAgICAobW9kaWZpZWREYXRhLCBtb2RpZmllcikgPT4gbW9kaWZpZXIobW9kaWZpZWREYXRhKSxcbiAgICAgIGluaXREYXRhKHRhcmdldEVsZW1lbnQsIGhvc3RFbGVtZW50LCBwb3NpdGlvbiwgb3B0aW9ucylcbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHBvc2l0aW9uU2VydmljZSA9IG5ldyBQb3NpdGlvbmluZygpO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25FbGVtZW50cyhcbiAgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgcGxhY2VtZW50OiBzdHJpbmcsXG4gIGFwcGVuZFRvQm9keT86IGJvb2xlYW4sXG4gIG9wdGlvbnM/OiBPcHRpb25zLFxuICByZW5kZXJlcj86IFJlbmRlcmVyMlxuKTogdm9pZCB7XG5cbiAgY29uc3QgZGF0YSA9IHBvc2l0aW9uU2VydmljZS5wb3NpdGlvbkVsZW1lbnRzKFxuICAgIGhvc3RFbGVtZW50LFxuICAgIHRhcmdldEVsZW1lbnQsXG4gICAgcGxhY2VtZW50LFxuICAgIGFwcGVuZFRvQm9keSxcbiAgICBvcHRpb25zXG4gICk7XG5cbiAgc2V0QWxsU3R5bGVzKGRhdGEsIHJlbmRlcmVyKTtcbn1cbiJdfQ==