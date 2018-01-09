let {url, sleep, user, password} = browser.params;

describe('chat', function() {
  it('should load page', () => {
    browser.waitForAngularEnabled(false);
    browser.get(url);
    browser.sleep(sleep)
    expect(browser.getCurrentUrl()).toEqual(`${url}`)
    expect(browser.getTitle()).toEqual('Socket.IO chat')
  });
  it('should take chat input 1', function () {
      element(by.id('m')).sendKeys('message 1');
      browser.sleep(sleep/2)
      element(by.css('button')).click();
      expect(element.all(by.css('li')).count()).toEqual(1)
  });
  it('should take chat input 2', function () {
      element(by.id('m')).sendKeys('message 2');
      browser.sleep(sleep/2)
      element(by.css('button')).click();
      expect(element.all(by.css('li')).count()).toEqual(2)
  });
});
