/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject, queueScheduler } from 'rxjs';
import { observeOn, scan } from 'rxjs/operators';
/**
 * @template T
 */
export class MiniState extends BehaviorSubject {
    /**
     * @param {?} _initialState
     * @param {?} actionsDispatcher$
     * @param {?} reducer
     */
    constructor(_initialState, actionsDispatcher$, reducer) {
        super(_initialState);
        /** @type {?} */
        const actionInQueue$ = actionsDispatcher$.pipe(observeOn(queueScheduler));
        /** @type {?} */
        const state$ = actionInQueue$.pipe(scan((state, action) => {
            if (!action) {
                return state;
            }
            return reducer(state, action);
        }, _initialState));
        state$.subscribe((value) => this.next(value));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL21pbmktbmdyeC8iLCJzb3VyY2VzIjpbInN0YXRlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsZUFBZSxFQUFjLGNBQWMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBR2pELE1BQU0sT0FBTyxTQUFhLFNBQVEsZUFBa0I7Ozs7OztJQUNsRCxZQUNFLGFBQWdCLEVBQ2hCLGtCQUFzQyxFQUN0QyxPQUF5QjtRQUV6QixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7O2NBRWYsY0FBYyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FDNUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUMxQjs7Y0FDSyxNQUFNLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FDaEMsSUFBSSxDQUFDLENBQUMsS0FBUSxFQUFFLE1BQWMsRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUVELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQ0QsYUFBYSxDQUNkLENBQUM7UUFFRixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY29weXJpZ2h0IG5ncnhcbiAqL1xuaW1wb3J0IHsgQWN0aW9uLCBBY3Rpb25SZWR1Y2VyIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIHF1ZXVlU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBvYnNlcnZlT24sIHNjYW4gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuZXhwb3J0IGNsYXNzIE1pbmlTdGF0ZTxUPiBleHRlbmRzIEJlaGF2aW9yU3ViamVjdDxUPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIF9pbml0aWFsU3RhdGU6IFQsXG4gICAgYWN0aW9uc0Rpc3BhdGNoZXIkOiBPYnNlcnZhYmxlPEFjdGlvbj4sXG4gICAgcmVkdWNlcjogQWN0aW9uUmVkdWNlcjxUPlxuICApIHtcbiAgICBzdXBlcihfaW5pdGlhbFN0YXRlKTtcblxuICAgIGNvbnN0IGFjdGlvbkluUXVldWUkID0gYWN0aW9uc0Rpc3BhdGNoZXIkLnBpcGUoXG4gICAgICBvYnNlcnZlT24ocXVldWVTY2hlZHVsZXIpXG4gICAgKTtcbiAgICBjb25zdCBzdGF0ZSQgPSBhY3Rpb25JblF1ZXVlJC5waXBlKFxuICAgICAgc2Nhbigoc3RhdGU6IFQsIGFjdGlvbjogQWN0aW9uKSA9PiB7XG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgICB9LFxuICAgICAgX2luaXRpYWxTdGF0ZVxuICAgICkpO1xuXG4gICAgc3RhdGUkLnN1YnNjcmliZSgodmFsdWU6IFQpID0+IHRoaXMubmV4dCh2YWx1ZSkpO1xuICB9XG59XG4iXX0=