#!/usr/bin/env sh
set -e
GITURL="https://github.com/joylifeinc/joy_kit.git"
npm version patch
TAG=v$(node -p -e "require('./package.json').version")
git push "$GITURL" "$TAG"
echo "$TAG >> $GITURL"