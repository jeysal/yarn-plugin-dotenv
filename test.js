const assert = require("assert").strict;
const { env } = require("process");

assert.equal(env.TEST_VARIABLE, "TEST_VALUE");
