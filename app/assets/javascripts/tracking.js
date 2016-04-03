$(document).on('ready page:load', function() 
{	
	var visitorID = '';
	
	//generate uuid	
	function generateGUID(){
		var data = new Date().getTime();
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = (data + Math.random()*16)%16 | 0;
			data = Math.floor(data/16);
			return (c=='x' ? r : (r&0x3|0x8)).toString(16);
		});
		visitorID = uuid;
		//create cookie
		document.cookie = "guid="+uuid;
		console.log(document.cookie);
	}
 
	if(document.cookie.length !=0)
	{
		visitorID = document.cookie.split("=")[1];
	}else
	{
		generateGUID();
	}
	
	
	$('a').click(function(e){

		var d = new Date,
			currentdate = [d.getMonth()+1,
					   d.getDate(),
					   d.getFullYear()].join('/')+' '+
					  [d.getHours(),
					   d.getMinutes(),
					   d.getSeconds()].join(':');

			console.log(currentdate);
			var url = $(this).text();
			console.log($(this).text());
			$.ajax({
				url: '/rastrear', 
				method: 'POST', 
				data: { tracking: { url: url, guid: visitorID, data: currentdate}},
				
			});
	});

	
});