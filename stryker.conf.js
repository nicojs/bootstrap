module.exports = function(config) {
  config.set({
    karmaConfigFile: 'karma.conf.js',
    mutate: [
      'src/**/*.js',
      '!src/**/index.js',
      '!src/**/index-nocss.js',
      '!src/**/docs/*'
    ],
    reporter: ['progress', 'html'],
    coverageAnalysis: 'perTest',
    testFramework: 'jasmine',
    testRunner: 'karma',
    maxConcurrentTestRunners: 4
  });
};
