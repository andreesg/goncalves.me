var app = {
  description: {
    '1': '/ entrepreneur',
    '2': '/ hairy',
    '3': '/ thinker',
    '4': '/ fish allergic',
    'total': 4
  },
  timer: null,
  counter: 3,
  image: $("#img-src"),

  init: function() {
    app.triggerEvents();
  },

  showImage: function() {
    /* Change image src and update image description */
    $("#img-src").attr('src', 'img/' + (app.counter + 1) + ".png").ready(function() {
      $("#img-description").html(app.description['' + (app.counter + 1)]);
    });

    /* keep looping */
    if (app.counter + 1 == app.description.total) {
      app.counter = 0;
    } else {
      app.counter++;
    }
  },

  imageAction: function() {
    if (app.counter == 0) {
      $("#img-description").html(app.description['' + (app.counter + 4)]);
    } else {
      $("#img-description").html(app.description['' + (app.counter)]);
    }
    /* function to show image at 1000ms */
    app.timer = setInterval(app.showImage, 1000);  
  },

  triggerEvents: function() {
    var self = this;
    $(".personal-url").hover(function() {
      var text = $(this).html();
      $(this).html("<font color='#0077e9'>/</font>&nbsp;" + text);
    }, function() {
      $(this).html($(this).attr("rel"));
    });

    $(".selected-work").hover(function() {
      var text = $(this).html();
      $(this).html("<font color='#0077e9'>></font>&nbsp;" + text);
    }, function() {
      $(this).html($(this).attr("rel"));
    });

    this.image.hover(self.imageAction, function() {
      /* mouse out of image */
      if (app.timer) {
        clearInterval(app.timer);
        app.timer = null;
      }
      $("#img-description").html('');
    });

  }
}

/* 
  ON DOM ready 
*/
$(document).ready(function() {
  app.init();
});
