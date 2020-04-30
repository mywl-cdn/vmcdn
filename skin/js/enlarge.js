jQuery(document).ready(function($) {

	$(".article_body img").each(function(i) {
		_self = $(this);
		if (!this.parentNode.href) {
			imgsrc = "";
			if (_self.attr("data-original")) {
				imgsrc = _self.attr("data-original");
			} else {
				imgsrc = _self.attr("src");
			}
			$(this).wrap("<a href='" + imgsrc + "' onclick='return hs.expand(this);' style='box-shadow:none;'></a>");
		}
	});
	hs.graphicsDir = "/skin/highslide/";
	hs.outlineType = "rounded-white";
	hs.dimmingOpacity = 0.8;
	hs.outlineWhileAnimating = true;
	hs.showCredits = false;
	hs.captionEval = "this.thumb.alt";
	hs.numberPosition = "caption";
	hs.align = "center";
	hs.transitions = ["expand", "crossfade"];
	hs.addSlideshow({
		interval: 5000,
		repeat: true,
		useControls: true,
		fixedControls: "fit",
		overlayOptions: {
			opacity: 0.75,
			position: "bottom center",
			hideOnMouseOut: true
		}
	});
});