#!/usr/bin/env bash
set -euo pipefail
shopt -s inherit_errexit

yarn node ./test.js

pushd test1
yarn node ./test.js
popd

pushd test2
yarn node ./test.js
popd
