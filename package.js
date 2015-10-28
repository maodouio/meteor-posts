Package.describe({
  name: 'maodouio:posts',
  version: '0.0.6',
  // Brief, one-line summary of the package.
  summary: 'Maodou.io posts package, A meteor package that provides posts pages at /posts',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/maodouio/meteor-posts',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  // version
  // api.versionsFrom('1.2.0.2');
  // package
  api.use('iron:router@1.0.12', ["server", "client"]);
  api.use('aldeed:autoform@5.1.2', ["server", "client"]);
  api.use('aldeed:collection2@2.3.3', ["server", "client"]);
  api.use('aldeed:simple-schema@1.3.2', ["server", "client"]);
  api.use('matb33:collection-hooks@0.8.0', ["server", "client"]);
  //api.use('twbs:bootstrap@3.3.4', ["server", "client"]);

  // mongo and template
  // https://zh.discovermeteor.com/chapters/creating-a-meteor-package/
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

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
