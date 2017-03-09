const webpack=require("webpack");
const ExtractTextPlugin=require("extract-text-webpack-plugin")
module.exports={
	entry:"./src/index.js",
	output:{
		path:'./build',
		filename:"crp.js"
	},
	module:{
		rules: [
			      {
			        test: /\.vue$/,
			        loader: 'vue-loader',
			        options: {
			          loaders: {
			            css: ExtractTextPlugin.extract({
			              use: 'css-loader',
			              fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
			            })
			          }
			        }
			      },
			      {test:/\.js$/,loader:"babel-loader"},
				{test:/\.css$/,loader:ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})}
			    ]
	},

	plugins: [
        new ExtractTextPlugin("styles.css")
    ]
}