module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'stage-3'],
				plugins: ["transform-runtime"]
			}
		}]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	}
};
