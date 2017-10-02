"use strict";
const alfy = require("alfy");

const videoID = alfy.input;

alfy.fetch("https://noembed.com/embed?url=https://www.youtube.com/watch?v=" + videoID).then(data => {
	const video = {
		title: data.title,
		subtitle: "Author: " + data.author_name,
		arg: data.url,
		icon: {
			path: data.thumbnail_url,
			type: "jpg"
		},
		quicklookurl: "https://www.youtube.com/embed/" + videoID
	};
	alfy.output([video]);
});
