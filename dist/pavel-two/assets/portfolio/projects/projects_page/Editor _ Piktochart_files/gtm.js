
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"106",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{for(var d=\"- \",b=1;4\u003Eb;b++)for(var e=document.getElementById(\"topic-\"+b),c=e.options,a=0;a\u003Cc.length;a++)c[a].selected\u0026\u0026(d+=c[a].label+\" - \");return d}catch(f){}return\"\"})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",2],8,16],".toUpperCase()})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],",b=",["escape",["macro",5],8,16],";a=a.replace(\/(\u0026)?((\\w*)?email|signup_id)=([^\u0026]*)\/g,\"\").replace(\/^\u0026\/,\"\");return 0\u003Ca.length?b+\"?\"+a:b})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",7],8,16],".split(\"-\")[0].toUpperCase().replace(\/_\/g,\" \")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",7],8,16],".split(\"-\").slice(1).join(\" \").toUpperCase()})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 30\u003E=",["escape",["macro",10],8,16],"})();"]
    },{
      "function":"__c",
      "vtp_value":"gdpr_signup"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){var a=new Date;a.setTime(a.getTime()+15552E6);a=\"expires\\x3d\"+a.toUTCString();document.cookie=",["escape",["macro",12],8,16],"+\"\\x3dnothing_there; \"+a;console.log(",["escape",["macro",12],8,16],"+\"\\x3dnothing_there; \"+a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementById(\"user_adult\").checked.toString(),b=document.getElementById(\"user_child\").checked.toString();return\"Over 16:\"+a+\"|Under 16:\"+b})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",15],8,16],";a=a.split(\"\/\");if(6\u003C=a.length)return a[3]+\" \"+a[5]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"type"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],".replace(\"-\",\" \")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementById(\"publish-image\").className;return a})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",22],
      "vtp_defaultValue":["macro",22],
      "vtp_map":["list",["map","key","dynamic","value",["macro",23]]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_content"
    },{
      "function":"__c",
      "vtp_value":"Live"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",28],
      "vtp_defaultValue":"UA-112610195-2",
      "vtp_map":["list",["map","key","Staging","value","UA-112610195-2"],["map","key","Live","value","UA-112610195-1"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d=",["escape",["macro",29],8,16],";return function(b){var c=b.get(\"sendHitTask\");b.set(\"sendHitTask\",function(a){var b=a.get(\"hitPayload\"),e=new RegExp(a.get(\"trackingId\"),\"gi\");c(a);a.set(\"hitPayload\",b.replace(e,d),!0);c(a)})}})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",28],
      "vtp_defaultValue":"UA-98194395-2",
      "vtp_map":["list",["map","key","Staging","value","UA-98194395-2"],["map","key","Live","value","UA-98194395-1"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",30]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",5],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/(dashboard|infographic|presentation|printable)(\/)?$","value","Dashboard"],["map","key","\/(infographic|presentation|printable)\/(saved|editor)\/[a-z,0-9]*(\/)?$","value","Editor"],["map","key","^\/pricing(\/)?(org|edu)?(\/)?$","value","Pricing pages"],["map","key","^\/users\/sign_up","value","Sign Up page"],["map","key","^\/teams\/[0-9]*\/team_settings(\/)?$","value","Team Settings page"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",5],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/formats\/[a-z]*\/","value","Formats pages"],["map","key","\/pro-team\/","value","PRO Team page"],["map","key","(\/es)?\/blog\/[\\w\\-]*\/","value","Blog Posts"],["map","key","\/pricing(\/)?[\\w\\-]*(\/)?","value","Pricing pages"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__d",
      "vtp_elementSelector":"h1.title.is-4",
      "vtp_selectorType":"CSS"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",39],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"Search with results",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","Found 0 Result.*","value","Search without results"]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"q"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",38],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^(wp.)?piktochart.(com|info)$","value","website"],["map","key","^create.piktochart.com|[a-z]*.pik.my$","value","create"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"not_piktochart_ID",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^[a-zA-Z]*_{1}\\w*\\-(banner|header|body|footer)(\\-[0-9])?$","value","piktochart_ID"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"Any ID But Help",
      "vtp_map":["list",["map","key","zen-btn","value","NEED HELP"],["map","key","pikto-livechat-pro-chat-action(-footer)?","value","CHAT WITH US"],["map","key","pikto-sskb-list-result-[0-9]*","value","SHOW ARTICLE"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"poll.role"
    },{
      "function":"__e"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",46],
      "vtp_map":["list",["map","key","productView","value","detail"],["map","key","addToCart","value","add"],["map","key","checkout","value","checkout"],["map","key","transaction_completed","value","purchase"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":["template","ecommerce.",["macro",47],".products.0.variant"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__c",
      "vtp_value":"TransactionsIDs"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":["macro",50]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",49],8,16],";if(",["escape",["macro",51],8,16],"){var b=",["escape",["macro",51],8,16],".split(\"|\");if(-1\u003Cb.indexOf(a))return\"blockTransaction\"}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products.0.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.currencyCode"
    },{
      "function":"__u"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":["macro",12]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",56],8,16],")return\"block_signup_tracking\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"under_16"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",58],
      "vtp_defaultValue":"Undefined",
      "vtp_map":["list",["map","key","true","value","Under 16"],["map","key","false","value","Over 16"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_defaultValue":"Undefined",
      "vtp_map":["list",["map","key","user_child","value","Under 16"],["map","key","user_adult","value","Over 16"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",5],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^\/(infographic|presentation|poster|report|flyer)\/saved\/[0-9]*$","value","Visual Page"],["map","key","^\/(infographic|presentation|poster|report|flyer)\/editor\/[0-9]*$","value","Template Page"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"error"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":["template","ecommerce.",["macro",47],".products.0.name"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"with_results"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",64],
      "vtp_map":["list",["map","key","true","value","Search with results"],["map","key","false","value","Search without results"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search_term"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",46],
      "vtp_map":["list",["map","key","productView","value","Product View"],["map","key","addToCart","value","Add To Cart"],["map","key","checkout","value","Checkout"],["map","key","transaction_completed","value","Purchase"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":["template","ecommerce.",["macro",47],".products.0.category"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",68],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",63],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^\\w+","value",["template",["macro",63]," from ",["macro",68]]]]
    },{
      "function":"__d",
      "vtp_elementSelector":".active",
      "vtp_selectorType":"CSS"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",28],
      "vtp_defaultValue":"UA-42574161-2",
      "vtp_map":["list",["map","key","Staging","value","UA-42574161-2"],["map","key","Live","value","UA-42574161-1"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",71],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",17],
      "vtp_map":["list",["map","key","unsplash-image","value","unsplash"],["map","key","photo","value","Keyword"],["map","key","icon","value","icon"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",74],
      "vtp_map":["list",["map","key","click","value","By clicking"],["map","key","drag-drop","value","By dragging"],["map","key","delete","value","Delete"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",17],
      "vtp_map":["list",["map","key","unsplash-image","value","unsplash"],["map","key","photo","value","piktochart"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",17],
      "vtp_map":["list",["map","key","unsplash-image","value","image\/unsplash"],["map","key","uploads","value","uploads"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",17],
      "vtp_map":["list",["map","key","unsplash-image","value","upload-under-unsplash"],["map","key","photo","value","upload-plus-icon"]]
    },{
      "function":"__f",
      "vtp_component":"QUERY",
      "vtp_queryKey":"starter"
    },{
      "function":"__f",
      "vtp_component":"QUERY",
      "vtp_queryKey":"origin"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"starter"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"origin"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",38],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^[a-z]*.pik.my$|^localhost$","value","development"],["map","key","^[a-z]*(\\.)?piktochart.com$","value","production"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",45],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"Not Education",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^.*(teach|educat|tutor|lecture|docente|profess).*","value","Education"],["map","key","^.*(student|school|learn|study|estudiante).*","value","Education"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"can_create_folder"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"can_access_pro_templates"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_pro_template"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products.0.name"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){var a=",["escape",["macro",49],8,16],",b=",["escape",["macro",51],8,16],"?",["escape",["macro",51],8,16],".split(\"|\"):[];-1==b.indexOf(a)\u0026\u0026(b.push(a),a=new Date,a.setTime(a.getTime()+15552E6),a=\"expires\\x3d\"+a.toUTCString(),document.cookie=",["escape",["macro",50],8,16],"+\"\\x3d\"+b.join(\"|\")+\"; \"+a)}})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",5],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/formats\/infographics(\/)?$","value","Infographics"],["map","key","\/formats\/flyers(\/)?$","value","Flyers"],["map","key","\/formats\/posters(\/)?$","value","Posters"],["map","key","\/formats\/presentations(\/)?$","value","Presentations"],["map","key","\/formats\/reports(\/)?$","value","Reports"],["map","key","\/formats\/templates-for-pitch-deck(\/)?$","value","Pitch Decks"],["map","key","\/formats\/keynote-presentation-templates(\/)?$","value","Keynotes"],["map","key","\/formats\/conference-poster-templates(\/)?$","value","Conference Posters"],["map","key","\/formats\/product-presentation-templates(\/)?$","value","Product Presentations"],["map","key","\/formats\/sales-presentation-templates(\/)?$","value","Sales Presentations"],["map","key","\/formats\/sales-reports-templates(\/)?$","value","Sales Reports"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",8],
      "vtp_map":["list",["map","key","START FREE TRIAL","value","0"],["map","key","WATCH DEMO","value","0"],["map","key","GET STARTED NOW","value","0"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "setup_tags":["list",["tag",137,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","campaignSource","value",["macro",24]],["map","fieldName","campaignMedium","value",["macro",25]],["map","fieldName","campaignName","value",["macro",26]],["map","fieldName","campaignContent","value",["macro",27]],["map","fieldName","page","value",["macro",6]],["map","fieldName","customTask","value",["macro",30]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Dashboard",
      "vtp_eventLabel":"Banner",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Dashboard",
      "vtp_eventLabel":"Template",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":4
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Dashboard",
      "vtp_eventLabel":"Account Setting",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Editor",
      "vtp_eventLabel":"Upload",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Editor",
      "vtp_eventLabel":"Account Setting",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":7
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Editor",
      "vtp_eventLabel":"Download Banner",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Editor",
      "vtp_eventLabel":"Download PDF",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":10
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Editor",
      "vtp_eventLabel":"Download High Res",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":11
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Editor",
      "vtp_eventLabel":"Download Custom",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Editor",
      "vtp_eventLabel":"Download Watermark",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Editor",
      "vtp_eventLabel":"Share Private",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":["macro",35],
      "vtp_eventLabel":"Share Password Protect",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Editor",
      "vtp_eventLabel":"Export Banner",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Editor",
      "vtp_eventLabel":"Export Slideshare",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Editor",
      "vtp_eventLabel":"Color Scheme",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","referrer","value",["macro",0]],["map","fieldName","page","value",["macro",6]],["map","fieldName","customTask","value",["macro",30]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",31],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Branding",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Color",
      "vtp_eventLabel":"View",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Branding",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Color",
      "vtp_eventLabel":"Save",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Branding",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Color",
      "vtp_eventLabel":"Image Extract",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":22
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Editor",
      "vtp_eventLabel":"New Download High Res",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Editor",
      "vtp_eventLabel":"New Download PDF",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Branding Kit",
      "vtp_eventLabel":"All",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Demo",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",5],
      "vtp_trackingId":"UA-98194395-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":29
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",11],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"10",
      "vtp_eventCategory":"Blog",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Scroll Depth",
      "vtp_eventLabel":["template",["macro",10],"%"],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":31
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Editor",
      "vtp_eventLabel":"Animated Icon",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":32
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",32],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":36
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Knowledge Base",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Send Ticket",
      "vtp_eventLabel":["macro",1],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":40
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Navigation Bar",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":["template","Click on ",["macro",3]],
      "vtp_eventLabel":["macro",38],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",40],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Search on KB",
      "vtp_eventLabel":["macro",41],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Level Up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Dashboard",
      "vtp_eventLabel":"Folder Creation",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":44
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Folders",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Move to Folder",
      "vtp_eventLabel":"Gearwheel Menu",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":45
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Folders",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Move to Folder",
      "vtp_eventLabel":"Kebab Menu",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":46
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Folders",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Rename",
      "vtp_eventLabel":"Confirm",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":47
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Folders",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Remove",
      "vtp_eventLabel":"Confirm",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Folders",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Move to Folder",
      "vtp_eventLabel":"Confirm",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":49
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",8],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",9],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Knowledge Base",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Choose topics",
      "vtp_eventLabel":["macro",1],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"PRO TEAM TRIAL",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"START FREE TRIAL",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"PRO TEAM TRIAL",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"CONTINUE",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":56
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"PRO TEAM TRIAL",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"EDU REDIRECT",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":57
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"HELP ON CREATE",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",44],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":58
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","role","value",["macro",45]],["map","fieldName","rolepersession","value",["macro",45]]],
      "vtp_eventCategory":"SIGNUP POLL",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Complete",
      "vtp_eventLabel":["macro",45],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",45]],["map","index","2","dimension",["macro",45]]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":59
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",53],
      "vtp_orderId":["macro",49],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1003161902",
      "vtp_currencyCode":["macro",54],
      "vtp_conversionLabel":"NvxdCK7d84IBEK6SrN4D",
      "vtp_url":["macro",55],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":60
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "tag_id":61
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","hitCallback","value",["macro",13]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"GDPR",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"SIGNUP",
      "vtp_eventLabel":["macro",59],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":62
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"GDPR",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"SELECT AGE",
      "vtp_eventLabel":["macro",60],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","customTask","value",["macro",30]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",32],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":64
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"GDPR",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"ERROR",
      "vtp_eventLabel":["macro",62],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":65
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"GDPR",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Form Submitted",
      "vtp_eventLabel":["macro",14],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":71
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1003161902",
      "vtp_conversionLabel":"f32NCIjJ9YMBEK6SrN4D",
      "vtp_url":["macro",55],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":72
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",53],
      "vtp_orderId":["macro",49],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1003161902",
      "vtp_currencyCode":["macro",54],
      "vtp_conversionLabel":"dHxfCPiS_YMBEK6SrN4D",
      "vtp_url":["macro",55],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":73
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Template Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",16],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":76
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":["macro",65],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":["template","Search on ",["macro",18],"s"],
      "vtp_eventLabel":["macro",66],
      "vtp_enableEcommerce":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":78
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventValue":["macro",53],
      "vtp_eventCategory":"Transactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":["macro",67],
      "vtp_eventLabel":["macro",69],
      "vtp_enableEcommerce":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":79
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Team Management",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Invite Team Member",
      "vtp_eventLabel":["macro",70],
      "vtp_enableEcommerce":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",73],
      "vtp_eventLabel":["macro",66],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":91
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Select Library",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":["template","Select ",["macro",18],"s"],
      "vtp_enableEcommerce":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":92
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Add To Canvas",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":["template","Add ",["macro",18]],
      "vtp_eventLabel":["macro",75],
      "vtp_enableEcommerce":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":93
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"add tool",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",74],
      "vtp_eventLabel":["macro",17],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":94
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"select library",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":"image",
      "vtp_eventLabel":["macro",76],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":95
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Uploads",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":["template",["macro",75]," ",["macro",18]],
      "vtp_enableEcommerce":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":96
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Upload",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":"Delete",
      "vtp_eventLabel":["macro",77],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":97
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"leftpane",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":"click",
      "vtp_eventLabel":["macro",78],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":98
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",23],
      "vtp_eventCategory":"Bonusly ebook",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":["macro",79],
      "vtp_eventLabel":["macro",80],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":99
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",21],
      "vtp_eventCategory":"eBook Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":["macro",81],
      "vtp_eventLabel":["macro",82],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":100
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Payment Modal",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"To Dashboard",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":102
    },{
      "function":"__cl",
      "tag_id":103
    },{
      "function":"__cl",
      "tag_id":104
    },{
      "function":"__cl",
      "tag_id":105
    },{
      "function":"__cl",
      "tag_id":106
    },{
      "function":"__cl",
      "tag_id":107
    },{
      "function":"__cl",
      "tag_id":108
    },{
      "function":"__cl",
      "tag_id":109
    },{
      "function":"__cl",
      "tag_id":110
    },{
      "function":"__cl",
      "tag_id":111
    },{
      "function":"__cl",
      "tag_id":112
    },{
      "function":"__cl",
      "tag_id":113
    },{
      "function":"__cl",
      "tag_id":114
    },{
      "function":"__cl",
      "tag_id":115
    },{
      "function":"__cl",
      "tag_id":116
    },{
      "function":"__cl",
      "tag_id":117
    },{
      "function":"__cl",
      "tag_id":118
    },{
      "function":"__cl",
      "tag_id":119
    },{
      "function":"__cl",
      "tag_id":120
    },{
      "function":"__cl",
      "tag_id":121
    },{
      "function":"__cl",
      "tag_id":122
    },{
      "function":"__cl",
      "tag_id":123
    },{
      "function":"__cl",
      "tag_id":124
    },{
      "function":"__cl",
      "tag_id":125
    },{
      "function":"__cl",
      "tag_id":126
    },{
      "function":"__cl",
      "tag_id":127
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"10, 20, 30, 40, 50, 60, 70, 80, 90, 100",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"6675266_63",
      "tag_id":128
    },{
      "function":"__cl",
      "tag_id":129
    },{
      "function":"__hl",
      "tag_id":130
    },{
      "function":"__hl",
      "tag_id":131
    },{
      "function":"__cl",
      "tag_id":132
    },{
      "function":"__hl",
      "tag_id":133
    },{
      "function":"__cl",
      "tag_id":134
    },{
      "function":"__cl",
      "tag_id":135
    },{
      "function":"__hl",
      "tag_id":136
    },{
      "function":"__cl",
      "tag_id":137
    },{
      "function":"__cl",
      "tag_id":138
    },{
      "function":"__cl",
      "tag_id":139
    },{
      "function":"__cl",
      "tag_id":140
    },{
      "function":"__cl",
      "tag_id":141
    },{
      "function":"__cl",
      "tag_id":142
    },{
      "function":"__cl",
      "tag_id":143
    },{
      "function":"__cl",
      "tag_id":144
    },{
      "function":"__hl",
      "tag_id":145
    },{
      "function":"__cl",
      "tag_id":146
    },{
      "function":"__cl",
      "tag_id":147
    },{
      "function":"__cl",
      "tag_id":148
    },{
      "function":"__cl",
      "tag_id":149
    },{
      "function":"__cl",
      "tag_id":150
    },{
      "function":"__cl",
      "tag_id":151
    },{
      "function":"__cl",
      "tag_id":152
    },{
      "function":"__hl",
      "tag_id":153
    },{
      "function":"__fsl",
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"6675266_182",
      "tag_id":154
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"6675266_191",
      "tag_id":155
    },{
      "function":"__cl",
      "tag_id":156
    },{
      "function":"__cl",
      "tag_id":157
    },{
      "function":"__cl",
      "tag_id":158
    },{
      "function":"__cl",
      "tag_id":159
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"40, 50, 60, 70, 80, 90, 100",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"6675266_228",
      "tag_id":160
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"6675266_250",
      "tag_id":161
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){window.dataLayer.push({event:\"delayedHistoryChange\"})},500);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1376538882436128\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1376538882436128\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":66
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"function\"===typeof fbq?fbq(\"track\",\"CompleteRegistration\",{content_name:",["escape",["macro",45],8,16],"}):console.log(\"Facebook Pixel is disabled on development (CompleteRegistration).\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar variant=",["escape",["macro",48],8,16],",amount=",["escape",["macro",53],8,16],";if(\"function\"===typeof fbq)fbq(\"track\",\"Purchase\",{value:variant.startsWith(\"PRO USD 29 1 Month\")?105:amount,currency:",["escape",["macro",54],8,16],",content_type:variant});else{console.log(\"Facebook Pixel is disabled on development (Purchase).\");var x=variant.startsWith(\"PRO USD 29 1 Month\")?105:amount;console.log(x)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\"function\"===typeof fbq?fbq(\"track\",\"PageView\"):console.log(\"Facebook Pixel is disabled on development (PageView).\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\"function\"===typeof fbq?fbq(\"track\",\"Add Folder\"):console.log(\"Facebook Pixel is disabled on development (Folder).\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":83
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\"function\"===typeof fbq?fbq(\"track\",\"Preview PRO Template\"):console.log(\"Facebook Pixel is disabled on development (Folder).\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\"function\"===typeof fbq?fbq(\"track\",\"PRO Download\"):console.log(\"Facebook Pixel is disabled on development (Download).\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":85
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\"function\"===typeof fbq?fbq(\"track\",\"AddToCart\"):console.log(\"Facebook Pixel is disabled on development (AddToCart).\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"function\"===typeof fbq?fbq(\"track\",\"Lead\",{content_name:\"P4T - \"+",["escape",["macro",7],8,16],",value:0,currency:\"USD\"}):console.log(\"Facebook Pixel is disabled on development (PRO Team Clicks).\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":88
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"function\"===typeof fbq?fbq(\"trackCustom\",\"Scroll\",{depth:",["escape",["macro",10],8,16],"}):console.log(\"Facebook Pixel is disabled on development (PRO Team Scroll Depth).\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":90
    },{
      "function":"__opt",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_useDebugVersion":false,
      "vtp_optimizeContainerId":"GTM-K5R4XNN",
      "vtp_gaSettings":["macro",32],
      "vtp_trackingId":["macro",31],
      "tag_id":28
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"signup=google"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"signup=facebook"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"signup=email"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"level-up-freebar"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":".levelup"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"piktochart.com\\\/(dashboard|infographic|presentation|printable)$"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"piktochart.com\\\/pricing"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"usersetting-items"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"piktochart.com\\\/accsettings"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":".upgrade-label .label-new"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"piktochart.com\\\/(dashboard|infographic|presentation|printable)\\\/(editor|saved)"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":".editor-download-cta .label-levelup"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":".download-mode.pdf .label-levelup"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"label-levelup-highres"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"label-levelup-custom"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":".editor-download-watermark .label-levelup"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":"#private-span .label-levelup a"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":"#shared-span .label-levelup a"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":".password-protection .label-levelup a"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":".editor-share-slideshare-cta .label-levelup"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":"#slideshare-button .label-levelup"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":".color-scheme-create-btn-container .label-levelup"
    },{
      "function":"_ew",
      "arg0":["macro",21],
      "arg1":"\/branding"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"pikto-btn pikto-btn-teal pikto-btn-md branding-save"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":"#btn-upload-proxy.pikto-btn.pikto-btn-teal"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"Browse Images"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"branding"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"label-levelup-new-highres"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"label-levelup-new-pdf"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"piktochart.com\\\/branding"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"demo-homepage"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"demo-product"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"demo-pricing"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"Blog Posts"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"(^$|((^|,)6675266_63($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":".modal-animated-svg-level-up .level-up-container .level-up-text, .modal-animated-svg-level-up .level-up-container"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"support.piktochart.com"
    },{
      "function":"_sw",
      "arg0":["macro",5],
      "arg1":"\/articles\/search"
    },{
      "function":"_sw",
      "arg0":["macro",5],
      "arg1":"\/contact-us\/categories"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"kb.pik.my"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/articles\/search"
    },{
      "function":"_sw",
      "arg0":["macro",5],
      "arg1":"\/contact-us\/"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"button"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"Send"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"navbar-item"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"\/articles\/search"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"delayedHistoryChange"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"folder-levelup"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"start-move-to-folder-gearwheel"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":".dashboard-move-to-folder-popover"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":".modal-dashboard-rename-folder .modal-ok-btn"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":".modal-dashboard-remove-folder .modal-ok-btn"
    },{
      "function":"_css",
      "arg0":["macro",33],
      "arg1":".visual-selector-cont.move-to-folder .submit"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"website"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"piktochart_ID"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"create"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Pricing pages"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\/contact-us\/categories\/[0-9]*\/subcategories\/[0-9]*\/topics\/[0-9]*"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"^get_PRO(_|\\s)Team_trial_plan-body$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"marketing-favourite-button"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"pro-team-trial-npo-link"
    },{
      "function":"_eq",
      "arg0":["macro",44],
      "arg1":"Any ID But Help"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"signup_poll"
    },{
      "function":"_re",
      "arg0":["macro",48],
      "arg1":"PRO_TEAM(_NONPROFIT)? (USD|MYR) - 1 Year \\(Recurring\\) \\[TeamPlan\\] PRO_TEAM TeamTrial"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"transaction_completed"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"blockTransaction"
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"gdpr_signup"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"block_signup_tracking"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"Under 16"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"^user_(adult|child)$"
    },{
      "function":"_eq",
      "arg0":["macro",61],
      "arg1":"Visual Page"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"gdpr_error"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"(^$|((^|,)6675266_182($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",48],
      "arg1":"TeamUpdateSubscription"
    },{
      "function":"_cn",
      "arg0":["macro",48],
      "arg1":"FreeUpgrade"
    },{
      "function":"_cn",
      "arg0":["macro",63],
      "arg1":"FreeUpgrade"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"https:\/\/create.piktochart.com\\\/(infographic|presentation|printable)\\\/editor\\\/(.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"(^$|((^|,)6675266_191($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"create_search"
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"(productView|addToCart|checkout|transaction_completed)"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"invite-button"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Team Settings page"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"select_library"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"add_to_canvas"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"unsplash-image"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"uploads"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"to_uploads"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"piktochart.com\/thank-you-employer-branding-guide"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"piktochart.com\/employer-branding-guide"
    },{
      "function":"_ew",
      "arg0":["macro",15],
      "arg1":"\/dashboard?create_new=true"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"(^$|((^|,)6675266_250($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",42],
      "arg1":"create"
    },{
      "function":"_cn",
      "arg0":["macro",35],
      "arg1":"Sign Up page"
    },{
      "function":"_cn",
      "arg0":["macro",83],
      "arg1":"production"
    },{
      "function":"_eq",
      "arg0":["macro",84],
      "arg1":"Not Education"
    },{
      "function":"_eq",
      "arg0":["macro",85],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"add_folder"
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",87],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"preview_template"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"pikto-btn pikto-btn-option pro-only pikto-disabled"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"editor-download-modal in"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"Pricing pages"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"PRO Team page"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(start\\_free\\_trial.*|get_started_now.*)"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"pro_team-banner"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"(^$|((^|,)6675266_228($|,)))"
    }],
  "rules":[
    [["if",0],["add",0,44,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,119,120,121,122,123,124,125]],
    [["if",4,5],["add",1]],
    [["if",5,6,7,8],["add",2]],
    [["if",5,7,8,9],["add",3]],
    [["if",5,8,10],["add",3]],
    [["if",5,11],["add",4]],
    [["if",5,8,9,12],["add",5]],
    [["if",5,13],["add",6]],
    [["if",5,14],["add",7]],
    [["if",5,15],["add",8]],
    [["if",5,16],["add",9]],
    [["if",5,17],["add",10]],
    [["if",5,8,18],["add",11]],
    [["if",5,8,19],["add",12]],
    [["if",5,8,20],["add",12]],
    [["if",5,21],["add",13]],
    [["if",5,22],["add",14]],
    [["if",5,23],["add",15]],
    [["if",0,1],["add",16,50],["block",0]],
    [["if",0,2],["add",16,50],["block",0]],
    [["if",0,3],["add",16],["block",0,50]],
    [["if",0,24],["add",17]],
    [["if",5,25],["add",18]],
    [["if",5,26,27,28],["add",19]],
    [["if",5,29],["add",20]],
    [["if",5,30],["add",21]],
    [["if",5,8,31],["add",22]],
    [["if",5,32],["add",23]],
    [["if",5,33],["add",23]],
    [["if",5,34],["add",23]],
    [["if",35,36,37],["add",24]],
    [["if",5,38],["add",25]],
    [["if",39,42],["unless",40,41],["add",26]],
    [["if",42,43],["unless",44],["add",26]],
    [["if",5,45,46,47],["add",27]],
    [["if",5,39,48],["add",28]],
    [["if",5,43,48],["add",28]],
    [["if",43,49,50],["add",29]],
    [["if",39,49,50],["add",29]],
    [["if",5,51],["add",30]],
    [["if",5,52],["add",31]],
    [["if",5,53],["add",32]],
    [["if",5,54],["add",33]],
    [["if",5,55],["add",34]],
    [["if",5,56],["add",35]],
    [["if",5,57,58],["add",36]],
    [["if",5,58,59,60],["add",36,134]],
    [["if",42,61],["add",37]],
    [["if",5,62],["add",38],["block",134]],
    [["if",5,63],["add",39]],
    [["if",5,64],["add",40]],
    [["if",5],["unless",65],["add",41]],
    [["if",66],["add",42]],
    [["if",67,68],["add",43]],
    [["if",70,71],["add",45]],
    [["if",5,74],["add",46]],
    [["if",42,75],["add",47]],
    [["if",70,76],["add",48]],
    [["if",77,78],["add",49]],
    [["if",68],["unless",79,80,81],["add",51,129]],
    [["if",35,82,83,84],["add",52]],
    [["if",85],["add",53,56]],
    [["if",86],["unless",79,80,81],["add",54]],
    [["if",5,87,88],["add",55]],
    [["if",89],["add",57,60]],
    [["if",90],["add",58,59]],
    [["if",92],["add",61,62]],
    [["if",93],["add",63]],
    [["if",0,94],["add",64]],
    [["if",77,95],["add",65]],
    [["if",60,83,96,97],["add",66]],
    [["if",0,98,99],["add",118]],
    [["if",39,42,44],["add",126]],
    [["if",42,43,44],["add",126]],
    [["if",0,100],["add",127]],
    [["if",66,101],["add",128]],
    [["if",0,57,100],["add",130]],
    [["if",102,103],["add",131]],
    [["if",104,105,106],["add",132]],
    [["if",5,107,108],["add",133]],
    [["if",5,57,58,109],["add",134]],
    [["if",5,57,110,111],["add",135]],
    [["if",5,112],["add",135]],
    [["if",36,110,113],["add",136]],
    [["if",69,70],["block",43,51,54]],
    [["if",70,72,73],["block",45]],
    [["if",90],["unless",91],["block",59]]]
},
"runtime":[
[],[]
]
};
var f,aa=this,fa=function(){if(null===ba)a:{var a=aa.document,b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");if(c&&ea.test(c)){ba=c;break a}}ba=""}return ba},ea=/^[\w+/_-]+[=]{0,2}$/,ba=null,ha=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ia=function(a,b){function c(){}c.prototype=b.prototype;a.$g=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Jg=function(a,c,g){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-
2]=arguments[e];return b.prototype[c].apply(a,d)}};var ja=function(a,b){this.C=a;this.cf=b};ja.prototype.uf=function(){return this.C};ja.prototype.getData=function(){return this.cf};ja.prototype.getData=ja.prototype.getData;ja.prototype.getType=ja.prototype.uf;var ka=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},la=function(){this.Ca={};this.Wa=!1};la.prototype.get=function(a){return this.Ca["dust."+a]};la.prototype.set=function(a,b){!this.Wa&&(this.Ca["dust."+a]=b)};la.prototype.has=function(a){return this.Ca.hasOwnProperty("dust."+a)};var ma=function(a){var b=[],c;for(c in a.Ca)a.Ca.hasOwnProperty(c)&&b.push(c.substr(5));return b};
la.prototype.remove=function(a){!this.Wa&&delete this.Ca["dust."+a]};la.prototype.N=function(){this.Wa=!0};var n=function(a){this.Ha=new la;this.m=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ka(b)?this.m[Number(b)]=a[Number(b)]:this.Ha.set(b,a[b]))};f=n.prototype;f.toString=function(){for(var a=[],b=0;b<this.m.length;b++){var c=this.m[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};f.set=function(a,b){if("length"==a){if(!ka(b))throw Error("RangeError: Length property must be a valid integer.");this.m.length=Number(b)}else ka(a)?this.m[Number(a)]=b:this.Ha.set(a,b)};
f.get=function(a){return"length"==a?this.length():ka(a)?this.m[Number(a)]:this.Ha.get(a)};f.length=function(){return this.m.length};f.da=function(){for(var a=ma(this.Ha),b=0;b<this.m.length;b++)a.push(b+"");return new n(a)};f.remove=function(a){ka(a)?delete this.m[Number(a)]:this.Ha.remove(a)};f.pop=function(){return this.m.pop()};f.push=function(a){return this.m.push.apply(this.m,Array.prototype.slice.call(arguments))};f.shift=function(){return this.m.shift()};
f.splice=function(a,b,c){return new n(this.m.splice.apply(this.m,arguments))};f.unshift=function(a){return this.m.unshift.apply(this.m,Array.prototype.slice.call(arguments))};f.has=function(a){return ka(a)&&this.m.hasOwnProperty(a)||this.Ha.has(a)};n.prototype.unshift=n.prototype.unshift;n.prototype.splice=n.prototype.splice;n.prototype.shift=n.prototype.shift;n.prototype.push=n.prototype.push;n.prototype.pop=n.prototype.pop;n.prototype.remove=n.prototype.remove;n.prototype.getKeys=n.prototype.da;
n.prototype.get=n.prototype.get;n.prototype.set=n.prototype.set;var na=function(){function a(a,b){c[a]=b}function b(){c={};h=!1}var c={},d,e,g={},h=!1,k={add:a,gd:function(a,b,c){g[a]||(g[a]={});g[a][b]=c},create:function(g){var k={add:a,assert:function(a,b){if(!h){var k=c[a]||d;k&&k.apply(g,Array.prototype.slice.call(arguments,0));e&&e.apply(g,Array.prototype.slice.call(arguments,0))}},reset:b};k.add=k.add;k.assert=k.assert;k.reset=k.reset;return k},Ed:function(a){return g[a]?(b(),c=g[a],!0):!1},Ia:function(a){d=a},Ja:function(a){e=a},reset:b,Pd:function(a){h=
a}};k.add=k.add;k.addToCache=k.gd;k.loadFromCache=k.Ed;k.registerDefaultPermission=k.Ia;k.registerGlobalPermission=k.Ja;k.reset=k.reset;k.setPermitAllAsserts=k.Pd;return k};var oa=function(){function a(a,c){if(b[a]){if(b[a].xb+c>b[a].max)throw Error("Quota exceeded");b[a].xb+=c}}var b={},c=void 0,d=void 0,e={Wf:function(a){c=a},hd:function(){c&&a(c,1)},Xf:function(a){d=a},ca:function(b){d&&a(d,b)},rg:function(a,c){b[a]=b[a]||{xb:0};b[a].max=c},tf:function(a){return b[a]&&b[a].xb||0},reset:function(){b={}},Xe:a};e.onFnConsume=e.Wf;e.consumeFn=e.hd;e.onStorageConsume=e.Xf;e.consumeStorage=e.ca;e.setMax=e.rg;e.getConsumed=e.tf;e.reset=e.reset;e.consume=e.Xe;return e};var ra=function(a,b,c){this.O=a;this.I=b;this.ja=c;this.m=new la;this.Bb=void 0};f=ra.prototype;f.add=function(a,b){this.m.Wa||(this.O.ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.m.set(a,b))};f.set=function(a,b){this.m.Wa||(this.ja&&this.ja.has(a)?this.ja.set(a,b):(this.O.ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.m.set(a,b)))};f.get=function(a){return this.m.has(a)?this.m.get(a):this.ja?this.ja.get(a):void 0};
f.has=function(a){return!!this.m.has(a)||!(!this.ja||!this.ja.has(a))};f.L=function(){return this.O};f.S=function(a){this.Bb=a};f.N=function(){this.m.N()};ra.prototype.has=ra.prototype.has;ra.prototype.get=ra.prototype.get;ra.prototype.set=ra.prototype.set;ra.prototype.add=ra.prototype.add;var sa=function(){},ta=function(a){return"function"==typeof a},t=function(a){return"string"==typeof a},va=function(a){return"number"==typeof a&&!isNaN(a)},wa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},xa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ya=function(a,b){if(a&&wa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},za=function(a,b){if(!va(a)||
!va(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Aa=function(a){return Math.round(Number(a))||0},Ba=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(wa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},Ga=function(){this.prefix="gtm.";this.values={}};Ga.prototype.set=function(a,b){this.values[this.prefix+a]=b};
Ga.prototype.get=function(a){return this.values[this.prefix+a]};Ga.prototype.contains=function(a){return void 0!==this.get(a)};var Ha=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ia=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ja=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ka=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},La=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};var x=function(a,b){la.call(this);this.Fd=a;this.qf=b};ia(x,la);var Na=function(a,b){for(var c,d=0;d<b.length&&!(c=Ma(a,b[d]),c instanceof ja);d++);return c},Ma=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof x))throw Error("Attempting to execute non-function "+b[0]+".");return c.B.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.Bb;d&&d(e);throw e;}};x.prototype.toString=function(){return this.Fd};x.prototype.getName=function(){return this.Fd};x.prototype.getName=x.prototype.getName;
x.prototype.da=function(){return new n(ma(this))};x.prototype.getKeys=x.prototype.da;x.prototype.B=function(a,b){var c,d={H:function(){return a},evaluate:function(b){var c=a;return wa(b)?Ma(c,b):b},Ua:function(b){return Na(a,b)},L:function(){return a.L()},F:function(){c||(c=a.I.create(d));return c}};a.L().hd();return this.qf.apply(d,Array.prototype.slice.call(arguments,1))};x.prototype.invoke=x.prototype.B;
x.prototype.ka=function(a,b){try{return this.B.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};x.prototype.safeInvoke=x.prototype.ka;var Oa=function(){la.call(this)};ia(Oa,la);Oa.prototype.da=function(){return new n(ma(this))};Oa.prototype.getKeys=Oa.prototype.da;var Pa=/^([a-z]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,Qa={Fn:"function",Map:"Object",List:"Array"},Ra=function(a,b){for(var c=0;c<a.length;c++){var d=Pa.exec(a[c]);if(!d)throw Error("Internal Error");var e=d[1],g="!"===d[2],h=d[3],k=b[c],l=typeof k;if(null===k||"undefined"===l){if(g)throw Error("Required argument "+e+" not supplied.");}else if("*"!==h){var m=typeof k;k instanceof x?m="Fn":k instanceof n?m="List":k instanceof Oa&&(m="Map");if(m!=h)throw Error("Argument "+e+" does not match required type "+
(Qa[h]||h)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Sa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ta=function(a){if(null==a)return String(a);var b=Sa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ua=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Va=function(a){if(!a||"object"!=Ta(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ua(a,"constructor")&&!Ua(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ua(a,b)},y=function(a,b){var c=b||("array"==Ta(a)?[]:{}),d;for(d in a)if(Ua(a,d)){var e=a[d];"array"==Ta(e)?("array"!=Ta(c[d])&&(c[d]=[]),c[d]=y(e,c[d])):Va(e)?(Va(c[d])||(c[d]={}),c[d]=y(e,c[d])):c[d]=e}return c};var Wa=function(a){if(a instanceof n){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=Wa(a.get(d)));return b}if(a instanceof Oa){for(var e={},g=a.da(),h=g.length(),k=0;k<h;k++)e[g.get(k)]=Wa(a.get(g.get(k)));return e}return a instanceof x?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=Xa(b[c]);var d=new ra(oa(),na());return Wa(a.B.apply(a,[d].concat(b)))}:a},Xa=function(a){if(wa(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=Xa(a[c]));return new n(b)}if(Va(a)){var d=
new Oa,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,Xa(a[e]));return d}if("function"===typeof a)return new x("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=Wa(this.evaluate(c[d]));return Xa(a.apply(a,c))});var g=typeof a;if(null===a||"string"===g||"number"===g||"boolean"===g)return a};var Ya={control:function(a,b){return new ja(a,this.evaluate(b))},fn:function(a,b,c){var d=this.H(),e=this.evaluate(b);if(!(e instanceof n))throw Error("Error: non-List value given for Fn argument names.");var g=Array.prototype.slice.call(arguments,2);this.L().ca(a.length+g.length);return new x(a,function(){return function(a){var b=new ra(d.O,d.I,d);d.Bb&&b.S(d.Bb);for(var c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof ja)return c[h];for(var p=
e.get("length"),q=0;q<p;q++)q<c.length?b.set(e.get(q),c[q]):b.set(e.get(q),void 0);b.set("arguments",new n(c));var r=Na(b,g);if(r instanceof ja)return"return"===r.C?r.getData():r}}())},list:function(a){var b=this.L();b.ca(arguments.length);for(var c=new n,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.L(),c=new Oa,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",g=
this.evaluate(arguments[d+1]),h=e.length;h+="string"===typeof g?g.length:1;b.ca(h);c.set(e,g)}return c},undefined:function(){}};var Za=function(){this.O=oa();this.I=na();this.Ba=new ra(this.O,this.I)};f=Za.prototype;f.ba=function(a,b){var c=new x(a,b);c.N();this.Ba.set(a,c)};f.fd=function(a,b){Ya.hasOwnProperty(a)&&this.ba(b||a,Ya[a])};f.L=function(){return this.O};f.Fb=function(){this.O=oa();this.Ba.O=this.O};f.og=function(){this.I=na();this.Ba.I=this.I};f.S=function(a){this.Ba.S(a)};f.M=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.xc(c)};
f.xc=function(a){for(var b,c=0;c<arguments.length;c++){var d=Ma(this.Ba,arguments[c]);b=d instanceof ja||d instanceof x||d instanceof n||d instanceof Oa||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};f.N=function(){this.Ba.N()};Za.prototype.makeImmutable=Za.prototype.N;Za.prototype.run=Za.prototype.xc;Za.prototype.execute=Za.prototype.M;Za.prototype.resetPermissions=Za.prototype.og;Za.prototype.resetQuota=Za.prototype.Fb;
Za.prototype.getQuota=Za.prototype.L;Za.prototype.addNativeInstruction=Za.prototype.fd;Za.prototype.addInstruction=Za.prototype.ba;var $a=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var ab={wg:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof n)for(var g=arguments[e],h=0;h<g.length();h++)c.push(g.get(h));else c.push(arguments[e]);return new n(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.B(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.B(a,this.get(e),e,this)&&d.push(this.get(e));return new n(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.B(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var g=e;g<d;g++)if(this.has(g)&&this.get(g)===
b)return g;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var g=e;0<=g;g--)if(this.has(g)&&this.get(g)===b)return g;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.B(a,this.get(e),e,this));return new n(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,g;if(void 0!==c)e=c,g=0;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");var h;for(h=0;h<d;h++)if(this.has(h)){e=this.get(h);g=h+1;break}if(h==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=g;k<d;k++)this.has(k)&&(e=b.B(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,g;if(void 0!==c)e=c,g=d-1;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
var h;for(h=1;h<=d;h++)if(this.has(d-h)){e=this.get(d-h);g=d-(h+1);break}if(h>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=g;0<=k;k--)this.has(k)&&(e=b.B(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=$a(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?
d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],g=b;g<c;g++)e.push(this.get(g));return new n(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.B(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=$a(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.B(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var z={yd:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},bb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),cb=new ja("break"),db=new ja("continue");z.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};z.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
z.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof n))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=xa(bb,b))return Xa(a[b].apply(a,$a(c)));throw Error("TypeError: "+b+" is not a function");
}if(a instanceof n){if(a.has(b)){var d=a.get(b);if(d instanceof x){var e=$a(c);e.unshift(this.H());return d.B.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=xa(ab.wg,b)){var g=$a(c);g.unshift(this.H());return ab[b].apply(a,g)}}if(a instanceof x||a instanceof Oa){if(a.has(b)){var h=a.get(b);if(h instanceof x){var k=$a(c);k.unshift(this.H());return h.B.apply(h,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof x?a.getName():a.toString();if("hasOwnProperty"==
b)return a.has.apply(a,$a(c))}throw Error("TypeError: Object has no '"+b+"' property.");};z.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.H();if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.evaluate(b);c.set(a,d);return d};z["break"]=function(){return cb};z["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof ja)return d}};
z["continue"]=function(){return db};z.df=function(a,b,c){var d=new n;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var g=[z.yd.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.H().set(a,this.evaluate(g))};z.hf=function(a,b){return this.evaluate(a)/this.evaluate(b)};z.lf=function(a,b){return this.evaluate(a)==this.evaluate(b)};z.nf=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
z.rf=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.H();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var g=this.Ua(c);if(g instanceof ja){if("break"==g.C)break;if("return"==g.C)return g}}else if(b instanceof Oa||b instanceof n||b instanceof x)for(var h=b.da(),k=h.length(),l=0;l<k;l++){d.set(a,h.get(l));var m=this.Ua(c);if(m instanceof ja){if("break"==m.C)break;if("return"==m.C)return m}}};z.get=function(a){return this.H().get(this.evaluate(a))};
z.sd=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");a instanceof Oa||a instanceof n||a instanceof x?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ka(b)&&(c=a[b]));return c};z.vf=function(a,b){return this.evaluate(a)>this.evaluate(b)};z.wf=function(a,b){return this.evaluate(a)>=this.evaluate(b)};z.Df=function(a,b){return this.evaluate(a)===this.evaluate(b)};
z.Ef=function(a,b){return this.evaluate(a)!==this.evaluate(b)};z["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.Ua(d);if(e instanceof ja)return e};z.Mf=function(a,b){return this.evaluate(a)<this.evaluate(b)};z.Nf=function(a,b){return this.evaluate(a)<=this.evaluate(b)};z.Rf=function(a,b){return this.evaluate(a)%this.evaluate(b)};z.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};z.Sf=function(a){return-this.evaluate(a)};z.Tf=function(a){return!this.evaluate(a)};
z.Uf=function(a,b){return this.evaluate(a)!=this.evaluate(b)};z["null"]=function(){return null};z.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};z.Ld=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};z.Md=function(a){return this.evaluate(a)};z.quote=function(a){return Array.prototype.slice.apply(arguments)};z["return"]=function(a){return new ja("return",this.evaluate(a))};
z.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof x||a instanceof n||a instanceof Oa)&&a.set(b,c);return c};z.vg=function(a,b){return this.evaluate(a)-this.evaluate(b)};
z["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!wa(b)||!wa(c))throw Error("Error: Malformed switch instruction.");for(var d,e=!1,g=0;g<b.length;g++)if(e||a===this.evaluate(b[g]))if(d=this.evaluate(c[g]),d instanceof ja){var h=d.C;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof ja&&("return"==d.C||"continue"==d.C)))return d};
z.xg=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};z["typeof"]=function(a){a=this.evaluate(a);return a instanceof x?"function":typeof a};z.undefined=function(){};z["var"]=function(a){for(var b=this.H(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
z["while"]=function(a,b,c,d){var e,g=this.evaluate(d);if(this.evaluate(c)&&(e=this.Ua(g),e instanceof ja)){if("break"==e.C)return;if("return"==e.C)return e}for(;this.evaluate(a);){e=this.Ua(g);if(e instanceof ja){if("break"==e.C)break;if("return"==e.C)return e}this.evaluate(b)}};var fb=function(){this.xd=!1;this.A=new Za;eb(this);this.xd=!0};fb.prototype.Jf=function(){return this.xd};fb.prototype.isInitialized=fb.prototype.Jf;fb.prototype.M=function(a){this.A.I.Ed(String(a[0]))||(this.A.I.reset(),this.A.I.Pd(!0));return this.A.xc(a)};fb.prototype.execute=fb.prototype.M;fb.prototype.N=function(){this.A.N()};fb.prototype.makeImmutable=fb.prototype.N;
var eb=function(a){function b(a,b){e.A.fd(a,String(b))}function c(a,b){e.A.ba(String(d[a]),b)}var d=z.yd,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",z.add);c("AND",z.and);c("APPLY",z.apply);c("ASSIGN",z.assign);c("BREAK",z["break"]);c("CASE",z["case"]);c("CONTINUE",z["continue"]);c("DEFAULT",z["case"]);c("DEFN",z.df);c("DIVIDE",z.hf);c("EQUALS",z.lf);c("EXPRESSION_LIST",z.nf);c("FOR_IN",z.rf);c("GET",z.get);c("GET_INDEX",
z.sd);c("GET_PROPERTY",z.sd);c("GREATER_THAN",z.vf);c("GREATER_THAN_EQUALS",z.wf);c("IDENTITY_EQUALS",z.Df);c("IDENTITY_NOT_EQUALS",z.Ef);c("IF",z["if"]);c("LESS_THAN",z.Mf);c("LESS_THAN_EQUALS",z.Nf);c("MODULUS",z.Rf);c("MULTIPLY",z.multiply);c("NEGATE",z.Sf);c("NOT",z.Tf);c("NOT_EQUALS",z.Uf);c("NULL",z["null"]);c("OR",z.or);c("POST_DECREMENT",z.Ld);c("POST_INCREMENT",z.Ld);c("PRE_DECREMENT",z.Md);c("PRE_INCREMENT",z.Md);c("QUOTE",z.quote);c("RETURN",z["return"]);c("SET_PROPERTY",z.setProperty);
c("SUBTRACT",z.vg);c("SWITCH",z["switch"]);c("TERNARY",z.xg);c("TYPEOF",z["typeof"]);c("VAR",z["var"]);c("WHILE",z["while"])};fb.prototype.ba=function(a,b){this.A.ba(a,b)};fb.prototype.addInstruction=fb.prototype.ba;fb.prototype.L=function(){return this.A.L()};fb.prototype.getQuota=fb.prototype.L;fb.prototype.Fb=function(){this.A.Fb()};fb.prototype.resetQuota=fb.prototype.Fb;fb.prototype.Ia=function(a){this.A.I.Ia(a)};fb.prototype.Ja=function(a){this.A.I.Ja(a)};
fb.prototype.vb=function(a,b,c){this.A.I.gd(a,b,c)};fb.prototype.S=function(a){this.A.S(a)};var gb=function(){this.Cb={}};gb.prototype.get=function(a){return this.Cb.hasOwnProperty(a)?this.Cb[a]:void 0};gb.prototype.add=function(a,b){if(this.Cb.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(!b)throw"Attempting to add an undefined function: "+a+".";var c=new x(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.N();this.Cb[a]=c};
gb.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var B=window,C=document,hb=navigator,lb=C.currentScript&&C.currentScript.src,mb=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},nb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ob=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;nb(d,b);c&&(d.onerror=c);fa()&&d.setAttribute("nonce",fa());var e=C.getElementsByTagName("script")[0]||C.body||C.head;
e.parentNode.insertBefore(d,e);return d},pb=function(){if(lb){var a=lb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},qb=function(a,b){var c=C.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||C.body||C.head;d.parentNode.insertBefore(c,d);nb(c,b);void 0!==a&&(c.src=a);return c},rb=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=
function(){d.onerror=null;c&&c()};d.src=a},sb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},tb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},E=function(a){B.setTimeout(a,0)},vb=function(a){var b=C.getElementById(a);if(b&&ub(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(ub(document.all[a][c],"id")==a)return document.all[a][c];return b},ub=function(a,b){return a&&b&&a.attributes&&
a.attributes[b]?a.attributes[b].value:null},wb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},xb=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},yb=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Ab=function(a){hb.sendBeacon&&hb.sendBeacon(a)||rb(a)};var Bb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Cb=/:[0-9]+$/,Db=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")==b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Fb=function(a,b,c,d,e){var g,h=function(a){return a?a.replace(":","").toLowerCase():""},k=h(a.protocol)||h(B.location.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":g=Eb(a);break;case "protocol":g=k;break;case "host":g=(a.hostname||B.location.hostname).replace(Cb,
"").toLowerCase();if(c){var l=/^www\d*\./.exec(g);l&&l[0]&&(g=g.substr(l[0].length))}break;case "port":g=String(Number(a.hostname?a.port:B.location.port)||("http"==k?80:"https"==k?443:""));break;case "path":g="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=g.split("/");0<=xa(d||[],m[m.length-1])&&(m[m.length-1]="");g=m.join("/");break;case "query":g=a.search.replace("?","");e&&(g=Db(g,e));break;case "extension":var p=a.pathname.split(".");g=1<p.length?p[p.length-1]:"";g=g.split("/")[0];
break;case "fragment":g=a.hash.replace("#","");break;default:g=a&&a.href}return g},Eb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},H=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(Cb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Gb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Jb=function(a,b,c,d){var e=Hb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Ib(e,function(a){return a.jf},b);if(1===e.length)return e[0].id;e=Ib(e,function(a){return a.$f},c);return e[0]?e[0].id:void 0}},Mb=function(a,b,c,d,e,
g){c=c||"/";var h=d=d||"auto",k=c;if(Kb.test(document.location.hostname)||"/"===k&&Lb.test(h))return!1;g&&(b=encodeURIComponent(b));var l=b;l&&1200<l.length&&(l=l.substring(0,1200));b=l;var m=a+"="+b+"; path="+c+"; ";void 0!==e&&(m+="expires="+e.toUTCString()+"; ");if("auto"===d){var p=!1,q;a:{var r=[],u=document.location.hostname.split(".");if(4===u.length){var w=u[u.length-1];if(parseInt(w,10).toString()===w){q=["none"];break a}}for(var v=u.length-2;0<=v;v--)r.push(u.slice(v).join("."));r.push("none");
q=r}for(var D=q,G=0;G<D.length&&!p;G++)p=Mb(a,b,c,D[G],e);return p}d&&"none"!==d&&(m+="domain="+d+";");var A=document.cookie;document.cookie=m;return A!=document.cookie||0<=Gb(a).indexOf(b)};function Ib(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Hb(a,b){for(var c=[],d=Gb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),jf:1*k[0]||1,$f:1*k[1]||1}))}}return c}var Lb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Kb=/(^|\.)doubleclick\.net$/i;var Pb=function(){this.Fa=new fb;var a=new gb;a.addAll(Nb());Ob(this,function(b){return a.get(b)})},Nb=function(){return{callInWindow:Qb,callLater:Rb,copyFromWindow:Sb,createQueue:Tb,createArgumentsQueue:Ub,encodeURI:Vb,encodeURIComponent:Wb,getCookieValues:Xb,getReferrer:Yb,getUrl:Zb,getUrlFragment:$b,isPlainObject:ac,injectHiddenIframe:bc,injectScript:cc,logToConsole:ec,queryPermission:fc,removeUrlFragment:gc,replaceAll:hc,sendPixel:ic,setInWindow:jc}};Pb.prototype.M=function(a){return this.Fa.M(a)};
Pb.prototype.execute=Pb.prototype.M;var Ob=function(a,b){a.Fa.ba("require",b)};Pb.prototype.Ia=function(a){this.Fa.Ia(a)};Pb.prototype.Ja=function(a){this.Fa.Ja(a)};Pb.prototype.vb=function(a,b,c){this.Fa.vb(a,b,c)};Pb.prototype.S=function(a){this.Fa.S(a)};function Qb(a,b){Ra(["path:!string"],[a]);for(var c=a.split("."),d=B,e=d[c[0]],g=1;e&&g<c.length;g++)d=e,e=e[c[g]];if("function"==Ta(e)){for(var h=[],k=1;k<arguments.length;k++)h.push(Wa(arguments[k]));e.apply(d,h)}}
function Rb(a){Ra(["fn:!Fn"],arguments);var b=this.H();E(function(){a instanceof x&&a.ka(b)})}function Sb(a){Ra(["path:!string"],arguments);this.F().assert("access_globals","read",a);var b=a.split("."),c=B,d;for(d=0;d<b.length-1;d++)if(c=c[b[d]],void 0===c||null===c)return;return Xa(c[b[d]])}function Xb(a){Ra(["name:!string"],arguments);this.F().assert("get_cookies",a);return Gb(a)}function Yb(){return C.referrer}
function Zb(a,b,c,d){Ra(["component:?string","stripWww:?boolean","defaultPages:?List","queryKey:?string"],arguments);this.F().assert("get_url",a,d);var e=B.location.href,g;if(c){g=[];for(var h=0;h<c.length();h++){var k=c.get(h);"string"==typeof k&&g.push(k)}}return Fb(H(e),a,b,g,d)}function $b(a){Ra(["url:!string"],arguments);return Fb(H(a),"fragment")}function ac(a){return a instanceof Oa}
function bc(a,b){Ra(["url:!string","onSuccess:?Fn"],arguments);this.F().assert("inject_hidden_iframe",a);var c=this.H();qb(a,function(){b instanceof x&&b.ka(c)})}var kc={};
function cc(a,b,c,d){Ra(["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);this.F().assert("inject_script",a);var e=this.H(),g=function(){b instanceof x&&b.ka(e)},h=function(){c instanceof x&&c.ka(e)};if(d){var k=d;kc[k]?(kc[k].onSuccess.push(g),kc[k].onFailure.push(h)):(kc[k]={onSuccess:[g],onFailure:[h]},g=function(){for(var a=kc[k].onSuccess,b=0;b<a.length;b++)E(a[b]);a.push=function(a){E(a);return 0}},h=function(){for(var a=kc[k].onFailure,b=0;b<a.length;b++)E(a[b]);
kc[k]=null},ob(a,g,h))}else ob(a,g,h)}function ec(){try{this.F().assert("logging")}catch(c){return}for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=Wa(a[b]);console.log.apply(console,a)}function gc(a){return Eb(H(a))}function hc(a,b,c){Ra(["string:!string","regex:!string","replacement:!string"],arguments);return a.replace(new RegExp(b,"g"),c)}
function ic(a,b,c){Ra(["url:!string","onSuccess:?Fn","onFailure:?Fn"],arguments);this.F().assert("send_pixel",a);var d=this.H();rb(a,function(){b instanceof x&&b.ka(d)},function(){c instanceof x&&c.ka(d)})}function jc(a,b,c){Ra(["path:!string","value:?*","overrideExisting:?boolean"],arguments);this.F().assert("access_globals","readwrite",a);var d=a.split("."),e=B,g;for(g=0;g<d.length-1;g++)if(e=e[d[g]],void 0===e)return!1;return void 0===e[d[g]]||c?(e[d[g]]=Wa(b),!0):!1}
function Tb(a){Ra(["path:!string"],arguments);this.F().assert("access_globals","readwrite",a);var b=lc(a),c=a.split(".").pop(),d=b[c];void 0===d&&(d=[],b[c]=d);return Xa(function(){if(!ta(d.push))throw Error("Object at "+a+" in window is not an array.");mc(arguments);d.push.apply(d,Array.prototype.slice.call(arguments,0))})}
function Ub(a,b){Ra(["functionPath:!string","arrayPath:!string"],arguments);this.F().assert("access_globals","readwrite",a);this.F().assert("access_globals","readwrite",b);var c=lc(a),d=a.split(".").pop(),e=c[d];if(e&&!ta(e))return null;if(e){var g=e;e=function(){mc(arguments);g.apply(g,Array.prototype.slice.call(arguments,0))};return Xa(e)}var h;e=function(){if(!ta(h.push))throw Error("Object at "+b+" in window is not an array.");h.push.call(h,arguments)};c[d]=e;var k=lc(b),l=b.split(".").pop();
h=k[l];void 0===h&&(h=[],k[l]=h);return Xa(function(){mc(arguments);e.apply(e,Array.prototype.slice.call(arguments,0))})}function mc(a){for(var b=0;b<a.length;b++){var c=a[b];c&&ha(c)&&Object.defineProperty(c,"gtm",{value:{fromContainer:!0}})}}function lc(a){for(var b=a.split("."),c=B,d=0;d<b.length-1;d++)if(c=c[b[d]],void 0===c)throw Error("Path "+a+" does not exist.");return c}
function fc(a,b){Ra(["permission:!string"],[a]);try{return this.F().assert.apply(null,Array.prototype.slice.call(arguments,0)),!0}catch(c){return!1}}function Vb(a){Ra(["uri:!string"],arguments);return encodeURI(a)}function Wb(a){Ra(["uri:!string"],arguments);return encodeURIComponent(a)};
var nc=[],oc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},pc=function(a){return oc[a]},qc=/[\x00\x22\x26\x27\x3c\x3e]/g;var uc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,vc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},wc=function(a){return vc[a]};
nc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(uc,wc)+"'"}};var Ec=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Fc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Gc=function(a){return Fc[a]};nc[16]=function(a){return a};var Jc,Kc=[],Lc=[],Mc=[],Nc=[],Oc=[],Pc={},Qc,Rc,Sc,Tc=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Uc=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Pc[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Pc[c](e):Jc(c,e,b)},Wc=function(a,b,c,d){c=c||[];d=d||sa;var e={},g;for(g in a)a.hasOwnProperty(g)&&(e[g]=Vc(a[g],b,c,d));
return e},Xc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Pc[b];return c?c.b||0:0},Vc=function(a,b,c,d){if(wa(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var g=1;g<a.length;g++)e.push(Vc(a[g],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=Kc[h];if(!k||b(k))return;c[h]=!0;try{var l=Wc(k,b,c,d);e=Uc(l);Sc&&(e=Sc.Ze(e,l))}catch(G){d(h,G),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=
2)e[Vc(a[m],b,c,d)]=Vc(a[m+1],b,c,d);return e;case "template":e=[];for(var p=!1,q=1;q<a.length;q++){var r=Vc(a[q],b,c,d);Rc&&(p=p||r===Rc.pb);e.push(r)}return Rc&&p?Rc.$e(e):e.join("");case "escape":e=Vc(a[1],b,c,d);if(Rc&&wa(a[1])&&"macro"===a[1][0]&&Rc.Kf(a))return Rc.cg(e);e=String(e);for(var u=2;u<a.length;u++)nc[a[u]]&&(e=nc[a[u]](e));return e;case "tag":var w=a[1];if(!Nc[w])throw Error("Unable to resolve tag reference "+w+".");return e={nd:a[2],index:w};case "zb":var v={arg0:a[2],arg1:a[3],
ignore_case:a[5]};v["function"]=a[1];var D=Yc(v,b,c,d);a[4]&&(D=!D);return D;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Yc=function(a,b,c,d){try{return Qc(Wc(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var Zc=null,cd=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];Zc=$c(a,ad()||function(){});for(var e=0;e<Lc.length;e++){var g=Lc[e],h=bd(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],p=0;p<Nc.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},bd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Zc(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Zc(e[g]);if(null===
h)return null;if(h)return!1}return!0},$c=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Yc(Mc[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var fd={},gd=null;fd.o="GTM-TZB2X4X";fd.tb="bc0";var hd="www.googletagmanager.com/gtm.js";var id=hd,jd=null,kd=null,ld="//www.googletagmanager.com/a?id="+fd.o+"&cv=106",md={},nd={},od=function(){var a=gd.sequence||0;gd.sequence=a+1;return a};var J=function(a,b,c,d){return(2===pd()||d||"http:"!=B.location.protocol?a:b)+c},pd=function(){var a=pb(),b;if(1===a)a:{var c=id;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=C.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var qd=!1;var N=function(){var a=function(a){return{toString:function(){return a}}};return{Jc:a("convert_case_to"),Kc:a("convert_false_to"),Lc:a("convert_null_to"),Mc:a("convert_true_to"),Nc:a("convert_undefined_to"),wa:a("function"),qe:a("instance_name"),se:a("live_only"),te:a("malware_disabled"),ue:a("once_per_event"),ad:a("once_per_load"),bd:a("setup_tags"),ve:a("tag_id"),cd:a("teardown_tags")}}();var sd=new Ga,td={},wd={set:function(a,b){y(ud(a,b),td)},get:function(a){return vd(a,2)},reset:function(){sd=new Ga;td={}}},vd=function(a,b){return 2!=b?sd.get(a):xd(a)},xd=function(a,b,c){var d=a.split(".");return zd(d)},zd=function(a){for(var b=td,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Dd=function(a,b){sd.set(a,b);y(ud(a,b),td)},ud=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};var Ed=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Fd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Gd={cl:["ecl"],customPixels:["customScripts","html"],ecl:["cl"],html:["customScripts"],
customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]};
var Hd=function(a){var b=vd("gtm.whitelist");var c=b&&La(Da(b),Fd),d=vd("gtm.blacklist")||vd("tagTypeBlacklist")||[];
Ed.test(B.location&&B.location.hostname)&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&La(Da(d),Gd),g={};return function(h){var k=h&&h[N.wa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=nd[k]||[],m=a(k);if(b){var p;if(p=m)a:{if(0>xa(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>xa(c,l[q])){p=
!1;break a}}else{p=!1;break a}p=!0}m=p}var r=!1;if(d){var u;if(!(u=0<=xa(e,k)))a:{for(var w=l||[],v=new Ga,D=0;D<e.length;D++)v.set(e[D],!0);for(var G=0;G<w.length;G++)if(v.get(w[G])){u=!0;break a}u=!1}r=u}return g[k]=!m||r}};var Id={Ze:function(a,b){b[N.Jc]&&"string"===typeof a&&(a=1==b[N.Jc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(N.Lc)&&null===a&&(a=b[N.Lc]);b.hasOwnProperty(N.Nc)&&void 0===a&&(a=b[N.Nc]);b.hasOwnProperty(N.Mc)&&!0===a&&(a=b[N.Mc]);b.hasOwnProperty(N.Kc)&&!1===a&&(a=b[N.Kc]);return a}};var Jd=function(a,b,c){this.ag=a;this.Zf=b;this.Qf=c};ia(Jd,Error);Jd.prototype.getParameters=function(){return this.Zf};var Kd={active:!0,isWhitelisted:function(){return!0}},Ld=function(a){var b=gd.zones;!b&&a&&(b=gd.zones=a());return b};var Md=!1,Nd=0,Od=[];function Pd(a){if(!Md){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Md=!0;for(var e=0;e<Od.length;e++)E(Od[e])}Od.push=function(){for(var a=0;a<arguments.length;a++)E(arguments[a]);return 0}}}function Qd(){if(!Md&&140>Nd){Nd++;try{C.documentElement.doScroll("left"),Pd()}catch(a){B.setTimeout(Qd,50)}}}var Rd=function(a){Md?a():Od.push(a)};var Sd=function(){function a(a){return!va(a)||0>a?0:a}if(!gd._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=va(wd.get("gtm.start"))?wd.get("gtm.start"):0;gd._li={cst:a(c-b),cbt:a(jd-b)}}};var Td=!1,Ud=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]};var Vd=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(!B[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}Sd();return B[b]},Wd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Ud();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Xd=!1;var ce=function(a){var b=gd.consumeError;if(!b||!ta(b))return;if(a instanceof Jd){b(be("PERMISSION",{id:a.ag,parameters:a.getParameters(),message:a.Qf}));return}if(a instanceof Error){b(be("GENERIC",{message:a.message}));return}t(a)&&b(be("GENERIC",{message:a}));};function be(a,b){b.containerId=fd.o;return{type:a,value:b}};
var de=function(){return"&tc="+Nc.filter(function(a){return a}).length},me=function(){ee&&(B.clearTimeout(ee),ee=void 0);void 0===fe||ge[fe]&&!he||(ie[fe]||je.Lf()||0>=ke--?ie[fe]=!0:(je.jg(),rb(le()),ge[fe]=!0,he=""))},le=function(){var a=fe;return void 0===a?"":[ne,ge[a]?"":"&es=1",oe[a],de(),he,"&z=0"].join("")},pe=function(){return[ld,"&v=3&t=t","&pid="+za(),"&rv="+fd.tb].join("")},qe="0.005000">Math.random(),ne=pe(),re=function(){ne=pe()},ge={},he="",fe=void 0,oe={},ie={},ee=
void 0,je=function(a,b){var c=0,d=0;return{Lf:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},jg:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),ke=1E3,se=function(a,b,c){if(qe&&!ie[a]&&b){a!==fe&&(me(),fe=a);var d=c+String(b[N.wa]||"").replace(/_/g,"");he=he?he+"."+d:"&tr="+d;ee||(ee=B.setTimeout(me,500));2022<=le().length&&me()}};function te(a,b,c,d,e,g){var h=Nc[a],k=ue(a,b,c,d,e,g);if(!k)return null;var l=Vc(h[N.bd],g.ia,[],ve());if(l&&l.length){var m=l[0];k=te(m.index,b,k,1===m.nd?e:k,e,g)}return k}
function ue(a,b,c,d,e,g){function h(){if(k[N.te])d();else{var b=Wc(k,g.ia,[],l),e=!1;b.vtp_gtmOnSuccess=function(){if(!e){e=!0;se(g.id,Nc[a],"5");c()}};b.vtp_gtmOnFailure=function(){if(!e){e=!0;se(g.id,Nc[a],"6");d()}};b.vtp_gtmTagId=k.tag_id;se(g.id,k,"1");var h=function(a){if(a instanceof
we)throw a;ce(a);se(g.id,k,"7");e||(e=!0,d());throw new we(a);};try{Uc(b,h)}catch(I){try{h(I)}catch(O){}}}}var k=Nc[a];if(g.ia(k))return null;var l=ve(),m=Vc(k[N.cd],g.ia,[],l);if(m&&m.length){var p=m[0],q=te(p.index,b,c,d,e,g);if(!q)return null;c=q;d=2===p.nd?e:q}if(k[N.ad]||k[N.ue]){var r=k[N.ad]?Oc:b,u=c,w=d;if(!r[a]){h=Ia(h);var v=xe(a,r,h);c=v.X;d=v.Da}return function(){r[a](u,w)}}return h}
function xe(a,b,c){var d=[],e=[];b[a]=ye(d,e,c);return{X:function(){b[a]=ze;for(var c=0;c<d.length;c++)d[c]()},Da:function(){b[a]=Ae;for(var c=0;c<e.length;c++)e[c]()}}}function ye(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function ze(a){a()}function Ae(a,b){b()}function ve(){return function(a,b){ce(b)}}var we=function(){};ia(we,Error);function Be(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ia(function(){b++;d&&b>=c&&a()})},He:function(){d=!0;b>=c&&a()}}}function Ce(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Rd,k=b.Rd;g=h>k?1:h<k?-1:0}return g}
function De(a,b){if(!qe)return;var c=function(a){var d=b.ia(Nc[a])?"3":"4",g=Vc(Nc[a][N.bd],b.ia,[],sa);g&&g.length&&c(g[0].index);se(b.id,Nc[a],d);var h=Vc(Nc[a][N.cd],b.ia,[],sa);h&&h.length&&c(h[0].index)};c(a);}var Ee=!1;function ad(){return function(a,b){ce(b)}}var T={Nb:"event_callback",Ob:"event_timeout"};var Ge={},Ie=function(a){var b=fd.o;return function(){var c=arguments[0];if(c&&(Ge[c]||Ge.all)){var d=a.apply(void 0,Array.prototype.slice.call(arguments,0));Ge[c]&&He(b,c,Ge[c],d);Ge.all&&He(b,c,Ge.all,d)}}};
function He(a,b,c,d){for(var e=0;e<c.length;e++){var g=void 0,h="An in-page policy denied the permission request";try{g=c[e].call(void 0,a,b,d),h+="."}catch(k){h="string"===typeof k?h+(": "+k):k instanceof Error?h+(": "+k.message):h+"."}if(!g)throw new Jd(b,{},h);}};var Je=/[A-Z]+/,Ke=/\s/,Le=function(a){if(t(a)&&(a=a.trim(),!Ke.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Je.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],fa:d}}}}};var Me=null,Ne={},Oe={},Pe,Qe=function(a,b){var c={event:a};b&&(c.eventModel=y(b),b[T.Nb]&&(c.eventCallback=b[T.Nb]),b[T.Ob]&&(c.eventTimeout=b[T.Ob]));return c};
var Ue={config:function(a){},
event:function(a){var b=a[1];if(t(b)&&!(3<a.length)){var c;if(2<a.length){if(!Va(a[2]))return;c=a[2]}var d=Qe(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js",
"gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];c&&ha(c)&&c.gtm&&c.gtm.fromContainer||(Ge[b]||(Ge[b]=[]),Ge[b].push(c))}},set:function(a){var b;2==a.length&&Va(a[1])?b=y(a[1]):3==a.length&&t(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=y(b),b.event="gtag.set",b._clear=!0,b}};var $e=!1,af=[];function bf(){if(!$e){$e=!0;for(var a=0;a<af.length;a++)E(af[a])}};var cf=[],df=!1;function ef(a){var b=a.eventCallback,c=Ia(function(){ta(b)&&E(function(){b(fd.o)})}),d=a.eventTimeout;d&&B.setTimeout(c,Number(d));return c}
var ff=function(){for(var a=!1;!df&&0<cf.length;){df=!0;delete td.eventModel;var b=cf.shift();if(ta(b))try{b.call(wd)}catch(Ve){}else if(wa(b)){var c=b;if(t(c[0])){var d=c[0].split("."),e=d.pop(),g=c.slice(1),h=vd(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,g)}catch(Ve){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||Object.prototype.hasOwnProperty.call(k,"callee"))){a:{if(b.length&&t(b[0])){var l=Ue[b[0]];if(l){b=l(b);break a}}b=void 0}if(!b){df=!1;continue}}var m;
var p=void 0,q=b,r=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(r&&Dd(p,void 0),Dd(p,q[p]));var u=q.event;if(u){var w=q["gtm.uniqueEventId"];w||(w=od(),q["gtm.uniqueEventId"]=w,Dd("gtm.uniqueEventId",w));kd=u;var v;var D,G,A=q,I=A.event,O=A["gtm.uniqueEventId"],P=gd.zones;G=P?P.checkState(fd.o,O):Kd;if(G.active){var F=ef(A);c:{var V=G.isWhitelisted;if("gtm.js"==I){if(Ee){D=!1;break c}Ee=!0}var Q=O,K=I;if(qe&&!ie[Q]&&fe!==Q){me();fe=Q;he="";var Z=Q,M,
L=K;M=0===L.indexOf("gtm.")?encodeURIComponent(L):"*";oe[Z]="&e="+M+"&eid="+Q;ee||(ee=B.setTimeout(me,500))}var R=Hd(V),ca={id:O,name:I,callback:F||sa,ia:R,Za:[]};ca.Za=cd(R);for(var qa,Ca=ca,ib=Be(Ca.callback),jb=[],zb=[],kb=0;kb<Nc.length;kb++)if(Ca.Za[kb]){var We=
Nc[kb];if(We[N.se])continue;var dc=ib.add();try{var Xe=te(kb,jb,dc,dc,dc,Ca);Xe?zb.push({Rd:kb,b:Xc(We),M:Xe}):(De(kb,Ca),dc())}catch(Ve){dc()}}ib.He();zb.sort(Ce);for(var Bd=0;Bd<zb.length;Bd++)zb[Bd].M();qa=0<zb.length;if("gtm.js"===I||"gtm.sync"===I)d:{}if(qa){for(var nh={__cl:!0,
__ecl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Hc=0;Hc<ca.Za.length;Hc++)if(ca.Za[Hc]){var Ze=Nc[Hc];if(Ze&&!nh[Ze[N.wa]]){D=!0;break c}}D=!1}else D=qa}v=D?!0:!1}else v=!1;kd=null;m=v}else m=!1;a=m||a}df=!1}return!a},gf=function(){var a=ff();try{var b=B["dataLayer"].hide;if(b&&void 0!==b[fd.o]&&b.end){b[fd.o]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},hf=function(){var a=mb("dataLayer",
[]),b=mb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Od.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});af.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(cf.push.apply(cf,b);300<this.length;)this.shift();return ff()};cf.push.apply(cf,a.slice(0));E(gf)};var jf={};jf.pb=new String("undefined");
var kf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===jf.pb?b:a[d]);return c.join("")}};kf.prototype.toString=function(){return this.resolve("undefined")};kf.prototype.valueOf=kf.prototype.toString;jf.we=kf;jf.Yb={};jf.$e=function(a){return new kf(a)};var lf={};jf.kg=function(a,b){var c=od();lf[c]=[a,b];return c};jf.jd=function(a){var b=a?0:1;return function(a){var c=lf[a];if(c&&"function"===typeof c[b])c[b]();lf[a]=void 0}};jf.Kf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};jf.cg=function(a){if(a===jf.pb)return a;var b=od();jf.Yb[b]=a;return'google_tag_manager["'+fd.o+'"].macro('+b+")"};jf.Pf=function(a,b,c){a instanceof jf.we&&(a=a.resolve(jf.kg(b,c)),b=sa);return{hc:a,X:b}};var mf=new Ga;function nf(a,b){function c(a){var b=H(a),c=Fb(b,"protocol"),d=Fb(b,"host",!0),e=Fb(b,"port"),g=Fb(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,g]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function of(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<e.length;g++)if(b[e[g]]){d=b[e[g]](c);break a}}catch(w){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=xa(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var q=a.ignore_case?"i":void 0;try{var r=String(c)+q,u=mf.get(r);u||(u=new RegExp(c,q),mf.set(r,u));p=u.test(b)}catch(w){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return nf(b,c)}return!1};var pf=function(){return!1};function qf(a,b){Ra(["key:!string","dataLayerVersion:?number"],arguments);this.F().assert("read_data_layer",a);return Xa(vd(a,b||2))}function rf(){return(new Date).getTime()}function sf(a){return Aa(Wa(a))}function tf(a){return null===a?"null":void 0===a?"undefined":a.toString()}function uf(a,b){Ra(["min:!number","max:!number"],arguments);return za(a,b)}
function vf(a,b,c){Ra(["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);for(var d=new Oa,e=!1,g=0;g<a.length();g++){var h=a.get(g);h instanceof Oa&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var wf=function(){var a=new gb,b=Nb();pf()&&(b.injectScript=sa,b.injectHiddenIframe=sa);a.addAll({callLater:b.callLater,copyFromDataLayer:qf,copyFromWindow:b.copyFromWindow,createQueue:b.createQueue,createArgumentsQueue:b.createArgumentsQueue,encodeUri:b.encodeURI,encodeUriComponent:b.encodeURIComponent,generateRandom:uf,getCookieValues:b.getCookieValues,getTimestamp:rf,getUrl:b.getUrl,injectHiddenIframe:b.injectHiddenIframe,injectScript:b.injectScript,logToConsole:b.logToConsole,makeInteger:sf,makeString:tf,
makeTableMap:vf,queryPermission:b.queryPermission,sendPixel:b.sendPixel,setInWindow:b.setInWindow});return function(b){return a.get(b)}};var xf;function yf(){var a=data.runtime||[];xf=new Pb;Jc=function(a,b,c){zf(b);var d=new Oa,e;for(e in b)b.hasOwnProperty(e)&&d.set(e,Xa(b[e]));xf.S(c);var g=xf.M([a,d]);xf.S(void 0);g instanceof ja&&"return"===g.C&&(g=g.getData());return Wa(g)};Qc=of;Ob(xf,wf());for(var b=0;b<a.length;b++){var c=a[b];if(!wa(c)||3>c.length){if(0===c.length)continue;break}xf.M(c)}}
function zf(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;ta(b)&&(a.gtmOnSuccess=function(){E(b)});ta(c)&&(a.gtmOnFailure=function(){E(c)})}
function Af(a){var b={},c=function(a){throw Bf(a,{},"The requested permission is not configured.");};xf.Ia(c);xf.Ja(Ie(function(){var a=arguments[0];return a&&b[a]?b[a].apply(void 0,Array.prototype.slice.call(arguments,0)):{}}));for(var d in a)if(a.hasOwnProperty(d)){var e=a[d],g=!1,h;for(h in e)if(e.hasOwnProperty(h)){g=!0;var k=Cf(h,e[h]);xf.vb(d,h,k.assert);b[h]||(b[h]=k.U)}g||xf.vb(d,"default",c)}}
function Cf(a,b){var c=Tc(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Bf;return Uc(c)}function Bf(a,b,c){return new Jd(a,b,c)};var Df=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ef=encodeURI,U=encodeURIComponent,Ff=function(a,b){if(!a)return!1;var c=Fb(H(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Gf=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null},Hf=function(){return!1};var If=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||ub(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},Jf=function(a){gd.hasOwnProperty("autoEventsSettings")||(gd.autoEventsSettings={});var b=gd.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Kf=function(a,b,c,d){var e=Jf(a),g=Ha(e,b,d);e[b]=
c(g)},Lf=function(a,b,c){var d=Jf(a);return Ha(d,b,c)};var Nf=function(a,b){if(!Mf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);return null},Of=!1;
if(C.querySelectorAll)try{var Pf=C.querySelectorAll(":root");Pf&&1==Pf.length&&Pf[0]==C.documentElement&&(Of=!0)}catch(a){}var Mf=Of;var Qf=function(){for(var a=hb.userAgent+(C.cookie||"")+(C.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},Tf=function(a,b,c,d){var e=Rf(b);return Jb(a,e,Sf(c),d)},Uf=function(a,b,c,d){var e=""+Rf(c),g=Sf(d);1<g&&(e+="-"+g);return[b,e,a].join(".")};
function Rf(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function Sf(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Vf=["1"],Wf={},Zf=function(a,b,c){var d=Xf(a);if(!Wf[d]&&!Yf(d,b,c)){var e=Qf(),g=Uf(e,"1",b,c);Mb(d,g,c,b,new Date(Fa()+7776E6));Yf(d,b,c)}};function Yf(a,b,c){var d=Tf(a,b,c,Vf);d&&(Wf[a]=d);return d}function Xf(a){return(a||"_gcl")+"_au"};function $f(){for(var a=ag,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function bg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var ag,cg,dg=function(a){ag=ag||bg();cg=cg||$f();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,p=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(p=64));b.push(ag[l],ag[m],ag[p],ag[q])}return b.join("")},eg=function(a){function b(b){for(;d<a.length;){var c=a.charAt(d++),e=cg[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}ag=ag||bg();cg=cg||
$f();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var fg;function gg(a,b){if(!a||b===C.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var hg=function(){var a=mb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ig=/(.*?)\*(.*?)\*(.*)/,jg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,kg=/^(?:www\.|m\.|amp\.)+/,lg=/([^?#]+)(\?[^#]*)?(#.*)?/,mg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,og=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(dg(String(d))))}var e=b.join("*");return["1",ng(e),e].join("*")},ng=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=fg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}fg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^fg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},qg=function(){return function(a){var b=H(B.location.href),c=b.search.replace("?",""),d=Db(c,"_gl",!0)||"";a.query=pg(d)||{};var e=Fb(b,"fragment").match(mg);a.fragment=pg(e&&e[3]||
"")||{}}},pg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=ig.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],p=0;p<b;++p)if(m===ng(k,p)){l=!0;break a}l=!1}if(l){for(var q={},r=k?k.split("*"):[],u=0;u<r.length;u+=2)q[r[u]]=eg(r[u+1]);return q}}}}catch(w){}};
function rg(a,b,c){function d(a){var b=a,c=mg.exec(b),d=b;if(c){var e=c[2],g=c[4];d=c[1];g&&(d=d+e+g)}a=d;var h=a.charAt(a.length-1);a&&"&"!==h&&(a+="&");return a+l}c=void 0===c?!1:c;var e=lg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function sg(a,b,c){for(var d={},e={},g=hg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&gg(k.domains,b)&&(k.fragment?Ja(e,k.callback()):Ja(d,k.callback()))}if(Ka(d)){var l=og(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var p=a.childNodes||[],q=!1,r=0;r<p.length;r++){var u=p[r];if("_gl"===u.name){u.setAttribute("value",l);q=!0;break}}if(!q){var w=C.createElement("input");w.setAttribute("type","hidden");w.setAttribute("name","_gl");w.setAttribute("value",
l);a.appendChild(w)}}else if("post"===m){var v=rg(l,a.action);Bb.test(v)&&(a.action=v)}}}else tg(l,a,!1)}if(!c&&Ka(e)){var D=og(e);tg(D,a,!0)}}function tg(a,b,c){if(b.href){var d=rg(a,b.href,void 0===c?!1:c);Bb.test(d)&&(b.href=d)}}
var ug=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||sg(e,e.hostname,!1)}}catch(h){}},vg=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=Fb(H(b.action),"host");sg(b,c,!0)}}catch(d){}},wg=function(a,b,c,d){var e=hg();e.init||(sb(C,"mousedown",ug),sb(C,"keyup",ug),sb(C,"submit",vg),e.init=!0);var g={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};hg().decorators.push(g)},xg=function(){var a=C.location.hostname,b=jg.exec(C.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(kg,"")===e.replace(kg,"")},yg=function(a,b){return!1===a?!1:a||b||xg()};var zg=/^\w+$/,Ag=/^[\w-]+$/,Bg=/^~?[\w-]+$/,Cg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"},Eg=function(a){var b=Gb(a,C.cookie),c=[];if(!b||0==b.length)return c;for(var d=0;d<b.length;d++){var e=b[d].split(".");3==e.length&&"GCL"==e[0]&&e[1]&&c.push(e[2])}return Dg(c)};function Fg(a){return a&&"string"==typeof a&&a.match(zg)?a:"_gcl"}
var Gg=function(a){if(a){if("string"==typeof a){var b=Fg(a);return{dc:b,aw:b,gf:b,ha:b}}if(a&&"object"==typeof a)return{dc:Fg(a.dc),aw:Fg(a.aw),gf:Fg(a.gf),ha:Fg(a.ha)}}return{dc:"_gcl",aw:"_gcl",gf:"_gcl",ha:"_gcl"}},Ig=function(){var a=H(B.location.href),b=Fb(a,"query",!1,void 0,"gclid"),c=Fb(a,"query",!1,void 0,"gclsrc"),d=Fb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Db(e,"gclid");c=c||Db(e,"gclsrc")}return Hg(b,c,d)};
function Hg(a,b,c){var d={},e=function(a,b){d[b]||(d[b]=[]);d[b].push(a)};if(void 0!==a&&a.match(Ag))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Jg(a,b){function c(a,b){var c=Kg(a,d);c&&Mb(c,b,g,e,k,!0)}b=b||{};var d=Gg(b.prefix),e=b.domain||"auto",g=b.path||"/",h=Fa(),k=new Date(h+7776E6),l=Math.round(h/1E3),m=function(a){return["GCL",l,a].join(".")};a.aw&&(!0===b.fh?c("aw",m("~"+a.aw[0])):c("aw",m(a.aw[0])));a.dc&&c("dc",m(a.dc[0]));a.gf&&c("gf",m(a.gf[0]));a.ha&&c("ha",m(a.ha[0]))}
var Kg=function(a,b){var c=Cg[a];if(void 0!==c){var d=b[a];if(void 0!==d)return d+c}},Lg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)},Mg=function(a,b,c,d,e){if(wa(b)){var g=Gg(e);wg(function(){for(var b={},c=0;c<a.length;++c){var d=Kg(a[c],g);if(d){var e=Gb(d,C.cookie);e.length&&(b[d]=e.sort()[e.length-1])}}return b},b,c,d)}},Dg=function(a){return a.filter(function(a){return Bg.test(a)})};var Ng=/^\d+\.fls\.doubleclick\.net$/;function Og(a){var b=H(B.location.href),c=Fb(b,"host",!1);if(c&&c.match(Ng)){var d=Fb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
var Pg=function(a){var b=Og("gclaw");if(b)return b.split(".");var c=Gg(a);if("_gcl"==c.aw){var d=Ig().aw||[];if(0<d.length)return d}var e=Kg("aw",c);return e?Eg(e):[]},Qg=function(a){var b=Og("gcldc");if(b)return b.split(".");var c=Gg(a);if("_gcl"==c.dc){var d=Ig().dc||[];if(0<d.length)return d}var e=Kg("dc",c);return e?Eg(e):[]},Rg=function(a){var b=Gg(a);if("_gcl"==b.ha){var c=Ig().ha||[];if(0<c.length)return c}return Eg(b.ha+"_ha")},Sg=function(){var a=Og("gac");if(a)return decodeURIComponent(a);
for(var b=[],c=C.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var g=c[e].match(d);g&&b.push({Bc:g[1],value:g[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].Bc]||(h[b[k].Bc]=[]),h[b[k].Bc].push({timestamp:l[1],sf:l[2]}))}var m=[],p;for(p in h)if(h.hasOwnProperty(p)){for(var q=[],r=h[p],u=0;u<r.length;u++)q.push(r[u].sf);q=Dg(q);q.length&&m.push(p+":"+q.join(","))}return m.join(";")},Tg=function(a,
b,c){Zf(a,b,c);var d=Wf[Xf(a)],e=Ig().dc||[];if(d&&0<e.length){var g=gd.joined_au=gd.joined_au||{},h=a||"_gcl";if(!g[h]){for(var k=!1,l=0;l<e.length;l++){var m="https://adservice.google.com/ddm/regclk";m+="?gclid="+e[l]+"&auiddc="+d;Ab(m);k=!0}if(k){var p=Xf(a);if(Wf[p]){var q=Uf(Wf[p],"1",b,c);Mb(p,q,c,b,new Date(Fa()+7776E6))}g[h]=!0}}}};var Vg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Ug()};function Ug(){if(3===fd.tb.length)return"g";return"G"}function Wg(){return"w"}
var Xg=function(a){var b=fd.o.split("-"),c=b[0].toUpperCase(),d=Vg[c]||"i",e=a&&"GTM"===c?b[1]:"";return(3===fd.tb.length?"2"+Wg():"")+d+fd.tb+e};var dh=!!B.MutationObserver,eh=void 0,fh=function(a){if(!eh){var b=function(){var a=C.body;if(a)if(dh)(new MutationObserver(function(){for(var a=0;a<eh.length;a++)E(eh[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;sb(a,"DOMNodeInserted",function(){b||(b=!0,E(function(){b=!1;for(var a=0;a<eh.length;a++)E(eh[a])}))})}};eh=[];C.body?b():E(b)}eh.push(a)};var gh=/\./g;
var sh=function(){var a=C.body,b=C.documentElement||a&&a.parentElement,c,d;if(C.compatMode&&"BackCompat"!==C.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(a,b){return a&&b?Math.min(a,b):Math.max(a,b)};c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},th=function(a){var b=sh(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},uh=function(a){if(C.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!B.getComputedStyle)return!0;var c=B.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),g=Math.min(h,
g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=B.getComputedStyle(d,null))}return!1};var Ch=B.clearTimeout,Dh=B.setTimeout,W=function(a,b,c){if(pf()){b&&E(b)}else return ob(a,b,c)},Eh=function(){return B.location.href},Fh=function(a){return Fb(H(a),"fragment")},Gh=function(a,b){return vd(a,b||2)},Hh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return B["dataLayer"].push(a)},Ih=function(a,b){B[a]=b},X=function(a,b,c){b&&(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},Jh=function(a,
b,c){return Gb(a,b,void 0===c?!0:!!c)},Kh=function(a,b,c){var d={prefix:a,path:b,domain:c},e=Ig();Jg(e,d)},Lh=function(a,b,c,d){var e=qg(),g=hg();g.data||(g.data={query:{},fragment:{}},e(g.data));var h={},k=g.data;k&&(Ja(h,k.query),Ja(h,k.fragment));for(var l=Gg(b),m=0;m<a.length;++m){var p=a[m];if(void 0!==Cg[p]){var q=Kg(p,l),r=h[q];if(r){var u=Math.min(Lg(r),Fa()),w;b:{for(var v=u,D=Gb(q,C.cookie),G=0;G<D.length;++G)if(Lg(D[G])>v){w=!0;break b}w=!1}w||
Mb(q,r,c,d,new Date(u+7776E6),!0)}}}var A={prefix:b,path:c,domain:d};Jg(Hg(h.gclid,h.gclsrc),A);},Mh=function(a,b,c,d,e){Mg(a,b,c,d,e);},Nh=function(a,b){if(pf()){b&&E(b)}else qb(a,b)},Oh=function(a){return!!Lf(a,"init",!1)},Ph=function(a){Jf(a).init=!0},Qh=function(a,b,c){var d=(void 0===c?
0:c)?"www.googletagmanager.com/gtag/js":id;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var e in b)b[e]&&b.hasOwnProperty(e)&&(d+="&"+e+"="+encodeURIComponent(b[e]));W(J("https://","http://",d))};
var Sh=jf.Pf;var ei=function(a,b,c){this.n=a;this.t=b;this.p=c},fi=function(){this.c=1;this.e=[];this.p=null};function gi(a){var b=gd,c=b.gss=b.gss||{};return c[a]=c[a]||new fi}var hi=function(a,b){gi(a).p=b},ii=function(a,b,c){var d=Math.floor(Fa()/1E3);gi(a).e.push(new ei(b,d,c))},ji=function(a){};var si=window,ti=document,ui=function(a){var b=si._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===si["ga-disable-"+a])return!0;try{var c=si.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Gb("AMP_TOKEN",ti.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return!1};var zi=function(a){if(1===gi(a).c){gi(a).c=2;var b=encodeURIComponent(a);ob(("http:"!=B.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Ai=function(a,b){};var Y={a:{}};
Y.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(a){for(var b=[],c=a.split(","),d=0;d<c.length;d++){var e=Number(c[d]);if(isNaN(e))return[];m.test(c[d])||b.push(e)}return b}function c(){var a=0,b=0;return function(){var c=sh(),d=c.height;a=Math.max(w.scrollLeft+c.width,a);b=Math.max(w.scrollTop+d,b);return{ef:a,ff:b}}}function d(){r=X("self");
u=r.document;w=u.scrollingElement||u.body&&u.body.parentNode;D=c()}function e(a,b,c,d){var e=l(b),g={},h;for(h in e){g.threshold=h;if(e.hasOwnProperty(g.threshold)){var k=Number(g.threshold);a<k||(Hh({event:"gtm.scrollDepth","gtm.scrollThreshold":k,"gtm.scrollUnits":c.toLowerCase(),"gtm.scrollDirection":d,"gtm.triggers":e[g.threshold].join(",")}),Kf("sdl",b,function(a){return function(b){delete b[a.threshold];return b}}(g),{}))}g={threshold:g.threshold}}}function g(){var a=D(),b=a.ef,c=a.ff,d=b/w.scrollWidth*
100,g=c/w.scrollHeight*100;e(b,"horiz.pix",p.rb,q.$c);e(d,"horiz.pct",p.qb,q.$c);e(c,"vert.pix",p.rb,q.dd);e(g,"vert.pct",p.qb,q.dd);Jf("sdl").pending=!1}function h(){var b=250,c=!1;u.scrollingElement&&u.documentElement&&r.addEventListener&&(b=50,c=!0);var d=0,e=!1,h=function(){e?d=Dh(h,b):(d=0,g(),Oh("sdl")&&!a()&&(tb(r,"scroll",k),tb(r,"resize",k),Jf("sdl").init=!1));e=!1},k=function(){c&&D();d?e=!0:(d=Dh(h,b),Jf("sdl").pending=!0)};return k}function k(a,c,d){if(c){var e=b(String(a));Kf("sdl",d,
function(a){for(var b=0;b<e.length;b++){var d=String(e[b]);a.hasOwnProperty(d)||(a[d]=[]);a[d].push(c)}return a},{})}}function l(a){return Lf("sdl",a,{})}var m=/^\s*$/,p={qb:"PERCENT",rb:"PIXELS"},q={dd:"vertical",$c:"horizontal"},r,u,w,v=!1,D;(function(a){Y.__sdl=a;Y.__sdl.g="sdl";Y.__sdl.h=!0;Y.__sdl.b=0})(function(b){E(b.vtp_gtmOnSuccess);var c=b.vtp_uniqueTriggerId,e=b.vtp_horizontalThresholdsPixels,l=b.vtp_horizontalThresholdsPercent,m=b.vtp_verticalThresholdUnits,q=b.vtp_verticalThresholdsPixels,
u=b.vtp_verticalThresholdsPercent;switch(b.vtp_horizontalThresholdUnits){case p.rb:k(e,c,"horiz.pix");break;case p.qb:k(l,c,"horiz.pct")}switch(m){case p.rb:k(q,c,"vert.pix");break;case p.qb:k(u,c,"vert.pct")}Oh("sdl")?Lf("sdl","pending")||(v||(d(),v=!0),E(function(){return g()})):(d(),v=!0,w&&(Ph("sdl"),Jf("sdl").pending=!0,E(function(){g();if(a()){var b=h();sb(r,"scroll",b);sb(r,"resize",b)}else Jf("sdl").init=!1})))})}();
Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.c=["google"],function(){(function(a){Y.__c=a;Y.__c.g="c";Y.__c.h=!0;Y.__c.b=0})(function(a){return a.vtp_value})}();
Y.a.d=["google"],function(){(function(a){Y.__d=a;Y.__d.g="d";Y.__d.h=!0;Y.__d.b=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=Mf?C.querySelectorAll(a.vtp_elementSelector):null;e&&0<e.length&&(b=e[0])}else b=vb(a.vtp_elementId);b&&(c=d?ub(b,d):wb(b));return Ea(String(b&&c))})}();Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.b=0})(function(){return kd})}();
Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.b=0})(function(a){var b=Gh("gtm.referrer",1)||C.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Fb(H(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Eb(H(String(b))):String(b)})}();
Y.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=If(b);d.event="gtm.click";Hh(d)}}(function(a){Y.__cl=a;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.b=0})(function(b){if(!Oh("cl")){var c=X("document");sb(c,"click",a,!0);Ph("cl")}E(b.vtp_gtmOnSuccess)})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.b=0})(function(a){return Jh(a.vtp_name,Gh("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Y.__u=a;Y.__u.g="u";Y.__u.h=!0;Y.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Gh("gtm.url",1))||Eh();var d=b[a("vtp_component")];return d&&"URL"!=d?Fb(H(String(c)),d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0):Eb(H(String(c)))})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Gh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.ua=["google"],function(){var a,b=function(b){var c={},e={},g={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;y(Gf(l.vtp_fieldsToSet,"fieldName","value"),e);y(Gf(l.vtp_contentGroup,"index","group"),g);y(Gf(l.vtp_dimension,"index","dimension"),h);y(Gf(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=y(l);b=y(b,m)}y(Gf(b.vtp_fieldsToSet,"fieldName","value"),e);y(Gf(b.vtp_contentGroup,
"index","group"),g);y(Gf(b.vtp_dimension,"index","dimension"),h);y(Gf(b.vtp_metric,"index","metric"),k);var p=Vd(b.vtp_functionName),q="",r="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(r=b.vtp_trackerName,q=r+"."):(r="gtm"+od(),q=r+".");var u={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(a){var b=[].slice.call(arguments,0);b[0]=q+b[0];p.apply(window,b)},D=function(a,b){return void 0===b?b:a(b)},G=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&v("set",a+c,b[c])},A=function(){
var a=function(a,b,c){if(!Va(b))return!1;for(var d=Ha(Object(b),c,[]),e=0;d&&e<d.length;e++)v(a,d[e]);return!!d&&0<d.length},c;b.vtp_useEcommerceDataLayer?c=Gh("ecommerce",1):b.vtp_ecommerceMacroData&&(c=b.vtp_ecommerceMacroData.ecommerce);if(!Va(c))return;c=Object(c);var d=Ha(e,"currencyCode",c.currencyCode);void 0!==d&&v("set","&cu",d);a("ec:addImpression",c,"impressions");if(a("ec:addPromo",c[c.promoClick?"promoClick":"promoView"],"promotions")&&c.promoClick){v("ec:setAction","promo_click",c.promoClick.actionField);
return}for(var g="detail checkout checkout_option click add remove purchase refund".split(" "),h=0;h<g.length;h++){var k=c[g[h]];if(k){a("ec:addProduct",k,"products");v("ec:setAction",g[h],k.actionField);break}}},I=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&u[e]||!c&&void 0===u[e])){var g=w[e]?Ba(a[e]):a[e];"anonymizeIp"!=e||g||(g=void 0);b[e]=g;d++}return d},O={name:r};I(e,O,!0);p("create",b.vtp_trackingId||
c.trackingId,O);v("set","&gtm",Xg(!0));(function(a,c){void 0!==b[c]&&v("set",a,b[c])})("nonInteraction","vtp_nonInteraction");G("contentGroup",g);G("dimension",h);G("metric",k);var P={};I(e,P,!1)&&v("set",P);var F;b.vtp_enableLinkId&&v("require","linkid","linkid.js");v("set","hitCallback",function(){var a=e&&e.hitCallback;ta(a)&&
a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(v("require","ec","ec.js"),A());var V={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:D(String,b.vtp_eventLabel||c.label),eventValue:D(Aa,b.vtp_eventValue||c.value)};I(F,V,!1);v("send",V);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(v("require","ec","ec.js"),A());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var ua="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:ua})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType){var S=
"_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","adfeatures",{cookieName:S})}F?v("send","pageview",F):v("send","pageview");}if(!a){var pa=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(pa="internal/"+pa);a=!0;W(J("https:","http:","//www.google-analytics.com/"+pa,e&&e.forceSSL),function(){var a=Ud();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}};Y.__ua=b;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.b=0}();





