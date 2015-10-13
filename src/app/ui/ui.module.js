(function () {
  'use strict';

  /* @ngdoc object
   * @name app.ui
   * @description
   * Container module for common ui components
   */
  angular
    .module('app.ui', [
      'app.core',

      'ui.navbar'
    ]);
}());