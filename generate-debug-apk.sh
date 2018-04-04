#!/bin/bash

#To compile this script, execute the following command:
#chmod +x ./buildapk.sh

#The to run the script, execute the following command:
#./buildapk.sh

rm -rf platforms/android/app/build/outputs/apk/debug
rm -rf output/debug
ionic cordova build android --debug
mkdir output
mkdir output/debug
mv platforms/android/app/build/outputs/apk/debug/app-debug.apk output/debug/app-debug.apk