#!/bin/bash

# Build web client
docker-compose up -d --build webclient
docker exec personal-cv_webclient_1 yarn install
docker exec personal-cv_webclient_1 yarn build
docker-compose down webclient

# Move webclient to kernel directory
rm -rf kernel/webclient
cp -r client/build kernel/webclient
rm -rf client/build

# Run server
docker-compose up -d --build nginx
