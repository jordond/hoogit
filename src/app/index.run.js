(function() {
  'use strict';

  angular
    .module('hoogit')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
