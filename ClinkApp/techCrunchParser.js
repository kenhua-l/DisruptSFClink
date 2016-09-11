//  $.get("https://public-api.wordpress.com/wp/v2/sites/techcrunch.com/posts/1315608", function(data, status) {
// console.log((data.title.rendered));
// });
var techCrunchURL_prefix = "https://public-api.wordpress.com/wp/v2/sites/techcrunch.com/posts?search=";

var articleURL = "https://techcrunch.com/2016/09/08/snapcredit/";
var techCrunchArticleURL = techCrunchURL_prefix.concat(articleURL);


console.log(techCrunchArticleURL);

$.get(techCrunchArticleURL, function(data, status) {
 	var title = data.title.rendered;
 	var articleURL = data.link;
 	var articleExcerpt = data.excerpt.rendered;	
    console.log((data.title.rendered));
    console.log((data.link));

});


