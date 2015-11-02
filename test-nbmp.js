"use strict";

var test = require("tape"),
    sanitize = require("./");

test("non-bmp at boundary", function(t){
  var str252 = 'a'.repeat(252),
      name = str252 + '\uD800\uDC00';
  t.equal(sanitize(name), str252);

  t.end();
});
