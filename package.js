Package.describe({
  summary: "Meteor package for jQuery Tags Input plugin."
});

Package.on_use(function (api) {
  api.add_files('lib/jquery.tagsinput.min.js', 'client');
  api.add_files('lib/jquery.tagsinput.css', 'client');
});