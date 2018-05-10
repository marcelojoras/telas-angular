angular.module("produtosAngeloni").factory("produtosAPI", function($http){

	var _setProdutos = function(data){
		return $http.post("url", data, {
			withCredentials: true,
           	headers: {
             	'Content-Type': 'application/json',
             	'Access-Control-Allow-Origin': '*'
            },
            transformRequest: angular.identity
		});
	};

	return {
		setProdutos: _setProdutos
	};

});