Y.a.opt=["google"],function(){var a,b=function(b){var c={};if(b.vtp_gaSettings){var e=b.vtp_gaSettings;y(Gf(e.vtp_fieldsToSet,"fieldName","value"),c);b.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var g=y(e);b=y(b,g)||{}}y(Gf(b.vtp_fieldsToSet,"fieldName","value"),c);var h=Vd(b.vtp_functionName);h.r=!0;var k="",l="";b.vtp_setTrackerName&&"string"===typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(l=b.vtp_trackerName,k=l+"."):(l="gtm"+od(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,
alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},p={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},q=function(a,b,c){var d=0,e;for(e in a)if(a.hasOwnProperty(e)&&(c&&m[e]||!c&&
void 0===m[e])){var g=p[e]?Ba(a[e]):a[e];"anonymizeIp"!==e||g||(g=void 0);b[e]=g;d++}return d},r={name:l};q(c,r,!0);var u={"&gtm":Xg(!0)};q(c,u,!1);var w=encodeURI(J("https:","http:","//www.google-analytics.com/"+(b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!c.forceSSL));h("create",b.vtp_trackingId,r);h(k+"set",u);h(k+"require",b.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(b.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,W(w,function(){return Ud().loaded||b.vtp_gtmOnFailure()},
b.vtp_gtmOnFailure));var v=X("dataLayer"),D=v&&v.hide;D&&D.end&&(D[b.vtp_optimizeContainerId]=!0)};Y.__opt=b;Y.__opt.g="opt";Y.__opt.h=!0;Y.__opt.b=0}();
Y.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(a){Y.__gclidw=a;Y.__gclidw.g="gclidw";Y.__gclidw.h=!0;Y.__gclidw.b=100})(function(b){E(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=e,h=c,k=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||xg())&&Lh(a,g,h,k));Kh(e,c,d);Tg(e,d,c);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&
b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Mh(a,m,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}})}();

