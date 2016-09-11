
	var companyname = 'easilydo';

	
	var prefix_crunchBaseURL = 'https://api.crunchbase.com/v/3/organizations?user_key=eef6a0d4bb64dca85b2026bb3550f768&name=';
	var apiOrganizationDataURL = prefix_crunchBaseURL.concat(companyname);
	var techCrunchArticleURL="";
	console.log(apiOrganizationDataURL);
	var permalink;
	$.get(apiOrganizationDataURL, function(data, status) {
	    console.log(data.data.items[0].properties.short_description);
		 console.log(data.data.items[0].properties.profile_image_url);
		console.log(data.data.items[0].properties.city_name);
		permalink  = data.data.items[0].properties.permalink;
		// console.log(permalink);
	});

	var apiFullOrganizationDataURL = ("https://api.crunchbase.com/v/3/organizations/").concat(permalink).concat("?user_key=eef6a0d4bb64dca85b2026bb3550f768");
	console.log(apiFullOrganizationDataURL);


	$.get(apiFullOrganizationDataURL, function(data, status) {
	    var investorsList = data.data.relationships.investors.items
	    var newsList = data.data.relationships.news.items
	    console.log(investorsList);
	    console.log(newsList);
		
		for (var key in investorsList) {
	  		if (investorsList.hasOwnProperty(key)) {
	    	console.log(investorsList[key].properties.name);
	  		}
		}
	  	
	  	for( var key in newsList){
			if (newsList.hasOwnProperty(key)) {
	    	// console.log(newsList[key].properties.url);

	    		if(/techcrunch\.com/.test(newsList[key].properties.url)){
	    			var articleURL = newsList[key].properties.url;
	    			// console.log(articleURL);
	    			var techCrunchURL_prefix = "https://public-api.wordpress.com/wp/v2/sites/techcrunch.com/posts?search="
					techCrunchArticleURL = techCrunchURL_prefix.concat(articleURL)
					console.log(articleURL);
					//  $.get(techCrunchArticleURL, function(data, status) {
					//  	var title = data.title.rendered;
					//  	var articleURL = data.link;
					//  	var articleExcerpt = data.excerpt.rendered;	
					//     console.log((data.title.rendered));
					//     console.log((data.link));

					// });
	    			// console.log(newsList[key].properties.url);
	    		}
	  		}
		}
	});





