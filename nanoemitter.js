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
