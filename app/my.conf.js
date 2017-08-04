// Karma configuration
// Generated on Thu Apr 13 2017 16:15:51 GMT+0530 (India Standard Time)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			'libs/jquery/jquery.js',
			'libs/angularjs/angular.js',
			'libs/angularjs/angular-route.js',
			'libs/angularjs/angular-resource.js',
			'libs/angularjs/angular-mocks.js',
			'libs/jquery_datatable/jquery.dataTables.min.js',
			'libs/angular_datatable/angular-datatables.min.js',
			'libs/angularjs/ui-bootstrap-tpls-2.4.0.min.js',
			'libs/angular-loaders/angular-loaders.js',
			'libs/base64/ngFlow.js',
			'libs/image_compress/angular-image-compress.js',

			'js/**/*.js',
			'js/app.js',
			'js/appConfig.js',
			'mock/*Mock.js',
			'test/**/*Spec.js'
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			// source files, that you wanna generate coverage for
			// do not include tests or libraries
			// (these files will be instrumented by Istanbul)
			'js/controllers/*.js': ['coverage'],
			'test/*Spec.js': ['coverage']
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'junit', 'coverage'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],

		plugins: [
			'karma-junit-reporter',
			'karma-jasmine',
			//'karma-firefox-launcher',
			'karma-chrome-launcher',
			'karma-js-coverage'
		],

		// test results reporter to use 
		// the default configuration for junitReporter
		junitReporter: {
			outputFile: 'test/test_out/test-results.xml',
			suite: ''
		},

		// optionally, configure the reporter
		coverageReporter: {
			// specify a common output directory
			dir: 'build/reports/coverage',
			reporters: [
				// reporters not supporting the `file` property
				{
					type: 'html',
					subdir: 'report-html'
				},
				{
					type: 'lcov',
					subdir: 'report-lcov'
				},
				// reporters supporting the `file` property, use `subdir` to directly
				// output them in the `dir` directory
				{
					type: 'cobertura',
					subdir: '.',
					file: 'cobertura.txt'
				},
				{
					type: 'lcovonly',
					subdir: '.',
					file: 'report-lcovonly.txt'
				},
				{
					type: 'teamcity',
					subdir: '.',
					file: 'teamcity.txt'
				},
				{
					type: 'text',
					subdir: '.',
					file: 'text.txt'
				},
				{
					type: 'text-summary',
					subdir: '.',
					file: 'text-summary.txt'
				},
			]
		},
		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		//concurrency: Infinity
	})
}