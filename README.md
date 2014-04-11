# Nanoemitter

[![browser support](https://ci.testling.com/asbjornenge/nanoemitter.png)
](https://ci.testling.com/asbjornenge/nanoemitter)

Nanoemitter is a tiny event emitter.

	1330 B nanoemitter.min.js    // minified
	 532 B nanoemitter.min.js.gz // minified+gzipped

## Install

Nanoemitter is available on npm.

	npm install nanoemitter

## Use

	var emitter = require('nanoemitter')()
	
	emitter
		.on('tarantism', function() { console.log('\_O_\') })
		.on('tarantism', function() { console.log('/_O_/') })
		
	emitter.trigger('tarantism')

### Docs

For full documentation see the [spec](https://github.com/asbjornenge/nanoemitter/blob/master/test/spec.js).  

enjoy.