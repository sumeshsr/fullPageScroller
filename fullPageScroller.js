/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @sumeshsr
 * Licensed under the MIT license
 */


// Object.create support test, and fallback for browsers without it
if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    function F() { }
    F.prototype = o;
    return new F();
  };
}


(function ($, window) {

  $.fn.fullPageScroller = function (options) {

    let defaultOptions = {
      debug: false, // Flag to enable/disable logging.
      childSelector: 'div', // The child elements of the warpper
      excludedChild: 'fullpage-scroller-exclude', // The class selector of the child that need to be excluded from the process.
      oneScrollView: true,
      keyboardScrolling: true,
    };

    // Override defaults with user preferences.
    let settings = $.extend(defaultOptions, options);

    let helper = new fullPageScrollerHelper(settings, this);

    return helper.initSections();
  };

  class fullPageScrollerHelper {

    // Store the settings for fullPageScroller.
    settings;

    element;

    elemjQObj;

    constructor(settings, element) {
      this.settings = settings;
      this.element = element;
      this.elemjQObj = $(element);
    }

    initSections() {

      let excludedChild = this.settings.excludedChild;

      let _this = this;

      _this.elemjQObj.children(_this.settings.childSelector).each(function () {

        var child = $(this);
        // Skip the excluded item from processing.
        if (child.hasClass(excludedChild)) return;

        _this.processChild(child);

      });

      _this.initSectionView();

      var lastScrollTop = 0;

      $(window).on('scroll', function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
          _this.manageScroll('down');
        } else {
          _this.manageScroll('up');
        }
        lastScrollTop = st;
      });

      return this.element;
    }

    processChild(child) {
      child.css({
        width: window.screen.availWidth,
        height: window.screen.availHeight
      });
    }

    initSectionView() {

    }

    manageScroll(direction) {
      switch (direction) {
        case 'down':
          break;
        case 'up':
          break;
        default:
          break;
      }
    }

  }

}(jQuery, window));