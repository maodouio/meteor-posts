Package.describe({
  name: 'maodouio:posts',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  // version
  api.versionsFrom('1.2.0.2');
  // package
  api.use('iron:router', ["server", "client"]);
  api.use('aldeed:autoform', ["server", "client"]);
  api.use('aldeed:collection2', ["server", "client"]);
  api.use('aldeed:simple-schema', ["server", "client"]);
  api.use('matb33:collection-hooks', ["server", "client"]);

  // template
  api.use('templating');
  // file
  // ls -l | awk '{print "api.addFiles(\""$9"\", \"client\");"}'
  api.addFiles('posts.js');
  api.addFiles('client/routes.js', 'client');
  api.addFiles("client/posts/post_edit.html", "client");
  api.addFiles("client/posts/post_edit.js", "client");
  api.addFiles("client/posts/post_new.html", "client");
  api.addFiles("client/posts/post_new.js", "client");
  api.addFiles("client/posts/post_show.html", "client");
  api.addFiles("client/posts/post_show.js", "client");
  api.addFiles("client/posts/posts.html", "client");
  api.addFiles("client/posts/posts_index.html", "client");
  api.addFiles("client/posts/posts_index.js", "client");

  api.addFiles("lib/collections.js");

  api.addFiles("server/publications.js", "server");

  api.export('Posts');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('maodouio:posts');
  api.addFiles('posts-tests.js');
});
