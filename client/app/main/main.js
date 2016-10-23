'use strict';

angular.module('projectsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: 'app/dashboard/dashboard.html'
      })
      .state('tables', {
        url: '/tables',
        templateUrl: 'app/tables/tables.html'
      });
  });
