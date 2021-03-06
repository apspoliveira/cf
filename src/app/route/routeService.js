angular.module('app.routes').factory('routeService', ['$http', function($http) {
            var routeServiceFactory = {};

            var globalRouteConfig;

	    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
            //var API_Endpoint = 'https://api.run.pivotal.io';                                    
            var accessToken = localStorage.getItem('accessToken');
	    
	    var _getRoute = function(routeId) {
		// params                                                                      
		var url = API_Endpoint+'/v2/routes/'+routeId;
                var params = {
		    
                };

                // http headers                                                      
                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                var config = {
                    headers: headers,
                    params: params,
                };

                return $http.get(url, config);
	    }

            var _getRoutes = function(spaceId) {
		
                // params                                                                         
                var url = API_Endpoint+'/v2/routes';
                var params = {
                    'space_guid': spaceId
                };

                // http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                var config = {
                    headers: headers,
                    params: params,
                };

                return $http.get(url, config);
            };

            var _getRoutesForTheSpace = function(spaceId) {

                // params                                                                         
                var url = API_Endpoint+'/v2/spaces/' + spaceId + '/routes';

                // http headers                                                                                                                          
                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                var config = {
                    headers: headers
                };

                return $http.get(url, config);
            };

	    var _getRoutesForApp = function(id, ignoreLoadingBar) {
                if (typeof(ignoreLoadingBar) === 'undefined') ignoreLoadingBar = false;

                // params                                                                         
                var url = API_Endpoint+'/v2/apps/' + id + '/routes';
                var params = {
                    'guid' : id
                };

                // http headers                                                                                                                                                                  
                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                var config = {
                    headers: headers,
                    params: params,
                    ignoreLoadingBar: ignoreLoadingBar
                };

                return $http.get(url, config);
            };

	    var _getAppsForRoute = function(id) {
                if (typeof(ignoreLoadingBar) === 'undefined') ignoreLoadingBar = fals

                var url = API_Endpoint+'/v2/routes/' + id + '/apps';

                // http headers                                                                                                                          
                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                var config = {
                    headers: headers,
                    ignoreLoadingBar: ignoreLoadingBar
                };

                return $http.get(url, config);
            };

	    routeServiceFactory.getRoutes = _getRoutes;
            routeServiceFactory.getRoutesForTheSpace = _getRoutesForTheSpace;
            routeServiceFactory.getRoutesForApp = _getRoutesForApp;
            routeServiceFactory.getAppsForRoute = _getAppsForRoute;

	    return routeServiceFactory;
	}]);
	    