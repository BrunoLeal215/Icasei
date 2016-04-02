$(document).on('ready page:load', function() 
{	
	var d = new Date,
    currentdate = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');

	console.log(currentdate);
	var url = window.location.href;
	console.log(window.location.href);
	$.ajax({url: '/rastrear', method: 'POST', data: { tracking: { url: url, guid: 'teste',data: currentdate}}});
});