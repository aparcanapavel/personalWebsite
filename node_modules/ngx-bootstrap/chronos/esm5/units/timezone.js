/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addFormatToken } from '../format/format';
// todo: add support for timezones
/**
 * @return {?}
 */
export function initTimezone() {
    // FORMATTING
    addFormatToken('z', null, null, function (date, opts) {
        return opts.isUTC ? 'UTC' : '';
    });
    addFormatToken('zz', null, null, function (date, opts) {
        return opts.isUTC ? 'Coordinated Universal Time' : '';
    });
}
// MOMENTS
/**
 * @param {?} isUTC
 * @return {?}
 */
export function getZoneAbbr(isUTC) {
    return isUTC ? 'UTC' : '';
}
/**
 * @param {?} isUTC
 * @return {?}
 */
export function getZoneName(isUTC) {
    return isUTC ? 'Coordinated Universal Time' : '';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ1bml0cy90aW1lem9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztBQUtsRCxNQUFNLFVBQVUsWUFBWTtJQUMxQixhQUFhO0lBQ2IsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUM1QixVQUFTLElBQVUsRUFBRSxJQUEwQjtRQUM3QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FDRixDQUFDO0lBQ0YsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUM3QixVQUFTLElBQVUsRUFBRSxJQUEwQjtRQUM3QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEQsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDOzs7Ozs7QUFJRCxNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQWM7SUFDeEMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzVCLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFjO0lBQ3hDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ25ELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vIHRvZG86IGFkZCBzdXBwb3J0IGZvciB0aW1lem9uZXNcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaW1lem9uZSgpIHtcbiAgLy8gRk9STUFUVElOR1xuICBhZGRGb3JtYXRUb2tlbigneicsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIG9wdHMuaXNVVEMgPyAnVVRDJyA6ICcnO1xuICAgIH1cbiAgKTtcbiAgYWRkRm9ybWF0VG9rZW4oJ3p6JywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gb3B0cy5pc1VUQyA/ICdDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZScgOiAnJztcbiAgICB9XG4gICk7XG59XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFpvbmVBYmJyKGlzVVRDOiBib29sZWFuKSB7XG4gIHJldHVybiBpc1VUQyA/ICdVVEMnIDogJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRab25lTmFtZShpc1VUQzogYm9vbGVhbikge1xuICByZXR1cm4gaXNVVEMgPyAnQ29vcmRpbmF0ZWQgVW5pdmVyc2FsIFRpbWUnIDogJyc7XG59XG4iXX0=