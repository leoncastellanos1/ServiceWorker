Building Performant Progressive Web Apps from Scratch
https://app.pluralsight.com/library/courses/building-performant-progressive-web-apps-scratch

PWA

npm install workbox-webpack-plugin --save-dev
npm run build
npm run serve
	
http://127.0.0.1:8000/


using webpack

on webpack.config :
	const WorkboxPlugin = require("workbox-webpack-plugin");

		new WorkboxPlugin.InjectManifest({
			swSrc: "./src-sw.js",
			swDest: "sw.js"
		})
	  
	  
https://ng-leontest.firebaseio.com/flights.json
	   npm audit fix --force
	   npm cache clean --force
	   
    error on build
	   npm run build -openssl-legacy-provider
	   npm run serve -openssl-legacy-provider
	    
    fix on webpack.config :
    const crypto = require("crypto");
    const crypto_orig_createHash = crypto.createHash;
    crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);
            
		
https://developer.chrome.com/docs/workbox/modules/workbox-strategies/
	Stale-While-Revalidate
	Cache First (Cache Falling Back to Network)
	Network First (Network Falling Back to Cache)
	Network Only - Default  
	Cache Only

https://realfavicongenerator.net/
Create Icons

Requirements to Install Locally Button
	Web App not already installed
	Meet user engagement
	- engaged with domain for at least
	30 seconds
	Valid Web App Manifest
	- 512x512 and 192x192 icons
	Valid Service Worker
	- start_url should work offline


Requirements to Install Locally Button
	Web App not already installed
	Meet user engagement
	- engaged with domain for at least
	30 seconds
	Valid Web App Manifest
	- 512x512 and 192x192 icons
	Valid Service Worker
	- start_url should work offline
	
On Chrome can view PWA installed at url:
    chrome://apps/


//set Top Size Warning
	const performanceConfig = {
	hints: "warning",
	maxEntrypointSize: 50000,
	maxAssetSize: 100000
	};
	
    performance: mode === "production" ? performanceConfig : {}


npm install --save-dev webpack-bundle-analyzer

on webpack.config :
const BundleAnalyzer = require("webpack-bundle-analyzer");

      new BundleAnalyzer.BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
        reportFilename: "bundle-analyzer.html"
      }),

View Map Source Analizer
http://127.0.0.1:5500/dist/bundle-analyzer.html


