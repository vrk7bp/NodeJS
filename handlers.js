exports.index = function(req, res) {
	res.send("This site is a work in progress... In the mean time, check out my GitHub Account: <a href=\"http://www.github.com/vrk7bp\"> www.github.com/vrk7bp </a>");
}

var watchf = function(req, res) {
	var video_id = req.query.v;
	res.render('watch', { id: video_id }, function(err, html) {
		res.send(html);
	})
}

exports.watch = watchf;