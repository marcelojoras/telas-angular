angular.module("produtosAngeloni")
.controller("produtosAngeloniController", function($scope, produtosAPI){

	$scope.produtos = [];

	$scope.adicionarProduto = function(produto){
		produto.data = new Date();
		$scope.produtos.push(angular.copy(produto)); //adicionando os dados do produto em um array
		delete $scope.cadProduto; //resetando os campos
		console.log($scope.produtos);
	};

});