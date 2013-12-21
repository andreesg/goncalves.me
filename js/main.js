function mouse_over(link) {
  var text = link.innerHTML;
  link.innerHTML = "<font color='#0077e9'>> </font>" + text;
}

function mouse_out(link) {
  link.innerHTML = $(link).attr("rel");
}

function _mouse_over(link) {
  var text = link.innerHTML;
  link.innerHTML = "<font color='#0077e9'>/ </font>" + text;
}

function _mouse_out(link) {
  link.innerHTML = $(link).attr("rel");
}

$(document).ready(function() {
  var timer = null;

  var titles = {
    '1': '/ entrepreneur',
    '2': '/ hairy',
    '3': '/ thinker',
    '4': '/ fish allergic'
  }

  $('#src_img').bind('mouseover', function() {
    var $img = $(this);
    
    $(function() {
      var total = 4;
      timer = setInterval(showImage, 1000);
      var counter = 0;

      function showImage() {
        if (counter == 0) {
          counter++;
          return;
        }

        $img.attr('src', 'img/' + (counter) + ".png");
        $("#img_titles").html(titles['' + (counter)]);

        if (counter == total) {
          counter = 0;
        } else {
          counter++;
        }
      }
    });
  }).bind('mouseout', function() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    $("#img_titles").html('');
  });
});

$("#title").mouseenter(function() {
  $("#name_details").fadeIn();
}).mouseout(function() {
  $("#name_details").fadeOut();
});

