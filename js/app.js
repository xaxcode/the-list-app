$(document).ready(function() {
	$("button#add-to-list").click(function(){
		var userInput = $("input#new-list-item").val();
	$("ul#list").prepend("<li>" + userInput + "</li>");
            event.preventDefault();
 });

$( 'ul' ).on('click', 'li', function(event) {
	$(this).toggleClass( "strike" );
		
});

$('ul').on('dblclick', 'li', function(event) {
		console.log("doubleclick");
		$(this).fadeOut("slow")
});


})