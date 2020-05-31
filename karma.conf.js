// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
<<<<<<< HEAD
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
=======
    frameworks: ['jasmine', '@angular/cli'],
>>>>>>> b0035883d6047eb2e7dbc2365de00031e16d1209
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
<<<<<<< HEAD
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/fuzzy-trader'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
=======
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
>>>>>>> b0035883d6047eb2e7dbc2365de00031e16d1209
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
<<<<<<< HEAD
    singleRun: false,
    restartOnFileChange: true
=======
    singleRun: false
>>>>>>> b0035883d6047eb2e7dbc2365de00031e16d1209
  });
};
