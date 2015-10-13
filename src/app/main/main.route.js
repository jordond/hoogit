(function() {
  'use strict';

  angular
    .module('app.main')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        template: '<main></main>',
      });

    $urlRouterProvider.otherwise('/');
  }

})();
