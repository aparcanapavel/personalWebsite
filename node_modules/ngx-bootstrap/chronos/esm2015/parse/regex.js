/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { hasOwnProp, isFunction } from '../utils/type-checks';
/** @type {?} */
export const match1 = /\d/;
//       0 - 9
/** @type {?} */
export const match2 = /\d\d/;
//      00 - 99
/** @type {?} */
export const match3 = /\d{3}/;
//     000 - 999
/** @type {?} */
export const match4 = /\d{4}/;
//    0000 - 9999
/** @type {?} */
export const match6 = /[+-]?\d{6}/;
// -999999 - 999999
/** @type {?} */
export const match1to2 = /\d\d?/;
//       0 - 99
/** @type {?} */
export const match3to4 = /\d\d\d\d?/;
//     999 - 9999
/** @type {?} */
export const match5to6 = /\d\d\d\d\d\d?/;
//   99999 - 999999
/** @type {?} */
export const match1to3 = /\d{1,3}/;
//       0 - 999
/** @type {?} */
export const match1to4 = /\d{1,4}/;
//       0 - 9999
/** @type {?} */
export const match1to6 = /[+-]?\d{1,6}/;
// -999999 - 999999
/** @type {?} */
export const matchUnsigned = /\d+/;
//       0 - inf
/** @type {?} */
export const matchSigned = /[+-]?\d+/;
//    -inf - inf
/** @type {?} */
export const matchOffset = /Z|[+-]\d\d:?\d\d/gi;
// +00:00 -00:00 +0000 -0000 or Z
/** @type {?} */
export const matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
// +00 -00 +00:00 -00:00 +0000 -0000 or Z
/** @type {?} */
export const matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
// 123456789 123456789.123
// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
// tslint:disable-next-line
/** @type {?} */
export const matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
/** @type {?} */
const regexes = {};
/**
 * @param {?} token
 * @param {?} regex
 * @param {?=} strictRegex
 * @return {?}
 */
export function addRegexToken(token, regex, strictRegex) {
    if (isFunction(regex)) {
        regexes[token] = regex;
        return;
    }
    regexes[token] = function (isStrict, locale) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}
/**
 * @param {?} token
 * @param {?} locale
 * @return {?}
 */
export function getParseRegexForToken(token, locale) {
    /** @type {?} */
    const _strict = false;
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }
    return regexes[token](_strict, locale);
}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
/**
 * @param {?} str
 * @return {?}
 */
function unescapeFormat(str) {
    // tslint:disable-next-line
    return regexEscape(str
        .replace('\\', '')
        .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (matched, p1, p2, p3, p4) => p1 || p2 || p3 || p4));
}
/**
 * @param {?} str
 * @return {?}
 */
