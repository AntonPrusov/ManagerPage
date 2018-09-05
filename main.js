'use strict';

$( document ).ready(function() {

	var addMessageBtn = $('.add-comment__button');

    $( addMessageBtn ).click(function(e) {

		e.preventDefault();

		addMessage();

	});

	$(document).keyup(function (e) {
		ctrlEnter(e);
	});

	function ctrlEnter(event) {
		if(event.ctrlKey && event.keyCode == 13) {
			addMessage();
		}
	}

	function addMessage() {

		var input = $(".add-comment__input");
		var comments = $('#comments__body');

		if( input.val() !== "") {

			var author = "Anonymous";			
			var month;

			switch (new Date().getMonth()) {
			  	case 0:
			    	month = ( 'января' );
			    	break;
			    case 1:
			    	month = ( 'февраля' );
			    	break;
			    case 2:
			    	month = ( 'марта' );
			    	break;
			    case 3:
			    	month = ( 'апреля' );
			    	break;
			    case 4:
			    	month = ( 'мая' );
			    	break;
			    case 5:
			    	month = ( 'июня' );
			    	break;
			    case 6:
			    	month = ( 'июля' );
			    	break;
			    case 7:
			    	month = ( 'августа' );
			    	break;
			    case 8:
			    	month = ( 'сентября' );
			    	break;
			    case 9:
			    	month = ( 'октября' );
			    	break;
			    case 10:
			    	month = ( 'ноября' );
			    	break;
			    case 11:
			    	month = ( 'декабря' );
			    	break;							
			}

			var date = new Date().getDate() + " " + month + " " + new Date().getFullYear();

			var messageText = $("<p></p>")
				.text(  input.val() ); 	

			var authorAndDate = $("<p></p>")
				.addClass("comments__comment-author")
				.text( author )
				.append( 
						$("<span></span>") 
						.addClass("comments__comment-date")
						.text( " " + date ) 
					);

			var message = $("<div></div>")
				.addClass("comments__comment-message")
				.append( messageText );

			var comment = $("<div></div>")
				.addClass("comments__comment")
				.append( authorAndDate )
				.append( message );

			$( comment ).appendTo( comments );

			$( input ).val("");	
		}
		else {
			return
		}
	}

});

