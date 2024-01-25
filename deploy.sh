#!/bin/bash


eval `ssh-agent -s`
ssh-add ~/.ssh/id_rsa.home
git pull
sudo cp -R ./web/* /www/
cd node
npm install
cd ..
sudo pm2 restart all
