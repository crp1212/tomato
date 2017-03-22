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
			      {
				      	test:/\.js$/,
				      	exclude: /(node_modules|bower_components)/,
						loader:"babel-loader?presets[]=es2015",
      				},
				{test:/\.css$/,loader:ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})},
				{
					test:/\.(png|jpg|gif)$/,
					loader:"url-loader?limit=8192&name=img/[name][hash:8].[ext]"
				}
			    
			    ]
	},
	plugins: [
        new ExtractTextPlugin("styles.css")
    ]
}