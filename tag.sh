#!/usr/bin/env sh
set -e
GITURL="https://bitbucket.org/joylife/sdk-js.git"
npm version patch
TAG=v$(node -p -e "require('./package.json').version")
git push "$GITURL" "$TAG"
echo "$TAG >> $GITURL"