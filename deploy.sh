#!/bin/bash

# start the ssh agent and load the ssh key
eval `ssh-agent -s`
ssh-add ~/.ssh/id_rsa.home

# pull from github
git pull

#build the custom node server
cd node
npm install
cd ..

# build the gpt frontend and backend
cd gpt/backend
npm install
cd ../frontend
npm install
cd ../..

#build adventure
cd adventure
npm install
npm run build
cd ..

#restart servers
pm2 restart all


