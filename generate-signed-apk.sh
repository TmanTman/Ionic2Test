#!/bin/bash

#To compile this script, execute the following command:
#chmod +x ./buildapk.sh

#The to run the script, execute the following command:
#./buildapk.sh

rm -rf platforms/android/app/build/outputs/apk/
rm -rf output/
ionic cordova build android --prod --release

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore test-release-key.jks platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk test-alias

mkdir output
zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk output/Test.apk

