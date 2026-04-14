const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
	...defaultConfig,
	entry: {
		'form-overlay-addon-editor-script': path.resolve(__dirname, 'src/blocks/form-overlay-addon/index.js'),
		'form-overlay-addon-editor-style': path.resolve(__dirname, 'src/css/form-overlay-addon/editor.scss'),
		'form-overlay-addon-frontend-script': path.resolve(__dirname, 'src/blocks/form-overlay-addon/frontend.js'),
		'form-overlay-addon-frontend-style': path.resolve(__dirname, 'src/css/form-overlay-addon/frontend.scss'),
	},
	output: {
		...defaultConfig.output,
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
	},
};
