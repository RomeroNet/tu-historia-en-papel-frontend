#!/bin/bash

docker run --rm -it -v ${PWD}:/app -p 3000:3000 -u 1000:1000 node:25-bookworm bash -c "cd /app && yarn dev"