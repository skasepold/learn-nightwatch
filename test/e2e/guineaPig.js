const config = require('../../nightwatch.conf.js');

module.exports = { 
  '@tags': ['guineaPig'],
  'Ducktest': function (browser) {
    browser
      .url('http://duckduckgo.com')
      .waitForElementVisible('body')
      .pause(2000)
      .setValue('input[id=search_form_input_homepage]', 'cat')
      .saveScreenshot(`${config.imgpath(browser)}duckduck1.png`)
      .pause(1000)
      .click('#search_button_homepage')
      .pause(1000)
      .assert.title('cat at DuckDuckGo')
      .assert.containsText('body','cat')
      .saveScreenshot(`${config.imgpath(browser)}duckduck2.png`)
      .click('.zcm__link.js-zci-link.js-zci-link--images')
      .pause(1000)
      .click('.tile--img__img.js-lazyload')
      .saveScreenshot(`${config.imgpath(browser)}duckduck3.png`)
      .pause(2000)
      .end();
  },
};

    //.assert.title('Google')
      //.saveScreenshot(`${config.imgpath(browser)}google1.png`)
      //.assert.title('cat')
            //.click('input[name=btnK]'
                  //.saveScreenshot(`${config.imgpath(browser)}google.png`)