import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { NgxTweetService } from '../services/ngx-tweet.service';
export declare class NgxTweetComponent implements OnInit {
    private readonly _elementRef;
    private readonly _ngxTweetService;
    private readonly _changeDetectorRef;
    tweetId: string;
    isTwitterScriptLoading: boolean;
    constructor(_elementRef: ElementRef, _ngxTweetService: NgxTweetService, _changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    private _loadTwitterScript();
    private _updateTwitterScriptLoadingState();
}
