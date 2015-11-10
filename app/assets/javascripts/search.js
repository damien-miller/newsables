// SEARCH
$('li#ml-btn-search a').on( 'click', function(e){
	
alert("wazzUP!");

	e.preventDefault();

	TweenMax.set( $('body'), { overflow: "hidden" } );		
	
	TweenMax.to( $('#un-search-modal'), 0.1, { left: "0",  ease:Power2.easeOut } );
	TweenMax.to( $('.un-search-row'), 0.1, { width: "100%",  ease:Power2.easeOut, delay:0.1 } );
	
	
	$('.un-search-close').on( 'click', function(){
		TweenMax.set( $('body'), { overflow: "" } );
		TweenMax.to( $('.un-search-row'), 0.1, { width: "0",  ease:Power2.easeOut } );
		TweenMax.to( $('#un-search-modal'), 0.1, { left: "100%",  ease:Power2.easeOut, delay:0.1 } );	
		
		setTimeout(function(){
			$('#un-search-modal').remove();
		}, 1500);
			
	});
	 
});