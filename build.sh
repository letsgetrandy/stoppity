#! /usr/bin/bash

echo "building for Chrome..."
rm stoppity.crx
CHROME='/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
EXTENSION="`pwd`/tmp/stoppity"
cd ..
PEMFILE="`pwd`/stoppity.pem"
cd -
#echo "extension: $EXTENSION"
#echo "pemfile: $PEMFILE"
mkdir tmp
cp -R chrome tmp/stoppity
eval "$CHROME --pack-extension=$EXTENSION --pack-extension-key=$PEMFILE build/stoppity.crx"
echo "cleaning up"
eval "mv $EXTENSION.crx ."
rm -rf tmp


echo
echo "Building for Firefox..."
rm stoppity.xpi
mkdir tmp
cp -R firefox tmp/stoppity
##tar zvf $FOO
zip -r stoppity.xpi tmp/stoppity
echo "cleaning up"
rm -rf tmp
