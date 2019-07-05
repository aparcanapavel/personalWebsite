/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getOffsets, setStyles } from './index';
/**
 * @param {?} data
 * @param {?=} renderer
 * @return {?}
 */
export function setAllStyles(data, renderer) {
    /** @type {?} */
    var target = data.instance.target;
    /** @type {?} */
    var offsets = getOffsets(data);
    setStyles(target, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: "translate3d(" + offsets.left + "px, " + offsets.top + "px, 0px)"
    }, renderer);
    if (data.instance.arrow) {
        setStyles(data.instance.arrow, data.offsets.arrow, renderer);
    }
    if (data.placementAuto) {
        if (renderer) {
            renderer.setAttribute(target, 'class', target.className.replace(/bs-popover-auto/g, "bs-popover-" + data.placement));
            renderer.setAttribute(target, 'class', target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-" + data.placement));
            renderer.setAttribute(target, 'class', target.className.replace(/\sauto/g, "s" + data.placement));
            if (target.className.match(/popover/g)) {
                renderer.addClass(target, 'popover-auto');
            }
            if (target.className.match(/tooltip/g)) {
                renderer.addClass(target, 'tooltip-auto');
            }
        }
        else {
            target.className = target.className.replace(/bs-popover-auto/g, "bs-popover-" + data.placement);
            target.className = target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-" + data.placement);
            target.className = target.className.replace(/\sauto/g, "s" + data.placement);
            if (target.className.match(/popover/g)) {
                target.classList.add('popover-auto');
            }
            if (target.className.match(/tooltip/g)) {
                target.classList.add('tooltip-auto');
            }
        }
    }
    if (renderer) {
        renderer.setAttribute(target, 'class', target.className.replace(/left|right|top|bottom/g, "" + data.placement));
    }
    else {
        target.className = target.className.replace(/left|right|top|bottom/g, "" + data.placement);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0QWxsU3R5bGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbInV0aWxzL3NldEFsbFN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7OztBQUVoRCxNQUFNLFVBQVUsWUFBWSxDQUFDLElBQVUsRUFBRSxRQUFvQjs7UUFDckQsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTs7UUFFN0IsT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFFaEMsU0FBUyxDQUFDLE1BQU0sRUFBRTtRQUNoQixhQUFhLEVBQUUsV0FBVztRQUMxQixHQUFHLEVBQUUsS0FBSztRQUNWLElBQUksRUFBRSxLQUFLO1FBQ1gsU0FBUyxFQUFFLGlCQUFlLE9BQU8sQ0FBQyxJQUFJLFlBQU8sT0FBTyxDQUFDLEdBQUcsYUFBVTtLQUNuRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRWIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtRQUN2QixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDOUQ7SUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7UUFDdEIsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQ25DLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLGdCQUFjLElBQUksQ0FBQyxTQUFXLENBQUMsQ0FDN0UsQ0FBQztZQUNGLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFDbkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWMsSUFBSSxDQUFDLFNBQVcsQ0FBQyxDQUM3RSxDQUFDO1lBRUYsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUNuQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBSyxJQUFJLENBQUMsU0FBVyxDQUFDLENBQzNELENBQUM7WUFFRixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN0QyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQzthQUMzQztZQUVELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3RDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQzNDO1NBR0Y7YUFBTTtZQUNMLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWMsSUFBSSxDQUFDLFNBQVcsQ0FBQyxDQUFDO1lBQ2hHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWMsSUFBSSxDQUFDLFNBQVcsQ0FBQyxDQUFDO1lBQ2hHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQUssSUFBSSxDQUFDLFNBQVcsQ0FBQyxDQUFDO1lBRTlFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3RDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3RDO1lBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDdEM7U0FDRjtLQUNGO0lBRUQsSUFBSSxRQUFRLEVBQUU7UUFDWixRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsS0FBRyxJQUFJLENBQUMsU0FBVyxDQUFDLENBQUMsQ0FBQztLQUNqSDtTQUFNO1FBQ0wsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxLQUFHLElBQUksQ0FBQyxTQUFXLENBQUMsQ0FBQztLQUM1RjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNldCB0aGUgc3R5bGUgdG8gdGhlIGdpdmVuIHBvcHBlclxuICovXG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBnZXRPZmZzZXRzLCBzZXRTdHlsZXMgfSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFsbFN0eWxlcyhkYXRhOiBEYXRhLCByZW5kZXJlcj86IFJlbmRlcmVyMik6IHZvaWQge1xuICBjb25zdCB0YXJnZXQgPSBkYXRhLmluc3RhbmNlLnRhcmdldDtcblxuICBjb25zdCBvZmZzZXRzID0gZ2V0T2Zmc2V0cyhkYXRhKTtcblxuICBzZXRTdHlsZXModGFyZ2V0LCB7XG4gICAgJ3dpbGwtY2hhbmdlJzogJ3RyYW5zZm9ybScsXG4gICAgdG9wOiAnMHB4JyxcbiAgICBsZWZ0OiAnMHB4JyxcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke29mZnNldHMubGVmdH1weCwgJHtvZmZzZXRzLnRvcH1weCwgMHB4KWBcbiAgfSwgcmVuZGVyZXIpO1xuXG4gIGlmIChkYXRhLmluc3RhbmNlLmFycm93KSB7XG4gICAgc2V0U3R5bGVzKGRhdGEuaW5zdGFuY2UuYXJyb3csIGRhdGEub2Zmc2V0cy5hcnJvdywgcmVuZGVyZXIpO1xuICB9XG5cbiAgaWYgKGRhdGEucGxhY2VtZW50QXV0bykge1xuICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRhcmdldCwgJ2NsYXNzJyxcbiAgICAgICAgdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9icy1wb3BvdmVyLWF1dG8vZywgYGJzLXBvcG92ZXItJHtkYXRhLnBsYWNlbWVudH1gKVxuICAgICAgKTtcbiAgICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0YXJnZXQsICdjbGFzcycsXG4gICAgICAgIHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvYnMtdG9vbHRpcC1hdXRvL2csIGBicy10b29sdGlwLSR7ZGF0YS5wbGFjZW1lbnR9YClcbiAgICAgICk7XG5cbiAgICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0YXJnZXQsICdjbGFzcycsXG4gICAgICAgIHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvXFxzYXV0by9nLCBgXFxzJHtkYXRhLnBsYWNlbWVudH1gKVxuICAgICAgKTtcblxuICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUubWF0Y2goL3BvcG92ZXIvZykpIHtcbiAgICAgICAgcmVuZGVyZXIuYWRkQ2xhc3ModGFyZ2V0LCAncG9wb3Zlci1hdXRvJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lLm1hdGNoKC90b29sdGlwL2cpKSB7XG4gICAgICAgIHJlbmRlcmVyLmFkZENsYXNzKHRhcmdldCwgJ3Rvb2x0aXAtYXV0bycpO1xuICAgICAgfVxuXG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmNsYXNzTmFtZSA9IHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvYnMtcG9wb3Zlci1hdXRvL2csIGBicy1wb3BvdmVyLSR7ZGF0YS5wbGFjZW1lbnR9YCk7XG4gICAgICB0YXJnZXQuY2xhc3NOYW1lID0gdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9icy10b29sdGlwLWF1dG8vZywgYGJzLXRvb2x0aXAtJHtkYXRhLnBsYWNlbWVudH1gKTtcbiAgICAgIHRhcmdldC5jbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoL1xcc2F1dG8vZywgYFxccyR7ZGF0YS5wbGFjZW1lbnR9YCk7XG5cbiAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lLm1hdGNoKC9wb3BvdmVyL2cpKSB7XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdwb3BvdmVyLWF1dG8nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUubWF0Y2goL3Rvb2x0aXAvZykpIHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXAtYXV0bycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChyZW5kZXJlcikge1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0YXJnZXQsICdjbGFzcycsIHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvbGVmdHxyaWdodHx0b3B8Ym90dG9tL2csIGAke2RhdGEucGxhY2VtZW50fWApKTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuY2xhc3NOYW1lID0gdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9sZWZ0fHJpZ2h0fHRvcHxib3R0b20vZywgYCR7ZGF0YS5wbGFjZW1lbnR9YCk7XG4gIH1cbn1cbiJdfQ==