import { Observable } from 'rxjs';
export declare class NgxTweetService {
    private readonly _document;
    private readonly TWITTER_OBJECT;
    private readonly TWITTER_SCRIPT_ID;
    private readonly TWITTER_WIDGET_URL;
    constructor(_document: any);
    loadScript(): Observable<any>;
    private _startScriptLoad();
    private _twitterScriptAlreadyExists();
    private _appendTwitterScriptToDOM();
    private _onTwitterScriptLoadedFactory(observer);
}
