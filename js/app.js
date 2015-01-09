$(document).ready(function() {
	$("#add-to-list").click(function(){
		
		var userInput = $("#new-list-item").val();
		
    $("ul").prepend("<li>" + userInput + "</li>");
   
    
 });

})

