/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter, RendererFactory2 } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalContainerComponent } from './modal-container.component';
import { CLASS_NAME, modalConfigDefaults, ModalOptions, TRANSITION_DURATIONS } from './modal-options.class';
import { BsModalRef } from './bs-modal-ref.service';
export class BsModalService {
    /**
     * @param {?} rendererFactory
     * @param {?} clf
     */
    constructor(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = modalConfigDefaults;
        // tslint:disable-next-line:no-any
        this.onShow = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onShown = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onHide = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onHidden = new EventEmitter();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    show(content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    }
    /**
     * @param {?} level
     * @return {?}
     */
    hide(level) {
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(() => {
            this._hideModal(level);
            this.removeLoaders(level);
        }, this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
    }
    /**
     * @return {?}
     */
    _showBackdrop() {
        /** @type {?} */
        const isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        /** @type {?} */
        const isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    }
    /**
     * @return {?}
     */
    _hideBackdrop() {
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        /** @type {?} */
        const duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
        setTimeout(() => this.removeBackdrop(), duration);
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} content
     * @return {?}
     */
    _showModal(content) {
        /** @type {?} */
        const modalLoader = this.loaders[this.loaders.length - 1];
        /** @type {?} */
        const bsModalRef = new BsModalRef();
        /** @type {?} */
        const modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: BsModalRef, useValue: bsModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content, isAnimated: this.config.animated, initialState: this.config.initialState, bsModalService: this });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.hide = () => {
            modalContainerRef.instance.hide();
        };
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        bsModalRef.setClass = (newClass) => {
            modalContainerRef.instance.config.class = newClass;
        };
        return bsModalRef;
    }
    /**
     * @param {?} level
     * @return {?}
     */
    _hideModal(level) {
        /** @type {?} */
        const modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    }
    /**
     * @return {?}
     */
    getModalsCount() {
        return this.modalsCount;
    }
    /**
     * @param {?} reason
     * @return {?}
     */
    setDismissReason(reason) {
        this.lastDismissReason = reason;
    }
    /**
     * @return {?}
     */
    removeBackdrop() {
        this._backdropLoader.hide();
        this.backdropRef = null;
    }
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
    /** Scroll bar tricks */
    /**
     * \@internal
     * @return {?}
     */
    checkScrollbar() {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    /**
     * @return {?}
     */
    setScrollbar() {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = `${this.originalBodyPadding +
                this.scrollbarWidth}px`;
        }
    }
    /**
     * @private
     * @return {?}
     */
    resetScrollbar() {
        document.body.style.paddingRight = `${this.originalBodyPadding}px`;
    }
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    getScrollbarWidth() {
        /** @type {?} */
        const scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        /** @type {?} */
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    }
    /**
     * @private
     * @return {?}
     */
    _createLoaders() {
        /** @type {?} */
        const loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    }
    /**
     * @private
     * @param {?} level
     * @return {?}
     */
    removeLoaders(level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach((loader, i) => {
            loader.instance.level = i + 1;
        });
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    copyEvent(from, to) {
        from.subscribe(() => {
            to.emit(this.lastDismissReason);
        });
    }
}
BsModalService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BsModalService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: ComponentLoaderFactory }
];
if (false) {
    /** @type {?} */
    BsModalService.prototype.config;
    /** @type {?} */
    BsModalService.prototype.onShow;
    /** @type {?} */
    BsModalService.prototype.onShown;
    /** @type {?} */
    BsModalService.prototype.onHide;
    /** @type {?} */
    BsModalService.prototype.onHidden;
    /**
     * @type {?}
     * @protected
     */
    BsModalService.prototype.isBodyOverflowing;
    /**
     * @type {?}
     * @protected
     */
    BsModalService.prototype.originalBodyPadding;
    /**
     * @type {?}
     * @protected
     */
    BsModalService.prototype.scrollbarWidth;
    /**
     * @type {?}
     * @protected
     */
    BsModalService.prototype.backdropRef;
    /**
     * @type {?}
     * @private
     */
    BsModalService.prototype._backdropLoader;
    /**
     * @type {?}
     * @private
     */
    BsModalService.prototype.modalsCount;
    /**
     * @type {?}
     * @private
     */
    BsModalService.prototype.lastDismissReason;
    /**
     * @type {?}
     * @private
     */
    BsModalService.prototype.loaders;
    /**
     * @type {?}
     * @private
     */
    BsModalService.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    BsModalService.prototype.clf;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvbW9kYWwvIiwic291cmNlcyI6WyJicy1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsVUFBVSxFQUVWLFlBQVksRUFFWixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFtQixzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFDTCxVQUFVLEVBQ1YsbUJBQW1CLEVBQ25CLFlBQVksRUFDWixvQkFBb0IsRUFDckIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHcEQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBMkJ6QixZQUFZLGVBQWlDLEVBQVUsR0FBMkI7UUFBM0IsUUFBRyxHQUFILEdBQUcsQ0FBd0I7O1FBekJsRixXQUFNLEdBQWlCLG1CQUFtQixDQUFDOztRQUczQyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7O1FBRS9DLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7UUFFaEQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztRQUUvQyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkMsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUV4QixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUlyQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFFdkIsWUFBTyxHQUErQyxFQUFFLENBQUM7UUFLL0Qs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LElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUNsQixDQUFDLE1BQWdELEVBQUUsQ0FBUyxFQUFFLEVBQUU7WUFDOUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBR08sU0FBUyxDQUFDLElBQXVCLEVBQUUsRUFBcUI7UUFDOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDbEIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXRNRixVQUFVOzs7O1lBZFQsZ0JBQWdCO1lBR1Esc0JBQXNCOzs7O0lBYzlDLGdDQUEyQzs7SUFHM0MsZ0NBQStDOztJQUUvQyxpQ0FBZ0Q7O0lBRWhELGdDQUErQzs7SUFFL0Msa0NBQWlEOzs7OztJQUVqRCwyQ0FBb0M7Ozs7O0lBQ3BDLDZDQUFrQzs7Ozs7SUFFbEMsd0NBQTZCOzs7OztJQUU3QixxQ0FBNEQ7Ozs7O0lBQzVELHlDQUFpRTs7Ozs7SUFDakUscUNBQXdCOzs7OztJQUN4QiwyQ0FBK0I7Ozs7O0lBRS9CLGlDQUFpRTs7Ozs7SUFFakUsbUNBQTZCOzs7OztJQUVrQiw2QkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIEluamVjdGFibGUsXG4gIFRlbXBsYXRlUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbiAgUmVuZGVyZXJGYWN0b3J5MlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IE1vZGFsQmFja2Ryb3BDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWJhY2tkcm9wLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBDTEFTU19OQU1FLFxuICBtb2RhbENvbmZpZ0RlZmF1bHRzLFxuICBNb2RhbE9wdGlvbnMsXG4gIFRSQU5TSVRJT05fRFVSQVRJT05TXG59IGZyb20gJy4vbW9kYWwtb3B0aW9ucy5jbGFzcyc7XG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gZnJvbSAnLi9icy1tb2RhbC1yZWYuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc01vZGFsU2VydmljZSB7XG4gIC8vIGNvbnN0cnVjdG9yIHByb3BzXG4gIGNvbmZpZzogTW9kYWxPcHRpb25zID0gbW9kYWxDb25maWdEZWZhdWx0cztcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uU2hvdzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25IaWRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJvdGVjdGVkIGlzQm9keU92ZXJmbG93aW5nID0gZmFsc2U7XG4gIHByb3RlY3RlZCBvcmlnaW5hbEJvZHlQYWRkaW5nID0gMDtcblxuICBwcm90ZWN0ZWQgc2Nyb2xsYmFyV2lkdGggPSAwO1xuXG4gIHByb3RlY3RlZCBiYWNrZHJvcFJlZjogQ29tcG9uZW50UmVmPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+O1xuICBwcml2YXRlIF9iYWNrZHJvcExvYWRlcjogQ29tcG9uZW50TG9hZGVyPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+O1xuICBwcml2YXRlIG1vZGFsc0NvdW50ID0gMDtcbiAgcHJpdmF0ZSBsYXN0RGlzbWlzc1JlYXNvbiA9ICcnO1xuXG4gIHByaXZhdGUgbG9hZGVyczogQ29tcG9uZW50TG9hZGVyPE1vZGFsQ29udGFpbmVyQ29tcG9uZW50PltdID0gW107XG5cbiAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICBjb25zdHJ1Y3RvcihyZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsIHByaXZhdGUgY2xmOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XG4gICAgdGhpcy5fYmFja2Ryb3BMb2FkZXIgPSB0aGlzLmNsZi5jcmVhdGVMb2FkZXI8TW9kYWxCYWNrZHJvcENvbXBvbmVudD4oXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGxcbiAgICApO1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG5cbiAgLyoqIFNob3dzIGEgbW9kYWwgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzaG93KGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gfCBhbnksIGNvbmZpZz86IE1vZGFsT3B0aW9ucyk6IEJzTW9kYWxSZWYge1xuICAgIHRoaXMubW9kYWxzQ291bnQrKztcbiAgICB0aGlzLl9jcmVhdGVMb2FkZXJzKCk7XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBtb2RhbENvbmZpZ0RlZmF1bHRzLCBjb25maWcpO1xuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgpO1xuICAgIHRoaXMubGFzdERpc21pc3NSZWFzb24gPSBudWxsO1xuXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dNb2RhbChjb250ZW50KTtcbiAgfVxuXG4gIGhpZGUobGV2ZWw6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm1vZGFsc0NvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLl9oaWRlQmFja2Ryb3AoKTtcbiAgICAgIHRoaXMucmVzZXRTY3JvbGxiYXIoKTtcbiAgICB9XG4gICAgdGhpcy5tb2RhbHNDb3VudCA9IHRoaXMubW9kYWxzQ291bnQgPj0gMSA/IHRoaXMubW9kYWxzQ291bnQgLSAxIDogMDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVNb2RhbChsZXZlbCk7XG4gICAgICB0aGlzLnJlbW92ZUxvYWRlcnMobGV2ZWwpO1xuICAgIH0sIHRoaXMuY29uZmlnLmFuaW1hdGVkID8gVFJBTlNJVElPTl9EVVJBVElPTlMuQkFDS0RST1AgOiAwKTtcbiAgfVxuXG4gIF9zaG93QmFja2Ryb3AoKTogdm9pZCB7XG4gICAgY29uc3QgaXNCYWNrZHJvcEVuYWJsZWQgPVxuICAgICAgdGhpcy5jb25maWcuYmFja2Ryb3AgfHwgdGhpcy5jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnO1xuICAgIGNvbnN0IGlzQmFja2Ryb3BJbkRPTSA9XG4gICAgICAhdGhpcy5iYWNrZHJvcFJlZiB8fCAhdGhpcy5iYWNrZHJvcFJlZi5pbnN0YW5jZS5pc1Nob3duO1xuXG4gICAgaWYgKHRoaXMubW9kYWxzQ291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMucmVtb3ZlQmFja2Ryb3AoKTtcblxuICAgICAgaWYgKGlzQmFja2Ryb3BFbmFibGVkICYmIGlzQmFja2Ryb3BJbkRPTSkge1xuICAgICAgICB0aGlzLl9iYWNrZHJvcExvYWRlclxuICAgICAgICAgIC5hdHRhY2goTW9kYWxCYWNrZHJvcENvbXBvbmVudClcbiAgICAgICAgICAudG8oJ2JvZHknKVxuICAgICAgICAgIC5zaG93KHsgaXNBbmltYXRlZDogdGhpcy5jb25maWcuYW5pbWF0ZWQgfSk7XG4gICAgICAgIHRoaXMuYmFja2Ryb3BSZWYgPSB0aGlzLl9iYWNrZHJvcExvYWRlci5fY29tcG9uZW50UmVmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9oaWRlQmFja2Ryb3AoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wUmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYmFja2Ryb3BSZWYuaW5zdGFuY2UuaXNTaG93biA9IGZhbHNlO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0ZWQgPyBUUkFOU0lUSU9OX0RVUkFUSU9OUy5CQUNLRFJPUCA6IDA7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbW92ZUJhY2tkcm9wKCksIGR1cmF0aW9uKTtcbiAgfVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIF9zaG93TW9kYWwoY29udGVudDogYW55KTogQnNNb2RhbFJlZiB7XG4gICAgY29uc3QgbW9kYWxMb2FkZXIgPSB0aGlzLmxvYWRlcnNbdGhpcy5sb2FkZXJzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGJzTW9kYWxSZWYgPSBuZXcgQnNNb2RhbFJlZigpO1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyUmVmID0gbW9kYWxMb2FkZXJcbiAgICAgIC5wcm92aWRlKHsgcHJvdmlkZTogTW9kYWxPcHRpb25zLCB1c2VWYWx1ZTogdGhpcy5jb25maWcgfSlcbiAgICAgIC5wcm92aWRlKHsgcHJvdmlkZTogQnNNb2RhbFJlZiwgdXNlVmFsdWU6IGJzTW9kYWxSZWYgfSlcbiAgICAgIC5hdHRhY2goTW9kYWxDb250YWluZXJDb21wb25lbnQpXG4gICAgICAudG8oJ2JvZHknKVxuICAgICAgLnNob3coe2NvbnRlbnQsIGlzQW5pbWF0ZWQ6IHRoaXMuY29uZmlnLmFuaW1hdGVkLCBpbml0aWFsU3RhdGU6IHRoaXMuY29uZmlnLmluaXRpYWxTdGF0ZSwgYnNNb2RhbFNlcnZpY2U6IHRoaXN9KTtcbiAgICBtb2RhbENvbnRhaW5lclJlZi5pbnN0YW5jZS5sZXZlbCA9IHRoaXMuZ2V0TW9kYWxzQ291bnQoKTtcbiAgICBic01vZGFsUmVmLmhpZGUgPSAoKSA9PiB7XG4gICAgICBtb2RhbENvbnRhaW5lclJlZi5pbnN0YW5jZS5oaWRlKCk7XG4gICAgfTtcbiAgICBic01vZGFsUmVmLmNvbnRlbnQgPSBtb2RhbExvYWRlci5nZXRJbm5lckNvbXBvbmVudCgpIHx8IG51bGw7XG4gICAgYnNNb2RhbFJlZi5zZXRDbGFzcyA9IChuZXdDbGFzczogc3RyaW5nKSA9PiB7XG4gICAgICBtb2RhbENvbnRhaW5lclJlZi5pbnN0YW5jZS5jb25maWcuY2xhc3MgPSBuZXdDbGFzcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJzTW9kYWxSZWY7XG4gIH1cblxuICBfaGlkZU1vZGFsKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RhbExvYWRlciA9IHRoaXMubG9hZGVyc1tsZXZlbCAtIDFdO1xuICAgIGlmIChtb2RhbExvYWRlcikge1xuICAgICAgbW9kYWxMb2FkZXIuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldE1vZGFsc0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxzQ291bnQ7XG4gIH1cblxuICBzZXREaXNtaXNzUmVhc29uKHJlYXNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5sYXN0RGlzbWlzc1JlYXNvbiA9IHJlYXNvbjtcbiAgfVxuXG4gIHJlbW92ZUJhY2tkcm9wKCk6IHZvaWQge1xuICAgIHRoaXMuX2JhY2tkcm9wTG9hZGVyLmhpZGUoKTtcbiAgICB0aGlzLmJhY2tkcm9wUmVmID0gbnVsbDtcbiAgfVxuXG4gIC8qKiBBRlRFUiBQUiBNRVJHRSBNT0RBTC5DT01QT05FTlQgV0lMTCBCRSBVU0lORyBUSElTIENPREUgKi9cbiAgLyoqIFNjcm9sbCBiYXIgdHJpY2tzICovXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgY2hlY2tTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0JvZHlPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLnNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRTY3JvbGxiYXJXaWR0aCgpO1xuICB9XG5cbiAgc2V0U2Nyb2xsYmFyKCk6IHZvaWQge1xuICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgPSBwYXJzZUludChcbiAgICAgIHdpbmRvd1xuICAgICAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KVxuICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpIHx8ICcwJyxcbiAgICAgIDEwXG4gICAgKTtcblxuICAgIGlmICh0aGlzLmlzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMub3JpZ2luYWxCb2R5UGFkZGluZyArXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGh9cHhgO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmd9cHhgO1xuICB9XG5cbiAgLy8gdGh4IGQud2Fsc2hcbiAgcHJpdmF0ZSBnZXRTY3JvbGxiYXJXaWR0aCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjcm9sbERpdiA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHNjcm9sbERpdiwgQ0xBU1NfTkFNRS5TQ1JPTExCQVJfTUVBU1VSRVIpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keSwgc2Nyb2xsRGl2KTtcblxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUxvYWRlcnMoKTogdm9pZCB7XG4gICAgY29uc3QgbG9hZGVyID0gdGhpcy5jbGYuY3JlYXRlTG9hZGVyPE1vZGFsQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgbnVsbFxuICAgICk7XG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uQmVmb3JlU2hvdywgdGhpcy5vblNob3cpO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vblNob3duLCB0aGlzLm9uU2hvd24pO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vbkJlZm9yZUhpZGUsIHRoaXMub25IaWRlKTtcbiAgICB0aGlzLmNvcHlFdmVudChsb2FkZXIub25IaWRkZW4sIHRoaXMub25IaWRkZW4pO1xuICAgIHRoaXMubG9hZGVycy5wdXNoKGxvYWRlcik7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUxvYWRlcnMobGV2ZWw6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubG9hZGVycy5zcGxpY2UobGV2ZWwgLSAxLCAxKTtcbiAgICB0aGlzLmxvYWRlcnMuZm9yRWFjaChcbiAgICAgIChsb2FkZXI6IENvbXBvbmVudExvYWRlcjxNb2RhbENvbnRhaW5lckNvbXBvbmVudD4sIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBsb2FkZXIuaW5zdGFuY2UubGV2ZWwgPSBpICsgMTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIGNvcHlFdmVudChmcm9tOiBFdmVudEVtaXR0ZXI8YW55PiwgdG86IEV2ZW50RW1pdHRlcjxhbnk+KSB7XG4gICAgZnJvbS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdG8uZW1pdCh0aGlzLmxhc3REaXNtaXNzUmVhc29uKTtcbiAgICB9KTtcbiAgfVxufVxuIl19