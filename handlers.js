exports.index = function(req, res) {
	res.send("Hi Haroun!!!");
}

var watchf = function(req, res) {
	var video_id = req.query.v;
	res.render('watch', { id: video_id }, function(err, html) {
		res.send(html);
	})
}

exports.watch = watchf;