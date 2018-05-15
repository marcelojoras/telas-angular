angular.module("produtosAngeloni")
.controller("produtosAngeloniController", function($scope,  $filter, produtosAPI){

	$scope.produtos = [];

	$scope.adicionarProduto = function(produto){
		var linhas = $("table tbody tr");
		var numeroLinhas = linhas.length;

		produto.pedido = numeroLinhas + 1;
		produto.data = new Date();
		$scope.produtos.push(angular.copy(produto)); //adicionando os dados do produto em um array
		delete $scope.cadProduto; //resetando os campos

		/*produtosAPI.setProdutos($scope.produtos).then(function(promisse){

		});*/
	};
});
