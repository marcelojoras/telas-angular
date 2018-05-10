angular.module("produtosAngeloni").directive("priceFormat", function(){
	return {
		require: "ngModel",
		link: function(scope, element, attrs, ctrl){
			var _formatPrice = function(price){
				price = price.replace(/[^0-9]+/g, "");
				
				if(price.length >= 3){
					price = price.substring(0, price.length - 2) + "." + price.substring(price.length - 2);
				}
				return price;
			};

			element.bind("keyup", function(){
				ctrl.$setViewValue(_formatPrice(ctrl.$viewValue));
				ctrl.$render();
			});
		}
	};
});