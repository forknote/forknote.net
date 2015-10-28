var createCoinApp = angular.module("create-coin", ["ngRoute", "googlechart", 'ui.bootstrap.showErrors']).config(['$routeProvider',
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

createCoinApp.config(['$httpProvider', function ($httpProvider) {    
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
}]);
createCoinApp.
filter('nlToArray', function() {
  return function(text) {
    if (typeof text !== 'undefined') {
      return text.split('\n');
    }
    return '';
  };
});