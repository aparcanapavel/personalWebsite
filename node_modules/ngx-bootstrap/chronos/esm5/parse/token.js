/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:max-line-length
import { hasOwnProp, isArray, isFunction, isNumber, isString, toInt } from '../utils/type-checks';
/** @type {?} */
var tokens = {};
/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */
export function addParseToken(token, callback) {
    /** @type {?} */
    var _token = isString(token) ? [token] : token;
    /** @type {?} */
    var func = callback;
    if (isNumber(callback)) {
        func = function (input, array, config) {
            array[callback] = toInt(input);
            return config;
        };
    }
    if (isArray(_token) && isFunction(func)) {
        /** @type {?} */
        var i = void 0;
        for (i = 0; i < _token.length; i++) {
            tokens[_token[i]] = func;
        }
    }
}
/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */
export function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, _token) {
        config._w = config._w || {};
        return callback(input, config._w, config, _token);
    });
}
/**
 * @param {?} token
 * @param {?} input
 * @param {?} config
 * @return {?}
 */
export function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
    return config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJwYXJzZS90b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQUk1RixNQUFNLEdBQXNDLEVBQUU7Ozs7OztBQUVwRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQXdCLEVBQUUsUUFBbUM7O1FBQ25GLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7O1FBQzVDLElBQUksR0FBRyxRQUFRO0lBRW5CLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3RCLElBQUksR0FBRyxVQUFVLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCO1lBQ3pFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFL0IsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDO0tBQ0g7SUFFRCxJQUFJLE9BQU8sQ0FBUyxNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7O1lBQzNDLENBQUMsU0FBQTtRQUNMLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzFCO0tBQ0Y7QUFDSCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsS0FBZSxFQUFFLFFBQTBCO0lBQzNFLGFBQWEsQ0FBQyxLQUFLLEVBQUUsVUFBVSxLQUFhLEVBQUUsS0FBZ0IsRUFBRSxNQUF5QixFQUFFLE1BQWM7UUFDdkcsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUU1QixPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDOzs7Ozs7O0FBR0QsTUFBTSxVQUFVLHVCQUF1QixDQUFDLEtBQWEsRUFBRSxLQUFhLEVBQUUsTUFBeUI7SUFDN0YsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDOUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNoRDtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcbmltcG9ydCB7IGhhc093blByb3AsIGlzQXJyYXksIGlzRnVuY3Rpb24sIGlzTnVtYmVyLCBpc1N0cmluZywgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZVBhcnNlVG9rZW5GbiB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgdG9rZW5zOiB7W2tleTogc3RyaW5nXTogRGF0ZVBhcnNlVG9rZW5Gbn0gPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBhcnNlVG9rZW4odG9rZW46IHN0cmluZyB8IHN0cmluZ1tdLCBjYWxsYmFjazogRGF0ZVBhcnNlVG9rZW5GbiB8IG51bWJlcikge1xuICBjb25zdCBfdG9rZW4gPSBpc1N0cmluZyh0b2tlbikgPyBbdG9rZW5dIDogdG9rZW47XG4gIGxldCBmdW5jID0gY2FsbGJhY2s7XG5cbiAgaWYgKGlzTnVtYmVyKGNhbGxiYWNrKSkge1xuICAgIGZ1bmMgPSBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICAgIGFycmF5W2NhbGxiYWNrXSA9IHRvSW50KGlucHV0KTtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGlzQXJyYXk8c3RyaW5nPihfdG9rZW4pICYmIGlzRnVuY3Rpb24oZnVuYykpIHtcbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgX3Rva2VuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b2tlbnNbX3Rva2VuW2ldXSA9IGZ1bmM7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRXZWVrUGFyc2VUb2tlbih0b2tlbjogc3RyaW5nW10sIGNhbGxiYWNrOiBEYXRlUGFyc2VUb2tlbkZuKTogdm9pZCB7XG4gIGFkZFBhcnNlVG9rZW4odG9rZW4sIGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCBfdG9rZW46IHN0cmluZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBjb25maWcuX3cgPSBjb25maWcuX3cgfHwge307XG5cbiAgICByZXR1cm4gY2FsbGJhY2soaW5wdXQsIGNvbmZpZy5fdywgY29uZmlnLCBfdG9rZW4pO1xuICB9KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4odG9rZW46IHN0cmluZywgaW5wdXQ6IHN0cmluZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgaWYgKGlucHV0ICE9IG51bGwgJiYgaGFzT3duUHJvcCh0b2tlbnMsIHRva2VuKSkge1xuICAgIHRva2Vuc1t0b2tlbl0oaW5wdXQsIGNvbmZpZy5fYSwgY29uZmlnLCB0b2tlbik7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuIl19