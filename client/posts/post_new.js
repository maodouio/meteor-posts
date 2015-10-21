Template.postNew.rendered = function() {
};

Template.postNew.helpers({
});

Template.postNew.events ({
});

AutoForm.hooks({
  'postForm': {
    before: {
      insert: function(doc) {
        doc.createdAt = new Date();
        return doc;
      }
    },
    onSuccess: function (operation, result, template) {
      console.log('New Post inserted successfully!');
      Router.go('postsIndex', {_id: result});
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});
