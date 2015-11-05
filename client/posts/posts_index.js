Template.postsIndex.rendered = function() {
};

Template.postsIndex.helpers({
  sayHello: function () {
    return "Hallo!";
  }
});

Template.postsIndex.events ({
  'click .delete-post': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("Are you sure?")) {
      Posts.remove(item._id);
      console.log("Deleted!")
    }
  }
});

// Outputs e.g. 12 days ago or 2 hours ago
UI.registerHelper('showTimeAgo', function(date) {
  return !date ? "" : moment(date).fromNow();
});

// Outputs e.g. Jan, 2013
UI.registerHelper('showMonthYear', function(date) {
  return !date ? "" : moment(date).format("MMM, YYYY");
});

// Outputs e.g. 12th Jan, 2013
UI.registerHelper('showDayMonthYear', function(date) {
  return !date ? "" : moment(date).format("Do MMM, YYYY")
});

// Outputs August 30th 2014, 5:33:46 pm
UI.registerHelper('showPrettyTimestamp', function(date) {
  return !date ? "" : moment(date).format("MMMM Do YYYY, h:mm:ss a")
});
