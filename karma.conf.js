// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('@angular/cli/plugins/karma'),
      require('karma-remap-istanbul'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('karma-coverage')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli'],
      './dist/**/!(*spec).js': ['coverage']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    webpackMiddleware: { stats: 'errors-only'},
    reporters: config.angularCli && config.angularCli.codeCoverage
      ? ['progress', 'karma-remap-istanbul', 'kjhtml', 'junit', 'coverage']
      : ['progress', 'kjhtml', 'junit', 'coverage'],
    coverageReporter: {
      type:'json',
      dir: 'coverage',
      subdir: '.',
      check: {
        global: {
          statements: 85,
          lines: 85,
          functions: 75,
          branches: 50
        }
      }
    },
    junitReporter: {
      outputDir: 'test_results',
      outputFile: 'unitspecs.xml' ,
      suite: 'qpp',
      useBrowserName: true,
      nameFormatter: undefined,
      classNameFormatter: undefined,
      properties: {}
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    progress: false,
    browsers: ['Chrome'],
    singleRun: true
  });
};
