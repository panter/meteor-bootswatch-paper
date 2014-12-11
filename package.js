Package.describe({
  name: 'panter:bootswatch-paper',
  summary: 'Bootswach paper theme 3.3.1',
  version: '1.0.0',
  git: 'https://github.com/panter/panter-bootswatch-paper'
});


Package.onUse(function (api) {
  api.versionsFrom("1.0.1");

  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('paper');
  api.addFiles(path.join(asset_path, 'css', 'bootstrap.css'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'bootstrap.js'), 'client');

  // fonts
  api.addFiles(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.eot'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.svg'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'glyphicons-halflings-regular.woff'), 'client');
});
