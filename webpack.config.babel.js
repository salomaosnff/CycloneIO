import Config from './config.json'

import Webpack from 'webpack'
import Path from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = (env, argv) =>
{
	return 
	{
		target: 'node',

		context: Path.resolve(__dirname, 'source'),

		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: `./web/themes/${Config.hotel.theme}/structure.page`,
				inject: false
			})
		],

		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
		},

		entry: {
			web: './web/engine.js',
			client: './client/games/game.js'
		},

		devServer: {
			compress: true,
			historyApiFallback: true
		},

		output: {
			path: Path.join(__dirname, './web-gallery/dist'),
			filename: '[name].min.js'
		},

   		devtool: 'source-map',
	
		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					exclude: /node_modules/,
					use: [
						'ts-loader'
					]
				}, 
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: [
						'babel-loader'
					]
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						'css-loader'
					]
				},
				{
					test: /\.styl$/,
					use: [
						'style-loader',
						'css-loader?-url!postcss-loader!stylus-loader',
						'stylus-loader'
					]
				},
				{
					test: /\.(pug|page)$/,
					use: [
						'pug-loader'
					]
				}
			]
		}
  	}
}
