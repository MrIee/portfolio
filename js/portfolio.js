$(document).ready(function() {
	var bubble = function(event) {
		var $b = $("<div/>").addClass('bubble');
		$b.css({
			left: event.clientX,
			top: event.clientY
		});

		$("body").append($b);

		//Clean up after ourselves
		setTimeout(function() {
			$b.animate({
				top: -100
			}, 2000, function () {
				$b.remove();
			});
		}, 500);
	};

	$(window).on("mousemove", bubble);
});