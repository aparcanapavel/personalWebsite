/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?} data
 * @return {?}
 */
export function shift(data) {
    var _a, _b;
    /** @type {?} */
    var placement = data.placement;
    /** @type {?} */
    var basePlacement = placement.split(' ')[0];
    /** @type {?} */
    var shiftvariation = placement.split(' ')[1];
    if (shiftvariation) {
        var _c = data.offsets, host = _c.host, target = _c.target;
        /** @type {?} */
        var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        /** @type {?} */
        var side = isVertical ? 'left' : 'top';
        /** @type {?} */
        var measurement = isVertical ? 'width' : 'height';
        /** @type {?} */
        var shiftOffsets = {
            left: (_a = {}, _a[side] = host[side], _a),
            right: (_b = {},
                _b[side] = host[side] + host[measurement] - host[measurement],
                _b)
        };
        data.offsets.target = tslib_1.__assign({}, target, ((/** @type {?} */ (shiftOffsets)))[shiftvariation]);
    }
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpZnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibW9kaWZpZXJzL3NoaWZ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLE1BQU0sVUFBVSxLQUFLLENBQUMsSUFBVTs7O1FBQ3hCLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUzs7UUFDMUIsYUFBYSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUN2QyxjQUFjLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUMsSUFBSSxjQUFjLEVBQUU7UUFDWixJQUFBLGlCQUErQixFQUE3QixjQUFJLEVBQUUsa0JBQXVCOztZQUMvQixVQUFVLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFDNUQsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLOztZQUNsQyxXQUFXLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVE7O1lBRTdDLFlBQVksR0FBRztZQUNuQixJQUFJLFlBQUksR0FBQyxJQUFJLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFFO1lBQzVCLEtBQUs7Z0JBQ0gsR0FBQyxJQUFJLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO21CQUMzRDtTQUNGO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLHdCQUFRLE1BQU0sRUFBSyxDQUFDLG1CQUFBLFlBQVksRUFBTyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUUsQ0FBQztLQUMvRTtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hpZnQoZGF0YTogRGF0YSk6IERhdGEge1xuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgY29uc3QgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnICcpWzBdO1xuICBjb25zdCBzaGlmdHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnICcpWzFdO1xuXG4gIGlmIChzaGlmdHZhcmlhdGlvbikge1xuICAgIGNvbnN0IHsgaG9zdCwgdGFyZ2V0IH0gPSBkYXRhLm9mZnNldHM7XG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IFsnYm90dG9tJywgJ3RvcCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuICAgIGNvbnN0IHNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gICAgY29uc3Qgc2hpZnRPZmZzZXRzID0ge1xuICAgICAgbGVmdDogeyBbc2lkZV06IGhvc3Rbc2lkZV0gfSxcbiAgICAgIHJpZ2h0OiB7XG4gICAgICAgIFtzaWRlXTogaG9zdFtzaWRlXSArIGhvc3RbbWVhc3VyZW1lbnRdIC0gaG9zdFttZWFzdXJlbWVudF1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZGF0YS5vZmZzZXRzLnRhcmdldCA9IHsgLi4udGFyZ2V0LCAuLi4oc2hpZnRPZmZzZXRzIGFzIGFueSlbc2hpZnR2YXJpYXRpb25dIH07XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cbiJdfQ==