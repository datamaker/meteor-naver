Package.describe({
  name: 'datamaker:naver-oauth',
  version: '0.0.2',
  summary: 'Naver OAuth flow',
  git: 'https://github.com/datamaker/meteor-naver',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('underscore', 'client');
  api.use('random', 'client');
  api.use('peerlibrary:xml2js@0.4.4_3');
  api.use('service-configuration', ['client', 'server']);

  api.addFiles('naver_server.js', 'server');
  api.addFiles('naver_client.js', 'client');

  api.export('Naver');
});
