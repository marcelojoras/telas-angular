angular.module("produtosAngeloni")
.controller("produtosAngeloniController", function($scope,  $filter, produtosAPI){

	$scope.produtos = [];
	
	$scope.adicionarProduto = function(produto){
		var numeroLinhas = angular.element(document.querySelectorAll("table tbody tr")).length;
	
		produto.pedido = numeroLinhas + 1;
		produto.data = new Date();
		$scope.produtos.push(angular.copy(produto)); //adicionando os dados do produto em um array
		delete $scope.cadProduto; //resetando os campos
		delete $scope.mensagem; //resetando texto da mensagem
		angular.element(document.querySelector(".mensagem")).removeClass("mensagem");
		
		/*produtosAPI.setProdutos($scope.produtos).then(function(promisse){

		});*/
	};

	/* Mensagem caso não possua pedido */
	var qtdLinhas = angular.element(document.querySelector("table tbody tr")).length;

	if(qtdLinhas < 1){
		$scope.mensagem ="Nenhum Pedido Cadastrado.";
	}

});
