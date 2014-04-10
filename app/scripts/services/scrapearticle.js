'use strict';

angular.module('reportifyApp')
  .service('Scrapearticle', function Scrapearticle($http) {
    
  	var siteSpecificSelectors = {
  		"www.wired.com" : {
  			author: '.post div.entry-header ul li.author a',
  			date: '.post div.entry-header ul .entryDate',
  			// entryTime: '.post div.entry-header ul .entryTime',
  		},
  		"www.cnet.com":{

  		},
  		"www.techcrunch.com":{

  		}
  	};

  	function url_domain(url) {
		  var    a      = document.createElement('a');
		         a.href = url;
		  return a.hostname;
	};

  	var getSpecificValues = function(url, jqueryData, dataObject){
  		var hostName = url_domain(url);

  		if(siteSpecificSelectors[hostName]){
  			var selectorObject = siteSpecificSelectors[hostName];
  			for(var entry in selectorObject){
		      if(selectorObject.hasOwnProperty(entry)){
		      		var jquerySelectorText = siteSpecificSelectors[hostName][entry];
					dataObject[entry] = jqueryData.find(jquerySelectorText).html();
		      }
  			}
  		}
  	};

  	var getOgValues = function(jqueryData, dataObject){
		  //   	jqueryData.filter('meta').each(function(){
			//   if($(this).attr('property') && $(this).attr('property').indexOf("og:") != -1){
			//   	console.log($(this).attr('property'));
			//   	console.log($(this).attr('content'));
			//   }
			// });
  	};


    return {
    	scrapeUrl : function(getUrl, callBack) {
    		 $http({method: 'GET', url: getUrl}).
				    success(function(response, status, headers, config) {
				    	var data = {};
				    	var jqueryData = $(response);
		
						// getOgValues(jqueryData, data);
						getSpecificValues(getUrl, jqueryData, data);

					  	callBack(true, data);
				    }).
				    error(function(response, status, headers, config) {
				    	callBack(false);
				    });
    	}
    };
  });
