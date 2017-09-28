#!/bin/bash
# Copyright (c) 2015-present, 21PeakLess, inc.

# Start in tasks/ even if run from root directory
cd "$(dirname "$0")"

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to root
cd ..
root_path=$PWD

# You can only release with npm >= 3
if [ $(npm -v | head -c 1) -lt 3 ]; then
  echo "Releasing requires npm >= 3. Aborting.";
  exit 1;
fi;

if [ -n "$(git status --porcelain)" ]; then
  echo "Your git status is not clean. Aborting.";
  exit 1;
fi

cd "$root_path"
# TODO: Compile
# cd packages/defined-package/
# npm run build:prod
# cd ../..

./node_modules/.bin/lerna publish --independent "$@"
