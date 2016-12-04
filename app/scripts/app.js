'use strict';

/**
 * @ngdoc overview
 * @name angularmaterialtutorialApp
 * @description
 * # angularmaterialtutorialApp
 *
 * Main module of the application.
 */
angular
    .module('angularmaterialtutorialApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial',
        'users'
    ])
    .config(function($routeProvider, $mdIconProvider, $mdThemingProvider) {
        // Register the user `avatar` icons 
        $mdThemingProvider.theme('default').primaryPalette('brown').accentPalette('red');
        $mdIconProvider.defaultIconSet("./assets/svg/avatars.svg", 128);
        $mdIconProvider.icon("share", "./assets/svg/share.svg", 24);
        $mdIconProvider.icon("menu", "./assets/svg/menu.svg", 24);
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });

    });
