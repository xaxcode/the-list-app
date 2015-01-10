$(document).ready(function() {
	$("button#add-to-list").click(function(){
		console.log("click");
		var userInput = $("input#new-list-item").val();
		
    $("ul").prepend("<li>" + userInput + "</li>");
        console.log("ul");
    
 });

})