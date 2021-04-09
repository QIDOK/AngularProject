var MainModule = angular.module('main', [])

MainModule.directive('levels', function() {
	return {
		link: function(scope, element, attrs) {
			element.append("<div class=\"next_level\"></div>");
			$(".new_level").on("click", function() {
				$("body").append("\
					<div class=\"black\"></div>\
					<div class=\"wincontent2\">\
						<div class=\"winheader\">\
							<h2>Новый этап</h2>\
						</div>\
						<form id=\"new_level_form\">\
							<input type=\"text\" name=\"name\" placeholder=\"Ответственный\">\
							<label id=\"time\">Время на выполнение:</label><br>\
							<input type=\"timer\" name=\"hours\" placeholder=\"чч\" minlength=\"2\" maxlength=\"2\" >\
							<label>:</label>\
							<input type=\"timer\" name=\"minutes\" placeholder=\"мм\"minlength=\"2\" maxlength=\"2\" >\
							<input type=\"submit\" value=\"Готово\">\
						</form>\
					</div>\
				");

				$(".black").on("click", function() {
					$(this).remove();
					$(".wincontent2").remove();
				});

				$("#new_level_form").submit(function() {
					var name = this.name.value;
					var hours = this.hours.value;
					var minutes = this.minutes.value;

					$(this.name).css({"border":"2px solid"});
					$(this.hours).css({"border":"2px solid"});
					$(this.minutes).css({"border":"2px solid"});

					$("#time").css({"color":"black", "font-size":"26px"})
					$("#time").html("Время на выполнение:")

					if(!name) {

						$(this.name).css({"border":"2px solid red"});
						$(this.name).attr("placeholder","Введите имя ответственного!");

					} else if(!hours || !minutes) {

						$(this.hours).css({"border":"2px solid red"});
						$(this.minutes).css({"border":"2px solid red"});

					} else if(hours[0] == '0' && hours[1] == '0' && minutes[0] == '0' && minutes[1] == '0') {

						$(this.hours).css({"border":"2px solid red"});
						$(this.minutes).css({"border":"2px solid red"});

						$("#time").css({"color":"red", "font-size":"22px"})
						$("#time").html("Время на выполнение:<br>Хотя бы одно число должно быть положительным!")

					} else if(Number(minutes) > 59 ) {

						$(this.minutes).css({"border":"2px solid red"});

						$("#time").css({"color":"red", "font-size":"21px"})
						$("#time").html("Время на выполнение:<br>Максимальное значение для минут: 59!")

					} else {

						$(".black").remove();
						$(".wincontent2").remove();
						// level = level+1;
						element.append("\
							<div class=\"level\">\
								<svg>\
									<circle cx=\"50%\" cy=\"50%\" r=\"20\" fill=\"#cccccc\" />\
								</svg>\
							</div>\
						");
						element.append("<div class=\"next_level\"></div>");

					}

					return false;
				});
			});
		}
	}
});

// MainModule.controller('popup', function ($scope){
// 	$scope.hours = 12;
// 	if(typeof($scope.hours) == 'number') {
// 		$("body").append('<div>Удалось!</div>');
// 	}
// 	if(Number($scope.hours) > 99) {
// 		$("body").append("<div>Удалось!</div>")
// 	}
// });

// MainModule.directive('popup', function () {
// 	return {
// 		link: function (scope, element, attrs) {
// 			console.log(element);
// 			console.log(scope);
// 			console.log(attrs);

// 			if(element.hours > 99) {
// 				$("body").append("<div>Удалось!</div>");
// 			}
// 		}
// 	}
// });