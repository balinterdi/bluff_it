Number.prototype.upto = function(n) {
  var numbers = [];
  for (var i=this ; i <= n; i++) {
    numbers.push(i);
  }
  return numbers;
}
