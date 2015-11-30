$(function(){

  $(".reply-link").on('click', function() {
    //alert ("Hello");
    $("#reply-to").val( this.id );
    $("#comments-form-title").append(" to person");
  }); 

});
