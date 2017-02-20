#!/usr/bin/env bash
echo "\033[1;32mStart image copy...\033[0m"
mkdir public/src/
mkdir public/src/img
cp -R src/img/*.* public/src/img
echo "\033[1;32mImages copied.\033[0m"