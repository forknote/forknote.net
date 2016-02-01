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

createCoinApp.filter('unique', function () {
  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };
});