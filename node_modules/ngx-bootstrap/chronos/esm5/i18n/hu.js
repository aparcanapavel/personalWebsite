/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
import { getDayOfWeek } from '../units/day-of-week';
//! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner
/** @type {?} */
var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    switch (key) {
        case 's':
            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
        case 'ss':
            return num + ((isFuture || withoutSuffix) ? ' másodperc' : ' másodperce');
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'hh':
            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
    }
    return '';
}
/**
 * @param {?} date
 * @param {?} isFuture
 * @return {?}
 */
function week(date, isFuture) {
    return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[getDayOfWeek(date)] + '] LT[-kor]';
}
/** @type {?} */
export var huLocale = {
    abbr: 'hu',
    months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
    monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
    weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
    weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
    weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'YYYY.MM.DD.',
        LL: 'YYYY. MMMM D.',
        LLL: 'YYYY. MMMM D. H:mm',
        LLLL: 'YYYY. MMMM D., dddd H:mm'
    },
    meridiemParse: /de|du/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input.charAt(1).toLowerCase() === 'u';
    },
    meridiem: /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower === true ? 'de' : 'DE';
        }
        else {
            return isLower === true ? 'du' : 'DU';
        }
    },
    calendar: {
        sameDay: '[ma] LT[-kor]',
        nextDay: '[holnap] LT[-kor]',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return week(date, true);
        },
        lastDay: '[tegnap] LT[-kor]',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return week(date, false);
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s múlva',
        past: '%s',
        s: translate,
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2h1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztJQU1oRCxXQUFXLEdBQUcsK0RBQStELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7QUFDNUYsU0FBUyxTQUFTLENBQUMsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVyxFQUFFLFFBQWlCO0lBQ3BGLFFBQVEsR0FBRyxFQUFFO1FBQ1gsS0FBSyxHQUFHO1lBQ04sT0FBTyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1FBQ2hGLEtBQUssSUFBSTtZQUNQLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUUsS0FBSyxHQUFHO1lBQ04sT0FBTyxLQUFLLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLEtBQUssSUFBSTtZQUNQLE9BQU8sR0FBRyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxLQUFLLEdBQUc7WUFDTixPQUFPLEtBQUssR0FBRyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakUsS0FBSyxJQUFJO1lBQ1AsT0FBTyxHQUFHLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxDQUFD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QUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUNELE9BQU8sRUFBRyxtQkFBbUI7UUFDN0IsUUFBUTs7OztrQkFBRSxJQUFVO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQ0QsUUFBUSxFQUFHLEdBQUc7S0FDZjtJQUNELFlBQVksRUFBRztRQUNiLE1BQU0sRUFBRyxVQUFVO1FBQ25CLElBQUksRUFBRyxJQUFJO1FBQ1gsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxTQUFTO0tBQ2Y7SUFDRCxzQkFBc0IsRUFBRSxXQUFXO0lBQ25DLE9BQU8sRUFBRyxLQUFLO0lBQ2YsSUFBSSxFQUFHO1FBQ0wsR0FBRyxFQUFHLENBQUM7O1FBQ1AsR0FBRyxFQUFHLENBQUMsQ0FBRSxnRUFBZ0U7S0FDMUU7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogSHVuZ2FyaWFuIFtodV1cbi8vISBhdXRob3IgOiBBZGFtIEJydW5uZXIgOiBodHRwczovL2dpdGh1Yi5jb20vYWRhbWJydW5uZXJcblxubGV0IHdlZWtFbmRpbmdzID0gJ3Zhc8Ohcm5hcCBow6l0ZsWRbiBrZWRkZW4gc3plcmTDoW4gY3PDvHTDtnJ0w7Zrw7ZuIHDDqW50ZWtlbiBzem9tYmF0b24nLnNwbGl0KCcgJyk7XG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbik6IHN0cmluZyB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXgpID8gJ27DqWjDoW55IG3DoXNvZHBlcmMnIDogJ27DqWjDoW55IG3DoXNvZHBlcmNlJztcbiAgICBjYXNlICdzcyc6XG4gICAgICByZXR1cm4gbnVtICsgKChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4KSA/ICcgbcOhc29kcGVyYycgOiAnIG3DoXNvZHBlcmNlJyk7XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgcGVyYycgOiAnIHBlcmNlJyk7XG4gICAgY2FzZSAnbW0nOlxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBwZXJjJyA6ICcgcGVyY2UnKTtcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDs3JhJyA6ICcgw7Nyw6FqYScpO1xuICAgIGNhc2UgJ2hoJzpcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw7NyYScgOiAnIMOzcsOhamEnKTtcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBuYXAnIDogJyBuYXBqYScpO1xuICAgIGNhc2UgJ2RkJzpcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgbmFwJyA6ICcgbmFwamEnKTtcbiAgICBjYXNlICdNJzpcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBow7NuYXAnIDogJyBow7NuYXBqYScpO1xuICAgIGNhc2UgJ01NJzpcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgaMOzbmFwJyA6ICcgaMOzbmFwamEnKTtcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDqXYnIDogJyDDqXZlJyk7XG4gICAgY2FzZSAneXknOlxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDqXYnIDogJyDDqXZlJyk7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuZnVuY3Rpb24gd2VlayhkYXRlOiBEYXRlLCBpc0Z1dHVyZTogYm9vbGVhbikge1xuICByZXR1cm4gKGlzRnV0dXJlID8gJycgOiAnW23Dumx0XSAnKSArICdbJyArIHdlZWtFbmRpbmdzW2dldERheU9mV2VlayhkYXRlKV0gKyAnXSBMVFsta29yXSc7XG59XG5cbmV4cG9ydCBjb25zdCBodUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2h1JyxcbiAgbW9udGhzIDogJ2phbnXDoXJfZmVicnXDoXJfbcOhcmNpdXNfw6FwcmlsaXNfbcOhanVzX2rDum5pdXNfasO6bGl1c19hdWd1c3p0dXNfc3plcHRlbWJlcl9va3TDs2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgOiAnamFuX2ZlYl9tw6FyY1/DoXByX23DoWpfasO6bl9qw7psX2F1Z19zemVwdF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXMgOiAndmFzw6FybmFwX2jDqXRmxZFfa2VkZF9zemVyZGFfY3PDvHTDtnJ0w7ZrX3DDqW50ZWtfc3pvbWJhdCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydCA6ICd2YXNfaMOpdF9rZWRkX3N6ZV9jc8O8dF9ww6luX3N6bycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAndl9oX2tfc3plX2NzX3Bfc3pvJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICBMVCA6ICdIOm1tJyxcbiAgICBMVFMgOiAnSDptbTpzcycsXG4gICAgTCA6ICdZWVlZLk1NLkRELicsXG4gICAgTEwgOiAnWVlZWS4gTU1NTSBELicsXG4gICAgTExMIDogJ1lZWVkuIE1NTU0gRC4gSDptbScsXG4gICAgTExMTCA6ICdZWVlZLiBNTU1NIEQuLCBkZGRkIEg6bW0nXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC9kZXxkdS9pLFxuICBpc1BNIChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5jaGFyQXQoMSkudG9Mb3dlckNhc2UoKSA9PT0gJ3UnO1xuICB9LFxuICBtZXJpZGllbSAoaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91cnMgPCAxMikge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPT09IHRydWUgPyAnZGUnIDogJ0RFJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlzTG93ZXIgPT09IHRydWUgPyAnZHUnIDogJ0RVJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgIHNhbWVEYXkgOiAnW21hXSBMVFsta29yXScsXG4gICAgbmV4dERheSA6ICdbaG9sbmFwXSBMVFsta29yXScsXG4gICAgbmV4dFdlZWsgKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiB3ZWVrKGRhdGUsIHRydWUpO1xuICAgIH0sXG4gICAgbGFzdERheSA6ICdbdGVnbmFwXSBMVFsta29yXScsXG4gICAgbGFzdFdlZWsgKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiB3ZWVrKGRhdGUsIGZhbHNlKTtcbiAgICB9LFxuICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICBmdXR1cmUgOiAnJXMgbcO6bHZhJyxcbiAgICBwYXN0IDogJyVzJyxcbiAgICBzIDogdHJhbnNsYXRlLFxuICAgIHNzIDogdHJhbnNsYXRlLFxuICAgIG0gOiB0cmFuc2xhdGUsXG4gICAgbW0gOiB0cmFuc2xhdGUsXG4gICAgaCA6IHRyYW5zbGF0ZSxcbiAgICBoaCA6IHRyYW5zbGF0ZSxcbiAgICBkIDogdHJhbnNsYXRlLFxuICAgIGRkIDogdHJhbnNsYXRlLFxuICAgIE0gOiB0cmFuc2xhdGUsXG4gICAgTU0gOiB0cmFuc2xhdGUsXG4gICAgeSA6IHRyYW5zbGF0ZSxcbiAgICB5eSA6IHRyYW5zbGF0ZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsIDogJyVkLicsXG4gIHdlZWsgOiB7XG4gICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIl19