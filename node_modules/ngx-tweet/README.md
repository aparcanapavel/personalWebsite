# ngx-tweet

[![npm version](https://badge.fury.io/js/ngx-tweet.svg)](https://badge.fury.io/js/ngx-tweet)
[![npm downloads](https://img.shields.io/npm/dm/ngx-tweet.svg)](https://npmjs.org/ngx-tweet)
[![GitHub issues](https://img.shields.io/github/issues/Adrael/ngx-tweet.svg)](https://github.com/Adrael/ngx-tweet/issues)
[![Dependencies](https://david-dm.org/Adrael/ngx-tweet.svg)](https://david-dm.org/Adrael/ngx-tweet#info=dependencies)
[![Dev Dependencies](https://david-dm.org/Adrael/ngx-tweet/dev-status.svg)](https://david-dm.org/Adrael/ngx-tweet#info=devDependencies)
[![Peer Dependencies](https://david-dm.org/Adrael/ngx-tweet/peer-status.svg)](https://david-dm.org/Adrael/ngx-tweet#info=peerDependenciess)
[![Known Vulnerabilities](https://snyk.io/test/github/Adrael/ngx-tweet/badge.svg)](https://snyk.io/test/github/Adrael/ngx-tweet)
[![GitHub license](https://img.shields.io/github/license/Adrael/ngx-tweet.svg)](https://github.com/Adrael/ngx-tweet/blob/master/LICENSE)

[![NPM](https://nodei.co/npm-dl/ngx-tweet.png)](https://nodei.co/npm/ngx-tweet/)

## Angular Tweet Component

Easily embed Twitter widgets into your Angular application! No more having to kludge together a Twitter script loader, or manage embed state on visibility change.

ngx-tweet is sourced from arusahni's ngTweet app (https://github.com/arusahni/ngtweet).

## Installation

`npm install ngx-tweet --save` or `yarn add ngx-tweet`

## Usage

Import `NgxTweetModule` in your module:

```javascript
import { NgxTweetModule } from "ngx-tweet";

@NgModule({
[...]
imports: [
  NgxTweetModule
]
[...]
})
```

Finally, use `ngx-tweet` component in your template:

```javascript
<ngx-tweet tweetId="921670221710032896"></ngx-tweet>
```

The `tweetId` is the number at the end of the tweet url that you want to embed, for example,

`https://twitter.com/nixcraft/status/921670221710032896`

And voila! Happy Tweeting!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## License

The MIT License (see the [LICENSE](https://github.com/Adrael/ngx-tweet/blob/master/LICENSE) file for the full text)
