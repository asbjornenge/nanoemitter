var assert = require('assert')
var e      = require('../nanoemitter')()

describe('NANOEMITTER', function() {

    it('Should bind functions via .on', function() {
        e.on('test', function() {})
        assert(e.listeners.test.length == 1)
    })

    it('Should trigger on .trigger', function(done) {
        e.on('first',  function() {assert(true); done() })
        e.on('second', function() {assert(false); done() })
        e.trigger('first')
    })

    it('Should support resetting', function() {
        e.on('test', function() {})
        assert(Object.keys(e.listeners).length > 0)
        e.empty()
        assert(Object.keys(e.listeners).length == 0)
    })

    it('Should unbinding functions via .off', function(done) {
        var good = function() { assert(true); done() }
        var bad  = function() { assert(false); done() }
        e.empty()
        .on('lol', function() {})
        .on('lol', good)
        .on('lol', bad)
        assert(e.listeners.lol.length == 3)
        e.off('lol', bad)
        assert(e.listeners.lol.length == 2)
        e.trigger('lol')
    })

    it('Should pass data', function(done) {
        e.on('data', function(data) {
            assert(data === 'eple')
            done()
        })
        e.trigger('data','eple')
    })

    it('Should avoid adding anything but functions', function() {
        e.on('strings', 'teeeesting')
        assert(e.listeners.strings === undefined)
        e.on('objects', {})
        assert(e.listeners.objects === undefined)
        e.on('null', null)
        assert(e.listeners.null === undefined)
    })

})
