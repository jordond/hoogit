(function() {
  'use strict';

  angular
    .module('ui.navbar')
    .directive('navbar', navbarConfig);

  /** @ngInject */
  function navbarConfig() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/ui/navbar/navbar.tpl.html',
      scope: {},
      controller: CtrlFnct,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CtrlFnct() {
      var vm = this;
      vm.name = 'navbar';
    }
  }

})();
