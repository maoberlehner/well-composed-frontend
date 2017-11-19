#!/bin/bash

npx chokidar "**/*.{vue|js}" --ignore "node_modules" --silent --initial --throttle 3000 --command "nightwatch -c test/conf/default.conf.js --headless $*"
