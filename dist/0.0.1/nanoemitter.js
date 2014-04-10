!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.nanoemitter=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
function eventemitter() {
    this.listeners = {}
}
eventemitter.prototype.on = function(event, fn) {
    if (typeof this.listeners[event] == 'undefined') this.listeners[event] = []
    this.listeners[event].push(fn)
    return this
}
eventemitter.prototype.off = function(event, fn) {
    if (typeof this.listeners[event] == 'undefined') return this
    var index;
    for (var i in this.listeners[event]) {
        if (this.listeners[event][i] === fn) index = i;
    }
    if (index != undefined) { this.listeners[event].splice(index,1) }
    return this
}
eventemitter.prototype.trigger = function(event, data) {
    if (typeof this.listeners[event] == 'undefined') return this
    for (var i in this.listeners[event]) {
        this.listeners[event][i](data)
    }
    return this
}
eventemitter.prototype.empty = function() {
    this.listeners = {}
    return this
}
module.exports = function() { return new eventemitter() }

},{}]},{},[1])
(1)
});