function callbackGestureNews(gesture) {
	console.log("Callback news");
}

$(document).ready(function() {
	$.getJSON("news", function(data) {
		var news = "<table>";
		
		$.each(data, function(key, news_item) {
			var img = "<img src='" + news_item.img + "'/>";
			var title = "<div class='newsHeader'><span class='title'>" + news_item.title + "</span><br>" + news_item.category + "</div>";
			
			news += "<tr><td class='news_item'><div class='thumbnail'>" + img + "</div>" + "<div class='meta'>" + title + "<br>";
			news += "" + news_item.description + "</td></tr>";
		});
		
		news += "</table>";
		$("#news").append(news);
	});
});