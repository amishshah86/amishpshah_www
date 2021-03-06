$ = require('jquery');
var angular = require('angular');

require('angular-ui-router');
require('./components/gallery');
require('./components/gallery/gallery-controller');

angular.module('portfolio', [
        'ui.router',
        'portfolio.gallery',
        'slick'
    ])

    .controller('MainController', [
        '$rootScope',
        '$scope',
        '$state',
        '$document',

        function ($rootScope, $scope, $state, $document) {
            // INIT //

            var initLayout = function () {
                $scope.getWidth = function() {
                    return $(window).width();
                };
                $scope.getHeight = function() {
                    return $(window).height();
                };

                window.onresize = function(){
                    $rootScope.$apply();
                };
            };

            var init = function () {
                initLayout();
                $state.go('home');
            };

            init();

            // WATCHERS //

            $scope.$watch($scope.getWidth, function(newValue, oldValue) {
                $scope.window_width = newValue;
            });
            $scope.$watch($scope.getHeight, function(newValue, oldValue) {
                $scope.window_height = newValue;
            });
        }
    ])

    .config([
        '$stateProvider',
        '$urlRouterProvider',

        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state(
                    'home',
                    {
                        url         : '/',
                        controller  : 'MainController',
                        templateUrl : 'templates/home.html'
                    }
                )
                .state(
                    'gallery',
                    {
                        url         : '^/gallery',
                        controller  : 'GalleryController',
                        templateUrl : 'templates/gallery.html'
                    }
                )
                ;

            $urlRouterProvider.when('','/');
        }
    ])
;
