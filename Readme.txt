Building Performant Progressive Web Apps from Scratch
https://app.pluralsight.com/library/courses/building-performant-progressive-web-apps-scratch

PWA

npm install workbox-webpack-plugin --save-dev
npm run build
npm run serve
	
	
using webpack


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
