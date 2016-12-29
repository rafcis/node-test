module.exports = function (config) {
    config.set({
        basePath: '../',
        plugins: [
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-phantomjs-launcher',
            'karma-js-coverage'
        ],
        frameworks: [
            'jasmine'
        ],
        urlRoot: '/__karma/',
        files: [
            {pattern: process.cwd()+'/test/**/*.js', watched: true, included: true, served: true}
        ],
        exclude: [
        ],
        reporters: ['dots', 'junit'],
        junitReporter: {
            outputFile: process.cwd()+'/test/logs/karma-results.xml'
        },
        port: 9876,
        colors: false,
        logLevel: config.LOG_WARN,
        browsers: [
            'PhantomJS'
        ],
        singleRun: true
    });
};
