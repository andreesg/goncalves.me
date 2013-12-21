/* 
  Define functions for mouse over styles on links 
*/
mouseover = function(link, type) {
  var text = link.innerHTML;
  if (type) {
    link.innerHTML = "<font color='#0077e9'>></font>&nbsp;" + text;
  } else {
    link.innerHTML = "<font color='#0077e9'>/</font>&nbsp;" + text;
  }
}

mouseout = function(link) {
  link.innerHTML = $(link).attr("rel");
}

/* 
  Global var's 
*/
var timer = null;

/* Dictionary to get images descriptions */
var description = {
  '1': '/ entrepreneur',
  '2': '/ hairy',
  '3': '/ thinker',
  '4': '/ fish allergic'
}

/* 
  ON DOM ready 
*/
$(document).ready(function() {
  /* Author title hover to show details */
  $("#author-title").hover(function() {
    $("#name_details").fadeIn();
  }, function() {
    $("#name_details").fadeOut();
  });

  /* Change image on hover */
  $('#img-src').hover(function() {
    var $img = $(this);
    $(function() {
      var total = 4, counter = 0;
      timer = setInterval(showimage, 1000);

      /* function to show image at 1000ms */
      function showimage() {
        if (counter == 0) {
          counter++;
          return;
        }

        /* Change image src and update image description */
        $img.attr('src', 'img/' + (counter) + ".png").ready(function() {
          $("#img-description").html(description['' + (counter)]);
        });

        /* keep looping */
        if (counter == total) {
          counter = 0;
        } else {
          counter++;
        }
      }
    });
  }, function() {
    /* mouse out of image */
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    $("#img-description").html('');
  });
});
