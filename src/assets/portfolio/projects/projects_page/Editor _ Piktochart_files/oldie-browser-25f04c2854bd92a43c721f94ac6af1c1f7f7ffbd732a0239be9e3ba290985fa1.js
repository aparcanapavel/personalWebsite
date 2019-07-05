/* eslint no-var: 0 */

(function () {
  // This code was meant to be as explicit as possible to prevent accidental use of
  // functions & code that was not yet supported on very old browser
  var browser_info = getBrowserInfo()
  var browser_requirements = [
    { name: 'msie', min_version: 11 },
    { name: 'firefox', min_version: 3.6 },
    { name: 'safari', min_version: 9 },
    { name: 'edge', min_version: 15 }
  ]
  console.log( 'Current Browser is '+browser_info.name+' Version '+browser_info.version ); // eslint-disable-line

  for (var i = 0; i < browser_requirements.length; i++) {
    if (browser_requirements[i].name.toLowerCase() === browser_info.name.toLowerCase() &&
    parseFloat(browser_info.version) < browser_requirements[i].min_version) {
      window.location = 'https://' + window.location.hostname + '/505.html'
      break
    }
  }

  function getBrowserInfo () {
    var user_agent = navigator.userAgent
    var temp
    var result = user_agent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []

    if (/trident/i.test(result[1])) {
      temp = /\brv[ :]+(\d+)/g.exec(user_agent) || []
      return { name: 'MSIE', version: temp[1] || '' }
    }
    if (result[1] === 'Chrome') {
      // sample user agent for this case for better understanding
      // Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.73 Safari/537.36 OPR/34.0.2036.42
      temp = user_agent.match(/\b(OPR|Edge)\/(\d+)/)
      if (temp != null) {
        return { name: temp[1], version: temp[2] || '' }
      }
    }
    result = result[2] ? [ result[1], result[2] ] : [ navigator.appName, navigator.appVersion ]
    if ((temp = user_agent.match(/version\/(\d+)/i)) != null) {
      result.splice(1, 1, temp[1])
    }

    return { name: result[0], version: result[1] }
  }
})()
;
