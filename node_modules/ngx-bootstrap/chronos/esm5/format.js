/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// moment.js
// version : 2.18.1
// authors : Tim Wood, Iskren Chernev, Moment.js contributors
// license : MIT
// momentjs.com
import './units/index';
import { formatFunctions, makeFormatFunction } from './format/format';
import { getLocale } from './locale/locales';
import { isDateValid } from './utils/type-checks';
/**
 * @param {?} date
 * @param {?} format
 * @param {?=} locale
 * @param {?=} isUTC
 * @param {?=} offset
 * @return {?}
 */
export function formatDate(date, format, locale, isUTC, offset) {
    if (offset === void 0) { offset = 0; }
    /** @type {?} */
    var _locale = getLocale(locale || 'en');
    if (!_locale) {
        throw new Error("Locale \"" + locale + "\" is not defined, please add it with \"defineLocale(...)\"");
    }
    /** @type {?} */
    var _format = format || (isUTC ? 'YYYY-MM-DDTHH:mm:ss[Z]' : 'YYYY-MM-DDTHH:mm:ssZ');
    /** @type {?} */
    var output = formatMoment(date, _format, _locale, isUTC, offset);
    if (!output) {
        return output;
    }
    return _locale.postformat(output);
}
// format date using native date object
/**
 * @param {?} date
 * @param {?} _format
 * @param {?} locale
 * @param {?=} isUTC
 * @param {?=} offset
 * @return {?}
 */
export function formatMoment(date, _format, locale, isUTC, offset) {
    if (offset === void 0) { offset = 0; }
    if (!isDateValid(date)) {
        return locale.invalidDate;
    }
    /** @type {?} */
    var format = expandFormat(_format, locale);
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](date, locale, isUTC, offset);
}
/**
 * @param {?} _format
 * @param {?} locale
 * @return {?}
 */
export function expandFormat(_format, locale) {
    /** @type {?} */
    var format = _format;
    /** @type {?} */
    var i = 5;
    /** @type {?} */
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    /** @type {?} */
    var replaceLongDateFormatTokens = function (input) {
        return locale.formatLongDate(input) || input;
    };
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }
    return format;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7QUFFbEQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxJQUFVLEVBQUUsTUFBYyxFQUFFLE1BQWUsRUFBRSxLQUFlLEVBQUUsTUFBVTtJQUFWLHVCQUFBLEVBQUEsVUFBVTs7UUFDM0YsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO0lBQ3pDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixNQUFNLElBQUksS0FBSyxDQUNiLGNBQVcsTUFBTSxnRUFBMEQsQ0FDNUUsQ0FBQztLQUNIOztRQUVLLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFFLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQzs7UUFFaEYsTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBRWxFLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxPQUFPLE1BQU0sQ0FBQztLQUNmO0lBRUQsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BDLENBQUM7Ozs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsWUFBWSxDQUFDLElBQVUsRUFBRSxPQUFlLEVBQUUsTUFBYyxFQUFFLEtBQWUsRUFBRSxNQUFVO0lBQVYsdUJBQUEsRUFBQSxVQUFVO0lBQ25HLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdEIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDO0tBQzNCOztRQUVLLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM1QyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWhGLE9BQU8sZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzlELENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUMsT0FBZSxFQUFFLE1BQWM7O1FBQ3RELE1BQU0sR0FBRyxPQUFPOztRQUNoQixDQUFDLEdBQUcsQ0FBQzs7UUFDSCxxQkFBcUIsR0FBRyw0Q0FBNEM7O1FBRXBFLDJCQUEyQixHQUFHLFVBQUMsS0FBVTtRQUM3QyxPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDO0lBQy9DLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbkQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUM1RSxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDUjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb21lbnQuanNcbi8vIHZlcnNpb24gOiAyLjE4LjFcbi8vIGF1dGhvcnMgOiBUaW0gV29vZCwgSXNrcmVuIENoZXJuZXYsIE1vbWVudC5qcyBjb250cmlidXRvcnNcbi8vIGxpY2Vuc2UgOiBNSVRcbi8vIG1vbWVudGpzLmNvbVxuXG5pbXBvcnQgJy4vdW5pdHMvaW5kZXgnO1xuaW1wb3J0IHsgZm9ybWF0RnVuY3Rpb25zLCBtYWtlRm9ybWF0RnVuY3Rpb24gfSBmcm9tICcuL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4vbG9jYWxlL2xvY2FsZXMnO1xuaW1wb3J0IHsgaXNEYXRlVmFsaWQgfSBmcm9tICcuL3V0aWxzL3R5cGUtY2hlY2tzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZywgaXNVVEM/OiBib29sZWFuLCBvZmZzZXQgPSAwKTogc3RyaW5nIHtcbiAgY29uc3QgX2xvY2FsZSA9IGdldExvY2FsZShsb2NhbGUgfHwgJ2VuJyk7XG4gIGlmICghX2xvY2FsZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBMb2NhbGUgXCIke2xvY2FsZX1cIiBpcyBub3QgZGVmaW5lZCwgcGxlYXNlIGFkZCBpdCB3aXRoIFwiZGVmaW5lTG9jYWxlKC4uLilcImBcbiAgICApO1xuICB9XG5cbiAgY29uc3QgX2Zvcm1hdCA9IGZvcm1hdCB8fCAoaXNVVEMgPyAgJ1lZWVktTU0tRERUSEg6bW06c3NbWl0nIDogJ1lZWVktTU0tRERUSEg6bW06c3NaJyk7XG5cbiAgY29uc3Qgb3V0cHV0ID0gZm9ybWF0TW9tZW50KGRhdGUsIF9mb3JtYXQsIF9sb2NhbGUsIGlzVVRDLCBvZmZzZXQpO1xuXG4gIGlmICghb3V0cHV0KSB7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBfbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcbn1cblxuLy8gZm9ybWF0IGRhdGUgdXNpbmcgbmF0aXZlIGRhdGUgb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9tZW50KGRhdGU6IERhdGUsIF9mb3JtYXQ6IHN0cmluZywgbG9jYWxlOiBMb2NhbGUsIGlzVVRDPzogYm9vbGVhbiwgb2Zmc2V0ID0gMCk6IHN0cmluZyB7XG4gIGlmICghaXNEYXRlVmFsaWQoZGF0ZSkpIHtcbiAgICByZXR1cm4gbG9jYWxlLmludmFsaWREYXRlO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0ID0gZXhwYW5kRm9ybWF0KF9mb3JtYXQsIGxvY2FsZSk7XG4gIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdID0gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gfHwgbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCk7XG5cbiAgcmV0dXJuIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdKGRhdGUsIGxvY2FsZSwgaXNVVEMsIG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRGb3JtYXQoX2Zvcm1hdDogc3RyaW5nLCBsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XG4gIGxldCBmb3JtYXQgPSBfZm9ybWF0O1xuICBsZXQgaSA9IDU7XG4gIGNvbnN0IGxvY2FsRm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhMVFN8TFR8TEw/TD9MP3xsezEsNH0pL2c7XG5cbiAgY29uc3QgcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zID0gKGlucHV0OiBhbnkpID0+IHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdExvbmdEYXRlKGlucHV0KSB8fCBpbnB1dDtcbiAgfTtcblxuICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgd2hpbGUgKGkgPj0gMCAmJiBsb2NhbEZvcm1hdHRpbmdUb2tlbnMudGVzdChmb3JtYXQpKSB7XG4gICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UobG9jYWxGb3JtYXR0aW5nVG9rZW5zLCByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMpO1xuICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgIGkgLT0gMTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXQ7XG59XG4iXX0=