angular.module("create-coin", ["ngRoute", "googlechart", 'ui.bootstrap.showErrors']).config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/partials/create.html',
                controller: 'CreateCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]).value('googleChartApiConfig', {
            version: '1',
            optionalSettings: {
                packages: ['corechart', 'gauge'],
                language: 'en'
            }
    });
angular.module('create-coin').
filter('nlToArray', function() {
  return function(text) {
    if (typeof text !== 'undefined') {
      return text.split('\n');
    }
    return '';
  };
});