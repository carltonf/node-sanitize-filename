"use strict";

var test = require("tape"),
    sanitize = require("./");

test("non-bmp SADDLES the limit", function(t){
  var str25x = 'a'.repeat(252),
      name = str25x + '\uD800\uDC00';
  t.equal(sanitize(name), str25x);

  t.end();
});

test("non-bmp JUST WITHIN the limit", function(t){
  var str25x = 'a'.repeat(251),
      name = str25x + '\uD800\uDC00';
  t.equal(sanitize(name), name);

  t.end();
});

test("non-bmp JUST OUTSIDE the limit", function(t){
  var str25x = 'a'.repeat(253),
      name = str25x + '\uD800\uDC00';
  t.equal(sanitize(name), str25x);

  t.end();
});
