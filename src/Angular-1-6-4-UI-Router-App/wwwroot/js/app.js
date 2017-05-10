﻿var app = angular.module('moveinScheduler', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');

        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'index.html',
                controller: 'loginController'
            })
            .state('login', {
                url: '/login/:name',
                templateUrl: 'views/login.html',
                controller: 'loginController'
            });


        $urlRouterProvider.otherwise('/');

    });