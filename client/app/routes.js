'use strict';

angular.module('projectsApp').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/main/dashboard');

    // Application routes
    $stateProvider
      .state('main', {
        abstract: true,
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('main.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .state('main.tables', {
        url: '/tables',
        templateUrl: 'app/tables/tables.html',
        controller: 'TablesCtrl'
      });

  }
]);
