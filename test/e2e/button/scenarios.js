(function() {
  'use strict';

  var path = '/test/e2e/button/index.html',
    EC = protractor.ExpectedConditions;

  describe('ons-button', function() {

    it('should have an element', function() {
      browser.get(path);
      browser.waitForAngular();

      var button = element(by.css('ons-button'));

      // Waits 1000ms for the ons-button loading
      browser.wait(EC.presenceOf(button), 1000);

      expect(button.isPresent()).toBeTruthy();
    });

    it('should have ng-click attribute', function() {
      var button = element(by.css('ons-button'));

      expect(button.getAttribute('ng-click').isPresent()).toBeTruthy();
    });

    it('should display a text when clicking the button', function() {
      var button = element(by.css('ons-button')),
        input = element(by.css('input'));

      button.click();
      expect(input.getAttribute('value')).toEqual('true');
    });
  });
})();