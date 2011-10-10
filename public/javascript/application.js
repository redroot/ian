$(document).ready(function(){
  var timer = $.timer(12000, function (timer) {
    getUpdate();
  });

  $('body').dblclick(function(){
    getUpdate();
  });
  
  var working = false;
  
  function getUpdate(){
    if(working == false){

      var before = $("#message").html();
      working = true;
      $.ajax({
        url: "/update",
        cache: true,
        timeout: 10000,
        success: function(html){
          $("#message").html(html).removeClass('error');
        },
        error: function(html){
          $("#message").html('ERROR!!!!').addClass('error');
        },
        complete: function(){
         working = false;
         timer.reset;
        }
      });
    }
  }

});


