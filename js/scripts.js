var MainModule = angular.module('main', [])

MainModule.directive('levels', function() {
	return {
		link: function(scope, element, attrs) {
			element.append("<div class=\"next_level\"></div>");
			$(".new_level").on("click", function() {
				$("body").append("<div class=\"black\"></div>\
					<div class=\"wincontent2\" id=\"winform\">\
						<div class=\"winheader\">\
							<h2>Разблокировка</h2>\
						</div>\
						<form id=\"form_unban\" method=\"POST\" ng-controller=\"popup\">\
							<input type=\"text\" name=\"login\" placeholder=\"Ответственный\">\
							<label>Время на выполнение</label>\
							<input type=\"text\" ng-model=\"hours\" placeholder=\"чч\" required>\
							{{hours}}\
							<input type=\"text\" ng-model=\"minutes\" placeholder=\"мм\" required>\
							<input type=\"submit\" value=\"Новый этап\">\
						</form>\
					</div>");

				$(".black").on("click", function() {
					$(this).remove();
					$(".wincontent2").remove();
				});
			});
		}
	}
});

MainModule.controller('popup', function ($scope){
	// if($scope.hours < 1 || $scope.hours > 99) {
	// 	$("body").append("<div>Введите количество часов от 1 до 99</div>");
	// }
	$scope.hours = 14;
});