// Generated by CoffeeScript 1.6.2
(function() {
  this.EventDispatcher = (function() {
    function EventDispatcher() {
      this.eventable = $(this);
    }

    EventDispatcher.prototype.on = function(events, handler) {
      return this.eventable.on(events, handler);
    };

    EventDispatcher.prototype.bind = function(eventType, handler) {
      return this.eventable.bind(eventType, handler);
    };

    EventDispatcher.prototype.trigger = function(eventType, extraParameters) {
      return this.eventable.trigger(eventType, extraParameters);
    };

    return EventDispatcher;

  })();

}).call(this);