export function regexEscape(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJwYXJzZS9yZWdleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFHOUQsTUFBTSxPQUFPLE1BQU0sR0FBRyxJQUFJOzs7QUFDMUIsTUFBTSxPQUFPLE1BQU0sR0FBRyxNQUFNOzs7QUFDNUIsTUFBTSxPQUFPLE1BQU0sR0FBRyxPQUFPOzs7QUFDN0IsTUFBTSxPQUFPLE1BQU0sR0FBRyxPQUFPOzs7QUFDN0IsTUFBTSxPQUFPLE1BQU0sR0FBRyxZQUFZOzs7QUFDbEMsTUFBTSxPQUFPLFNBQVMsR0FBRyxPQUFPOzs7QUFDaEMsTUFBTSxPQUFPLFNBQVMsR0FBRyxXQUFXOzs7QUFDcEMsTUFBTSxPQUFPLFNBQVMsR0FBRyxlQUFlOzs7QUFDeEMsTUFBTSxPQUFPLFNBQVMsR0FBRyxTQUFTOzs7QUFDbEMsTUFBTSxPQUFPLFNBQVMsR0FBRyxTQUFTOzs7QUFDbEMsTUFBTSxPQUFPLFNBQVMsR0FBRyxjQUFjOzs7QUFFdkMsTUFBTSxPQUFPLGFBQWEsR0FBRyxLQUFLOzs7QUFDbEMsTUFBTSxPQUFPLFdBQVcsR0FBRyxVQUFVOzs7QUFFckMsTUFBTSxPQUFPLFdBQVcsR0FBRyxvQkFBb0I7OztBQUMvQyxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcseUJBQXlCOzs7QUFFekQsTUFBTSxPQUFPLGNBQWMsR0FBRyxzQkFBc0I7Ozs7OztBQUtwRCxNQUFNLE9BQU8sU0FBUyxHQUFHLDBJQUEwSTs7TUFHN0osT0FBTyxHQUFtQyxFQUFFOzs7Ozs7O0FBR2xELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBYSxFQUFFLEtBQTZCLEVBQUUsV0FBb0I7SUFDOUYsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUV2QixPQUFPO0tBQ1I7SUFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsVUFBVSxRQUFpQixFQUFFLE1BQWM7UUFDMUQsT0FBTyxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDekQsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUFDLEtBQWEsRUFBRSxNQUFjOztVQUMzRCxPQUFPLEdBQUcsS0FBSztJQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMvQixPQUFPLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzFDO0lBRUQsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLENBQUM7Ozs7OztBQUdELFNBQVMsY0FBYyxDQUFDLEdBQVc7SUFDakMsMkJBQTJCO0lBQzNCLE9BQU8sV0FBVyxDQUFDLEdBQUc7U0FDbkIsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7U0FDakIsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQ25HLENBQUM7QUFDSixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBVztJQUNyQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc093blByb3AsIGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuZXhwb3J0IGNvbnN0IG1hdGNoMSA9IC9cXGQvOyAgICAgICAgICAgIC8vICAgICAgIDAgLSA5XG5leHBvcnQgY29uc3QgbWF0Y2gyID0gL1xcZFxcZC87ICAgICAgICAgIC8vICAgICAgMDAgLSA5OVxuZXhwb3J0IGNvbnN0IG1hdGNoMyA9IC9cXGR7M30vOyAgICAgICAgIC8vICAgICAwMDAgLSA5OTlcbmV4cG9ydCBjb25zdCBtYXRjaDQgPSAvXFxkezR9LzsgICAgICAgICAvLyAgICAwMDAwIC0gOTk5OVxuZXhwb3J0IGNvbnN0IG1hdGNoNiA9IC9bKy1dP1xcZHs2fS87ICAgIC8vIC05OTk5OTkgLSA5OTk5OTlcbmV4cG9ydCBjb25zdCBtYXRjaDF0bzIgPSAvXFxkXFxkPy87ICAgICAgICAgLy8gICAgICAgMCAtIDk5XG5leHBvcnQgY29uc3QgbWF0Y2gzdG80ID0gL1xcZFxcZFxcZFxcZD8vOyAgICAgLy8gICAgIDk5OSAtIDk5OTlcbmV4cG9ydCBjb25zdCBtYXRjaDV0bzYgPSAvXFxkXFxkXFxkXFxkXFxkXFxkPy87IC8vICAgOTk5OTkgLSA5OTk5OTlcbmV4cG9ydCBjb25zdCBtYXRjaDF0bzMgPSAvXFxkezEsM30vOyAgICAgICAvLyAgICAgICAwIC0gOTk5XG5leHBvcnQgY29uc3QgbWF0Y2gxdG80ID0gL1xcZHsxLDR9LzsgICAgICAgLy8gICAgICAgMCAtIDk5OTlcbmV4cG9ydCBjb25zdCBtYXRjaDF0bzYgPSAvWystXT9cXGR7MSw2fS87ICAvLyAtOTk5OTk5IC0gOTk5OTk5XG5cbmV4cG9ydCBjb25zdCBtYXRjaFVuc2lnbmVkID0gL1xcZCsvOyAgICAgICAgICAgLy8gICAgICAgMCAtIGluZlxuZXhwb3J0IGNvbnN0IG1hdGNoU2lnbmVkID0gL1srLV0/XFxkKy87ICAgICAgLy8gICAgLWluZiAtIGluZlxuXG5leHBvcnQgY29uc3QgbWF0Y2hPZmZzZXQgPSAvWnxbKy1dXFxkXFxkOj9cXGRcXGQvZ2k7IC8vICswMDowMCAtMDA6MDAgKzAwMDAgLTAwMDAgb3IgWlxuZXhwb3J0IGNvbnN0IG1hdGNoU2hvcnRPZmZzZXQgPSAvWnxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy9naTsgLy8gKzAwIC0wMCArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcblxuZXhwb3J0IGNvbnN0IG1hdGNoVGltZXN0YW1wID0gL1srLV0/XFxkKyhcXC5cXGR7MSwzfSk/LzsgLy8gMTIzNDU2Nzg5IDEyMzQ1Njc4OS4xMjNcblxuLy8gYW55IHdvcmQgKG9yIHR3bykgY2hhcmFjdGVycyBvciBudW1iZXJzIGluY2x1ZGluZyB0d28vdGhyZWUgd29yZCBtb250aCBpbiBhcmFiaWMuXG4vLyBpbmNsdWRlcyBzY290dGlzaCBnYWVsaWMgdHdvIHdvcmQgYW5kIGh5cGhlbmF0ZWQgbW9udGhzXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmV4cG9ydCBjb25zdCBtYXRjaFdvcmQgPSAvWzAtOV17MCwyNTZ9WydhLXpcXHUwMEEwLVxcdTA1RkZcXHUwNzAwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdezEsMjU2fXxbXFx1MDYwMC1cXHUwNkZGXFwvXXsxLDI1Nn0oXFxzKj9bXFx1MDYwMC1cXHUwNkZGXXsxLDI1Nn0pezEsMn0vaTtcblxuZXhwb3J0IHR5cGUgUmVnRXhwVG9rZW5GbiA9IChpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpID0+IFJlZ0V4cDtcbmNvbnN0IHJlZ2V4ZXM6IHtba2V5OiBzdHJpbmddOiBSZWdFeHBUb2tlbkZufSA9IHt9O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRSZWdleFRva2VuKHRva2VuOiBzdHJpbmcsIHJlZ2V4OiBSZWdFeHAgfCBSZWdFeHBUb2tlbkZuLCBzdHJpY3RSZWdleD86IFJlZ0V4cCk6IHZvaWQge1xuICBpZiAoaXNGdW5jdGlvbihyZWdleCkpIHtcbiAgICByZWdleGVzW3Rva2VuXSA9IHJlZ2V4O1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVnZXhlc1t0b2tlbl0gPSBmdW5jdGlvbiAoaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKSB7XG4gICAgcmV0dXJuIChpc1N0cmljdCAmJiBzdHJpY3RSZWdleCkgPyBzdHJpY3RSZWdleCA6IHJlZ2V4O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyc2VSZWdleEZvclRva2VuKHRva2VuOiBzdHJpbmcsIGxvY2FsZTogTG9jYWxlKTogUmVnRXhwIHtcbiAgY29uc3QgX3N0cmljdCA9IGZhbHNlO1xuICBpZiAoIWhhc093blByb3AocmVnZXhlcywgdG9rZW4pKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAodW5lc2NhcGVGb3JtYXQodG9rZW4pKTtcbiAgfVxuXG4gIHJldHVybiByZWdleGVzW3Rva2VuXShfc3RyaWN0LCBsb2NhbGUpO1xufVxuXG4vLyBDb2RlIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNTYxNDkzL2lzLXRoZXJlLWEtcmVnZXhwLWVzY2FwZS1mdW5jdGlvbi1pbi1qYXZhc2NyaXB0XG5mdW5jdGlvbiB1bmVzY2FwZUZvcm1hdChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICByZXR1cm4gcmVnZXhFc2NhcGUoc3RyXG4gICAgLnJlcGxhY2UoJ1xcXFwnLCAnJylcbiAgICAucmVwbGFjZSgvXFxcXChcXFspfFxcXFwoXFxdKXxcXFsoW15cXF1cXFtdKilcXF18XFxcXCguKS9nLCAobWF0Y2hlZCwgcDEsIHAyLCBwMywgcDQpID0+IHAxIHx8IHAyIHx8IHAzIHx8IHA0KVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnZXhFc2NhcGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xufVxuIl19