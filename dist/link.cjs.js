'use strict';

function Link (arr) {
  var this$1 = this;

  arr.forEach(function (item) { return this$1.append(item); });
}

Link.prototype.append = function (item) {
  var node = item.$next = item.$prev = item;
  if (!this.$tail) { return this.$head = this.$tail = node }
  node.$prev = this.$tail;
  node.$next = this.$tail.$next;
  this.$tail.$next = node;
  node.$next.$prev = node;
  return this.$tail = node
};

module.exports = Link;