Y.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},g=function(a){var b=Gh(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue},h=function(a,
b){if(!a)return!1;var c=l(Eh()),d;d=wa(b.vtp_affiliatedDomains)?b.vtp_affiliatedDomains:String(b.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var e=[c],g=0;g<d.length;g++)if(d[g]instanceof RegExp){if(d[g].test(a))return!1}else{var h=d[g];if(0!=h.length){if(0<=l(a).indexOf(h))return!1;e.push(l(h))}}return!Ff(a,e)},k=/^https?:\/\//i,l=function(a){k.test(a)||(a="http://"+a);return Fb(H(a),"HOST",!0)};(function(a){Y.__aev=a;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.b=0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return Gh("gtm.element",
1).tagName||e.vtp_defaultValue;case "TEXT":var k,l=Gh("gtm.element",1),m=Gh("event",1),u=Number(new Date);a===l&&b===m&&c>u-250?k=d:(d=k=l?wb(l):"",a=l,b=m);c=u;return k||e.vtp_defaultValue;case "URL":var w;a:{var v=String(Gh("gtm.elementUrl",1)||e.vtp_defaultValue||""),D=H(v);switch(e.vtp_component||"URL"){case "URL":w=v;break a;case "IS_OUTBOUND":w=h(v,e);break a;default:w=Fb(D,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey)}}return w;case "ATTRIBUTE":var G;if(void 0===e.vtp_attribute)G=
g(e);else{var A=Gh("gtm.element",1);G=ub(A,e.vtp_attribute)||e.vtp_defaultValue||""}return G;default:return g(e)}})}();
Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.b=0})(function(a){var b=y(a),c=b;c[N.wa]=null;c[N.qe]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.a.hl=["google"],function(){function a(a){return a.target&&a.target.location&&a.target.location.href?a.target.location.href:Eh()}function b(b,c){sb(b,"hashchange",function(b){c({source:"hashchange",state:null,ma:Fh(a(b))})})}function c(b,c){sb(b,"popstate",function(b){c({source:"popstate",state:b.state,ma:Fh(a(b))})})}function d(a,b,c){var d=b.history,e=d[a];if(ta(e))try{d[a]=function(b,g,h){e.apply(d,[].slice.call(arguments,0));c({source:a,state:b,ma:Fh(Eh())})}}catch(p){}}function e(){var a={source:null,
ma:Fh(Eh()),state:X("history").state||null};return function(b){var c=a,d={};d[c.source]=!0;d[b.source]=!0;if(!d.popstate||!d.hashchange||c.ma!=b.ma){var e={event:"gtm.historyChange","gtm.historyChangeSource":b.source,"gtm.oldUrlFragment":a.ma,"gtm.newUrlFragment":b.ma,"gtm.oldHistoryState":a.state,"gtm.newHistoryState":b.state};a=b;Hh(e)}}}(function(a){Y.__hl=a;Y.__hl.g="hl";Y.__hl.h=!0;Y.__hl.b=0})(function(a){var g=X("self");if(!Oh("hl")){var k=e();b(g,k);c(g,k);d("pushState",g,k);d("replaceState",
g,k);Ph("hl")}E(a.vtp_gtmOnSuccess)})}();
Y.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=X("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(c){Sd();var d={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,
google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:Xg()},h=function(a){return function(b,e,g){var h="DATA_LAYER"==a?Gh(g):c[e];h&&(d[b]=h)}},k=h("JSON");k("google_conversion_currency","vtp_currencyCode");k("google_conversion_order_id","vtp_orderId");c.vtp_enableProductReporting&&(k=h(c.vtp_productReportingDataSource),k("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),k("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),k("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),k("google_basket_discount","vtp_discount","discount"),k("google_conversion_items","vtp_items","items"),d.google_conversion_items=d.google_conversion_items.map(function(a){return{value:a.price,quantity:a.quantity,item_id:a.id}}));c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&
(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,W("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Y.__awct=h;Y.__awct.g="awct";Y.__awct.h=!0;Y.__awct.b=0}();

Y.a.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.g="remm";Y.__remm.h=!0;Y.__remm.b=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
Y.a.fsl=[],function(){function a(){var a=X("document"),g=c(),h=HTMLFormElement.prototype.submit;sb(a,"click",function(a){var b=a.target;if(b&&(b=yb(b,["button","input"],100))&&("submit"==b.type||"image"==b.type)&&b.name&&ub(b,"value")){var c;(c=b.form?b.form.tagName?b.form:vb(b.form):yb(b,["form"],100))&&g.store(c,b)}},!1);sb(a,"submit",function(c){var e=c.target;if(!e)return c.returnValue;var k=c.defaultPrevented||!1===c.returnValue,p=!0;if(d(e,function(){if(p){var b=g.get(e),c;b&&(c=a.createElement("input"),
c.type="hidden",c.name=b.name,c.value=b.value,e.appendChild(c));h.call(e);c&&e.removeChild(c)}},k,b(e)&&!k))p=!1;else return k||(c.preventDefault&&c.preventDefault(),c.returnValue=!1),!1;return c.returnValue},!1);HTMLFormElement.prototype.submit=function(){var a=this,c=!0;d(a,function(){c&&h.call(a)},!1,b(a))&&(h.call(a),c=!1)}}function b(a){var b=a.target;return b&&"_self"!==b&&"_parent"!==b&&"_top"!==b?!1:!0}function c(){var a=[],b=function(b){return ya(a,function(a){return a.form===b})};return{store:function(c,
d){var e=b(c);e?e.button=d:a.push({form:c,button:d})},get:function(a){var c=b(a);return c?c.button:null}}}function d(a,b,c,d){var e=Lf("fsl",c?"nv.mwt":"mwt",0),g=If(a);g.event="gtm.formSubmit";var h=a.action;h&&h.tagName&&(h=a.cloneNode(!1).action);g["gtm.elementUrl"]=h;if(c){var k=Lf("fsl","nv.ids",[]).join(",");if(k)g["gtm.triggers"]=k;else return!0}else{var r=Lf("fsl","ids",[]).join(",");g["gtm.triggers"]=r}if(d&&e){if(!Hh(g,b,e))return!1}else Hh(g,function(){},e||2E3);return!0}(function(a){Y.__fsl=
a;Y.__fsl.g="fsl";Y.__fsl.h=!0;Y.__fsl.b=0})(function(b){var c=b.vtp_waitForTags,d=b.vtp_checkValidation,e=Number(b.vtp_waitForTagsTimeout);if(!e||0>=e)e=2E3;var l=b.vtp_uniqueTriggerId||"0";if(c){var m=function(a){return Math.max(e,a)};Kf("fsl","mwt",m,0);d||Kf("fsl","nv.mwt",m,0)}var p=function(a){a.push(l);return a};Kf("fsl","ids",p,[]);d||Kf("fsl","nv.ids",p,[]);Oh("fsl")||(a(),Ph("fsl"));E(b.vtp_gtmOnSuccess)})}();Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.g="smm";Y.__smm.h=!0;Y.__smm.b=0})(function(a){var b=a.vtp_input,c=Gf(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();

Y.a.html=["customScripts"],function(){function a(b,c,g,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,g,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var p=d.getAttribute("data-gtmsrc");p&&(m.src=p,nb(m,e));b.insertBefore(m,null);p||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];d.firstChild;)q.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,q,e,h)()}else b.insertBefore(d,null),e()}else g()}catch(r){E(h)}}}var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,g=Sh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.hc,k=g.X;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,xb(h),k,e)()}else Dh(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.b=0}();

