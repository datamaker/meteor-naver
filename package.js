Package.describe({
  name: 'datamaker:naver-oauth',
  version: '0.0.4',
  summary: 'Naver OAuth flow',
  git: 'https://github.com/datamaker/meteor-naver',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('oauth2@1.1.11', ['client', 'server']);
  api.use('oauth@1.1.13', ['client', 'server']);
  api.use('http@1.2.11', ['server']);
  api.use('underscore@1.0.10', 'client');
  api.use('random@1.0.10', 'client');
  api.use('peerlibrary:xml2js@0.4.4_3');
  api.use('service-configuration@1.0.11', ['client', 'server']);

  api.addFiles('naver_server.js', 'server');
  api.addFiles('naver_client.js', 'client');

  api.export('Naver');
});
