$(document).ready(function() {
	$("button#add-to-list").click(function(){
		
		var userInput = $("input#new-list-item").val();
		
    $("ul#list").prepend("<li>" + userInput + "</li>");
            
 });

})