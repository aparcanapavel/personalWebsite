/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Default values provider for typeahead
 */
export class TypeaheadConfig {
    constructor() {
        /**
         * sets use adaptive position
         */
        this.adaptivePosition = false;
        /**
         * used to hide results on blur
         */
        this.hideResultsOnBlur = true;
        /**
         * used to choose the first item in typeahead container
         */
        this.selectFirstItem = true;
        /**
         * used to active/inactive the first item in typeahead container
         */
        this.isFirstItemActive = true;
        /**
         * used to choose set minimal no of characters that needs to
         * be entered before typeahead kicks-in
         */
        this.minLength = 1;
    }
}
TypeaheadConfig.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * sets use adaptive position
     * @type {?}
     */
    TypeaheadConfig.prototype.adaptivePosition;
    /**
     * used to hide results on blur
     * @type {?}
     */
    TypeaheadConfig.prototype.hideResultsOnBlur;
    /**
     * used to choose the first item in typeahead container
     * @type {?}
     */
    TypeaheadConfig.prototype.selectFirstItem;
    /**
     * used to active/inactive the first item in typeahead container
     * @type {?}
     */
    TypeaheadConfig.prototype.isFirstItemActive;
    /**
     * used to choose set minimal no of characters that needs to
     * be entered before typeahead kicks-in
     * @type {?}
     */
    TypeaheadConfig.prototype.minLength;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkLyIsInNvdXJjZXMiOlsidHlwZWFoZWFkLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUkzQyxNQUFNLE9BQU8sZUFBZTtJQUQ1Qjs7OztRQUdFLHFCQUFnQixHQUFHLEtBQUssQ0FBQzs7OztRQUV6QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7Ozs7UUFFekIsb0JBQWUsR0FBRyxJQUFJLENBQUM7Ozs7UUFFdkIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDOzs7OztRQUl6QixjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7OztZQWRBLFVBQVU7Ozs7Ozs7SUFHVCwyQ0FBeUI7Ozs7O0lBRXpCLDRDQUF5Qjs7Ozs7SUFFekIsMENBQXVCOzs7OztJQUV2Qiw0Q0FBeUI7Ozs7OztJQUl6QixvQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIERlZmF1bHQgdmFsdWVzIHByb3ZpZGVyIGZvciB0eXBlYWhlYWQgKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRDb25maWcge1xuICAvKiogc2V0cyB1c2UgYWRhcHRpdmUgcG9zaXRpb24gKi9cbiAgYWRhcHRpdmVQb3NpdGlvbiA9IGZhbHNlO1xuICAvKiogdXNlZCB0byBoaWRlIHJlc3VsdHMgb24gYmx1ciAqL1xuICBoaWRlUmVzdWx0c09uQmx1ciA9IHRydWU7XG4gIC8qKiB1c2VkIHRvIGNob29zZSB0aGUgZmlyc3QgaXRlbSBpbiB0eXBlYWhlYWQgY29udGFpbmVyICovXG4gIHNlbGVjdEZpcnN0SXRlbSA9IHRydWU7XG4gIC8qKiB1c2VkIHRvIGFjdGl2ZS9pbmFjdGl2ZSB0aGUgZmlyc3QgaXRlbSBpbiB0eXBlYWhlYWQgY29udGFpbmVyICovXG4gIGlzRmlyc3RJdGVtQWN0aXZlID0gdHJ1ZTtcbiAgLyoqIHVzZWQgdG8gY2hvb3NlIHNldCBtaW5pbWFsIG5vIG9mIGNoYXJhY3RlcnMgdGhhdCBuZWVkcyB0b1xuICAgKiBiZSBlbnRlcmVkIGJlZm9yZSB0eXBlYWhlYWQga2lja3MtaW5cbiAgICovXG4gIG1pbkxlbmd0aCA9IDE7XG59XG4iXX0=