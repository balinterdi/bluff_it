// taken from the "Javascript - The Good Parts" book, pg. 22
if (typeof Object.create !== 'function') {
  Object.create = function(obj) {
    var F = function() {};
    F.prototype = obj;
    return new F();
  };
}