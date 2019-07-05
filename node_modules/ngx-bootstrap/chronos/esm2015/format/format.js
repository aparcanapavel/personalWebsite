/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { zeroFill } from '../utils/zero-fill';
import { isFunction } from '../utils/type-checks';
/** @type {?} */
export let formatFunctions = {};
/** @type {?} */
export let formatTokenFunctions = {};
// tslint:disable-next-line
/** @type {?} */
export const formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
/**
 * @param {?} token
 * @param {?} padded
 * @param {?} ordinal
 * @param {?} callback
 * @return {?}
 */
export function addFormatToken(token, padded, ordinal, callback) {
    if (token) {
        formatTokenFunctions[token] = callback;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(callback.apply(null, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function (date, opts) {
            return opts.locale.ordinal(callback.apply(null, arguments), token);
        };
    }
}
/**
 * @param {?} format
 * @return {?}
 */
export function makeFormatFunction(format) {
    /** @type {?} */
    const array = format.match(formattingTokens);
    /** @type {?} */
    const length = array.length;
    /** @type {?} */
    const formatArr = new Array(length);
    for (let i = 0; i < length; i++) {
        formatArr[i] = formatTokenFunctions[array[i]]
            ? formatTokenFunctions[array[i]]
            : removeFormattingTokens(array[i]);
    }
    return function (date, locale, isUTC, offset = 0) {
        /** @type {?} */
        let output = '';
        for (let j = 0; j < length; j++) {
            output += isFunction(formatArr[j])
                ? ((/** @type {?} */ (formatArr[j]))).call(null, date, { format, locale, isUTC, offset })
                : formatArr[j];
        }
        return output;
    };
}
/**
 * @param {?} input
 * @return {?}
 */
function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZm9ybWF0L2Zvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFHbEQsTUFBTSxLQUFLLGVBQWUsR0FFdEIsRUFBRTs7QUFDTixNQUFNLEtBQUssb0JBQW9CLEdBQXVDLEVBQUU7OztBQUd4RSxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsc0xBQXNMOzs7Ozs7Ozs7Ozs7QUFNdE4sTUFBTSxVQUFVLGNBQWMsQ0FBQyxLQUFhLEVBQ2IsTUFBaUMsRUFDakMsT0FBZSxFQUNmLFFBQXlCO0lBRXRELElBQUksS0FBSyxFQUFFO1FBQ1Qsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDO0tBQ3hDO0lBRUQsSUFBSSxNQUFNLEVBQUU7UUFDVixvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztZQUNoQyxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDO0tBQ0g7SUFFRCxJQUFJLE9BQU8sRUFBRTtRQUNYLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLFVBQVUsSUFBVSxFQUFFLElBQTBCO1lBQzlFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckUsQ0FBQyxDQUFDO0tBQ0g7QUFDSCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxNQUFjOztVQUd6QyxLQUFLLEdBQWEsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7VUFDaEQsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNOztVQUVyQixTQUFTLEdBQWlDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUVqRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEM7SUFFRCxPQUFPLFVBQVUsSUFBVSxFQUFFLE1BQWMsRUFBRSxLQUFjLEVBQUUsTUFBTSxHQUFHLENBQUM7O1lBQ2pFLE1BQU0sR0FBRyxFQUFFO1FBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQixNQUFNLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQztnQkFDckYsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7O0FBRUQsU0FBUyxzQkFBc0IsQ0FBQyxLQUFhO0lBQzNDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUMzQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3RDO0lBRUQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyB6ZXJvRmlsbCB9IGZyb20gJy4uL3V0aWxzL3plcm8tZmlsbCc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMsIERhdGVGb3JtYXR0ZXJGbiB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGxldCBmb3JtYXRGdW5jdGlvbnM6IHtcbiAgW2tleTogc3RyaW5nXTogKGRhdGU6IERhdGUsIGxvY2FsZTogTG9jYWxlLCBpc1VUQz86IGJvb2xlYW4sIG9mZnNldD86IG51bWJlcikgPT4gc3RyaW5nO1xufSA9IHt9O1xuZXhwb3J0IGxldCBmb3JtYXRUb2tlbkZ1bmN0aW9uczogeyBba2V5OiBzdHJpbmddOiBEYXRlRm9ybWF0dGVyRm4gfSA9IHt9O1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmV4cG9ydCBjb25zdCBmb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KFtIaF1tbShzcyk/fE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFFvP3xZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xraz98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZztcblxuLy8gdG9rZW46ICAgICdNJ1xuLy8gcGFkZGVkOiAgIFsnTU0nLCAyXVxuLy8gb3JkaW5hbDogICdNbydcbi8vIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IHRoaXMubW9udGgoKSArIDEgfVxuZXhwb3J0IGZ1bmN0aW9uIGFkZEZvcm1hdFRva2VuKHRva2VuOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGVkOiBbc3RyaW5nLCBudW1iZXIsIGJvb2xlYW5dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYWw6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogRGF0ZUZvcm1hdHRlckZuKTogdm9pZCB7XG5cbiAgaWYgKHRva2VuKSB7XG4gICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dID0gY2FsbGJhY2s7XG4gIH1cblxuICBpZiAocGFkZGVkKSB7XG4gICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbcGFkZGVkWzBdXSA9IGZ1bmN0aW9uICgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHplcm9GaWxsKGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyksIHBhZGRlZFsxXSwgcGFkZGVkWzJdKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKG9yZGluYWwpIHtcbiAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1tvcmRpbmFsXSA9IGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gb3B0cy5sb2NhbGUub3JkaW5hbChjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpLCB0b2tlbik7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdDogc3RyaW5nKTpcbiAgKGRhdGU6IERhdGUsIGxvY2FsZTogTG9jYWxlLCBpc1VUQz86IGJvb2xlYW4sIG9mZnNldD86IG51bWJlcikgPT4gc3RyaW5nIHtcblxuICBjb25zdCBhcnJheTogc3RyaW5nW10gPSBmb3JtYXQubWF0Y2goZm9ybWF0dGluZ1Rva2Vucyk7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBjb25zdCBmb3JtYXRBcnI6IHN0cmluZ1tdIHwgRGF0ZUZvcm1hdHRlckZuW10gPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgZm9ybWF0QXJyW2ldID0gZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dXG4gICAgICA/IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXVxuICAgICAgOiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGFycmF5W2ldKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgbG9jYWxlOiBMb2NhbGUsIGlzVVRDOiBib29sZWFuLCBvZmZzZXQgPSAwKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0cHV0ID0gJyc7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgb3V0cHV0ICs9IGlzRnVuY3Rpb24oZm9ybWF0QXJyW2pdKVxuICAgICAgICA/IChmb3JtYXRBcnJbal0gYXMgRGF0ZUZvcm1hdHRlckZuKS5jYWxsKG51bGwsIGRhdGUsIHtmb3JtYXQsIGxvY2FsZSwgaXNVVEMsIG9mZnNldH0pXG4gICAgICAgIDogZm9ybWF0QXJyW2pdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9eXFxbfFxcXSQvZywgJycpO1xuICB9XG5cbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xufVxuIl19