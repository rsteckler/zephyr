#!/bin/bash


eval `ssh-agent -s`
ssh-add ~/.ssh/id_rsa.home
git pull
cp -R ./web/* /www/