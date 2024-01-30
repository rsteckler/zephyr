#!/bin/bash


eval `ssh-agent -s`
ssh-add ~/.ssh/id_rsa.home
git pull
cd node
npm install
cd ..
cd gpt/backend
npm install
cd ../frontend
npm install
cd ../..
pm2 restart all


