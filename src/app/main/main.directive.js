(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name app.main.directive:main
   * @restrict EA
   * @element
   * <main></main>
   * @description
   * Main entry point for app
   */
  angular
    .module('app.main')
    .directive('main', mainConfig);

  /** @ngInject */
  function mainConfig($timeout) {
    var directive = {
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/main/main.tpl.html',
      replace: false,
      controller: CtrlFunct,
      controllerAs: 'vm'
    };

    return directive;

    function CtrlFunct() {
      var vm = this;
      vm.classAnimation = '';

      activate();

      function activate() {
        $timeout(function() {
          vm.classAnimation = 'rubberBand';
        }, 4000);
      }
    }
  }
}());