Y.a.lcl=[],function(){function a(){var a=X("document"),d=0,e=function(c){var e=c.target;if(e&&3!==c.which&&(!c.timeStamp||c.timeStamp!==d)){d=c.timeStamp;e=yb(e,["a","area"],100);if(!e)return c.returnValue;var g=c.defaultPrevented||!1===c.returnValue,l=Lf("lcl",g?"nv.mwt":"mwt",0),m=If(e);m.event="gtm.linkClick";if(g){var p=Lf("lcl","nv.ids",[]).join(",");if(p)m["gtm.triggers"]=p;else return}else{var q=Lf("lcl","ids",[]).join(",");m["gtm.triggers"]=q}if(b(c,e,a)&&!g&&l&&e.href){var r=X((e.target||
"_self").substring(1)),u=!0;if(Hh(m,function(){u&&r&&(r.location.href=e.href)},l))u=!1;else return c.preventDefault&&c.preventDefault(),c.returnValue=!1}else Hh(m,function(){},l||2E3);return!0}};sb(a,"click",e,!1);sb(a,"auxclick",e,!1)}function b(a,b,e){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=b.href.indexOf("#"),d=b.target;if(d&&"_self"!==d&&"_parent"!==d&&"_top"!==d||0===c)return!1;if(0<c){var k=Eb(H(b.href)),l=Eb(H(e.location));return k!==l}return!0}(function(a){Y.__lcl=
a;Y.__lcl.g="lcl";Y.__lcl.h=!0;Y.__lcl.b=0})(function(b){var c=void 0===b.vtp_waitForTags?!0:b.vtp_waitForTags,e=void 0===b.vtp_checkValidation?!0:b.vtp_checkValidation,g=Number(b.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=b.vtp_uniqueTriggerId||"0";if(c){var k=function(a){return Math.max(g,a)};Kf("lcl","mwt",k,0);e||Kf("lcl","nv.mwt",k,0)}var l=function(a){a.push(h);return a};Kf("lcl","ids",l,[]);e||Kf("lcl","nv.ids",l,[]);Oh("lcl")||(a(),Ph("lcl"));E(b.vtp_gtmOnSuccess)})}();


var Bi={};Bi.macro=function(a){if(jf.Yb.hasOwnProperty(a))return jf.Yb[a]},Bi.onHtmlSuccess=jf.jd(!0),Bi.onHtmlFailure=jf.jd(!1);Bi.dataLayer=wd;Bi.callback=function(a){md.hasOwnProperty(a)&&ta(md[a])&&md[a]();delete md[a]};Bi.Me=function(){gd[fd.o]=Bi;nd=Y.a;Rc=Rc||jf;Sc=Id};
Bi.Gf=function(){gd=B.google_tag_manager=B.google_tag_manager||{};if(gd[fd.o]){var a=gd.zones;a&&a.unregisterChild(fd.o)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Kc.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Nc.push(e[g]);for(var h=b.predicates||[],k=0;k<h.length;k++)Mc.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],q={},r=0;r<p.length;r++)q[p[r][0]]=Array.prototype.slice.call(p[r],1);Lc.push(q)}Pc=Y;var u=data.permissions||{};yf();Af(u);Bi.Me();
hf();Md=!1;Nd=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)Pd();else{sb(C,"DOMContentLoaded",Pd);sb(C,"readystatechange",Pd);if(C.createEventObject&&C.documentElement.doScroll){var w=!0;try{w=!B.frameElement}catch(D){}w&&Qd()}sb(B,"load",Pd)}$e=!1;"complete"===C.readyState?bf():sb(B,"load",bf);
a:{if(!qe)break a;B.setInterval(re,864E5);}jd=(new Date).getTime()}};Bi.Gf();

})()
